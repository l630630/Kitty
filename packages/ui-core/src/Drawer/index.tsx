import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { DrawerProps } from "./type";
import { placementStyles, transformStyles, sizeStyles } from "./index.variant";

export * from "./type";

export const Drawer: React.FC<DrawerProps> = ({
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
  const bodyRef = useRef<HTMLElement | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // 处理ESC键关闭
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [open, onClose]);

  // 处理点击外部关闭
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        maskClosable &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
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

  // 处理滚动锁定
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

  // 若不在浏览器环境，直接返回null
  if (typeof document === "undefined") {
    return null;
  }

  const drawerContent = (
    <div
      className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "drawer-title" : undefined}
    >
      {mask && (
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            open ? "opacity-60" : "opacity-0"
          }`}
          onClick={maskClosable ? onClose : undefined}
        />
      )}

      {/* 抽屉容器 */}
      <div
        ref={drawerRef}
        className={`
          absolute bg-white shadow-lg transition-transform duration-300 ease-in-out
          ${placementStyles[placement]}
          ${sizeStyles[placement][size]}
          ${open ? "" : transformStyles[placement]}
          ${className}
        `}
        style={style}
      >
        {(title || closeIcon) && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {title && (
              <h2 id="drawer-title" className="text-lg font-medium">
                {title}
              </h2>
            )}
            {closeIcon && (
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-label="关闭"
              >
                {closeIcon === true ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  closeIcon
                )}
              </button>
            )}
          </div>
        )}

        <div
          className={`p-4 overflow-y-auto flex-1 ${contentClassName}`}
          style={contentStyle}
        >
          {children}
        </div>

        {footer && (
          <div
            className={`border-t border-gray-200 p-4 ${footerClassName}`}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
};

export default Drawer; 