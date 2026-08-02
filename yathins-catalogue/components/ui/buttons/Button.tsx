"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { m, useReducedMotion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/tokens/transitions";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-[10px] text-sm font-medium transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    "active:opacity-90",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-100 text-neutral-950 hover:bg-white shadow-[0_0_15px_rgba(255,255,255,0.08)] border border-white/20",
        secondary:
          "bg-neutral-900 text-neutral-100 hover:bg-neutral-800 border border-neutral-800",
        ghost:
          "bg-transparent text-neutral-300 hover:bg-neutral-900/60 hover:text-neutral-100",
        outline:
          "bg-transparent text-neutral-100 border border-neutral-700 hover:bg-neutral-900 hover:border-neutral-500",
        whatsapp:
          "bg-[#25D366] text-neutral-950 font-semibold hover:bg-[#20bd5a] shadow-[0_0_20px_rgba(37,211,102,0.2)] border border-[#25D366]/30",
        danger:
          "bg-red-950/80 text-red-200 border border-red-800/60 hover:bg-red-900/80 hover:text-white",
        icon: "bg-transparent text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100 p-0",
      },
      size: {
        sm: "h-9 px-3.5 text-xs gap-1.5 min-h-[36px]",
        md: "h-11 px-5 text-sm gap-2 min-h-[44px]",
        lg: "h-13 px-7 text-base gap-2.5 min-h-[48px]",
      },
      fullWidth: {
        true: "w-full min-w-full justify-center",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"
    >,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  success?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      leftIcon,
      rightIcon,
      loading = false,
      success = false,
      disabled = false,
      asChild = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();
    const isDisabled = disabled || loading;

    const content = (
      <>
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0 text-current" aria-hidden="true" />
        ) : success ? (
          <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
        ) : (
          leftIcon && <span className="shrink-0 inline-flex items-center">{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {!loading && !success && rightIcon && (
          <span className="shrink-0 inline-flex items-center">{rightIcon}</span>
        )}
      </>
    );

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref}
          {...props}
        >
          {content}
        </Slot>
      );
    }

    return (
      <m.button
        ref={ref}
        disabled={isDisabled}
        whileHover={
          isDisabled || shouldReduceMotion ? undefined : { scale: 1.02 }
        }
        whileTap={
          isDisabled || shouldReduceMotion ? undefined : { scale: 0.97 }
        }
        transition={springs.snappy}
        className={cn(
          buttonVariants({ variant, size, fullWidth, className }),
          success && "border-emerald-500/50 text-emerald-300"
        )}
        onClick={isDisabled ? undefined : onClick}
        {...props}
      >
        {content}
      </m.button>
    );
  }
);

Button.displayName = "Button";
