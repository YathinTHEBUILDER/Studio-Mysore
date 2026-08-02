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
  useState,
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
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Media query checks for screen width below 768px (< 768px) and prefers-reduced-motion
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isSmoothingDisabled = () => mobileQuery.matches || reducedMotionQuery.matches;

    let lenisInstance: Lenis | null = null;
    let updateTicker: ((time: number, deltaTime: number, frame: number) => void) | null = null;

    const cleanupLenis = () => {
      if (updateTicker) {
        gsap.ticker.remove(updateTicker);
        updateTicker = null;
      }
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
      setLenis(null);
      ScrollTrigger.refresh();
    };

    const setupLenis = () => {
      // Below 768px or if prefers-reduced-motion is true, disable smooth scrolling
      if (isSmoothingDisabled()) {
        cleanupLenis();
        return;
      }

      if (lenisInstance) return;

      // Grounded, heavy, non-slippery Lenis configuration
      lenisInstance = new Lenis({
        duration: 1.2, // Heavy, deliberate response time for a luxury scroll feel
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Snappy exponential settlement
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.75, // Grounded 0.75x multiplier: no slippery acceleration or drift
        touchMultiplier: 1.0,
        autoRaf: false, // SINGLE RAF LOOP: driven exclusively by GSAP ticker below
      });

      setLenis(lenisInstance);

      // Single RAF loop: GSAP ticker drives Lenis frame updates
      updateTicker = (time: number) => {
        lenisInstance?.raf(time * 1000);
      };
      gsap.ticker.add(updateTicker);

      // Prevent GSAP lag smoothing to eliminate delay stutters at 60 FPS
      gsap.ticker.lagSmoothing(0);

      // Synchronise ScrollTrigger with Lenis scroll updates
      lenisInstance.on("scroll", ScrollTrigger.update);

      // Initial ScrollTrigger refresh for accurate trigger calculation
      ScrollTrigger.refresh();
    };

    setupLenis();

    // Listen for screen width (< 768px) and reduced-motion changes dynamically
    const handleMediaChange = () => {
      if (isSmoothingDisabled()) {
        cleanupLenis();
      } else {
        setupLenis();
      }
    };

    mobileQuery.addEventListener("change", handleMediaChange);
    reducedMotionQuery.addEventListener("change", handleMediaChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMediaChange);
      reducedMotionQuery.removeEventListener("change", handleMediaChange);
      cleanupLenis();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
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
