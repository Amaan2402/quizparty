import OpenAI from "openai";
import { CustomError } from "../utils/CustomError";
import { prisma } from "../utils/db";
import { getIo, socketsMap } from "../socket";

import { QuizStatus, RewardBrands } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { startOfDay, subDays } from "date-fns";
import { GoogleGenAI, Type } from "@google/genai";

type option = {
  index: number;
  text: string;
};

type Question = {
  questionText: string;
  questionIndex: number;
  options: option[];
  quizId: string;
  correctOption: number;
  creatorId: string;
};

type generateAiQuestion = {
  quizId: string;
  // creatorId: string;
  user: string;
  // questionCount: number;
  quizTopic: string;
  quizDescription: string;
};

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_DEEP_SEEK_API,
});

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

    console.log("Quiz created successfully:", quiz);

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
        reward: true,
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
    if (!quiz.reward && RewardFieldsToUpdate?.reward) {
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
    else if (quiz.reward && RewardFieldsToUpdate?.reward) {
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
    } else if (quiz.reward && !RewardFieldsToUpdate?.reward) {
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
        reward: true,
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
        reward: true,
        totalParticipants: true,
        participants: {
          where: {
            isConnected: true,
          },
          select: {
            id: true,
            user: {
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
        quizCreated: {
          include: {
            reward: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        quizParticipated: {
          include: {
            quiz: {
              include: {
                reward: true,
                creator: true,
              },
            },
          },
          orderBy: {
            joinedAt: "desc",
          },
        },
      },
    });

    if (!userDb) {
      throw new CustomError("User not found", 404);
    }

    if (!userDb.quizCreated && !userDb.quizParticipated) {
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

    if (!userDb.quizCreated) {
      quizzesCreated = [];
    } else {
      quizzesCreated = userDb.quizCreated.map((quiz) => {
        return {
          id: quiz.id,
          createdAt: quiz.createdAt,
          title: quiz.title,
          totalParticipants: quiz.totalParticipants,
          status: quiz.status,
          timePerQuestion: quiz.timePerQuestion,
          reward:
            quiz.reward?.brand && quiz.reward?.voucherCode
              ? {
                  brand: quiz.reward.brand,
                  voucherCode: quiz.reward.voucherCode,
                }
              : undefined,
        };
      });
    }

    if (!userDb.quizParticipated) {
      quizzesJoined = [];
    } else {
      quizzesJoined = userDb.quizParticipated.map((participant) => {
        return {
          id: participant.quiz.id,
          joinedAt: participant.joinedAt,
          title: participant.quiz.title,
          createdAt: participant.quiz.createdAt,
          totalParticipants: participant.quiz.totalParticipants,
          timePerQuestion: participant.quiz.timePerQuestion,
          createdBy: participant.quiz.creator.name,
          status: participant.quiz.status,
          reward:
            participant.quiz.reward?.brand &&
            participant.quiz.reward?.voucherCode
              ? {
                  brand: participant.quiz.reward.brand,
                  voucherCode: participant.quiz.reward.voucherCode,
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
        questions: true,
        participants: true,
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

    if (quiz.questions.length === 0) {
      throw new CustomError("No questions available for this quiz", 400);
    }

    if (quiz.participants.length === 0) {
      throw new CustomError("No participants available for this quiz", 400);
    }
    const updatedQuiz = await prisma.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        status: "STARTED",
        totalParticipants: quiz.participants.length,
      },
    });
    const io = getIo();

    if (io) {
      quizRooms.set(quizId, {
        currentQuestionIndex: 1,
        quizId,
        timePerQuestion: quiz.timePerQuestion,
        Participants: [],
        questions: quiz.questions.map((q) => ({
          ...q,
          options: Array.isArray(q.options) ? (q.options as option[]) : [],
        })),
      });
      setTimeout(() => {
        console.log("Starting quiz flow after 15 seconds");
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

export const createQuestionDb = async ({
  questionText,
  options,
  quizId,
  correctOption,
  user,
}: Question & { user: string }) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
    });
    if (!quiz) throw new CustomError("Quiz not found", 404);

    if (quiz.creatorId !== user) {
      throw new CustomError(
        "You are not authorized to create this question",
        403
      );
    }

    if (quiz.status !== "CREATED") {
      throw new CustomError(
        "Quiz is not in a valid state to create questions",
        400
      );
    }

    const latestQuestion = await prisma.question.findFirst({
      where: { quizId },
      orderBy: { questionIndex: "desc" },
    });

    const newIndex = latestQuestion ? latestQuestion.questionIndex + 1 : 1;

    if (newIndex === 11) {
      throw new CustomError("Maximum number of questions reached", 400);
    }

    const isQuestionIndexExists = await prisma.question.findUnique({
      where: {
        quizId_questionIndex: {
          quizId,
          questionIndex: newIndex,
        },
      },
    });
    if (isQuestionIndexExists) {
      throw new CustomError(
        `Question index ${newIndex} already exists in this quiz`,
        400
      );
    }

    const isQuestionTextExists = await prisma.question.findUnique({
      where: {
        quizId_questionText: {
          quizId,
          questionText,
        },
      },
    });

    if (isQuestionTextExists) {
      throw new CustomError(
        `Question text "${questionText}" already exists in this quiz`,
        400
      );
    }

    if (options.length < 2) {
      throw new CustomError("At least two options are required", 400);
    }
    if (options.length > 4) {
      throw new CustomError("Maximum four options are allowed", 400);
    }

    const question = await prisma.question.create({
      data: {
        questionText,
        questionIndex: newIndex,
        options,
        quizId,
        correctOption,
        creatorId: user,
      },
    });

    return question;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to create question", 500);
  }
};

export const editQuizQuestionDb = async ({
  questionId,
  user,
  questionUpdateFields,
}: {
  questionId: string;
  user: string;
  questionUpdateFields: {
    questionText?: string;
    options?: option[];
    correctOption?: number;
  };
}) => {
  const question = await prisma.question.findUnique({
    where: {
      id: questionId,
    },
    include: {
      quiz: true,
    },
  });

  if (!question) throw new CustomError("Question not found", 404);
  if (question.creatorId !== user) {
    throw new CustomError("You are not authorized to edit this question", 403);
  }

  if (question.quiz.status !== "CREATED") {
    throw new CustomError(
      "Quiz is not in a valid state to edit questions",
      400
    );
  }

  const updateQuestion = await prisma.question.update({
    where: {
      id: questionId,
    },
    data: {
      ...questionUpdateFields,
    },
  });

  return updateQuestion;
};

export const deleteQuizQuestionDb = async ({
  questionId,
  user,
}: {
  questionId: string;
  user: string;
}) => {
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: questionId,
      },
      include: {
        quiz: true,
      },
    });

    if (!question) throw new CustomError("Question not found", 404);
    if (question.creatorId !== user) {
      throw new CustomError(
        "You are not authorized to delete this question",
        403
      );
    }

    if (question.quiz.status !== "CREATED") {
      throw new CustomError(
        "Quiz is not in a valid state to delete questions",
        400
      );
    }

    const questionIndex = question.questionIndex;
    const quizId = question.quizId;

    const totalQuestionsCount = await prisma.question.count({
      where: {
        quizId,
      },
    });

    const questionDeleted = await prisma.question.delete({
      where: {
        id: questionId,
      },
    });

    if (totalQuestionsCount > 1 && questionIndex < totalQuestionsCount) {
      await prisma.question.updateMany({
        where: {
          quizId,
          questionIndex: {
            gt: questionIndex,
          },
        },
        data: {
          questionIndex: {
            decrement: 1,
          },
        },
      });
      return questionDeleted;
    }

    return questionDeleted;
  } catch (error) {
    console.log("445", error);
    if (error instanceof CustomError) {
      throw error;
    }

    throw new CustomError("Failed to delete question", 500);
  }
};

export const getQuizQuestions = async ({
  quizId,
  user,
}: {
  quizId: string;
  user: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        questions: {
          orderBy: {
            questionIndex: "asc",
          },
        },
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId !== user) {
      throw new CustomError("You are not authorized to view this quiz", 403);
    }

    return quiz.questions.map((question) => ({
      ...question,
    }));
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch quiz questions", 500);
  }
};

export const generateQuizQuestionAiDb = async ({
  quizId,
  user,
  quizTopic,
  quizDescription,
}: generateAiQuestion) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
    });
    if (!quiz) throw new CustomError("Quiz not found", 404);

    if (quiz.creatorId !== user) {
      throw new CustomError(
        "You are not authorized to generate questions",
        403
      );
    }

    const latestQuestion = await prisma.question.findFirst({
      where: { quizId },
      orderBy: { questionIndex: "desc" },
    });

    const newIndex = latestQuestion ? latestQuestion.questionIndex + 1 : 1;

    if (newIndex === 11) {
      throw new CustomError("Maximum number of questions reached", 400);
    }
    const questionCount = 11 - newIndex;

    const model = process.env.OPEN_ROUTER_MODEL;
    if (!model) {
      throw new CustomError("Model not found", 500);
    }

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "user",
          content: `Generate ${questionCount} questions for a quiz on the topic of ${quizTopic}. Description: ${quizDescription} and the indexing for the question should start from ${newIndex}
          
          **AND MAKEW SURE THAT THE RESPONSE IS IN A VALID JSON FORMAT, NO EXTRA STRING,SPACES, GAPS**
          `,
        },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "questions",
          strict: true,
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                questionText: {
                  type: "string",
                  description: "Question text",
                },
                questionIndex: {
                  type: "number",
                  description: "Index starting from 1",
                },
                options: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      index: {
                        type: "number",
                        description: "Index of the option",
                      },
                      text: {
                        type: "string",
                        description: "Text of the option",
                      },
                    },
                    required: ["index", "text"],
                    additionalProperties: false,
                  },
                },
                correctOption: {
                  type: "number",
                  description: "Index of the correct option",
                },
              },
              required: [
                "questionText",
                "questionIndex",
                "options",
                "correctOption",
              ],
              additionalProperties: false,
            },
          },
        },
      },
    });

    console.log("AI Completion:", completion);

    if (!completion?.choices[0]?.message?.content) {
      throw new CustomError("Failed to generate questions 1", 500);
    }

    const result = JSON.parse(completion?.choices[0]?.message?.content);
    if (!Array.isArray(result)) {
      throw new CustomError("Failed to generate questions 2", 500);
    }

    console.log("Generated questions:", result);

    if (result.length === 0) {
      throw new CustomError("No questions generated", 500);
    }

    const dataToInsert = result.map((question: Question) => {
      return {
        questionText: question.questionText,
        questionIndex: question.questionIndex,
        options: question.options,
        correctOption: question.correctOption,
        quizId,
        creatorId: user,
      };
    });

    const questions = await prisma.question.createManyAndReturn({
      data: dataToInsert,
      skipDuplicates: true,
      select: {
        id: true,
        questionText: true,
        questionIndex: true,
        options: true,
        correctOption: true,
      },
    });

    return questions;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    console.log("Error generating quiz questions:", error);
    throw new CustomError("Failed to generate quiz questions", 500);
  }
};

