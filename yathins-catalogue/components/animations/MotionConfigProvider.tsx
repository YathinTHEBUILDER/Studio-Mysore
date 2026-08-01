"use client";

/**
 * MotionConfig — Yathin's Catalogue
 *
 * Shared motion configuration context for all animation components.
 * Provides:
 *  - Framer Motion's MotionConfig with shared transition defaults
 *  - Reduced-motion awareness exposed via context
 *  - Shared easing and duration tokens baked into defaults
 *
 * Source of truth: 05-motion-system.md
 *
 * IMPORTANT:
 *  This wraps the APPLICATION-LEVEL motion config.
 *  The existing MotionProvider (LazyMotion) must remain in the tree above this.
 *  Use this inside MotionProvider, not as a replacement.
 *
 * Usage:
 *   // In app/layout.tsx (inside MotionProvider):
 *   <MotionConfig>
 *     {children}
 *   </MotionConfig>
 *
 *   // In any component:
 *   const { reducedMotion } = useMotionContext();
 */

import {
  MotionConfig as FramerMotionConfig,
  useReducedMotion,
} from "framer-motion";
import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
interface MotionContextValue {
  /** Whether prefers-reduced-motion is active */
  reducedMotion: boolean;
  /** Shared easing as array for Framer Motion */
  smoothOut: [number, number, number, number];
  editorialInOut: [number, number, number, number];
}

const MotionContext = createContext<MotionContextValue>({
  reducedMotion: false,
  smoothOut: [0.16, 1, 0.3, 1],
  editorialInOut: [0.65, 0, 0.35, 1],
});

export function useMotionContext(): MotionContextValue {
  return useContext(MotionContext);
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------
interface MotionConfigProps {
  children: ReactNode;
}

export function MotionConfigProvider({ children }: MotionConfigProps) {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  const contextValue: MotionContextValue = {
    reducedMotion,
    smoothOut: [0.16, 1, 0.3, 1],
    editorialInOut: [0.65, 0, 0.35, 1],
  };

  return (
    <MotionContext.Provider value={contextValue}>
      <FramerMotionConfig
        transition={
          reducedMotion
            ? // Under reduced motion: instant opacity fades, no spatial movement
              { duration: 0.15, ease: "linear" }
            : // Default: Smooth Out entrance curve, 500ms standard duration
              { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
        reducedMotion={reducedMotion ? "always" : "never"}
      >
        {children}
      </FramerMotionConfig>
    </MotionContext.Provider>
  );
}
