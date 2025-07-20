import React, { useEffect, useRef } from "react";
import {
  checkboxContainer,
  checkboxDescription,
  checkboxErrorMessage,
  checkboxInput,
  checkboxLabel,
  colorStyles,
} from "./index.variant";
import type { CheckboxColor, CheckboxProps, CheckboxSize } from "./type";

export * from "./type";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
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
      checkboxClassName = "",
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = (ref as React.RefObject<HTMLInputElement>) || inputRef;

    // 处理 indeterminate 状态
    useEffect(() => {
      if (mergedRef.current) {
        mergedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, mergedRef]);

    // 获取颜色样式
    const colorStyle = colorStyles[color as CheckboxColor];

    // 构建 checkbox input 的完整样式
    const inputClassName = [
      checkboxInput({ size: size as CheckboxSize, error }),
      colorStyle,
      checkboxClassName,
    ]
      .filter(Boolean)
      .join(" ");

    const containerClassName = checkboxContainer({
      disabled,
      className,
    });

    const labelElement = label && (
      <div className="flex-1">
        <label
          htmlFor={props.id}
          className={checkboxLabel({
            size: size as CheckboxSize,
            disabled,
            error,
            className: labelClassName,
          })}
        >
          {label}
        </label>
        {description && (
          <div
            className={checkboxDescription({
              size: size as CheckboxSize,
              error,
            })}
          >
            {description}
          </div>
        )}
        {error && errorMessage && (
          <div className={checkboxErrorMessage()}>{errorMessage}</div>
        )}
      </div>
    );

    return (
      <div className={containerClassName}>
        <input
          ref={mergedRef}
          type="checkbox"
          disabled={disabled}
          className={inputClassName}
          {...props}
        />
        {labelElement}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
