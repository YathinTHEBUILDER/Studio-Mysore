"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
 * Font: Inter, Size: 15px, Weight: 500, Gap: 40px
 * Hover: translateY(-2px), Opacity: 0.75 → 1, Duration: 180ms
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
        "flex items-center",
        isHorizontal ? "flex-row gap-[40px]" : "flex-col items-start gap-8 w-full",
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
              "font-['Inter',var(--font-inter),sans-serif] transition-all duration-[180ms] outline-none",
              isHorizontal
                ? "text-[15px] font-medium leading-none text-white opacity-75 hover:opacity-100 hover:-translate-y-[2px]"
                : "text-[36px] sm:text-[48px] font-['Instrument_Sans',var(--font-instrument-sans),sans-serif] font-bold text-white hover:opacity-80 py-2",
              isActive && isHorizontal && "!opacity-100 text-white font-medium"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

NavLinks.displayName = "NavLinks";


