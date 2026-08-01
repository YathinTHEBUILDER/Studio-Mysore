"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      options,
      placeholder = "Select an option",
      id,
      disabled,
      required,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;
    const helperId = `${selectId}-helper`;
    const errorId = `${selectId}-error`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="text-xs font-medium text-neutral-300 flex items-center gap-1 select-none"
          >
            {label}
            {required && <span className="text-red-400" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative flex items-center w-full">
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              "w-full h-11 pl-4 pr-10 text-sm text-neutral-100 bg-[#111111] border rounded-[10px] appearance-none transition-all outline-none cursor-pointer",
              "border-[#27272A] hover:border-neutral-700",
              "focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#27272A]",
              error && "border-red-500/80 focus:border-red-400 focus:ring-red-500/20",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-neutral-900 text-neutral-500">
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className="bg-[#111111] text-neutral-100 py-1"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 pointer-events-none text-neutral-400 flex items-center">
            <ChevronDown className="h-4 w-4 shrink-0" />
          </div>
        </div>
        {error ? (
          <p id={errorId} className="text-xs text-red-400 font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-neutral-400">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
