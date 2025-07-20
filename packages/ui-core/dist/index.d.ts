import React from 'react';

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "blue" | "green" | "red" | "gray";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
}

declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

type DrawerPlacement = "left" | "right" | "top" | "bottom";
type DrawerSize = "sm" | "md" | "lg" | "full";
interface DrawerProps {
    open: boolean;
    onClose: () => void;
    placement?: DrawerPlacement;
    size?: DrawerSize;
    maskClosable?: boolean;
    mask?: boolean;
    title?: React.ReactNode;
    closeIcon?: boolean | React.ReactNode;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    footer?: React.ReactNode;
    footerClassName?: string;
}

declare const Drawer: React.FC<DrawerProps>;

type CheckboxSize = "sm" | "md" | "lg";
type CheckboxColor = "blue" | "green" | "red" | "gray";
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    size?: CheckboxSize;
    color?: CheckboxColor;
    disabled?: boolean;
    indeterminate?: boolean;
    label?: React.ReactNode;
    description?: React.ReactNode;
    error?: boolean;
    errorMessage?: string;
    className?: string;
    labelClassName?: string;
    checkboxClassName?: string;
}

declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

export { Button, ButtonColor, ButtonProps, ButtonSize, ButtonVariant, Checkbox, CheckboxColor, CheckboxProps, CheckboxSize, Drawer, DrawerPlacement, DrawerProps, DrawerSize };
