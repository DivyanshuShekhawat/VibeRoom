import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("VibeRoom-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("VibeRoom-theme", theme);
    set({ theme });
  },
}));
