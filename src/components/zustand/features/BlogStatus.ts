// stores/statusStore.ts
import { create } from "zustand";

interface StatusState {
  status: string | number;
  setStatus: (value: string | number) => void;
}

export const useStatusStore = create<StatusState>((set) => ({
  status: 'all',
  setStatus: (value) => set({ status: value }),
}));
