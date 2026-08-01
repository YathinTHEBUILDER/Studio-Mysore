"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No items found",
  description = "There is currently no data or items to display in this view.",
  action,
  icon,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-[16px] bg-[#111111] border border-[#27272A]/80 my-4",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 shrink-0">
          {icon}
        </div>
      )}
      <h4 className="text-base font-semibold text-neutral-100 tracking-tight mb-1.5">
        {title}
      </h4>
      <p className="text-xs text-neutral-400 max-w-md leading-relaxed mb-6">
        {description}
      </p>
      {action && <div className="inline-flex items-center">{action}</div>}
    </div>
  );
};

EmptyState.displayName = "EmptyState";
