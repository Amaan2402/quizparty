import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  isEdit: boolean;
  handleOpen: (isEdit?: boolean) => void;
  handleClose: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  isEdit: false,
  handleOpen: (isEdit = false) => {
    set(() => ({
      isOpen: true,
      isEdit: isEdit,
    }));
  },
  handleClose: () => {
    set(() => ({
      isOpen: false,
    }));
  },
}));