export const joinQuizdb = async ({
  quizId,
  user,
}: {
  quizId: string;
  user: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        reward: true,
        participants: true,
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId === user) {
      throw new CustomError("You cannot join your own quiz", 403);
    }

    if (quiz.status === "ENDED") {
      throw new CustomError("Quiz has already ended", 400);
    }

    if (quiz.participants.length + 1 === quiz.maxParticipants) {
      throw new CustomError("Quiz is full - maximum participants reached", 400);
    }

    const participant = await prisma.participant.findUnique({
      where: {
        userId_quizId: {
          quizId,
          userId: user,
        },
      },
    });

    if (participant?.isBanned) {
      throw new CustomError("You are banned from this quiz", 403);
    }

    if (participant?.isConnected) {
      throw new CustomError("You are already connected to this quiz", 400);
    }

    if (participant) {
      if (quiz.status === "LIVE") {
        return {
          participant: participant,
          reconnected: true,
          isQuizStarted: false,
          timePerQuestion: quiz.timePerQuestion,
          reward: quiz.reward,
        };
      } else if (quiz.status === "STARTED") {
        return {
          participant: participant,
          reconnected: true,
          isQuizStarted: true,
          timePerQuestion: quiz.timePerQuestion,
          reward: quiz.reward,
        };
      } else {
        throw new CustomError("Quiz is not in a valid state to join", 400);
      }
    } else {
      if (quiz.status !== "LIVE") {
        throw new CustomError("Quiz is not in a valid state to join", 400);
      }
      const newParticipant = await prisma.participant.create({
        data: {
          quizId,
          userId: user,
          isConnected: false,
        },
      });

      return {
        participant: newParticipant,
        reconnected: false,
        isQuizStarted: false,
        timePerQuestion: quiz.timePerQuestion,
        reward: quiz.reward,
      };
    }
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) {
      throw error;
    }

    throw new CustomError("Failed to join quiz", 500);
  }
};

