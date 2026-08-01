"use client";

import * as React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Logo — Studio Mysore / Yathin's Catalogue Brand Identifier
 *
 * Clean, editorial typography with subtle monogram badge.
 */
export const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center gap-3 outline-none transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label={`${siteConfig.name} — Home`}
    >
      {/* Studio Mysore Monogram Icon Badge */}
      <m.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-text-primary shadow-sm group-hover:border-zinc-700 group-hover:bg-zinc-800 transition-colors duration-200"
      >
        <span className="font-display font-semibold text-xs text-white tracking-tight">
          M
        </span>
      </m.div>

      {/* Brand Text Stack */}
      <div className="flex flex-col">
        <span className="font-display text-sm font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors duration-200">
          {siteConfig.name}
        </span>
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase -mt-0.5 group-hover:text-zinc-400 transition-colors duration-200">
          Catalogue
        </span>
      </div>
    </Link>
  );
};

Logo.displayName = "Logo";

