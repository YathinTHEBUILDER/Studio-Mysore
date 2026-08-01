"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  active = false,
  onRemove,
  onClick,
  disabled = false,
  icon,
  className,
  ...props
}) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all select-none border",
        onClick && !disabled && "cursor-pointer active:scale-95",
        active
          ? "bg-neutral-100 text-neutral-950 border-neutral-100 shadow-sm font-semibold"
          : "bg-[#111111] text-neutral-300 border-[#27272A] hover:bg-neutral-900 hover:border-neutral-700",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onRemove();
          }}
          aria-label="Remove chip"
          className={cn(
            "p-0.5 rounded-full hover:bg-black/20 transition-colors ml-0.5",
            active ? "text-neutral-950" : "text-neutral-400 hover:text-white"
          )}
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};

Chip.displayName = "Chip";
