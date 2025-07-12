import type { ButtonSize, ButtonVariant } from "./type";

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
