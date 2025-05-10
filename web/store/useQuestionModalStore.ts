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

type QuestionModalStore = {
  isOpen: boolean;
  handleOpen: (question: Question) => void;
  handleClose: () => void;
  question: Question;
};

export const useQuestionModalStore = create<QuestionModalStore>((set) => ({
  isOpen: false,
  question: {
    id: "",
    questionText: "",
    questionIndex: 0,
    options: [],
    correctOption: 0,
  },
  handleOpen: (question: Question) => {
    set(() => ({
      isOpen: true,
      question: question,
    }));
  },
  handleClose: () => {
    set(() => ({
      isOpen: false,
      question: {
        id: "",
        questionText: "",
        questionIndex: 0,
        options: [],
        correctOption: 0,
      },
    }));
  },
}));
