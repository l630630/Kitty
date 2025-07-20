var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/Button/index.tsx
import React from "react";

// src/Button/index.variant.ts
var colorStyles = {
  blue: {
    primary: `bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`,
    secondary: `bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`,
    outline: `bg-transparent border border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`,
    ghost: `bg-transparent text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200`
  },
  green: {
    primary: `bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`,
    secondary: `bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`,
    outline: `bg-transparent border border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`,
    ghost: `bg-transparent text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200`
  },
  red: {
    primary: `bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`,
    secondary: `bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`,
    outline: `bg-transparent border border-red-500 dark:border-red-400 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`,
    ghost: `bg-transparent text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:ring-red-500 dark:focus:ring-red-400 transition-colors duration-200`
  },
  gray: {
    primary: `bg-gray-600 dark:bg-gray-500 text-white hover:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`,
    secondary: `bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`,
    outline: `bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`,
    ghost: `bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200`
  }
};
var sizeStyles = {
  sm: `text-sm px-3 py-1.5 rounded-md`,
  md: `text-base px-4 py-2 rounded-md`,
  lg: `text-lg px-6 py-3 rounded-lg`
};

// src/Button/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      variant = "primary",
      size = "md",
      color = "blue",
      disabled = false,
      loading = false,
      fullWidth = false,
      className = "",
      children
    } = _b, props = __objRest(_b, [
      "variant",
      "size",
      "color",
      "disabled",
      "loading",
      "fullWidth",
      "className",
      "children"
    ]);
    const buttonStyle = colorStyles[color][variant];
    return /* @__PURE__ */ jsx(
      "button",
      __spreadProps(__spreadValues({
        ref,
        disabled: disabled || loading,
        className: `
          inline-flex items-center justify-center font-medium transition-colors
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${buttonStyle}
          ${sizeStyles[size]}
          ${fullWidth ? "w-full" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${loading ? "relative cursor-not-allowed text-transparent" : ""}
          ${className}
        `
      }, props), {
        children: loading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "animate-spin h-5 w-5 text-white",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { children: "\u52A0\u8F7D\u4E2D" })
        ] }) : children
      })
    );
  }
);
Button.displayName = "Button";

// src/Drawer/index.tsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// src/Drawer/index.variant.ts
import { tv } from "tailwind-variants";
var drawerOverlay = tv({
  base: "fixed inset-0 bg-black dark:bg-gray-950 transition-opacity z-40 backdrop-blur-sm",
  variants: {
    open: {
      true: "opacity-60 dark:opacity-70",
      false: "opacity-0 pointer-events-none"
    }
  },
  defaultVariants: {
    open: false
  }
});
var drawerContainer = tv({
  base: "fixed bg-white dark:bg-dark-800 shadow-lg dark:shadow-gray-900/50 transition-all duration-300 ease-in-out z-50 overflow-auto flex flex-col border-gray-200 dark:border-gray-700",
  variants: {
    placement: {
      left: "left-0 top-0 bottom-0 h-full",
      right: "right-0 top-0 bottom-0 h-full",
      top: "top-0 left-0 right-0 w-full",
      bottom: "bottom-0 left-0 right-0 w-full"
    },
    size: {
      sm: "",
      md: "",
      lg: "",
      full: ""
    },
    open: {
      true: "",
      false: ""
    }
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
    { placement: "bottom", open: false, class: "translate-y-full" }
  ],
  defaultVariants: {
    placement: "right",
    size: "md",
    open: false
  }
});
var drawerHeader = tv({
  base: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
});
var drawerTitle = tv({
  base: "text-lg font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300"
});
var drawerCloseButton = tv({
  base: "p-1 rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
});
var drawerBody = tv({
  base: "p-4 overflow-y-auto flex-1 text-gray-900 dark:text-gray-100 transition-colors duration-300"
});
var drawerFooter = tv({
  base: "border-t border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300"
});

