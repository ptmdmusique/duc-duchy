import { TFuncKey } from "react-i18next";

export const supportLanguageList = ["vi", "en"] as const;
export type SupportLanguage = typeof supportLanguageList[number];

export type CommonNSTranslationKey = TFuncKey<"common">;
