import { Theme } from "data/theme/theme";
import { Action, action, persist } from "easy-peasy";

const DEFAULT_THEME: Theme = "dark";
export interface ThemeModel {
  // * State -------------------------
  theme: Theme;

  // * Actions -----------------------
  resetStore: Action<ThemeModel>;
  toggleTheme: Action<ThemeModel>;
  setTheme: Action<ThemeModel, Theme>;
  initializeTheme: Action<ThemeModel>;
}

const getThemeName = (theme: Theme) => `theme-${theme}` as const;
const setNewTheme = (curTheme: Theme, newTheme: Theme) => {
  document.body.classList.remove(getThemeName(curTheme));
  document.body.classList.add(getThemeName(newTheme));
};

export const theme: ThemeModel = persist(
  {
    theme: DEFAULT_THEME,

    // Actions
    resetStore: action((state) => {
      state.theme = DEFAULT_THEME;
    }),
    setTheme: action((state, theme) => {
      setNewTheme(state.theme, theme);
      state.theme = theme;
    }),
    toggleTheme: action((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      setNewTheme(state.theme, newTheme);
      state.theme = newTheme;
    }),

    initializeTheme: action((state) => {
      document.body.classList.add(getThemeName(state.theme));
    }),
  },
  { storage: "localStorage" },
);
