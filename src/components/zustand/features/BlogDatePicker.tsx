// stores/useDateStore.ts
import { create } from "zustand";

interface DateStore {
  date: Date | null;
  setDate: (date: Date | null) => void;
}

export const useDateStore = create<DateStore>((set) => ({
  date: null,
  setDate: (date) => set({ date }),
}));
