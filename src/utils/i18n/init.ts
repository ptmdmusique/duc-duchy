import commonEnNS from "assets/locales/en/common.json";
import commonViNS from "assets/locales/vi/common.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { isInDev } from "utils/env/env";

export const defaultNS = "common";
export const resources = {
  en: { common: commonEnNS },
  vi: { common: commonViNS },
} as const;

export const initializeI18N = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: isInDev(),
      fallbackLng: "en",
      defaultNS: "common",
      ns: ["common"],
      resources,
      interpolation: { escapeValue: false },
    });
};

export const customI18N = i18n;
