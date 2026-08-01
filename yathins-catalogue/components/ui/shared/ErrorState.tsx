"use client";

import * as React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "../buttons/Button";
import { cn } from "@/lib/utils";

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  code?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Something went wrong",
  description = "An unexpected error occurred while loading this section. Please try again.",
  code,
  onRetry,
  retryLabel = "Try Again",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-[16px] bg-red-950/10 border border-red-900/30 my-4 text-neutral-100",
        className
      )}
      {...props}
    >
      <div className="mb-4 p-3 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 shrink-0">
        <AlertCircle className="w-6 h-6" />
      </div>
      {code && (
        <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest bg-red-950/50 px-2 py-0.5 rounded border border-red-800/40 mb-2 select-none">
          ERR_{code}
        </span>
      )}
      <h4 className="text-base font-semibold text-neutral-100 tracking-tight mb-1.5">
        {title}
      </h4>
      <p className="text-xs text-neutral-400 max-w-md leading-relaxed mb-6">
        {description}
      </p>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
        >
          {retryLabel}
        </Button>
      )}
    </div>
  );
};

ErrorState.displayName = "ErrorState";
