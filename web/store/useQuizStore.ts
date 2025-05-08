import { create } from "zustand";

type QuizData = {
  title: string;
  description?: string;
  timePerQuestion: number;
  reward?: {
    brand: string;
    voucherCode: string;
  };
  maxParticipants: number;
  quizId?: string;
  id?: string;
};

type QuizStore = QuizData & {
  setQuizData: (data: QuizData) => void;
  resetQuizData: () => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  title: "",
  description: "",
  timePerQuestion: 0,
  reward: {
    brand: "",
    voucherCode: "",
  },
  maxParticipants: 0,
  quizId: "",

  setQuizData: (data: QuizData) => {
    const { title, description, timePerQuestion, reward, maxParticipants, id } =
      data;
    set(() => ({
      title,
      description,
      timePerQuestion,
      reward,
      maxParticipants,
      quizId: id,
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
    })),
}));
