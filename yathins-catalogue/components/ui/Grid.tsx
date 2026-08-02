import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Grid — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Responsive grid wrapper supporting fixed multi-column and auto-fitting grid layouts
 * with mobile stack fallbacks.
 */

const gridVariants = cva("grid w-full", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      "auto-fit": "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
    },
    gap: {
      4: "gap-4",   // 16px
      6: "gap-6",   // 24px
      8: "gap-8 md:gap-10",   // 32px mobile / 40px desktop
      12: "gap-10 md:gap-16", // 40px mobile / 64px desktop
      16: "gap-16 md:gap-20", // 64px mobile / 80px desktop
    },
  },
  defaultVariants: {
    cols: 3,
    gap: 6,
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  as?: React.ElementType;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(gridVariants({ cols, gap, className }))}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";
