import OpenAI from "openai";
import { CustomError } from "../utils/CustomError";
import { prisma } from "../utils/db";
import { getIo } from "../socket";

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
  creatorId: string;
  reqUser: string;
  questionCount: number;
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
    console.log("Starting quiz flow for quizId:", quizId);

    const io = getIo();
    if (!io) {
      throw new CustomError("Socket.io is not initialized", 500);
    }

    const questionInterval = setInterval(async () => {
      if (quizRoom.currentQuestionIndex === quizRoom.questions.length) {
        console.log("All questions have been asked. Ending quiz.");
        // await prisma.quiz.update({
        //   data: {
        //     status: "COMPLETED",
        //   },
        //   where: {
        //     id: quizId,
        //   },
        // });
        console.log("Quiz status updated to COMPLETED");
        console.log("Creating quiz result queue TRANSACTION");
        await prisma.$transaction(async (tx) => {
          console.log("Creating quiz result queue in transaction - 1");
          const resultQueue = await tx.quizResultQueue.create({
            data: {
              quizId,
            },
          });

          console.log("Result queue created:", resultQueue.id);

          const outbox = await tx.quizResultQueueOutbox.create({
            data: {
              quizResultQueueId: resultQueue.id,
            },
          });

          console.log("Outbox created:", outbox.id);
        });

        clearInterval(questionInterval);
        io.to(quizId).emit("quiz-completed", {
          message: "Quiz has ended",
        });
        quizRoom.currentQuestionIndex = 0;
        return;
      }
      console.log(
        `Current question index: ${quizRoom.currentQuestionIndex}, Total questions: ${quizRoom.questions.length}`
      );
      const currentQuestion = quizRoom.questions[quizRoom.currentQuestionIndex];
      console.log(
        `Current question: ${currentQuestion.questionText}, Index: ${quizRoom.currentQuestionIndex}`
      );

      io.to(quizId).emit("new-question", {
        question: currentQuestion,
        questionIndex: quizRoom.currentQuestionIndex + 1,
        totalQuestions: quizRoom.questions.length,
      });
      quizRoom.currentQuestionIndex += 1;
    }, quizRoom.timePerQuestion * 1000);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    console.error("Error starting quiz flow:", error);
  }
};

export const createQuizDb = async ({
  creatorId,
  title,
  description,
  reward,
  timePerQuestion,
  reqUser,
}: {
  creatorId: string;
  title: string;
  description?: string;
  reward: object;
  timePerQuestion: number;
  reqUser: string;
}) => {
  try {
    if (reqUser !== creatorId) {
      throw new CustomError("You are not authorized to create this quiz", 403);
    }

    const quiz = await prisma.quiz.create({
      data: {
        creatorId,
        title,
        description,
        reward: {
          ...reward,
        },
        timePerQuestion,
        currentQuestionIndex: 0,
      },
    });
    if (!quiz) throw new CustomError("Quiz creation failed", 500);
    return quiz;
  } catch (error) {
    throw new CustomError("Failed to create quiz", 500);
  }
};

export const updateQuizDbToStart = async ({
  quizId,
  reqUser,
}: {
  quizId: string;
  reqUser: string;
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
    if (quiz.creatorId !== reqUser) {
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
        status: "CREATED",
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
      console.error("Socket.io is not initialized::", quizId);
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
  questionIndex,
  options,
  quizId,
  correctOption,
  reqUser,
  creatorId,
}: Question & { reqUser: string }) => {
  try {
    if (reqUser !== creatorId) {
      throw new CustomError(
        "You are not authorized to create this question",
        403
      );
    }

    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
    });
    if (!quiz) throw new CustomError("Quiz not found", 404);

    if (quiz.creatorId !== reqUser) {
      throw new CustomError(
        "You are not authorized to create this question",
        403
      );
    }

    const isQuestionIndexExists = await prisma.question.findUnique({
      where: {
        quizId_questionIndex: {
          quizId,
          questionIndex,
        },
      },
    });
    if (isQuestionIndexExists) {
      throw new CustomError(
        `Question index ${questionIndex} already exists in this quiz`,
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
        questionIndex,
        options,
        quizId,
        correctOption,
        creatorId,
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

export const generateQuizQuestionAiDb = async ({
  quizId,
  creatorId,
  reqUser,
  questionCount,
  quizTopic,
  quizDescription,
}: generateAiQuestion) => {
  try {
    if (reqUser !== creatorId) {
      throw new CustomError("You are not authorized to create this quiz", 403);
    }

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free",
      // {
      messages: [
        {
          role: "user",
          content: `Generate ${questionCount} questions for a quiz on the topic of ${quizTopic}. Description: ${quizDescription}`,
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
    console.log("AI response:", completion);
    if (!completion?.choices[0]?.message?.content) {
      throw new CustomError("Failed to generate questions", 500);
    }

    const result = JSON.parse(completion?.choices[0]?.message?.content);
    if (!Array.isArray(result)) {
      throw new CustomError("Invalid response format", 500);
    }

    console.log("Generated questions:", result);

    const dataToInsert = result.map((question: Question) => {
      return {
        questionText: question.questionText,
        questionIndex: question.questionIndex,
        options: question.options,
        correctOption: question.correctOption,
        quizId,
        creatorId,
      };
    });

    console.log("Data to insert:", dataToInsert);
    const questions = await prisma.question.createManyAndReturn({
      data: dataToInsert,
      skipDuplicates: true,
    });

    console.log("Inserted questions:", questions);

    return questions;
  } catch (error) {
    console.error("Error generating quiz question:", error);
    throw new CustomError("Failed to generate quiz question", 500);
  }
};

export const joinQuizdb = async ({
  quizId,

  reqUser,
}: {
  quizId: string;

  reqUser: string | "";
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId === reqUser) {
      throw new CustomError("You cannot join your own quiz", 403);
    }

    const participant = await prisma.participant.findUnique({
      where: {
        userId_quizId: {
          quizId,
          userId: reqUser,
        },
      },
    });

    if (participant) {
      return {
        participant,
        reconnected: true,
      };
    } else {
      const newParticipant = await prisma.participant.create({
        data: {
          quizId,
          userId: reqUser,
        },
      });

      return {
        participant: newParticipant,
        reconnected: false,
      };
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }

    console.error("Error joining quiz:", error);
    throw new CustomError("Failed to join quiz", 500);
  }
};

export const createAnswerDb = async ({
  questionId,
  participantId,
  selectedOption,
  reqUser,
}: {
  questionId: string;
  participantId: string;
  selectedOption: number;
  reqUser: string;
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
    if (question.quiz.creatorId === reqUser) {
      console.log("HERE 3.1");
      throw new CustomError("You cannot answer your own question", 403);
    }

    const participants = question.quiz.participants.map((p) => p.id);
    if (!participants.includes(participantId)) {
      throw new CustomError("You are not a participant in this quiz", 403);
    }

    await prisma.$transaction(async (tx) => {
      const answer = await tx.answer.create({
        data: {
          questionId,
          participantId,
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
