"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";

export interface WhatsAppCTAProps {
  className?: string;
  customMessage?: string;
  onClick?: () => void;
}

/**
 * WhatsAppCTA / Navbar CTA — Primary Conversion Action Button
 *
 * Text: Let's Talk →
 * Height: 56px
 * Padding: 28px
 * Radius: 999px
 * Background: #FFFFFF
 * Text: #000000
 * Hover: Scale 1.03, Arrow translates 4px
 */
export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  className,
  customMessage = "Hi, I'd like to talk about a project.",
  onClick,
}) => {
  const href = buildWhatsAppUrl(customMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 h-[56px] px-[28px] rounded-[999px] bg-[#FFFFFF] text-[#000000] font-['Inter',var(--font-inter),sans-serif] text-[15px] font-medium leading-none transition-all duration-200 ease-out hover:scale-[1.03] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shrink-0 select-none",
        className
      )}
      aria-label="Let's Talk"
    >
      <span>Let's Talk</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[4px]"
      >
        →
      </span>
    </a>
  );
};

WhatsAppCTA.displayName = "WhatsAppCTA";


