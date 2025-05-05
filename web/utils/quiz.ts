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
