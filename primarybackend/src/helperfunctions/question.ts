import OpenAI from "openai";
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
      Quiz: true,
    },
  });

  if (!question) throw new CustomError("Question not found", 404);
  if (question.creatorId !== user) {
    throw new CustomError("You are not authorized to edit this question", 403);
  }

  if (question.Quiz.status !== "CREATED") {
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
        Question: {
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

    return quiz.Question.map((question) => ({
      ...question,
    }));
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to fetch quiz questions", 500);
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
        Quiz: true,
      },
    });

    if (!question) throw new CustomError("Question not found", 404);
    if (question.creatorId !== user) {
      throw new CustomError(
        "You are not authorized to delete this question",
        403
      );
    }

    if (question.Quiz.status !== "CREATED") {
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
