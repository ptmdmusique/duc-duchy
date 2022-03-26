import { useEffect } from "react";
import { useStoreActions } from "stores";
import { initializeI18N } from "utils/i18n/init";

export const useManageI18n = () => {
  const initLocale = useStoreActions((actions) => actions.i18n.initLocale);

  useEffect(() => {
    initializeI18N();

    initLocale();
  }, [initLocale]);

  return null;
};
