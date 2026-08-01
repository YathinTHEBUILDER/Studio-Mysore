"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0 to 100
  max?: number;
  label?: string;
  showValueText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      label,
      showValueText = false,
      size = "md",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
    const shouldReduceMotion = useReducedMotion();

    const heights = {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
    };

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {(label || showValueText) && (
          <div className="flex justify-between items-center text-xs text-neutral-400 font-medium">
            {label && <span>{label}</span>}
            {showValueText && <span className="font-mono">{Math.round(percentage)}%</span>}
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label || "Progress bar"}
          className={cn(
            "w-full bg-[#18181B] border border-[#27272A] rounded-full overflow-hidden p-0.5",
            heights[size],
            className
          )}
          {...props}
        >
          <m.div
            className="h-full bg-gradient-to-r from-neutral-300 to-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
