import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Small status indicator badge supporting functional status variants
 * (Default, Success, Warning) with strict WCAG AA contrast ratios.
 */

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-body font-medium transition-colors duration-quick rounded-full tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-surface-elevated text-text-secondary border border-border",
        success: "bg-success/10 text-success border border-success/25",
        warning: "bg-warning/10 text-warning border border-warning/25",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[0.75rem] leading-none",
        md: "px-3 py-1 text-[0.8125rem] leading-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  as?: React.ElementType;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
