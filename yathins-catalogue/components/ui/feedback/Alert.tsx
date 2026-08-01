"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export type AlertVariant = "default" | "success" | "warning" | "error";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  icon?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, children, icon, ...props }, ref) => {
    const variantStyles = {
      default: "bg-[#18181B] border-[#27272A] text-neutral-200",
      success: "bg-green-950/30 border-green-800/40 text-green-200",
      warning: "bg-amber-950/30 border-amber-800/40 text-amber-200",
      error: "bg-red-950/30 border-red-800/40 text-red-200",
    };

    const defaultIcons = {
      default: <Info className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />,
      success: <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />,
      warning: <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />,
      error: <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />,
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "w-full p-4 rounded-[12px] border flex items-start gap-3 transition-colors text-left",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {icon || defaultIcons[variant]}
        <div className="flex-1 text-sm">
          {title && <h5 className="font-medium text-neutral-100 mb-1 leading-snug">{title}</h5>}
          {children && <div className="text-xs text-neutral-300 leading-relaxed">{children}</div>}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";
