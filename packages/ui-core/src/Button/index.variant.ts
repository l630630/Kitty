import type { ButtonColor, ButtonSize, ButtonVariant } from "./type";

// 颜色映射
export const colorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
  blue: {
    primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
    secondary: `bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-500`,
    outline: `bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50 focus:ring-blue-500`,
    ghost: `bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500`,
  },
  green: {
    primary: `bg-green-600 text-white hover:bg-green-700 focus:ring-green-500`,
    secondary: `bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-500`,
    outline: `bg-transparent border border-green-500 text-green-600 hover:bg-green-50 focus:ring-green-500`,
    ghost: `bg-transparent text-green-600 hover:bg-green-50 focus:ring-green-500`,
  },
  red: {
    primary: `bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`,
    secondary: `bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-500`,
    outline: `bg-transparent border border-red-500 text-red-600 hover:bg-red-50 focus:ring-red-500`,
    ghost: `bg-transparent text-red-600 hover:bg-red-50 focus:ring-red-500`,
  },
  gray: {
    primary: `bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500`,
    secondary: `bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500`,
    outline: `bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500`,
    ghost: `bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500`,
  },
};

// 保留旧的变体样式以保持向后兼容
export const variantStyles: Record<ButtonVariant, string> = {
  primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
  secondary: `bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500`,
  outline: `bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500`,
  ghost: `bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500`,
};

export const sizeStyles: Record<ButtonSize, string> = {
  sm: `text-sm px-3 py-1.5 rounded-md`,
  md: `text-base px-4 py-2 rounded-md`,
  lg: `text-lg px-6 py-3 rounded-lg`,
};
