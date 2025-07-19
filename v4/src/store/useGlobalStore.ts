import { create } from "zustand";

type ViewType = "2d" | "3d";

interface GlobalState {
  darkMode: boolean;
  view: ViewType;
  isLoading: boolean;
  toggleDarkMode: () => void;
  setView: (view: ViewType) => void;
  setLoading: (loading: boolean) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  darkMode: false,
  view: "2d",
  isLoading: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setView: (view) => set({ view }),
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useGlobalStore;
