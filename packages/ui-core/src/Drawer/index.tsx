import type React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  drawerBody,
  drawerCloseButton,
  drawerContainer,
  drawerFooter,
  drawerHeader,
  drawerOverlay,
  drawerTitle,
} from "./index.variant";
import type { DrawerProps } from "./type";

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

  // 渲染关闭图标
  const renderCloseIcon = () => {
    if (!closeIcon) return null;

    return (
      <button
        type="button"
        onClick={onClose}
        className={drawerCloseButton()}
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
    );
  };

  // 渲染标题栏
  const renderHeader = () => {
    if (!title && !closeIcon) return null;

    return (
      <div className={drawerHeader()}>
        {title && (
          <h2 id="drawer-title" className={drawerTitle()}>
            {title}
          </h2>
        )}
        {renderCloseIcon()}
      </div>
    );
  };

  const drawerPortalContent = (
    <div
      className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "drawer-title" : undefined}
    >
      {/* 遮罩层 */}
      {mask && (
        <div
          className={drawerOverlay({ open })}
          onClick={maskClosable ? onClose : undefined}
        />
      )}

      {/* 抽屉容器 */}
      <div
        ref={drawerRef}
        className={drawerContainer({ placement, size, open, className })}
        style={style}
      >
        {renderHeader()}

        <div
          className={drawerBody({ className: contentClassName })}
          style={contentStyle}
        >
          {children}
        </div>

        {footer && (
          <div className={drawerFooter({ className: footerClassName })}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(drawerPortalContent, document.body);
};
export default Drawer;
