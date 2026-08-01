"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  maxLength?: number;
  showCharacterCount?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      id,
      maxLength,
      showCharacterCount = false,
      value,
      defaultValue,
      onChange,
      disabled,
      required,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;

    const [charCount, setCharCount] = React.useState<number>(() => {
      if (typeof value === "string") return value.length;
      if (typeof defaultValue === "string") return defaultValue.length;
      return 0;
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) onChange(e);
    };

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <div className="flex justify-between items-center">
          {label && (
            <label
              htmlFor={textareaId}
              className="text-xs font-medium text-neutral-300 flex items-center gap-1 select-none"
            >
              {label}
              {required && <span className="text-red-400" aria-hidden="true">*</span>}
            </label>
          )}
          {showCharacterCount && maxLength && (
            <span className="text-xs text-neutral-500 font-mono">
              {charCount}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 bg-[#111111] border rounded-[10px] transition-all outline-none resize-y min-h-[100px]",
            "border-[#27272A] hover:border-neutral-700",
            "focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#27272A]",
            error && "border-red-500/80 focus:border-red-400 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
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

Textarea.displayName = "Textarea";
