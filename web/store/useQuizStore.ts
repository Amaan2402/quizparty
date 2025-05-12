import { create } from "zustand";

enum QuizStatus {
  created = "CREATED",
  live = "LIVE",
  started = "STARTED",
  ended = "ENDED",
  null = "NULL",
}

type QuizData = {
  id: string;
  title: string;
  description?: string;
  timePerQuestion: number;
  reward?: {
    brand: string;
    voucherCode: string;
  };
  maxParticipants: number;
  totalParticipants: number;
  status: QuizStatus;
};

type QuizStore = QuizData & {
  setQuizData: (data: QuizData) => void;
  resetQuizData: () => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  id: "",
  title: "",
  description: "",
  timePerQuestion: 0,
  reward: {
    brand: "",
    voucherCode: "",
  },
  maxParticipants: 0,
  totalParticipants: 0,
  status: QuizStatus.null,

  setQuizData: (data: QuizData) => {
    const {
      title,
      description,
      timePerQuestion,
      reward,
      maxParticipants,
      totalParticipants,
      id,
      status,
    } = data;
    set(() => ({
      title,
      description,
      timePerQuestion,
      reward,
      maxParticipants,
      quizId: id,
      totalParticipants,
      status,
    }));
  },

  resetQuizData: () =>
    set(() => ({
      title: "",
      description: "",
      timePerQuestion: 0,
      reward: {
        brand: "",
        voucherCode: "",
      },
      maxParticipants: 0,
      quizId: "",
      totalParticipants: 0,
      status: QuizStatus.null,
    })),
}));
