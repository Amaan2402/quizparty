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
  console.log("HELPER HERE WITH QUIZID", quizId);
  const response = await api.patch(`/quiz/${quizId}`, {
    QuizFieldsToUpdate,
    RewardFieldsToUpdate,
  });

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

export const getMyQuizzes = async (token: string) => {
  const response = await api.get("/quiz/my-quizzes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
