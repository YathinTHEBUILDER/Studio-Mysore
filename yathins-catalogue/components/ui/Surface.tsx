import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Surface — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Reusable container providing visual hierarchy and depth across layers
 * (Background #09090B -> Surface #111111 -> Elevated #18181B).
 */

const surfaceVariants = cva("relative border transition-all duration-quick ease-smooth-out", {
  variants: {
    variant: {
      default: "bg-surface border-border text-text-primary",
      elevated: "bg-surface-elevated border-border text-text-primary shadow-lg shadow-black/40",
      outlined: "bg-transparent border-border text-text-primary",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8 md:p-10",
    },
    radius: {
      sm: "rounded-sm", // 10px
      md: "rounded-md", // 16px
      lg: "rounded-lg", // 24px
      none: "rounded-none",
    },
    interactive: {
      true: "hover:-translate-y-1 hover:border-text-secondary/40 cursor-pointer",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    radius: "md",
    interactive: false,
  },
});

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {
  as?: React.ElementType;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, variant, padding, radius, interactive, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(surfaceVariants({ variant, padding, radius, interactive, className }))}
        {...props}
      />
    );
  }
);

Surface.displayName = "Surface";
