import type { ButtonColor, ButtonSize, ButtonVariant } from "./type";

// 颜色映射 - 支持暗黑主题
export const colorStyles: Record<ButtonColor, Record<ButtonVariant, string>> = {
  blue: {
    primary: `bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`,
    secondary: `bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`,
    outline: `bg-transparent border border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`,
    ghost: `bg-transparent text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`,
  },
  green: {
    primary: `bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`,
    secondary: `bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`,
    outline: `bg-transparent border border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`,
    ghost: `bg-transparent text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`,
  },
  red: {
    primary: `bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`,
    secondary: `bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`,
    outline: `bg-transparent border border-red-500 dark:border-red-400 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`,
    ghost: `bg-transparent text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`,
  },
  gray: {
    primary: `bg-gray-600 dark:bg-gray-500 text-white hover:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`,
    secondary: `bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`,
    outline: `bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`,
    ghost: `bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`,
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
