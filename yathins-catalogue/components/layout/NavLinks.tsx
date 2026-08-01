"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import type { NavLink } from "@/types";

export interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
  orientation?: "horizontal" | "vertical";
}

/**
 * NavLinks — Desktop & Mobile Navigation Menu Items
 *
 * Implements sliding active line indicator using Framer Motion layoutId="activeNav"
 * per 05-motion-system.md specification.
 */
export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onLinkClick,
  orientation = "horizontal",
}) => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = React.useState<string>("");

  React.useEffect(() => {
    // Keep track of hash in window location for anchor scrolling
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isHorizontal = orientation === "horizontal";

  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        "flex",
        isHorizontal ? "items-center gap-1" : "flex-col items-start gap-2 w-full",
        className
      )}
    >
      {NAV_LINKS.map((link: NavLink) => {
        const isActive =
          pathname === link.href ||
          activeHash === link.href.replace("/", "") ||
          (activeHash === "" && link.href === "/#experiences");

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              setActiveHash(link.href.replace("/", ""));
              if (onLinkClick) onLinkClick();
            }}
            className={cn(
              "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 outline-none rounded-md group focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isHorizontal ? "inline-flex items-center" : "flex w-full items-center justify-between text-base py-2.5",
              isActive
                ? "text-text-primary font-semibold"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            <span className="relative z-10">{link.label}</span>

            {/* Active Indicator for Horizontal Desktop Nav */}
            {isHorizontal && isActive && (
              <m.div
                layoutId="activeNav"
                className="absolute inset-0 rounded-md bg-surface-elevated border border-border/80"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              >
                <div className="absolute bottom-0 inset-x-2 h-[2px] bg-primary rounded-full" />
              </m.div>
            )}

            {/* Indicator for Vertical Mobile Nav */}
            {!isHorizontal && isActive && (
              <m.div
                layoutId="activeNavMobile"
                className="w-1.5 h-6 bg-primary rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

NavLinks.displayName = "NavLinks";
