import type React from "react";

export type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxColor = "blue" | "green" | "red" | "gray";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
  size?: CheckboxSize;
  color?: CheckboxColor;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  labelClassName?: string;
  checkboxClassName?: string;
}
