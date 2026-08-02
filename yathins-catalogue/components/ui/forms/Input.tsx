"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { errorShake } from "@/lib/animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const shouldReduceMotion = useReducedMotion();

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-neutral-300 flex items-center gap-1 select-none transition-colors"
          >
            {label}
            {required && <span className="text-red-400" aria-hidden="true">*</span>}
          </label>
        )}
        <m.div
          variants={errorShake}
          animate={error && !shouldReduceMotion ? "shake" : "idle"}
          className="relative flex items-center w-full"
        >
          {leftIcon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-neutral-400 transition-colors group-focus-within:text-neutral-200">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            id={inputId}
            ref={ref}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              "w-full h-11 px-4 text-sm text-neutral-100 placeholder:text-neutral-500 bg-[#111111] border rounded-[10px] transition-all outline-none",
              "border-[#27272A] hover:border-neutral-700",
              "focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#27272A]",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500/80 focus:border-red-400 focus:ring-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.15)]",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 flex items-center text-neutral-400">
              {rightIcon}
            </div>
          )}
        </m.div>

        <AnimatePresence mode="wait">
          {error ? (
            <m.p
              key="error"
              id={errorId}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-xs text-red-400 font-medium"
            >
              {error}
            </m.p>
          ) : helperText ? (
            <m.p
              key="helper"
              id={helperId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-xs text-neutral-400"
            >
              {helperText}
            </m.p>
          ) : null}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";
