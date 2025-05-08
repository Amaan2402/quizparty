import { create } from "zustand";

type Question = {
  id: string;
  questionText: string;
  questionIndex: number;
  options: {
    index: number;
    text: string;
  }[];
  correctOption: number;
};

type QuestionStore = {
  question: Question;
  setQuestion: (question: Question) => void;
  resetQuestion: () => void;
};

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: {
    id: "",
    questionText: "",
    questionIndex: 0,
    options: [],
    correctOption: 0,
  },
  setQuestion: (question) => set({ question }),
  resetQuestion: () =>
    set({
      question: {
        id: "",
        questionText: "",
        questionIndex: 0,
        options: [],
        correctOption: 0,
      },
    }),
}));
