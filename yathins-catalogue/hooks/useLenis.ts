"use client";

/**
 * useLenis — Yathin's Catalogue
 *
 * Provides access to the Lenis smooth scroll instance from any
 * Client Component beneath LenisProvider.
 *
 * Exposes a `scrollTo` helper with sensible defaults so components
 * don't need to interact with the raw Lenis API.
 *
 * Usage:
 *   const { scrollTo } = useLenis()
 *   scrollTo("#experiences", { offset: -80, duration: 1.2 })
 */

import { useLenisContext } from "@/components/providers/LenisProvider";
import type Lenis from "lenis";

interface ScrollToOptions {
  /** Offset from the target in pixels (e.g., -80 for fixed header) */
  offset?: number;
  /** Duration override in seconds */
  duration?: number;
  /** Callback fired when scroll completes */
  onComplete?: () => void;
}

interface UseLenisReturn {
  /** Raw Lenis instance — null if reduced motion or not yet mounted */
  lenis: Lenis | null;
  /**
   * Scroll to an element selector or pixel offset.
   * Falls back to native window.scrollTo if Lenis is unavailable.
   */
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
}

export function useLenis(): UseLenisReturn {
  const { lenis } = useLenisContext();

  function scrollTo(
    target: string | number | HTMLElement,
    options: ScrollToOptions = {},
  ): void {
    if (lenis) {
      lenis.scrollTo(target as string, {
        offset: options.offset ?? 0,
        duration: options.duration ?? 1.2,
        onComplete: options.onComplete,
      });
    } else {
      // Fallback: native smooth scroll for reduced motion / SSR
      if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    }
  }

  return { lenis, scrollTo };
}
