import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Stack — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Vertical layout utility managing vertical spacing and alignment between child elements.
 */

const stackVariants = cva("flex flex-col", {
  variants: {
    space: {
      1: "gap-1",   // 4px
      2: "gap-2",   // 8px
      3: "gap-3",   // 12px
      4: "gap-4",   // 16px
      6: "gap-6",   // 24px
      8: "gap-8",   // 32px
      12: "gap-12", // 48px
      16: "gap-16", // 64px
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    space: 4,
    align: "stretch",
    justify: "start",
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  as?: React.ElementType;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, space, align, justify, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(stackVariants({ space, align, justify, className }))}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";
