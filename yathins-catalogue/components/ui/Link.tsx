import * as React from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Link — Studio Mysore Design System
 *
 * Source of truth: 04-visual-design-system.md & 06-ui-system.md
 *
 * Accessible link component supporting internal Next.js client routing
 * and external links with an optional animated underline hover effect.
 */

const linkVariants = cva(
  "inline-flex items-center font-body text-text-primary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm transition-colors duration-quick",
  {
    variants: {
      underline: {
        true: "relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-text-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-quick after:ease-smooth-out",
        false: "",
      },
    },
    defaultVariants: {
      underline: true,
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  /** Target URL path or external href */
  href: string;
  /** Explicit link type: internal routing vs external web address */
  variant?: "internal" | "external";
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, variant, underline = true, children, ...props }, ref) => {
    // Automatically determine external mode if href starts with http/https
    const isExternal = variant === "external" || href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(linkVariants({ underline, className }))}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(linkVariants({ underline, className }))}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
