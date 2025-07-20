import { tv } from "tailwind-variants";
import type { CheckboxColor, CheckboxSize } from "./type";

// 颜色样式映射 - 支持暗黑主题
export const colorStyles: Record<CheckboxColor, string> = {
  blue: `
    text-blue-600 dark:text-blue-400
    focus:ring-blue-500 dark:focus:ring-blue-400
    border-gray-300 dark:border-gray-600
    checked:bg-blue-600 dark:checked:bg-blue-500
    checked:border-blue-600 dark:checked:border-blue-500
    indeterminate:bg-blue-600 dark:indeterminate:bg-blue-500
    indeterminate:border-blue-600 dark:indeterminate:border-blue-500
    transition-colors duration-200
  `,
  green: `
    text-green-600 dark:text-green-400
    focus:ring-green-500 dark:focus:ring-green-400
    border-gray-300 dark:border-gray-600
    checked:bg-green-600 dark:checked:bg-green-500
    checked:border-green-600 dark:checked:border-green-500
    indeterminate:bg-green-600 dark:indeterminate:bg-green-500
    indeterminate:border-green-600 dark:indeterminate:border-green-500
    transition-colors duration-200
  `,
  red: `
    text-red-600 dark:text-red-400
    focus:ring-red-500 dark:focus:ring-red-400
    border-gray-300 dark:border-gray-600
    checked:bg-red-600 dark:checked:bg-red-500
    checked:border-red-600 dark:checked:border-red-500
    indeterminate:bg-red-600 dark:indeterminate:bg-red-500
    indeterminate:border-red-600 dark:indeterminate:border-red-500
    transition-colors duration-200
  `,
  gray: `
    text-gray-600 dark:text-gray-400
    focus:ring-gray-500 dark:focus:ring-gray-400
    border-gray-300 dark:border-gray-600
    checked:bg-gray-600 dark:checked:bg-gray-500
    checked:border-gray-600 dark:checked:border-gray-500
    indeterminate:bg-gray-600 dark:indeterminate:bg-gray-500
    indeterminate:border-gray-600 dark:indeterminate:border-gray-500
    transition-colors duration-200
  `,
};

// 尺寸样式映射
export const sizeStyles: Record<CheckboxSize, string> = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

// 使用 tailwind-variants 定义组件样式
export const checkboxContainer = tv({
  base: "flex items-start gap-2",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const checkboxInput = tv({
  base: [
    "rounded border-2 focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
    "transition-colors duration-200",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "bg-white dark:bg-gray-800",
  ],
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
    error: {
      true: "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    error: false,
  },
});

export const checkboxLabel = tv({
  base: "select-none transition-colors duration-200",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer",
    },
    error: {
      true: "text-red-700 dark:text-red-400",
      false: "text-gray-900 dark:text-gray-100",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
    error: false,
  },
});

export const checkboxDescription = tv({
  base: "mt-1 transition-colors duration-200",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    error: {
      true: "text-red-600 dark:text-red-400",
      false: "text-gray-500 dark:text-gray-400",
    },
  },
  defaultVariants: {
    size: "md",
    error: false,
  },
});

export const checkboxErrorMessage = tv({
  base: "mt-1 text-sm text-red-600 dark:text-red-400 transition-colors duration-200",
});
