import { create } from "zustand";

type DeleteModalStore = {
  isOpen: boolean;
  quizId: string;
  handleOpenDeleteModal: (quizId: string) => void;
  handleCloseDeleteModal: () => void;
};

export const useDeleteModalStore = create<DeleteModalStore>((set) => ({
  isOpen: false,
  quizId: "",
  handleOpenDeleteModal: (quizId) =>
    set({
      isOpen: true,
      quizId,
    }),
  handleCloseDeleteModal: () =>
    set({
      isOpen: false,
    }),
}));
