import * as React from "react";
import { cn } from "@/lib/utils";
import { typeClasses } from "@/lib/typography";

/**
 * Typography Components — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & lib/typography.ts
 *
 * Primitives enforcing typography hierarchy and font usage across the catalogue:
 *  - Display (Clash Display font)
 *  - Heading (Clash Display font)
 *  - Lead    (Inter font, lead copy)
 *  - Body    (Inter font, standard body)
 *  - Caption (Inter font, metadata)
 *  - Muted   (Inter font, muted supporting text)
 */

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Override the underlying HTML element rendered (e.g. "h1", "h2", "p", "span") */
  as?: React.ElementType;
}

export interface DisplayProps extends TypographyProps {
  /** Size variant: "xl" for hero headlines, "l" for major section titles */
  size?: "xl" | "l";
}

/** Display Typography Primitive (Clash Display) */
export const Display = React.forwardRef<HTMLElement, DisplayProps>(
  ({ className, size = "xl", as, ...props }, ref) => {
    const Component = as || (size === "xl" ? "h1" : "h2");
    const classKey = size === "xl" ? "display-xl" : "display-l";
    return (
      <Component
        ref={ref}
        className={cn(typeClasses[classKey], "text-text-primary", className)}
        {...props}
      />
    );
  }
);
Display.displayName = "Display";

/** Heading Typography Primitive (Clash Display) */
export const Heading = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as: Component = "h2", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typeClasses.heading, "text-text-primary", className)}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

/** Lead Typography Primitive (Inter) */
export const Lead = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typeClasses["body-lg"], "text-text-secondary", className)}
        {...props}
      />
    );
  }
);
Lead.displayName = "Lead";

/** Body Typography Primitive (Inter) */
export const Body = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typeClasses.body, "text-text-secondary", className)}
        {...props}
      />
    );
  }
);
Body.displayName = "Body";

/** Caption Typography Primitive (Inter) */
export const Caption = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typeClasses.caption, "text-text-muted", className)}
        {...props}
      />
    );
  }
);
Caption.displayName = "Caption";

/** Muted Typography Primitive (Inter) */
export const Muted = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typeClasses.caption, "text-text-muted/70", className)}
        {...props}
      />
    );
  }
);
Muted.displayName = "Muted";
