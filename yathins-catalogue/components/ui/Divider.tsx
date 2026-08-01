import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Divider — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Minimal divider component designed specifically for dark-first interfaces.
 */

const dividerVariants = cva("shrink-0 border-0 bg-border transition-colors duration-quick", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
    variant: {
      default: "bg-border",           // #27272A
      subtle: "bg-border/40",        // Subtler separator
      accent: "bg-text-secondary/20", // Slightly higher contrast
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  as?: React.ElementType;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", variant, as, ...props }, ref) => {
    const Component = as || (orientation === "horizontal" ? "hr" : "div");

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
