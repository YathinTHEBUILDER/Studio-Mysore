"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { siteConfig } from "@/lib/site-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { springs } from "@/lib/tokens/transitions";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileDrawer — Accessible Mobile Navigation Drawer
 *
 * Implements spring physics, backdrop blur, and body scroll lock.
 */
export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Lock body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Darkened Backdrop Overlay */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Drawer Content Panel */}
          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={springs.gentle}
            className="relative w-full max-w-xs h-full bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header / Top Row */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6">
                <Logo onClick={onClose} />

                {/* Accessible Close Button */}
                <m.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 rounded-sm text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </m.button>
              </div>

              {/* Publication Tag */}
              <div className="mb-6 px-3 py-1.5 rounded-sm bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                <span>Studio Mysore</span>
                <span>Issue N° 01</span>
              </div>

              {/* Mobile Navigation Links */}
              <NavLinks orientation="vertical" onLinkClick={onClose} />
            </div>

            {/* Bottom Section with WhatsApp CTA & Tagline */}
            <div className="pt-6 border-t border-zinc-800/80 space-y-4">
              <WhatsAppCTA className="w-full text-center" onClick={onClose} />

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Operational • Mysore Studio</span>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};

MobileDrawer.displayName = "MobileDrawer";

