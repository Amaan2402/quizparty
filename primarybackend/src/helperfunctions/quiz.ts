import { CustomError } from "../utils/CustomError";
import { prisma } from "@amaan2202/prisma-client";

import {
  QuizStatus,
  RewardBrands,
} from "@amaan2202/prisma-client/prisma/generated/prisma";
import { generateQuizQuestionAiDb } from "./question";

export const createQuizDb = async ({
  creatorId,
  title,
  description,
  reward,
  timePerQuestion,
  maxParticipants,
}: {
  creatorId: string;
  title: string;
  description?: string;
  reward?: {
    brand: RewardBrands;
    voucherCode: string;
  };
  timePerQuestion: number;
  maxParticipants: number;
}) => {
  try {
    const quiz = await prisma.quiz.create({
      data: {
        creatorId,
        title,
        description,
        timePerQuestion,
        currentQuestionIndex: 0,
        maxParticipants,
      },
    });

    if (reward && quiz) {
      await prisma.reward.create({
        data: {
          quizId: quiz.id,
          brand: reward.brand,
          voucherCode: reward?.voucherCode,
        },
      });
    }
    return quiz;
  } catch (error) {
    console.log("Error creating quiz:", error);
    if (error instanceof CustomError) {
      throw error;
    }

    throw new CustomError("Failed to create quiz", 500);
  }
};

export const createQuizViaDiscordDb = async ({
  discordId,
  title,
  description,
  timePerQuestion,
  maxParticipants,
  topic,
  aiPrompt,
}: {
  discordId: string;
  title: string;
  description?: string;
  timePerQuestion: number;
  maxParticipants: number;
  topic: string;
  aiPrompt: string;
}) => {
  try {
    const discordUser = await prisma.userDiscord.findUnique({
      where: {
        discordId,
      },
    });

    if (!discordUser) {
      throw new CustomError("Discord user not found", 404);
    }

    const user = await prisma.user.findUnique({
      where: {
        id: discordUser.userId,
      },
    });

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    const quiz = await prisma.quiz.create({
      data: {
        creatorId: discordUser.userId,
        title,
        description,
        timePerQuestion,
        currentQuestionIndex: 0,
        maxParticipants,
      },
    });

    if (!quiz) {
      throw new CustomError("Failed to create quiz", 500);
    }

    const quizQuestionsAi = await generateQuizQuestionAiDb({
      quizId: quiz.id,
      user: discordUser.userId,
      quizTopic: topic,
      quizDescription: aiPrompt,
    });

    if (!quizQuestionsAi) {
      throw new CustomError("Failed to generate quiz questions", 500);
    }

    if (quizQuestionsAi.length === 0) {
      throw new CustomError("No quiz questions generated", 500);
    }

    console.log("Quiz questions generated successfully:", quizQuestionsAi);

    return {
      quiz,
      quizQuestionsAi,
    };
  } catch (error) {
    console.log("Error creating quiz via Discord:", error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to create quiz via Discord", 500);
  }
};

export const updateQuizDb = async ({
  QuizFieldsToUpdate,
  RewardFieldsToUpdate,
  quizId,
  user,
}: {
  QuizFieldsToUpdate: {
    title?: string;
    description?: string;
    maxParticipants?: number;
    timePerQuestion?: number;
  };
  RewardFieldsToUpdate?: {
    brand: RewardBrands;
    voucherCode: string;
    reward: boolean;
  };
  quizId: string;
  user: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        Reward: true,
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId !== user) {
      throw new CustomError("You are not authorized to update this quiz", 403);
    }

    if (quiz.status !== "CREATED") {
      throw new CustomError("Quiz is not in a valid state to update", 400);
    }

    if (Object.keys(QuizFieldsToUpdate).length > 0) {
      await prisma.quiz.update({
        where: {
          id: quizId,
        },
        data: {
          ...QuizFieldsToUpdate,
        },
      });
    }

    //create
    if (!quiz.Reward && RewardFieldsToUpdate?.reward) {
      if (RewardFieldsToUpdate?.brand && RewardFieldsToUpdate?.voucherCode) {
        await prisma.reward.create({
          data: {
            quizId,
            brand: RewardFieldsToUpdate.brand,
            voucherCode: RewardFieldsToUpdate.voucherCode,
          },
        });
      } else {
        throw new CustomError("Brand and voucher code are required", 400);
      }
    }
    //update
    else if (quiz.Reward && RewardFieldsToUpdate?.reward) {
      if (RewardFieldsToUpdate?.brand || RewardFieldsToUpdate?.voucherCode) {
        const updatedRewardFields: {
          brand?: RewardBrands;
          voucherCode?: string;
        } = {};

        if (RewardFieldsToUpdate?.brand) {
          updatedRewardFields.brand = RewardFieldsToUpdate.brand;
        }
        if (RewardFieldsToUpdate?.voucherCode) {
          updatedRewardFields.voucherCode = RewardFieldsToUpdate?.voucherCode;
        }

        await prisma.reward.update({
          where: {
            quizId,
          },
          data: {
            ...updatedRewardFields,
          },
        });
      }
    } else if (quiz.Reward && !RewardFieldsToUpdate?.reward) {
      await prisma.reward.delete({
        where: {
          quizId,
        },
      });
    }

    const quizDb = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        Reward: true,
      },
    });

    return quizDb;
  } catch (error) {
    console.log("Error updating quiz:", error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to update quiz", 500);
  }
};

