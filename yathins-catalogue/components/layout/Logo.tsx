"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Logo — Studio Mysore Pure Typography Brand Identifier
 *
 * Font: Instrument Sans, Weight: 700, Size: 20px, Letter Spacing: -0.03em
 * No icon — typography is the logo.
 */
export const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "inline-flex items-center font-['Instrument_Sans',var(--font-instrument-sans),sans-serif] font-bold text-[20px] tracking-[-0.03em] text-white normal-case leading-none outline-none transition-opacity duration-200 hover:opacity-90 focus-visible:ring-1 focus-visible:ring-white/80",
        className
      )}
      aria-label={`${siteConfig.name} — Home`}
    >
      {siteConfig.name}
    </Link>
  );
};

Logo.displayName = "Logo";


