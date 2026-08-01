"use client";

import * as React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_SCROLL_THRESHOLD } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
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
 * Implements transparent-to-glassmorphism transition upon scrolling 50px
 */
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > NAV_SCROLL_THRESHOLD);
  });

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/50 py-3.5"
            : "bg-transparent border-b border-transparent py-6",
          className
        )}
      >
        <Container variant="wide" className="flex items-center justify-between">
          {/* Logo Brand Identifier */}
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks orientation="horizontal" />
          </div>

          {/* Desktop WhatsApp Conversion CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <WhatsAppCTA className="hidden sm:inline-flex" />

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              aria-label="Open mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Overlay */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

Navbar.displayName = "Navbar";

