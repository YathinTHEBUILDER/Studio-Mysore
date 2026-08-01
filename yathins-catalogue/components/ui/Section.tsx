import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Section — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Reusable section wrapper enforcing vertical rhythm and spacing scale
 * across all showcase pages.
 */

const sectionVariants = cva("relative w-full", {
  variants: {
    spacing: {
      default: "py-16 md:py-24", // 64px mobile / 96px desktop
      compact: "py-8 md:py-12",   // 32px mobile / 48px desktop
      generous: "py-24 md:py-32", // 96px mobile / 128px desktop
      none: "py-0",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /** Custom element to render as (default: "section") */
  as?: React.ElementType;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, as: Component = "section", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({ spacing, className }))}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";
