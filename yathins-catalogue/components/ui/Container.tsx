import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Container — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Responsive layout container supporting four standard widths with
 * consistent horizontal padding (20px mobile / 32px tablet / 48px desktop).
 */

const containerVariants = cva(
  "w-full mx-auto transition-all duration-quick ease-smooth-out",
  {
    variants: {
      variant: {
        default: "max-w-[1100px]",
        narrow: "max-w-[680px]",
        wide: "max-w-[1400px]",
        full: "max-w-full",
      },
      padded: {
        true: "px-6 md:px-10 lg:px-16",
        false: "px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padded: true,
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /** HTML element or custom React component to render as (default: "div") */
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, padded, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ variant, padded, className }))}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
