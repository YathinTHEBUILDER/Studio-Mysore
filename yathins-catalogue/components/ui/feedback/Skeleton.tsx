"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "rounded",
  ...props
}) => {
  const variantStyles = {
    text: "h-4 w-full rounded-[6px]",
    circular: "rounded-full shrink-0",
    rectangular: "rounded-none w-full",
    rounded: "rounded-[10px] w-full",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse bg-neutral-900/80 border border-neutral-800/40 select-none pointer-events-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
};

Skeleton.displayName = "Skeleton";
