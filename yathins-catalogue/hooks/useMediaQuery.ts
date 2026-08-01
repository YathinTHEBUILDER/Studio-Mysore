"use client";

/**
 * useMediaQuery — Yathin's Catalogue
 *
 * Generic hook that returns whether a CSS media query matches.
 * Server-safe: returns false during SSR to prevent hydration mismatch.
 *
 * Usage:
 *   const isMobile = useMediaQuery("(max-width: 767px)")
 *   const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
 *
 * Convenience aliases are exported at the bottom.
 */

import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Listen for changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

// ---------------------------------------------------------------------------
// Convenience hooks — aligned with BREAKPOINTS in lib/constants.ts
// ---------------------------------------------------------------------------

/** true when viewport width < 768px */
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
}

/** true when viewport width is between 768px and 1023px */
export function useIsTablet(): boolean {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  );
}

/** true when viewport width >= 1024px */
export function useIsDesktop(): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
}
