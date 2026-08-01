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
 * Designed according to 03-brand-principles.md and 04-visual-design-system.md:
 * Crisp typography, subtle metallic highlight accent, and interactive hover state.
 */
export const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center gap-2.5 outline-none rounded-sm transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label={`${siteConfig.name} - Home`}
    >
      {/* Studio Mysore Monogram Icon Badge */}
      <m.div
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-border/80 text-text-primary shadow-sm group-hover:border-primary/50 group-hover:bg-surface-elevated transition-colors duration-300"
      >
        <span className="font-display font-bold text-sm leading-none tracking-tight text-white group-hover:text-primary transition-colors">
          M
        </span>
        {/* Subtle accent glow line on top edge */}
        <div className="absolute inset-x-1 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </m.div>

      {/* Brand Text Stack */}
      <div className="flex flex-col">
        <span className="font-display text-sm font-semibold tracking-tight text-text-primary group-hover:text-white transition-colors duration-200">
          {siteConfig.name}
        </span>
        <span className="text-[10px] font-medium tracking-wider text-text-tertiary uppercase -mt-0.5 group-hover:text-text-secondary transition-colors duration-200">
          Catalogue
        </span>
      </div>
    </Link>
  );
};

Logo.displayName = "Logo";
