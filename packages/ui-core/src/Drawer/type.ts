import type React from "react";

export type DrawerPlacement = "left" | "right" | "top" | "bottom";
export type DrawerSize = "sm" | "md" | "lg" | "full";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  maskClosable?: boolean;
  mask?: boolean;
  title?: React.ReactNode;
  closeIcon?: boolean | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  footer?: React.ReactNode;
  footerClassName?: string;
}
