"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  label = "Loading...",
  className,
  ...props
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <div
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center text-neutral-300", className)}
      {...props}
    >
      <Loader2 className={cn("animate-spin text-current shrink-0", sizes[size])} />
      <span className="sr-only">{label}</span>
    </div>
  );
};

LoadingSpinner.displayName = "LoadingSpinner";
