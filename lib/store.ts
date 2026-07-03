import { createStorage } from "unstorage";
import localStorageDriver from "unstorage/drivers/localstorage";
import { create } from "zustand";

export const storage = createStorage({
  driver:
    typeof window === "undefined"
      ? undefined
      : localStorageDriver({ base: "tachys:" }),
});

interface AppState {
  userPreferences: { theme: string };
  setTheme: (theme: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  setTheme: (theme) =>
    set((state) => ({
      userPreferences: { ...state.userPreferences, theme },
    })),
  userPreferences: { theme: "system" },
}));
