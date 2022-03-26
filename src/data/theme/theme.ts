export const themeList = ["light", "dark"] as const;
export type Theme = typeof themeList[number];
