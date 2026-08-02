import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Divider — Studio Mysore Hairline & Editorial Separator System
 */

const dividerVariants = cva("shrink-0 transition-colors duration-300", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
    variant: {
      default: "bg-zinc-800/80",
      subtle: "bg-zinc-900/90",
      accent: "bg-zinc-700/60",
      gradient: "bg-gradient-to-r from-transparent via-zinc-800 to-transparent",
      film: "bg-gradient-to-r from-transparent via-zinc-700/80 to-transparent",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "gradient",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  as?: React.ElementType;
  label?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", variant = "gradient", label, as, ...props }, ref) => {
    const Component = as || (orientation === "horizontal" ? "hr" : "div");

    if (label && orientation === "horizontal") {
      return (
        <div className={cn("relative flex items-center justify-center w-full my-6 select-none", className)}>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
          <span className="relative z-10 px-4 py-1 text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-400 bg-zinc-950 border border-zinc-800/80 rounded-full shadow-sm">
            {label}
          </span>
        </div>
      );
    }

    return (
      <Component
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(dividerVariants({ orientation, variant, className }))}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
