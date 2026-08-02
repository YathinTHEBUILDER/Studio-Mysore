"use client";

import * as React from "react";
import { useLenis } from "@/hooks/useLenis";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";

export interface MobileNavbarProps {
  className?: string;
}

/**
 * MobileNavbar — Dedicated Mobile Navigation Header (lg:hidden)
 *
 * Fixed positioning, Logo + MENU + trigger, Lenis-driven 80px scroll state.
 */
export const MobileNavbar: React.FC<MobileNavbarProps> = ({ className }) => {
  const { lenis } = useLenis();
  const headerRef = React.useRef<HTMLElement>(null);
  const isScrolledRef = React.useRef<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = (scrollPos: number) => {
      const scrolled = scrollPos > 80;
      if (scrolled !== isScrolledRef.current) {
        isScrolledRef.current = scrolled;

        const headerEl = headerRef.current;
        if (headerEl) {
          if (scrolled) {
            headerEl.classList.add("navbar--scrolled");
            gsap.to(headerEl, {
              backgroundColor: "rgba(8, 8, 8, 0.72)",
              borderColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          } else {
            headerEl.classList.remove("navbar--scrolled");
            gsap.to(headerEl, {
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        }
      }
    };

    if (lenis) {
      const onLenisScroll = (e: { scroll: number }) => {
        handleScroll(e.scroll);
      };

      lenis.on("scroll", onLenisScroll);
      handleScroll(lenis.scroll || window.scrollY || 0);

      return () => {
        lenis.off("scroll", onLenisScroll);
      };
    } else {
      const onNativeScroll = () => {
        handleScroll(window.scrollY || 0);
      };
      onNativeScroll();
      window.addEventListener("scroll", onNativeScroll, { passive: true });
      return () => window.removeEventListener("scroll", onNativeScroll);
    }
  }, [lenis]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "lg:hidden fixed top-[24px] left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] sm:w-[calc(100%-64px)] max-w-[1440px] h-[72px] px-6 rounded-full js-navbar select-none navbar border flex items-center justify-between",
          className
        )}
      >
        {/* Logo (Left) */}
        <Logo />

        {/* Mobile Trigger: MENU + */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="font-['Inter',var(--font-inter),sans-serif] text-[14px] font-medium text-white opacity-80 hover:opacity-100 uppercase tracking-widest outline-none py-2 px-1 transition-opacity"
          aria-label="Open mobile menu"
        >
          MENU +
        </button>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

MobileNavbar.displayName = "MobileNavbar";
