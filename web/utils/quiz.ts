import { api } from "./axios";

type CreateQuizProps = {
  title: string;
  description?: string;
  maxParticipants: number;
  reward?: {
    brand: string;
    voucherCode: string;
  };
  timePerQuestion: number;
};

export const createQuiz = async ({
  title,
  description,
  reward,
  maxParticipants,
  timePerQuestion,
}: CreateQuizProps) => {
  const data: {
    title: string;
    description?: string;
    maxParticipants: number;
    timePerQuestion: number;
    reward?: {
      brand: string;
      voucherCode: string;
    };
  } = {
    title,
    timePerQuestion,
    maxParticipants,
  };

  if (description) {
    data.description = description;
  }
  if (reward) {
    data.reward = reward;
  }
  const quiz = await api.post("/quiz", data);
  return quiz.data;
};

export const getQuiz = async (quizId: string) => {
  const response = await api.get(`/quiz/${quizId}`);

  return response.data;
};

export const editQuiz = async ({
  QuizFieldsToUpdate,
  RewardFieldsToUpdate,
  quizId,
}: {
  QuizFieldsToUpdate: {
    title?: string;
    description?: string;
    maxParticipants?: number;
    timePerQuestion?: number;
  };
  RewardFieldsToUpdate?: {
    brand?: string;
    voucherCode?: string;
    reward?: boolean;
  };
  quizId: string;
}) => {
  const response = await api.patch(`/quiz/${quizId}`, {
    QuizFieldsToUpdate,
    RewardFieldsToUpdate,
  });

  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await api.delete(`/quiz/${quizId}`);
  return response.data;
};

export const getMyQuizzes = async (token: string) => {
  console.log("TOKEN IN QUIZ", token);
  const response = await api.get("/quiz/my-quizzes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response.data;
};
