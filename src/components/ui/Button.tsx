"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "gradient" | "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  gradient:
    "bg-gradient-to-r from-accent to-accent-cyan text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:brightness-110",
  solid:
    "bg-accent text-white hover:bg-accent/90",
  outline:
    "border border-border text-text-primary hover:border-accent hover:text-accent",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3 text-base gap-2.5",
};

export function Button({
  variant = "solid",
  size = "md",
  iconLeft,
  iconRight,
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {iconLeft}
        {children}
        {iconRight}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
