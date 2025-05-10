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
  questionsList: Question[];
  setQuestionsList: (questions: Question[]) => void;
  editQuestion: ({
    question,
    id,
  }: {
    question: Partial<Question>;
    id: string;
  }) => void;
  deleteQuestion: (id: string) => void;
  resetQuestions: () => void;
};

export const useQuestionStore = create<QuestionStore>((set) => ({
  questionsList: [],
  setQuestionsList: (questions) =>
    set((state) => ({
      questionsList: [...state.questionsList, ...questions],
    })),
  editQuestion: ({ question, id }) =>
    set((state) => ({
      questionsList: state.questionsList.map((q) => {
        if (q.id === id) {
          return {
            ...q,
            ...question,
          };
        }
        return q;
      }),
    })),
  deleteQuestion: (id: string) =>
    set((state) => ({
      questionsList: state.questionsList.filter(
        (question) => question.id !== id
      ),
    })),
  resetQuestions: () =>
    set({
      questionsList: [],
    }),
}));
