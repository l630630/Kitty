import type { DrawerPlacement, DrawerSize } from "./type";

export const placementStyles: Record<DrawerPlacement, string> = {
  left: "left-0 top-0 bottom-0 h-full",
  right: "right-0 top-0 bottom-0 h-full",
  top: "top-0 left-0 right-0 w-full",
  bottom: "bottom-0 left-0 right-0 w-full",
};

export const transformStyles: Record<DrawerPlacement, string> = {
  left: "transform -translate-x-full",
  right: "transform translate-x-full",
  top: "transform -translate-y-full",
  bottom: "transform translate-y-full",
};

export const sizeStyles: Record<DrawerPlacement, Record<DrawerSize, string>> = {
  left: {
    sm: "w-64",
    md: "w-80",
    lg: "w-96",
    full: "w-screen",
  },
  right: {
    sm: "w-64",
    md: "w-80",
    lg: "w-96",
    full: "w-screen",
  },
  top: {
    sm: "h-32",
    md: "h-48",
    lg: "h-64",
    full: "h-screen",
  },
  bottom: {
    sm: "h-32",
    md: "h-48",
    lg: "h-64",
    full: "h-screen",
  },
};
