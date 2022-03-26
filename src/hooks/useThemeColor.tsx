import { useStoreState } from "stores";
import colorPalette from "styles/color-palettes.module.scss";

type Color =
  | "text-base"
  | "text-primary"
  | "text-secondary"
  | "text-inverted"
  | "fill"
  | "background"
  | "background-top"
  | "background-overflow-menu"
  | "background-active"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "default"
  | "exquisite"
  | "disabled";

export const useThemeColor = (color: Color): string => {
  const curTheme = useStoreState((state) => state.theme.theme);

  return colorPalette[`--${color}--${curTheme}`];
};
