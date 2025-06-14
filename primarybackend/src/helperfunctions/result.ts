import { JsonValue } from "@prisma/client/runtime/library";
import { CustomError } from "../utils/CustomError";
import { startOfDay, subDays } from "date-fns";
import { prisma } from "@amaan2202/prisma-client";
import { sendEmail } from "../controllers/nodemailer";

const getQuizResults = async ({
  quiz,
  userType,
  user,
}: {
  quiz: {
    id: string;
    title: string;
    avgScore: number;
    lowestScore: number;
    Participant: {
      id: string;
    }[];
    totalParticipants: number;
  };
  userType: "CREATOR" | "PARTICIPANT";
  user: string;
}) => {
  try {
    const participantsCount = quiz.Participant.length;

    const quizResults = await prisma.participantResult.findMany({
      where: {
        quizId: quiz.id,
        participantId: {
          in: quiz.Participant.map((p) => p.id),
        },
      },
      include: {
        Participant: {
          select: {
            User: {
              select: {
                name: true,
                email: true,
                id: true,
              },
            },
          },
        },
      },
      orderBy: {
        rank: "desc",
      },
    });

    if (!quizResults || quizResults.length !== participantsCount) {
      throw new CustomError("Results not generated completely", 400);
    }

    const results = quizResults.map((result) => ({
      participantId: result.participantId,
      userId: result.Participant.User.id,
      name: result.Participant.User.name,
      email: result.Participant.User.email,
      score: result.score,
      rank: result.rank,
    }));

    const restultObj: {
      results: {
        participantId: string;
        userId: string;
        name: string;
        email: string;
        score: number;
        rank: number;
      }[];
      message: string;
      userType: "CREATOR" | "PARTICIPANT" | null;
      user: string;
      quizTitle: string;
      avgScore?: number;
      lowestScore?: number;
      scoreDistributionGraph?: {
        id: string;
        quizId: string;
        label: string;
        count: number;
      }[];
      questions?: {
        id: string;
        questionText: string;
        options: JsonValue;
        correctOption: number;
      }[];
      totalParticipants?: number;
    } = {
      results,
      message: "Results fetched successfully",
      userType,
      user: user,
      quizTitle: quiz.title,
      totalParticipants: quiz.totalParticipants,
    };

    if (userType === "CREATOR") {
      restultObj.avgScore = quiz.avgScore;
      restultObj.lowestScore = quiz.lowestScore;

      const scoreDistributionGraph = await prisma.scoreDistribution.findMany({
        where: {
          quizId: quiz.id,
        },
      });

      restultObj.scoreDistributionGraph = scoreDistributionGraph;

      const questions = await prisma.question.findMany({
        where: {
          quizId: quiz.id,
        },
        select: {
          id: true,
          questionText: true,
          options: true,
          correctOption: true,
          CorrectAnswerPercentage: true,
        },
        orderBy: {
          questionIndex: "asc",
        },
      });

      restultObj.questions = questions;

      return restultObj;
    }

    return restultObj;
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch quiz results", 500);
  }
};

export const getQuizResultsDb = async ({
  quizId,
  user,
}: {
  quizId: string;
  user: string;
}) => {
  const start = Date.now();
  const timeout = 10000; // 30 seconds
  const interval = 1000; // 1 second

  try {
    while (Date.now() - start < timeout) {
      const quiz = await prisma.quiz.findUnique({
        where: { id: quizId },
        include: {
          Participant: true,
        },
      });

      if (!quiz) {
        throw new CustomError("Quiz not found", 404);
      }

      let userType: "CREATOR" | "PARTICIPANT" | null = null;

      if (quiz.creatorId === user) {
        userType = "CREATOR";
      } else if (quiz.Participant.some((p) => p.userId === user)) {
        userType = "PARTICIPANT";
      } else {
        userType = null;
      }

      if (!userType) {
        throw new CustomError("User not authorized to view results", 403);
      }

      if (quiz.status !== "ENDED") {
        throw new CustomError("Quiz is not completed yet", 400);
      }

      if (quiz.isResultCalculated) {
        const quizResults = await getQuizResults({
          quiz,
          userType,
          user,
        });
        console.log("RESULTS CALCULATED");
        return quizResults;
      }

      // Delay before next DB check
      console.log("RECHECKING RESULTS");
      await new Promise((resolve) => setTimeout(resolve, interval));
    }

    // If timeout reached
    console.log("Timeout reached");
    throw new CustomError("Timeout: Results not generated yet", 408);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch quiz results", 500);
  }
};

