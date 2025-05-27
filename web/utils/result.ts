import { api } from "./axios";

export const longPollResults = async (quizId: string, signal: AbortSignal) => {
  try {
    const response = await api.get(`/quiz/results/${quizId}`, {
      signal,
    });
    console.log("RESULTS AXIOS", response.data);
    return {
      ...response.data,
      status: response.status,
    };
  } catch (error) {
    return error;
  }
};

export const fetchUserdashboardData = async () => {
  const response = await api.get("/quiz/results/dashboard/analytics");
  return response.data;
};

export const sendResultsToParticipants = async (quizId: string) => {
  const response = await api.post(`/quiz/results/${quizId}/send-results-mail`);
  return response.data;
};
