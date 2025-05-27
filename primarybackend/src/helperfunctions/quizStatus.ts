import { getIo } from "../socket";
import { CustomError } from "../utils/CustomError";
import { prisma } from "@amaan2202/prisma-client";

type Question = {
  questionText: string;
  questionIndex: number;
  options: option[];
  quizId: string;
  correctOption: number;
  creatorId: string;
};

type option = {
  index: number;
  text: string;
};

const quizRooms = new Map<
  string,
  {
    currentQuestionIndex: number;
    quizId: string;
    Participants: string[];
    timePerQuestion: number;
    questions: Question[];
  }
>();

export const updateQuizDbToLive = async ({
  user,
  isDiscord,
  discordUserId,
  quizId,
}: {
  user: string;
  discordUserId: string;
  isDiscord: boolean;
  quizId: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
    });
    console.log("Quiz found:", quiz);
    if (!quiz) {
      throw new CustomError("Quiz not found", 404);
    }

    if (isDiscord) {
      const discordUser = await prisma.userDiscord.findUnique({
        where: {
          discordId: discordUserId,
        },
      });

      if (!discordUser) {
        throw new CustomError("Discord user not found", 404);
      }

      if (discordUser.userId !== quiz.creatorId) {
        throw new CustomError(
          "You are not authorized to update this quiz",
          403
        );
      }
    } else {
      console.log("HERE");
      if (quiz.creatorId !== user) {
        throw new CustomError(
          "You are not authorized to update this quiz",
          403
        );
      }
    }

    if (quiz.status === "LIVE") {
      throw new CustomError("Quiz is already live", 400);
    }

    if (quiz.status !== "CREATED") {
      throw new CustomError("Quiz is not in a valid state to update", 400);
    }

    const updatedQuiz = await prisma.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        status: "LIVE",
      },
    });

    return updatedQuiz;
  } catch (error) {
    console.log("Error updating quiz to live:", error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to update quiz", 500);
  }
};

export const updateQuizDbToStart = async ({
  quizId,
  user,
  discordUserId,
  isDiscord,
}: {
  quizId: string;
  user: string;
  discordUserId: string;
  isDiscord: boolean;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        Question: true,
        Participant: true,
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);

    if (isDiscord) {
      const discordUser = await prisma.userDiscord.findUnique({
        where: {
          discordId: discordUserId,
        },
      });

      if (!discordUser) {
        throw new CustomError("Discord user not found", 404);
      }

      if (discordUser?.userId !== quiz.creatorId) {
        throw new CustomError(
          "You are not authorized to update this quiz",
          403
        );
      }
    } else {
      if (quiz.creatorId !== user) {
        throw new CustomError(
          "You are not authorized to update this quiz",
          403
        );
      }
    }

    if (quiz.status === "STARTED") {
      throw new CustomError("Quiz is already started", 400);
    }

    if (quiz.status !== "LIVE") {
      throw new CustomError("Quiz not in the state to start", 400);
    }

    if (quiz.Question.length === 0) {
      throw new CustomError("No questions available for this quiz", 400);
    }

    if (quiz.Participant.length === 0) {
      throw new CustomError("No participants available for this quiz", 400);
    }
    const updatedQuiz = await prisma.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        status: "STARTED",
        totalParticipants: quiz.Participant.length,
      },
    });
    const io = getIo();

    if (io) {
      quizRooms.set(quizId, {
        currentQuestionIndex: 1,
        quizId,
        timePerQuestion: quiz.timePerQuestion,
        Participants: [],
        questions: quiz.Question.map((q) => ({
          ...q,
          options: Array.isArray(q.options) ? (q.options as option[]) : [],
        })),
      });
      setTimeout(() => {
        startQuizFlow(quizId);
      }, 7000);
      io.to(quizId).emit("start-quiz", {
        status: true,
        message: "Quiz has started",
        startsIn: 5,
      });
      return updatedQuiz;
    } else {
      quiz.status = "CREATED";
      await prisma.quiz.update({
        where: {
          id: quizId,
        },
        data: {
          status: "CREATED",
        },
      });
      throw new CustomError("Socket.io is not initialized", 500);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to update quiz", 500);
  }
};

const startQuizFlow = async (quizId: string) => {
  try {
    const quizRoom = quizRooms.get(quizId);
    if (!quizRoom) {
      throw new CustomError("Quiz room not found", 404);
    }

    const io = getIo();
    if (!io) {
      throw new CustomError("Socket.io is not initialized", 500);
    }

    const firstQuestion = quizRoom.questions[0];
    console.log("First question:", firstQuestion);
    io.to(quizId).emit("new-question", {
      question: firstQuestion,
      totalQuestions: quizRoom.questions.length,
      timePerQuestion: quizRoom.timePerQuestion,
    });

    quizRoom.currentQuestionIndex = 2;

    await prisma.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        currentQuestionIndex: quizRoom.currentQuestionIndex,
      },
    });

    const questionInterval = setInterval(
      async () => {
        if (quizRoom.currentQuestionIndex === quizRoom.questions.length + 1) {
          await prisma.quiz.update({
            data: {
              status: "ENDED",
            },
            where: {
              id: quizId,
            },
          });
          await prisma.$transaction(async (tx) => {
            const resultQueue = await tx.quizResultQueue.create({
              data: {
                quizId,
              },
            });

            const outbox = await tx.quizResultQueueOutbox.create({
              data: {
                quizResultQueueId: resultQueue.id,
              },
            });
          });

          clearInterval(questionInterval);
          io.to(quizId).emit("quiz-completed", {
            message: "Quiz has ended",
            status: true,
          });
          quizRoom.currentQuestionIndex = 0;
          return;
        }

        const currentQuestion =
          quizRoom.questions[quizRoom.currentQuestionIndex - 1];

        io.to(quizId).emit("new-question", {
          question: currentQuestion,
          totalQuestions: quizRoom.questions.length,
          timePerQuestion: quizRoom.timePerQuestion,
        });

        console.log(
          "Current question index:",
          quizRoom.currentQuestionIndex,
          "Current question:",
          currentQuestion.questionText
        );

        quizRoom.currentQuestionIndex += 1;

        await prisma.quiz.update({
          where: {
            id: quizId,
          },
          data: {
            currentQuestionIndex: quizRoom.currentQuestionIndex,
          },
        });
      },
      quizRoom.timePerQuestion * 1000 + 2000
    );
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
  }
};
