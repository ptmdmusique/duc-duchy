import { SupportLanguage, supportLanguageList } from "data/theme/i18n/i18n";
import { action, Action } from "easy-peasy";
import { customI18N } from "utils/i18n/init";

const DEFAULT_LANGUAGE: SupportLanguage = "vi";
export interface I18nModel {
  locale: SupportLanguage;

  resetStore: Action<I18nModel>;
  initLocale: Action<I18nModel>;
  setLocale: Action<I18nModel, SupportLanguage>;
  nextLocale: Action<I18nModel>;
}

export const i18n: I18nModel = {
  locale: DEFAULT_LANGUAGE,

  resetStore: action((state) => {
    state.locale = DEFAULT_LANGUAGE;
  }),

  // TODO: Decide whether to use location base
  initLocale: action((state) => {
    customI18N.changeLanguage(state.locale);
  }),

  setLocale: action((state, locale) => {
    if (locale !== state.locale) {
      state.locale = locale;
      customI18N.changeLanguage(locale);
    }
  }),

  nextLocale: action((state) => {
    const localeIndex = supportLanguageList.indexOf(state.locale);
    const nextLocale =
      supportLanguageList[(localeIndex + 1) % supportLanguageList.length];

    state.locale = nextLocale;
    customI18N.changeLanguage(nextLocale);
  }),
};
