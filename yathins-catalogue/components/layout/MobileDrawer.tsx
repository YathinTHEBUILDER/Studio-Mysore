"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { siteConfig } from "@/lib/site-config";

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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative w-full max-w-xs h-full bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header / Top Row */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800 mb-6">
                <Logo onClick={onClose} />

                {/* Accessible Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <NavLinks orientation="vertical" onLinkClick={onClose} />
            </div>

            {/* Bottom Section with WhatsApp CTA & Tagline */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <WhatsAppCTA className="w-full text-center" onClick={onClose} />

              <p className="text-xs font-mono text-zinc-500 text-center leading-relaxed">
                {siteConfig.name} — {siteConfig.tagline}
              </p>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};

MobileDrawer.displayName = "MobileDrawer";

