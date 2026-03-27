import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        relative rounded-xl bg-card border border-border p-6
        ${hover ? "transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
