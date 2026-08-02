"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { siteConfig } from "@/lib/site-config";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileDrawer — Full-Screen Luxury Mobile Navigation Overlay
 *
 * Black background, large typography, one navigation item per row, smooth fade and slide transition.
 */
export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  // Lock body scroll when overlay is open
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
        <m.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
          className="fixed inset-0 z-[200] bg-[#000000] text-white flex flex-col justify-between px-8 py-6 sm:px-12 sm:py-8 select-none overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Overlay"
        >
          {/* Top Row: Logo & Close Trigger */}
          <div className="flex items-center justify-between w-full h-[72px]">
            <Logo onClick={onClose} />
            <button
              onClick={onClose}
              className="font-['Inter',var(--font-inter),sans-serif] text-[14px] font-medium text-white opacity-80 hover:opacity-100 uppercase tracking-widest outline-none py-2 px-1 transition-opacity"
              aria-label="Close menu"
            >
              MENU —
            </button>
          </div>

          {/* Center Links: Large Typography, One per row */}
          <div className="my-auto py-8 w-full max-w-[600px] mx-auto">
            <NavLinks orientation="vertical" onLinkClick={onClose} />
          </div>

          {/* Bottom Row: CTA & Metadata */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <WhatsAppCTA className="w-full sm:w-auto" onClick={onClose} />
            <p className="font-['Inter',var(--font-inter),sans-serif] text-[12px] text-zinc-500">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

MobileDrawer.displayName = "MobileDrawer";


