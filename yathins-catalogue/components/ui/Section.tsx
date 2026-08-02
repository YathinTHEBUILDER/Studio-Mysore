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
      default: "py-20 md:py-[120px]", // 80px mobile / 120px desktop
      compact: "py-12 md:py-16",       // 48px mobile / 64px desktop
      generous: "py-[120px] md:py-[160px]", // 120px mobile / 160px desktop
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
