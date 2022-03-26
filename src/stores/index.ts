import { createStore, createTypedHooks } from "easy-peasy";
import { i18n, I18nModel } from "stores/i18n/i18n.store";
import { theme, ThemeModel } from "stores/theme/theme.store";

export interface StoreModel {
  theme: ThemeModel;
  i18n: I18nModel;
}

const model: StoreModel = {
  theme,
  i18n,
};

const { useStoreState, useStoreActions } = createTypedHooks<StoreModel>();

export const store = createStore(model);
export { useStoreState, useStoreActions };
