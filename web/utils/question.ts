import { api } from "./axios";

export const createQuizQuestion = async ({
  questionText,
  options,
  correctOption,
  quizId,
}: {
  questionText: string;
  options: { index: number; text: string }[];
  correctOption: number;
  quizId: string;
}) => {
  const response = await api.post("/quiz/question", {
    quizId,
    questionText,
    options,
    correctOption,
  });

  return response.data;
};

export const getQuizQuestions = async (quizId: string) => {
  const response = await api.get(`/quiz/question/${quizId}/all`);
  return response.data;
};

export const generateAndGetAiQuestions = async ({
  quizId,
  topic,
  description,
}: {
  quizId: string;
  topic: string;
  description: string;
}) => {
  const response = await api.post("/quiz/question/ai", {
    quizId,
    quizTopic: topic,
    quizDescription: description,
  });

  return response.data;
};

export const editQuizQuestion = async ({
  questionId,
  questionUpdateFields,
}: {
  questionUpdateFields: {
    questionText?: string;
    options?: {
      index: number;
      text: string;
    }[];
    correctOption?: number;
  };
  questionId: string;
}) => {
  const response = await api.patch(`/quiz/question/${questionId}`, {
    questionUpdateFields,
  });

  return response.data;
};

export const deleteQuizQuestion = async (questionId: string) => {
  const response = await api.delete(`/quiz/question/${questionId}`);
  return response.data;
};
