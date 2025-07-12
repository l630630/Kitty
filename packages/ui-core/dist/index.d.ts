import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;

type DrawerPlacement = "left" | "right" | "top" | "bottom";
type DrawerSize = "sm" | "md" | "lg" | "full";
interface DrawerProps {
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

declare const Drawer: React.FC<DrawerProps>;

export {
  Button,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  Drawer,
  DrawerPlacement,
  DrawerProps,
  DrawerSize,
};
