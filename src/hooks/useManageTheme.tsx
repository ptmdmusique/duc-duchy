import { useEffect } from "react";
import { useStoreActions } from "stores";

export const useManageTheme = () => {
  const { initializeTheme } = useStoreActions((actions) => actions.theme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return null;
};