export const getUserDashboardAnalyticsDb = async (user: string) => {
  try {
    const userDb = await prisma.user.findUnique({
      where: {
        id: user,
      },
      include: {
        Quiz: {
          orderBy: {
            createdAt: "desc",
          },
          select: {
            title: true,
            id: true,
            createdAt: true,
            totalParticipants: true,
            status: true,
          },
        },
        Participant: {
          orderBy: {
            joinedAt: "desc",
          },
          select: {
            Quiz: {
              select: {
                id: true,
                title: true,
                Question: true,
              },
            },
            ParticipantResult: {
              select: {
                participantId: true,
                score: true,
              },
            },
          },
        },
      },
    });

    if (!userDb) {
      throw new CustomError("User not found", 404);
    }

    //Top 3 cards
    const totalQuizzesCreated = userDb.Quiz.length;
    const totalParticipantsAcrossQuizzes = userDb.Quiz.reduce((acc, quiz) => {
      return acc + quiz.totalParticipants;
    }, 0);
    const avgParticipantsPerQuiz =
      totalParticipantsAcrossQuizzes / totalQuizzesCreated;

    //Line chart
    const quizzes = userDb.Quiz;
    const now = new Date();
    const startDate = startOfDay(subDays(now, 27));

    // Create 4 non-overlapping weekly buckets (ending today)
    const weeklyBuckets = Array(4)
      .fill(null)
      .map((_, i) => {
        const end = startOfDay(subDays(now, i * 7));
        const start = startOfDay(subDays(end, 6)); // 7-day range

        return {
          label: `${start.toLocaleDateString()} – ${end.toLocaleDateString()}`,
          start,
          end,
          participants: 0,
        };
      })
      .reverse(); // So week 1 is oldest, week 4 is most recent

    // Filter quizzes created in the last 28 days
    const recentQuizzes = quizzes.filter(
      (quiz) => new Date(quiz.createdAt) >= startDate
    );

    // Add quizzes to the appropriate bucket
    for (const quiz of recentQuizzes) {
      const quizDate = startOfDay(new Date(quiz.createdAt));

      for (const bucket of weeklyBuckets) {
        if (quizDate >= bucket.start && quizDate <= bucket.end) {
          bucket.participants += quiz.totalParticipants || 0;
          break;
        }
      }
    }

    // Prepare chart data
    const chartData = weeklyBuckets.map((bucket) => ({
      week: bucket.label,
      participants: bucket.participants,
    }));

    //recebnt quizzes created(last 3 quizzes created)
    const recentLast3QuizzesCreated = userDb.Quiz.slice(0, 3);

    //user profile card
    const userProfileCard = {
      name: userDb.name,
      email: userDb.email,
      totalQuizzesParticipated: userDb.Participant.length,
    };

    //user recent activity

    const userRecentActivity = userDb.Participant.slice(0, 4).map((quiz) => {
      return {
        quizName: quiz.Quiz.title,
        score: quiz?.ParticipantResult?.score || "NA",
        totalQuestions: quiz.Quiz.Question.length,
        quizId: quiz.Quiz.id,
      };
    });

    return {
      top3Cards: {
        totalQuizzesCreated,
        totalParticipantsAcrossQuizzes,
        avgParticipantsPerQuiz,
      },
      lineChart: [...chartData],
      recent3QuizzesCreated: [...recentLast3QuizzesCreated],
      userProfileCard: { ...userProfileCard },
      userRecentActivity: [...userRecentActivity],
    };
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch user dashboard analytics", 500);
  }
};

export const sendResultsToParticipantsMail = async ({
  quizId,
  user,
}: {
  quizId: string;
  user: string;
}) => {
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    include: {
      Participant: {
        include: {
          User: {
            select: {
              name: true,
              email: true,
            },
          },
          ParticipantResult: {
            select: {
              rank: true,
              score: true,
            },
          },
        },
      },
    },
  });
  if (!quiz) {
    throw new CustomError("Quiz not found", 404);
  }

  if (quiz.creatorId !== user) {
    throw new CustomError("User not authorized to send results", 403);
  }

  if (quiz.status !== "ENDED") {
    throw new CustomError("Quiz is not completed", 400);
  }

  if (!quiz.isResultCalculated) {
    throw new CustomError("Results not calculated yet", 400);
  }

  if (quiz.resultSentViaMail) {
    throw new CustomError("Results already sent via mail", 400);
  }

  const participants = quiz.Participant.map((p) => ({
    name: p.User.name,
    email: p.User.email,
    score: p.ParticipantResult?.score,
    rank: p.ParticipantResult?.rank,
  }));

  const resultsUrl = `https://quizparty.amaan24.tech/quiz/result/${quizId}`;

  for (let i = 0; i < participants.length; i++) {
    const subject = `Results for quiz you participated in: ${quiz.title}`;
    const html = `
      <p>Hi ${participants[i].name},</p>
      <p>Your score: ${participants[i].score}</p>
      <p>Your rank: ${participants[i].rank}</p>

      <p>Click <a href="${resultsUrl}">here</a> to view detailed results in the dashboard</p>
      <p>Thank you for participating in the quiz!</p>
    `;
    await sendEmail({ email: participants[i].email, subject, html });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await prisma.quiz.update({
    where: {
      id: quizId,
    },
    data: {
      resultSentViaMail: true,
    },
  });

  return true;
};
