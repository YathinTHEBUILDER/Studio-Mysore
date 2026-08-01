"use client";

/**
 * LenisProvider — Yathin's Catalogue
 *
 * Provides smooth scroll behaviour via Lenis.
 * Source of truth: 05-motion-system.md (Lenis section)
 *
 * Responsibilities:
 *  - Instantiate Lenis with physics tuned for a premium scroll feel.
 *  - Connect Lenis RAF to GSAP ticker for ScrollTrigger synchronisation.
 *  - Disable smooth scrolling when prefers-reduced-motion is set.
 *  - Clean up on unmount (destroy Lenis, remove GSAP ticker entry).
 *  - Expose Lenis instance via context for child components (scroll-to, etc.)
 */

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
interface LenisContextValue {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextValue>({ lenis: null });

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------
interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's reduced motion preference —
    // if set, fall back to native browser scrolling.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Do not instantiate Lenis; native scroll is more accessible.
      return;
    }

    // Instantiate Lenis with physics matched to a premium editorial feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP's RAF so ScrollTrigger stays in sync.
    // GSAP ticker fires every frame — we pass elapsed time to Lenis.
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    // Prevent GSAP from adding its own requestAnimationFrame (Lenis controls RAF).
    gsap.ticker.lagSmoothing(0);

    // Inform ScrollTrigger of scroll position updates from Lenis
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      // Cleanup: remove ticker, destroy Lenis
      gsap.ticker.remove((time: number) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------
/** Access the Lenis instance from any Client Component child. */
export function useLenisContext(): LenisContextValue {
  return useContext(LenisContext);
}
