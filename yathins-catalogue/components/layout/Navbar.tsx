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
 * per 05-motion-system.md & 06-ui-system.md specifications.
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
            ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-md shadow-black/30 py-3"
            : "bg-transparent border-b border-transparent py-5",
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
              className="lg:hidden p-2.5 rounded-lg bg-surface hover:bg-surface-elevated text-text-primary border border-border/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
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
