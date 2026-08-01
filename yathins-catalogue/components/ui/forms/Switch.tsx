"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/tokens/transitions";

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  description?: string;
  id?: string;
  className?: string;
  ariaLabel?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label,
  description,
  id,
  className,
  ariaLabel,
}) => {
  const generatedId = React.useId();
  const switchId = id || generatedId;
  const shouldReduceMotion = useReducedMotion();

  const isControlled = checked !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] = React.useState<boolean>(
    defaultChecked
  );
  const isChecked = isControlled ? checked : uncontrolledChecked;

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) {
      setUncontrolledChecked(next);
    }
    if (onCheckedChange) onCheckedChange(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={cn("inline-flex items-start gap-3 select-none", className)}>
      <button
        type="button"
        role="switch"
        id={switchId}
        aria-checked={isChecked}
        aria-label={ariaLabel || (typeof label === "string" ? label : undefined)}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full p-0.5 border border-[#27272A] transition-colors outline-none",
          "focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
          isChecked ? "bg-neutral-100 border-neutral-100" : "bg-[#111111]",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <m.span
          layout={!shouldReduceMotion}
          transition={springs.snappy}
          animate={{
            x: isChecked ? 20 : 0,
          }}
          className={cn(
            "pointer-events-none inline-block h-4.5 w-4.5 rounded-full shadow-md transition-colors",
            isChecked ? "bg-neutral-950" : "bg-neutral-400"
          )}
        />
      </button>
      {(label || description) && (
        <label
          htmlFor={switchId}
          onClick={toggle}
          className="flex flex-col gap-0.5 cursor-pointer"
        >
          {label && (
            <span className="text-sm font-medium text-neutral-200">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-neutral-400 font-normal">
              {description}
            </span>
          )}
        </label>
      )}
    </div>
  );
};

Switch.displayName = "Switch";
