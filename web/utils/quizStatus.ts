import { api } from "./axios";

export const updateQuizToLive = async (quizId: string) => {
  const response = await api.patch(`/quiz/status/live/${quizId}`);
  return response.data;
};

export const startQuiz = async (quizId: string) => {
  const response = await api.patch(`/quiz/status/start/${quizId}`);
  return response.data;
};