export const createAnswerDb = async ({
  questionId,
  selectedOption,
  user,
}: {
  questionId: string;
  selectedOption: number;
  user: string;
}) => {
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: questionId,
      },
      include: {
        quiz: {
          include: {
            participants: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!question) {
      throw new CustomError("Question not found", 404);
    }

    if (question.quiz.status !== "STARTED") {
      throw new CustomError("Quiz is not ongoing", 400);
    }
    if (question.quiz.creatorId === user) {
      throw new CustomError("You cannot answer your own question", 403);
    }

    const participant = question.quiz.participants.find(
      (p) => p.user.id === user
    );
    if (!participant) {
      throw new CustomError("You are not a participant in this quiz", 403);
    }

    if (participant.isBanned) {
      throw new CustomError("You are banned from this quiz", 403);
    }

    await prisma.$transaction(async (tx) => {
      const answer = await tx.answer.create({
        data: {
          questionId,
          participantId: participant.id,
          selectedOption,
        },
      });

      await tx.answerOutbox.create({
        data: {
          answerId: answer.id,
        },
      });
    });
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to create answer", 500);
  }
};

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
    participants: {
      id: string;
    }[];
    totalParticipants: number;
  };
  userType: "CREATOR" | "PARTICIPANT";
  user: string;
}) => {
  try {
    const participantsCount = quiz.participants.length;

    const quizResults = await prisma.participantResult.findMany({
      where: {
        quizId: quiz.id,
        participantId: {
          in: quiz.participants.map((p) => p.id),
        },
      },
      include: {
        participant: {
          select: {
            user: {
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
    console.log("quizResults", quizResults);
    const results = quizResults.map((result) => ({
      participantId: result.participantId,
      userId: result.participant.user.id,
      name: result.participant.user.name,
      email: result.participant.user.email,
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
          participants: true,
        },
      });

      if (!quiz) {
        throw new CustomError("Quiz not found", 404);
      }

      let userType: "CREATOR" | "PARTICIPANT" | null = null;

      if (quiz.creatorId === user) {
        userType = "CREATOR";
      } else if (quiz.participants.some((p) => p.userId === user)) {
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

export const banAndRemoveParticipantDb = async ({
  user,
  participantId,
  quizId,
}: {
  user: string;
  participantId: string;
  quizId: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        participants: true,
      },
    });

    if (!quiz) {
      throw new CustomError("Quiz not found", 404);
    }

    if (quiz.creatorId !== user) {
      throw new CustomError(
        "You are not authorized to remove this participant",
        403
      );
    }

    const participant = quiz.participants.find((p) => p.id === participantId);
    if (!participant) {
      throw new CustomError("Participant not found", 404);
    }

    const updatedParticipant = await prisma.participant.update({
      where: {
        id: participantId,
      },
      data: {
        isBanned: true,
      },
    });

    const io = getIo();

    const socketId = socketsMap.find((s) => s.participantId === participantId);
    if (socketId) {
      io.to(socketId.socketId).emit("participant-banned", {
        message: "You have been banned from this quiz",
      });
    }

    return updatedParticipant;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to ban participant", 500);
  }
};

export const getUserDashboardAnalyticsDb = async (user: string) => {
  // Top 3 cards ---
  //total quizzes
  //total participants for the quizzes created
  //Avg participants per quiz - totalParticipants / totalQuizzes

  //Line chart-----
  //total participants over time for the last 30 days divided into 4 weeks

  //last 3 quizzes created(recent quizzes)-----
  // data: quizname, created, total participants, status

  //user profile card----
  // user name, email, total quizzes participated,

  // user recent activity(last 4 quizzes participated)-----
  // data: quiz name. score

  try {
    const userDb = await prisma.user.findUnique({
      where: {
        id: user,
      },
      include: {
        quizCreated: {
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
        quizParticipated: {
          orderBy: {
            joinedAt: "desc",
          },
          select: {
            quiz: {
              select: {
                id: true,
                title: true,
                questions: true,
              },
            },
            result: {
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
    const totalQuizzesCreated = userDb.quizCreated.length;
    const totalParticipantsAcrossQuizzes = userDb.quizCreated.reduce(
      (acc, quiz) => {
        return acc + quiz.totalParticipants;
      },
      0
    );
    const avgParticipantsPerQuiz =
      totalParticipantsAcrossQuizzes / totalQuizzesCreated;

    //Line chart
    const quizzes = userDb.quizCreated;
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
    const recentLast3QuizzesCreated = userDb.quizCreated.slice(0, 3);

    //user profile card
    const userProfileCard = {
      name: userDb.name,
      email: userDb.email,
      totalQuizzesParticipated: userDb.quizParticipated.length,
    };

    //user recent activity

    const userRecentActivity = userDb.quizParticipated
      .slice(0, 4)
      .map((quiz) => {
        return {
          quizName: quiz.quiz.title,
          score: quiz?.result?.score || "NA",
          totalQuestions: quiz.quiz.questions.length,
          quizId: quiz.quiz.id,
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

export const handleLeaveQuiz = async ({
  user,
  quizId,
}: {
  user: string;
  quizId: string;
}) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: quizId,
    },
  });

  console.log(quiz);

  if (!quiz) {
    throw new CustomError("Quiz not found", 404);
  }

  const participant = await prisma.participant.findUnique({
    where: {
      userId_quizId: {
        userId: user,
        quizId,
      },
    },
  });

  console.log(participant);

  if (!participant) {
    throw new CustomError("Participant not found", 404);
  }

  if (participant.isBanned) {
    throw new CustomError("You are banned from this quiz", 403);
  }

  if (quiz.status === "LIVE") {
    const deletedParticipant = await prisma.participant.delete({
      where: {
        id: participant.id,
      },
    });

    return deletedParticipant;
  }

  if (quiz.status === "STARTED") {
    throw new CustomError("You cannot leave the quiz that has started", 400);
  }

  throw new CustomError("You cannot leave the quiz that is not live", 400);
};
