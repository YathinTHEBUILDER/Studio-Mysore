"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, disabled, checked, defaultChecked, onChange, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const [isChecked, setIsChecked] = React.useState<boolean>(
      !!(checked ?? defaultChecked)
    );

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(!!checked);
      }
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(e.target.checked);
      }
      if (onChange) onChange(e);
    };

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          "inline-flex items-start gap-3 cursor-pointer select-none group",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={handleChange}
            className="sr-only peer"
            {...props}
          />
          <div
            className={cn(
              "w-5 h-5 rounded-[6px] border border-[#27272A] bg-[#111111] transition-all flex items-center justify-center",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-neutral-950",
              "peer-checked:bg-neutral-100 peer-checked:border-neutral-100 peer-checked:text-neutral-950",
              "group-hover:border-neutral-600"
            )}
          >
            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3] text-neutral-950" aria-hidden="true" />}
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-neutral-400 font-normal">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
