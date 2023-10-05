import { ModalVisibilityStore } from "@@/types/modal-visibility-store";
import { create } from "zustand";

export const generateModalVisibilityStore = () =>
  create<ModalVisibilityStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    setIsOpen: (value) => set({ isOpen: value }),
  }));