export const getQuizDb = async ({
  user,
  quizId,
}: {
  user: string;
  quizId: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        creatorId: true,
        status: true,
        timePerQuestion: true,
        maxParticipants: true,
        Reward: true,
        totalParticipants: true,
        Participant: {
          where: {
            isConnected: true,
          },
          select: {
            id: true,
            User: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId !== user) {
      throw new CustomError("You are not authorized to view this quiz", 403);
    }

    if (quiz.creatorId !== user) {
      throw new CustomError("You are not authorized to view this quiz", 403);
    }

    return quiz;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch quiz", 500);
  }
};

export const deleteQuizDb = async ({
  quizId,
  user,
}: {
  quizId: string;
  user: string;
}) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: quizId,
    },
  });

  if (!quiz) throw new CustomError("Quiz not found", 404);
  if (quiz.creatorId !== user) {
    throw new CustomError("You are not authorized to delete this quiz", 403);
  }

  if (quiz.status === "STARTED") {
    throw new CustomError("Quiz is already started", 400);
  }

  if (quiz.status === "ENDED") {
    throw new CustomError("Quiz is already ended", 400);
  }

  const deletedQuiz = await prisma.quiz.delete({
    where: {
      id: quizId,
    },
  });

  if (!deletedQuiz) {
    throw new CustomError("Failed to delete quiz", 500);
  }

  return deletedQuiz;
};

export const getUserMyQuizzesDb = async ({ user }: { user: string }) => {
  try {
    const userDb = await prisma.user.findUnique({
      where: {
        id: user,
      },
      select: {
        Quiz: {
          include: {
            Reward: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        Participant: {
          include: {
            Quiz: {
              include: {
                Reward: true,
                User: true,
              },
            },
          },
          orderBy: {
            joinedAt: "desc",
          },
        },
      },
    });
    console.log(userDb);

    if (!userDb) {
      throw new CustomError("User not found", 404);
    }

    if (!userDb.Quiz && !userDb.Participant) {
      return {
        quizzesCreated: [],
        quizzesJoined: [],
      };
    }

    let quizzesCreated: {
      id: string;
      title: string;
      totalParticipants: number;
      status: QuizStatus;
      createdAt: Date;
      timePerQuestion: number;
      reward?: {
        brand: RewardBrands;
        voucherCode: string;
      };
    }[] = [];

    let quizzesJoined: {
      id: string;
      title: string;
      totalParticipants: number;
      status: QuizStatus;
      createdAt: Date;
      timePerQuestion: number;
      joinedAt: Date;
      reward?: {
        brand: RewardBrands;
        voucherCode: string;
      };
    }[] = [];

    if (!userDb.Quiz) {
      quizzesCreated = [];
    } else {
      quizzesCreated = userDb?.Quiz?.map((quiz: any) => {
        return {
          id: quiz.id,
          createdAt: quiz.createdAt,
          title: quiz.title,
          totalParticipants: quiz.totalParticipants,
          status: quiz.status,
          timePerQuestion: quiz.timePerQuestion,
          reward:
            quiz.Reward?.brand && quiz.Reward?.voucherCode
              ? {
                  brand: quiz.Reward.brand,
                  voucherCode: quiz.Reward.voucherCode,
                }
              : undefined,
        };
      });
    }

    if (!userDb.Participant) {
      quizzesJoined = [];
    } else {
      quizzesJoined = userDb?.Participant?.map((participant: any) => {
        return {
          id: participant.Quiz.id,
          joinedAt: participant.joinedAt,
          title: participant.Quiz.title,
          createdAt: participant.Quiz.createdAt,
          totalParticipants: participant.Quiz.totalParticipants,
          timePerQuestion: participant.Quiz.timePerQuestion,
          createdBy: participant.Quiz.User.name,
          status: participant.Quiz.status,
          reward:
            participant.Quiz.Reward?.brand &&
            participant.Quiz.Reward?.voucherCode
              ? {
                  brand: participant.Quiz.Reward.brand,
                  voucherCode: participant.Quiz.Reward.voucherCode,
                }
              : undefined,
        };
      });
    }

    return {
      quizzesCreated,
      quizzesJoined,
    };
  } catch (error) {
    console.log("Error fetching quizzes:", error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch quizzes", 500);
  }
};
