var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
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
var variantStyles = {
  primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
  secondary: `bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500`,
  outline: `bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500`,
  ghost: `bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500`,
};
var sizeStyles = {
  sm: `text-sm px-3 py-1.5 rounded-md`,
  md: `text-base px-4 py-2 rounded-md`,
  lg: `text-lg px-6 py-3 rounded-lg`,
};

// src/Button/index.tsx
import { jsx } from "react/jsx-runtime";

var Button = React.forwardRef((_a, ref) => {
  var _b = _a,
    {
      variant = "primary",
      size = "md",
      disabled = false,
      fullWidth = false,
      className = "",
      children,
    } = _b,
    props = __objRest(_b, [
      "variant",
      "size",
      "disabled",
      "fullWidth",
      "className",
      "children",
    ]);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(
      __spreadValues(
        {
          ref,
          disabled,
          className: `
          inline-flex items-center justify-center font-medium transition-colors
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? "w-full" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${className}
        `,
        },
        props,
      ),
      {
        children,
      },
    ),
  );
});
Button.displayName = "Button";

// src/Drawer/index.tsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// src/Drawer/index.variant.ts
var placementStyles = {
  left: "left-0 top-0 bottom-0 h-full",
  right: "right-0 top-0 bottom-0 h-full",
  top: "top-0 left-0 right-0 w-full",
  bottom: "bottom-0 left-0 right-0 w-full",
};
var transformStyles = {
  left: "transform -translate-x-full",
  right: "transform translate-x-full",
  top: "transform -translate-y-full",
  bottom: "transform translate-y-full",
};
var sizeStyles2 = {
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

// src/Drawer/index.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";

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
  footerClassName = "",
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
      if (
        maskClosable &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
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
  const drawerContent = /* @__PURE__ */ jsxs("div", {
    className: `fixed inset-0 z-50 ${open ? "visible" : "invisible"}`,
    "aria-hidden": !open,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? "drawer-title" : void 0,
    children: [
      mask &&
        /* @__PURE__ */ jsx2("div", {
          className: `absolute inset-0 bg-black transition-opacity duration-300 ${open ? "opacity-50" : "opacity-0"}`,
          onClick: maskClosable ? onClose : void 0,
        }),
      /* @__PURE__ */ jsxs("div", {
        ref: drawerRef,
        className: `
          absolute bg-white shadow-lg transition-transform duration-300 ease-in-out
          ${placementStyles[placement]}
          ${sizeStyles2[placement][size]}
          ${open ? "" : transformStyles[placement]}
          ${className}
        `,
        style,
        children: [
          (title || closeIcon) &&
            /* @__PURE__ */ jsxs("div", {
              className:
                "flex items-center justify-between p-4 border-b border-gray-200",
              children: [
                title &&
                  /* @__PURE__ */ jsx2("h2", {
                    id: "drawer-title",
                    className: "text-lg font-medium",
                    children: title,
                  }),
                closeIcon &&
                  /* @__PURE__ */ jsx2("button", {
                    type: "button",
                    onClick: onClose,
                    className:
                      "p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none",
                    "aria-label": "\u5173\u95ED",
                    children:
                      closeIcon === true
                        ? /* @__PURE__ */ jsx2("svg", {
                            className: "h-6 w-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /* @__PURE__ */ jsx2("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M6 18L18 6M6 6l12 12",
                            }),
                          })
                        : closeIcon,
                  }),
              ],
            }),
          /* @__PURE__ */ jsx2("div", {
            className: `p-4 overflow-y-auto flex-1 ${contentClassName}`,
            style: contentStyle,
            children,
          }),
          footer &&
            /* @__PURE__ */ jsx2("div", {
              className: `border-t border-gray-200 p-4 ${footerClassName}`,
              children: footer,
            }),
        ],
      }),
    ],
  });
  return createPortal(drawerContent, document.body);
};
export { Button, Drawer };
