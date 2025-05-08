import { api } from "./axios";

type CreateQuizProps = {
  title: string;
  description?: string;
  reward?: {
    brand: string;
    couponCode: string;
  };
  timePerQuestion: number;
};

export const createQuiz = async ({
  title,
  description,
  reward,
  timePerQuestion,
}: CreateQuizProps) => {
  const data = {
    title,
    description: description || "",
    reward: reward || {},
    timePerQuestion,
  };
  const quiz = await api.post("/quiz", data);
  return quiz.data;
};

export const getQuiz = async (quizId: string) => {
  const response = await api.get(`/quiz/${quizId}`);

  return response.data;
};

export const getQuizQuestions = async (quizId: string) => {
  const response = await api.get(`/quiz/question/${quizId}/all`);
  return response.data;
};

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

export const deleteQuizQuestion = async (questionId: string) => {
  const response = await api.delete(`/quiz/question/${questionId}`);
  console.log(response.data);
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
