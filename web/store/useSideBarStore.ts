import { create } from "zustand";

type SideBarStore = {
  isOpen: boolean;
  handleToggleSideBar: () => void;
};

export const useSideBarStore = create<SideBarStore>((set) => ({
  isOpen: false,
  handleToggleSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
