import OpenAI from "openai";
import { CustomError } from "../utils/CustomError";
import { prisma } from "../utils/db";
import { getIo } from "../socket";

import { RewardBrands } from "@prisma/client";

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

    const questionInterval = setInterval(
      async () => {
        if (quizRoom.currentQuestionIndex === quizRoom.questions.length) {
          await prisma.quiz.update({
            data: {
              status: "COMPLETED",
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
          });
          quizRoom.currentQuestionIndex = 0;
          return;
        }

        const currentQuestion =
          quizRoom.questions[quizRoom.currentQuestionIndex];

        io.to(quizId).emit("new-question", {
          question: currentQuestion,
          questionIndex: quizRoom.currentQuestionIndex + 1,
          totalQuestions: quizRoom.questions.length,
        });
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
      quizRoom.timePerQuestion * 1000 + 3000
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
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId !== user) {
      throw new CustomError("You are not authorized to view this quiz", 403);
    }

    if (quiz.status !== "CREATED") {
      throw new CustomError("Quiz is not started yet", 400);
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

export const updateQuizDbToStart = async ({
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
        questions: true,
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId !== user) {
      throw new CustomError("You are not authorized to update this quiz", 403);
    }

    if (quiz.status === "ONGOING") {
      throw new CustomError("Quiz already started", 400);
    }
    if (quiz.status === "COMPLETED") {
      throw new CustomError("Quiz already completed", 400);
    }
    if (quiz.questions.length === 0) {
      throw new CustomError("No questions available for this quiz", 400);
    }
    const updatedQuiz = await prisma.quiz.update({
      where: {
        id: quizId,
      },
      data: {
        status: "ONGOING",
      },
    });
    const io = getIo();

    if (io) {
      io.to(quizId).emit("start-quiz", {
        message: `The quiz has started!`,
      });

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

      startQuizFlow(quizId);
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
  // creatorId,
  user,
  // questionCount,
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

    const completion = await openai.chat.completions.create({
      model: "google/learnlm-1.5-pro-experimental:free",
      messages: [
        {
          role: "user",
          content: `Generate ${questionCount} questions for a quiz on the topic of ${quizTopic}. Description: ${quizDescription} and the indexing for the question should start from ${newIndex}`,
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

    if (!completion?.choices[0]?.message?.content) {
      throw new CustomError("Failed to generate questions", 500);
    }

    const result = JSON.parse(completion?.choices[0]?.message?.content);
    if (!Array.isArray(result)) {
      throw new CustomError("Failed to generate questions", 500);
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
    console.log("ERRRRRURR:::::", error);
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
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId === user) {
      throw new CustomError("You cannot join your own quiz", 403);
    }

    const participant = await prisma.participant.findUnique({
      where: {
        userId_quizId: {
          quizId,
          userId: user,
        },
      },
    });

    if (participant) {
      if (participant.isConnected) {
        throw new CustomError("You are already connected", 400);
      } else {
        const updatedParticipant = await prisma.participant.update({
          where: {
            id: participant.id,
          },
          data: {
            isConnected: true,
          },
        });
        return {
          participant: updatedParticipant,
          reconnected: true,
        };
      }
    } else {
      const newParticipant = await prisma.participant.create({
        data: {
          quizId,
          userId: user,
        },
      });

      return {
        participant: newParticipant,
        reconnected: false,
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
            participants: true,
          },
        },
      },
    });

    if (!question) {
      throw new CustomError("Question not found", 404);
    }

    if (question.quiz.status !== "ONGOING") {
      throw new CustomError("Quiz is not ongoing", 400);
    }
    if (question.quiz.creatorId === user) {
      throw new CustomError("You cannot answer your own question", 403);
    }

    const participants = question.quiz.participants.map((p) => p.id);
    if (!participants.includes(user)) {
      throw new CustomError("You are not a participant in this quiz", 403);
    }

    await prisma.$transaction(async (tx) => {
      const answer = await tx.answer.create({
        data: {
          questionId,
          participantId: user,
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

export const getQuizResultsDb = async ({
  quizId,
  user,
}: {
  quizId: string;
  user: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        participants: true,
      },
    });
    if (!quiz) {
      throw new CustomError("Quiz not found", 404);
    }

    if (quiz.status !== "COMPLETED") {
      throw new CustomError("Quiz is not completed yet", 400);
    }

    const participantsCount = quiz.participants.length;

    const quizResults = await prisma.participantResult.findMany({
      where: {
        quizId,
        participantId: {
          in: quiz.participants.map((p) => p.id),
        },
      },
      orderBy: {
        rank: "desc",
      },
    });

    if (!quizResults) {
      throw new CustomError("No results found for this quiz", 404);
    }

    if (!quiz.participants.find((p) => user === p.id)) {
      throw new CustomError("You are not a participant in this quiz", 403);
    }

    if (quizResults.length !== participantsCount) {
      throw new CustomError("Results not generated completely", 400);
    }

    const results = quizResults.map((result) => {
      return {
        participantId: result.participantId,
        score: result.score,
        rank: result.rank,
      };
    });

    return {
      results,
      message: "Results fetched successfully",
      quizId,
    };
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch quiz results", 500);
  }
};
