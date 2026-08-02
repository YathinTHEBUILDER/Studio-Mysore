"use client";

import * as React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { MobileDrawer } from "./MobileDrawer";

export interface NavbarProps {
  className?: string;
}

/**
 * Navbar — Primary Persistent Header Component
 *
 * Specifications:
 * - Desktop: Height 72px, Max Width 1480px, Horizontal Padding 40px, Vertical Padding 16px
 * - Position: Fixed, Top 24px, Centered horizontally
 * - Grid layout: 1fr auto 1fr (Navigation remains perfectly centered regardless of logo width)
 * - Scroll State (> 60px): Floating capsule with rgba(8,8,8,0.72) background, 24px backdrop blur, 1px solid rgba(255,255,255,0.08) border, 450ms duration, power3.out ease
 * - Mobile: MENU + trigger opening full-screen overlay
 */
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  return (
    <>
      <header
        className={cn(
          "fixed top-[24px] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] max-w-[1480px] h-[72px] px-6 md:px-[40px] py-[16px] rounded-[999px] transition-all duration-[450ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] js-navbar select-none",
          isScrolled
            ? "bg-[rgba(8,8,8,0.72)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] shadow-2xl shadow-black/60"
            : "bg-transparent border border-transparent",
          className
        )}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full h-full">
          {/* Logo (Left) */}
          <div className="flex items-center justify-start">
            <Logo />
          </div>

          {/* Navigation Links (Center) */}
          <div className="hidden lg:flex items-center justify-center">
            <NavLinks orientation="horizontal" />
          </div>

          {/* CTA & Mobile Menu Trigger (Right) */}
          <div className="flex items-center justify-end gap-4">
            <WhatsAppCTA className="hidden md:inline-flex" />

            {/* Mobile Trigger: MENU + */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden font-['Inter',var(--font-inter),sans-serif] text-[14px] font-medium text-white opacity-80 hover:opacity-100 uppercase tracking-widest outline-none py-2 px-1 transition-opacity"
              aria-label="Open mobile menu"
            >
              MENU +
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

Navbar.displayName = "Navbar";


