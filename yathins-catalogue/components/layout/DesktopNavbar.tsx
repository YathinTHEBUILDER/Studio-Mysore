"use client";

import * as React from "react";
import { useLenis } from "@/hooks/useLenis";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { WhatsAppCTA } from "./WhatsAppCTA";

export interface DesktopNavbarProps {
  className?: string;
}

/**
 * DesktopNavbar — Dedicated Desktop Navigation Header (lg:block)
 *
 * Fixed positioning, 1fr auto 1fr CSS grid, Lenis-driven 80px scroll state.
 */
export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ className }) => {
  const { lenis } = useLenis();
  const headerRef = React.useRef<HTMLElement>(null);
  const isScrolledRef = React.useRef<boolean>(false);

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
    <header
      ref={headerRef}
      className={cn(
        "hidden lg:block fixed top-[24px] left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-64px)] max-w-[1440px] h-[72px] px-[40px] rounded-full js-navbar select-none navbar border",
        className
      )}
    >
      <div
        className="grid items-center w-full h-full"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        {/* Left Column (1fr): Logo */}
        <div className="flex items-center justify-start justify-self-start">
          <Logo />
        </div>

        {/* Center Column (auto): Navigation Links */}
        <div className="flex items-center justify-center justify-self-center">
          <NavLinks orientation="horizontal" />
        </div>

        {/* Right Column (1fr): CTA */}
        <div className="flex items-center justify-end justify-self-end">
          <WhatsAppCTA />
        </div>
      </div>
    </header>
  );
};

DesktopNavbar.displayName = "DesktopNavbar";
