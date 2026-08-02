"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";

export interface WhatsAppCTAProps {
  className?: string;
  variant?: "primary" | "ghost" | "compact";
  customMessage?: string;
  onClick?: () => void;
}

/**
 * WhatsAppCTA — Direct Conversion Action Button
 *
 * Designed with Studio Mysore dark-first editorial aesthetic:
 * Sleek monochromatic border, subtle emerald icon accent, and refined typography.
 */
export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  className,
  variant = "primary",
  customMessage,
  onClick,
}) => {
  const href = buildWhatsAppUrl(customMessage);

  if (variant === "compact") {
    return (
      <m.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "inline-flex items-center justify-center p-2.5 rounded-full bg-zinc-900 text-emerald-400 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-4.5 w-4.5 fill-current" />
      </m.a>
    );
  }

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 px-6 py-3 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] rounded-full transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 shadow-lg shadow-black/40 hover:border-zinc-500/80"
          : "bg-transparent hover:bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-zinc-600",
        className
      )}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-4 w-4 fill-emerald-400 shrink-0" />
      <span>Chat on WhatsApp</span>
    </m.a>
  );
};

WhatsAppCTA.displayName = "WhatsAppCTA";

/** Authentic WhatsApp Brand Icon SVG */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.926 0-3.71-.512-5.253-1.408l-.377-.219-3.904 1.024 1.042-3.805-.246-.392a10.126 10.126 0 0 1-1.554-5.36c0-5.59 4.549-10.138 10.14-10.138 2.709 0 5.255 1.056 7.17 2.972a10.07 10.07 0 0 1 2.969 7.168c0 5.592-4.549 10.14-10.14 10.14m0-21.843C5.467 0 0 5.467 0 12.21c0 2.155.56 4.258 1.626 6.111L0 24l5.811-1.524A12.164 12.164 0 0 0 12.051 24c6.744 0 12.211-5.467 12.211-12.21 0-3.264-1.272-6.332-3.579-8.64A12.13 12.13 0 0 0 12.051 0" />
    </svg>
  );
}

