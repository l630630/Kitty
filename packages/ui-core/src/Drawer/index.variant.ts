import { tv } from "tailwind-variants";

export const drawerOverlay = tv({
  base: "fixed inset-0 bg-black transition-opacity z-40 backdrop-blur-sm",
  variants: {
    open: {
      true: "opacity-60",
      false: "opacity-0 pointer-events-none",
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const drawerContainer = tv({
  base: "fixed bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 overflow-auto flex flex-col",
  variants: {
    placement: {
      left: "left-0 top-0 bottom-0 h-full",
      right: "right-0 top-0 bottom-0 h-full",
      top: "top-0 left-0 right-0 w-full",
      bottom: "bottom-0 left-0 right-0 w-full",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
      full: "",
    },
    open: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // 左侧抽屉尺寸
    { placement: "left", size: "sm", class: "w-64" },
    { placement: "left", size: "md", class: "w-80" },
    { placement: "left", size: "lg", class: "w-96" },
    { placement: "left", size: "full", class: "w-screen" },

    // 右侧抽屉尺寸
    { placement: "right", size: "sm", class: "w-64" },
    { placement: "right", size: "md", class: "w-80" },
    { placement: "right", size: "lg", class: "w-96" },
    { placement: "right", size: "full", class: "w-screen" },

    // 顶部抽屉尺寸
    { placement: "top", size: "sm", class: "h-32" },
    { placement: "top", size: "md", class: "h-48" },
    { placement: "top", size: "lg", class: "h-64" },
    { placement: "top", size: "full", class: "h-screen" },

    // 底部抽屉尺寸
    { placement: "bottom", size: "sm", class: "h-32" },
    { placement: "bottom", size: "md", class: "h-48" },
    { placement: "bottom", size: "lg", class: "h-64" },
    { placement: "bottom", size: "full", class: "h-screen" },

    // 打开/关闭状态的位移
    { placement: "left", open: true, class: "translate-x-0" },
    { placement: "left", open: false, class: "-translate-x-full" },
    { placement: "right", open: true, class: "translate-x-0" },
    { placement: "right", open: false, class: "translate-x-full" },
    { placement: "top", open: true, class: "translate-y-0" },
    { placement: "top", open: false, class: "-translate-y-full" },
    { placement: "bottom", open: true, class: "translate-y-0" },
    { placement: "bottom", open: false, class: "translate-y-full" },
  ],
  defaultVariants: {
    placement: "right",
    size: "md",
    open: false,
  },
});

export const drawerHeader = tv({
  base: "flex items-center justify-between p-4 border-b border-gray-200",
});

export const drawerTitle = tv({
  base: "text-lg font-medium",
});

export const drawerCloseButton = tv({
  base: "p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none",
});

export const drawerBody = tv({
  base: "p-4 overflow-y-auto flex-1",
});

export const drawerFooter = tv({
  base: "border-t border-gray-200 p-4",
});
