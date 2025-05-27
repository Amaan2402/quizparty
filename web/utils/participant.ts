import { api } from "./axios";

export const joinQuiz = async (quizId: string) => {
  const response = await api.post(`/quiz/participant/join/${quizId}`);
  return response.data;
};

export const removeAndBanParticipant = async ({
  quizId,
  participantId,
}: {
  quizId: string;
  participantId: string;
}) => {
  const response = await api.delete(`/quiz/participant/ban/${quizId}`, {
    data: {
      participantId,
    },
  });

  return response.data;
};

export const submitAnswer = async ({
  questionId,
  selectedOption,
}: {
  questionId: string;
  selectedOption: number;
}) => {
  const response = await api.post(`/quiz/participant/answer/${questionId}`, {
    selectedOption,
  });

  return response.data;
};

export const leaveQuiz = async (quizId: string) => {
  const response = await api.delete(`/quiz/participant/leave/${quizId}`);
  return response.data;
};