// src/Drawer/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Drawer = ({
  open,
  onClose,
  placement = "right",
  size = "md",
  maskClosable = true,
  mask = true,
  title,
  closeIcon = true,
  children,
  className = "",
  style,
  contentClassName = "",
  contentStyle,
  footer,
  footerClassName = ""
}) => {
  const bodyRef = useRef(null);
  const drawerRef = useRef(null);
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [open, onClose]);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (maskClosable && drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, maskClosable, onClose]);
  useEffect(() => {
    if (typeof document !== "undefined") {
      bodyRef.current = document.body;
      if (open) {
        bodyRef.current.style.overflow = "hidden";
      } else {
        bodyRef.current.style.overflow = "";
      }
    }
    return () => {
      if (bodyRef.current) {
        bodyRef.current.style.overflow = "";
      }
    };
  }, [open]);
  if (typeof document === "undefined") {
    return null;
  }
  const renderCloseIcon = () => {
    if (!closeIcon)
      return null;
    return /* @__PURE__ */ jsx2(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: drawerCloseButton(),
        "aria-label": "\u5173\u95ED",
        children: closeIcon === true ? /* @__PURE__ */ jsx2(
          "svg",
          {
            className: "h-6 w-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx2(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
              }
            )
          }
        ) : closeIcon
      }
    );
  };
  const renderHeader = () => {
    if (!title && !closeIcon)
      return null;
    return /* @__PURE__ */ jsxs2("div", { className: drawerHeader(), children: [
      title && /* @__PURE__ */ jsx2("h2", { id: "drawer-title", className: drawerTitle(), children: title }),
      renderCloseIcon()
    ] });
  };
  const drawerPortalContent = /* @__PURE__ */ jsxs2(
    "div",
    {
      className: `fixed inset-0 z-50 ${open ? "visible" : "invisible"}`,
      "aria-hidden": !open,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? "drawer-title" : void 0,
      children: [
        mask && /* @__PURE__ */ jsx2(
          "div",
          {
            className: drawerOverlay({ open }),
            onClick: maskClosable ? onClose : void 0
          }
        ),
        /* @__PURE__ */ jsxs2(
          "div",
          {
            ref: drawerRef,
            className: drawerContainer({ placement, size, open, className }),
            style,
            children: [
              renderHeader(),
              /* @__PURE__ */ jsx2(
                "div",
                {
                  className: drawerBody({ className: contentClassName }),
                  style: contentStyle,
                  children
                }
              ),
              footer && /* @__PURE__ */ jsx2("div", { className: drawerFooter({ className: footerClassName }), children: footer })
            ]
          }
        )
      ]
    }
  );
  return createPortal(drawerPortalContent, document.body);
};

// src/Checkbox/index.tsx
import React2, { useEffect as useEffect2, useRef as useRef2 } from "react";

// src/Checkbox/index.variant.ts
import { tv as tv2 } from "tailwind-variants";
var colorStyles2 = {
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
  `
};
var checkboxContainer = tv2({
  base: "flex items-start gap-2",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    disabled: false
  }
});
var checkboxInput = tv2({
  base: [
    "rounded border-2 focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
    "transition-colors duration-200",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "bg-white dark:bg-gray-800"
  ],
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5"
    },
    error: {
      true: "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});
var checkboxLabel = tv2({
  base: "select-none transition-colors duration-200",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer"
    },
    error: {
      true: "text-red-700 dark:text-red-400",
      false: "text-gray-900 dark:text-gray-100"
    }
  },
  defaultVariants: {
    size: "md",
    disabled: false,
    error: false
  }
});
var checkboxDescription = tv2({
  base: "mt-1 transition-colors duration-200",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    },
    error: {
      true: "text-red-600 dark:text-red-400",
      false: "text-gray-500 dark:text-gray-400"
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});
var checkboxErrorMessage = tv2({
  base: "mt-1 text-sm text-red-600 dark:text-red-400 transition-colors duration-200"
});

// src/Checkbox/index.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Checkbox = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      size = "md",
      color = "blue",
      disabled = false,
      indeterminate = false,
      label,
      description,
      error = false,
      errorMessage,
      className = "",
      labelClassName = "",
      checkboxClassName = ""
    } = _b, props = __objRest(_b, [
      "size",
      "color",
      "disabled",
      "indeterminate",
      "label",
      "description",
      "error",
      "errorMessage",
      "className",
      "labelClassName",
      "checkboxClassName"
    ]);
    const inputRef = useRef2(null);
    const mergedRef = ref || inputRef;
    useEffect2(() => {
      if (mergedRef.current) {
        mergedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, mergedRef]);
    const colorStyle = colorStyles2[color];
    const inputClassName = [
      checkboxInput({ size, error }),
      colorStyle,
      checkboxClassName
    ].filter(Boolean).join(" ");
    const containerClassName = checkboxContainer({
      disabled,
      className
    });
    const labelElement = label && /* @__PURE__ */ jsxs3("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx3(
        "label",
        {
          htmlFor: props.id,
          className: checkboxLabel({
            size,
            disabled,
            error,
            className: labelClassName
          }),
          children: label
        }
      ),
      description && /* @__PURE__ */ jsx3(
        "div",
        {
          className: checkboxDescription({
            size,
            error
          }),
          children: description
        }
      ),
      error && errorMessage && /* @__PURE__ */ jsx3("div", { className: checkboxErrorMessage(), children: errorMessage })
    ] });
    return /* @__PURE__ */ jsxs3("div", { className: containerClassName, children: [
      /* @__PURE__ */ jsx3(
        "input",
        __spreadValues({
          ref: mergedRef,
          type: "checkbox",
          disabled,
          className: inputClassName
        }, props)
      ),
      labelElement
    ] });
  }
);
Checkbox.displayName = "Checkbox";
export {
  Button,
  Checkbox,
  Drawer
};
