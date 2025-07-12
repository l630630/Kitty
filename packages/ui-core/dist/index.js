var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (const key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Drawer: () => Drawer,
});
module.exports = __toCommonJS(src_exports);

// src/Button/index.tsx
var import_react = __toESM(require("react"));

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
var import_jsx_runtime = require("react/jsx-runtime");
var Button = import_react.default.forwardRef((_a, ref) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_react2 = require("react");
var import_react_dom = require("react-dom");

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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const bodyRef = (0, import_react2.useRef)(null);
  const drawerRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
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
  (0, import_react2.useEffect)(() => {
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
  (0, import_react2.useEffect)(() => {
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
  const drawerContent = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
    className: `fixed inset-0 z-50 ${open ? "visible" : "invisible"}`,
    "aria-hidden": !open,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? "drawer-title" : void 0,
    children: [
      mask &&
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
          className: `absolute inset-0 bg-black transition-opacity duration-300 ${open ? "opacity-50" : "opacity-0"}`,
          onClick: maskClosable ? onClose : void 0,
        }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
              className:
                "flex items-center justify-between p-4 border-b border-gray-200",
              children: [
                title &&
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", {
                    id: "drawer-title",
                    className: "text-lg font-medium",
                    children: title,
                  }),
                closeIcon &&
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", {
                    type: "button",
                    onClick: onClose,
                    className:
                      "p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none",
                    "aria-label": "\u5173\u95ED",
                    children:
                      closeIcon === true
                        ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", {
                            className: "h-6 w-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime2.jsx)("path", {
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
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
            className: `p-4 overflow-y-auto flex-1 ${contentClassName}`,
            style: contentStyle,
            children,
          }),
          footer &&
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
              className: `border-t border-gray-200 p-4 ${footerClassName}`,
              children: footer,
            }),
        ],
      }),
    ],
  });
  return (0, import_react_dom.createPortal)(drawerContent, document.body);
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    Button,
    Drawer,
  });
