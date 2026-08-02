/**
 * Animation Infrastructure — Yathin's Catalogue
 *
 * Source of truth: 05-motion-system.md
 *
 * This file exports:
 *  1. Framer Motion variant factories — reusable variant objects
 *  2. Reduced-motion wrapper — ensure every animation respects prefers-reduced-motion
 *  3. Page transition variants — route change choreography
 *  4. Re-exports from transition tokens for Framer Motion consumption
 *
 * RULES (from Motion System doc):
 *  - Animate only `transform` and `opacity`.
 *  - Every variant must have a reduced-motion counterpart.
 *  - Durations come from the approved token scale only.
 */

import type { Variants, Transition } from "framer-motion";
import { duration, easing, springs } from "@/lib/tokens/transitions";

// ---------------------------------------------------------------------------
// Re-export tokens for direct Framer Motion use
// ---------------------------------------------------------------------------
export { duration, easing, springs };

// ---------------------------------------------------------------------------
// Shared transition presets
// ---------------------------------------------------------------------------

/** Standard entrance transition — smooth-out easing */
const standardTransition: Transition = {
  duration: duration.standard / 1000, // Framer expects seconds
  ease: [0.16, 1, 0.3, 1], // smoothOut cubic-bezier
};

/** Quick transition — dropdowns, tabs */
const quickTransition: Transition = {
  duration: duration.quick / 1000,
  ease: [0.16, 1, 0.3, 1],
};

// ---------------------------------------------------------------------------
// Variant Factories
// ---------------------------------------------------------------------------

/**
 * fadeUp — Fade in + rise 20px from below.
 * Primary scroll-reveal pattern across all sections.
 *
 * @param delay - optional stagger delay in seconds
 */
export function fadeUp(delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...standardTransition,
        delay,
      },
    },
  };
}

/**
 * fadeUpReduced — Opacity only. Used when prefers-reduced-motion is set.
 * Spatial movement (Y offset) is stripped — per 05-motion-system.md.
 */
export function fadeUpReduced(delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: quickTransition.duration,
        delay,
      },
    },
  };
}

/**
 * staggerContainer — Parent variant that staggers children.
 *
 * @param stagger - delay between children in seconds (default: 0.08s)
 * @param delayChildren - initial delay before first child
 */
export function staggerContainer(
  stagger = 0.08,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

/**
 * scaleIn — Spring-based scale entrance for interactive elements.
 * Suitable for cards entering viewport.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springs.gentle,
  },
};

/**
 * fadeIn — Simple opacity fade, no spatial movement.
 * Use for overlays, backdrops, tooltips.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: quickTransition,
  },
};

// ---------------------------------------------------------------------------
// Page / Route Transitions
// Per 05-motion-system.md Route Transition Specification:
//   Exit:  opacity 0, Y -10px, 250ms ease-in
//   Enter: opacity 1, Y 10px→0, 400ms ease-out-smooth
// ---------------------------------------------------------------------------
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/**
 * pageTransitionReduced — Opacity only, no positional shift.
 * Applied when prefers-reduced-motion: reduce is set.
 */
export const pageTransitionReduced: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

// ---------------------------------------------------------------------------
// Interactive State Variants (used with whileHover / whileTap)
// Per 05-motion-system.md Interaction Choreography
// ---------------------------------------------------------------------------

/** Button hover — subtle scale up */
export const buttonHover = {
  scale: 1.02,
  transition: springs.snappy,
};

/** Button tap / active — scale down with immediate spring response */
export const buttonTap = {
  scale: 0.97,
  transition: springs.snappy,
};

/** Card hover — elevate 4px */
export const cardHover = {
  y: -4,
  transition: springs.gentle,
};

/** Chip hover — slight lift and scale */
export const chipHover = {
  scale: 1.04,
  transition: springs.snappy,
};

/** Error shake keyframes for invalid inputs */
export const errorShake: Variants = {
  idle: { x: 0 },
  shake: {
    x: [-8, 8, -6, 6, -3, 3, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};


// ---------------------------------------------------------------------------
// Utility — Resolve variants based on reduced motion preference
//
// Usage in components:
//   const shouldReduceMotion = useReducedMotion()
//   const variants = resolveVariants(shouldReduceMotion, fadeUp(0.1), fadeUpReduced(0.1))
// ---------------------------------------------------------------------------
export function resolveVariants(
  shouldReduceMotion: boolean | null,
  full: Variants,
  reduced: Variants,
): Variants {
  return shouldReduceMotion ? reduced : full;
}
