"use client";

/**
 * useReducedMotion — Yathin's Catalogue
 *
 * Canonical hook for reading prefers-reduced-motion across the app.
 * Wraps Framer Motion's built-in hook so components never import
 * from framer-motion directly for this concern.
 *
 * Returns:
 *  - true  → user has requested reduced motion; use opacity-only animations
 *  - false → full motion is fine
 *  - null  → SSR / unknown (treat as false for progressive enhancement)
 *
 * Per 05-motion-system.md:
 *  "Disable spatial movement (Y-offset, parallax, scale morphing).
 *   Replace with simple instant opacity cross-fades or static displays."
 */

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

export function useReducedMotion(): boolean {
  const preference = useFramerReducedMotion();
  // Coerce null (SSR) to false — animations are progressive enhancement
  return preference ?? false;
}
