import { lazy } from "react";

const PlanetaryViewPage = lazy(() => import("pages/PlanetaryViewPage"));

export const pathMap = {
  home: "/",
} as const;

export type RoutePath = keyof typeof pathMap;

interface PathInfo {
  path: RoutePath;
  Component: React.ComponentType<any>;
}

export const pathInfoMap: PathInfo[] = [
  { path: "home", Component: PlanetaryViewPage },
];
