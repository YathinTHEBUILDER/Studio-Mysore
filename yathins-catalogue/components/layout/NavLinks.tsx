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
 * Implements smooth sliding active indicator using Framer Motion layoutId="activeNav"
 */
export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onLinkClick,
  orientation = "horizontal",
}) => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = React.useState<string>("");

  React.useEffect(() => {
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
        isHorizontal ? "items-center gap-1.5" : "flex-col items-start gap-2 w-full",
        className
      )}
    >
      {NAV_LINKS.map((link: NavLink) => {
        const isActive =
          pathname === link.href ||
          (link.href === "/experiences" && pathname.startsWith("/experiences")) ||
          (activeHash !== "" && activeHash === link.href.replace("/", ""));

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              setActiveHash(link.href.replace("/", ""));
              if (onLinkClick) onLinkClick();
            }}
            className={cn(
              "relative px-4 py-2 text-xs uppercase tracking-widest font-mono font-medium transition-colors duration-200 outline-none rounded-lg group focus-visible:ring-2 focus-visible:ring-zinc-400",
              isHorizontal
                ? "inline-flex items-center"
                : "flex w-full items-center justify-between text-sm py-2.5",
              isActive
                ? "text-white"
                : "text-zinc-400 hover:text-zinc-200"
            )}
          >
            <span className="relative z-10">{link.label}</span>

            {/* Active Pill Indicator for Desktop Nav */}
            {isHorizontal && isActive && (
              <m.div
                layoutId="activeNav"
                className="absolute inset-0 rounded-lg bg-zinc-800/80 border border-zinc-700/60"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                }}
              />
            )}

            {/* Active Indicator for Mobile Nav */}
            {!isHorizontal && isActive && (
              <m.div
                layoutId="activeNavMobile"
                className="w-1.5 h-5 bg-zinc-200 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
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

