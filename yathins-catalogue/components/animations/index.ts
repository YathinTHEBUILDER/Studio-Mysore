/**
 * components/animations — Yathin's Catalogue
 *
 * Barrel export for the reusable motion library.
 *
 * Every future page and component should import from here:
 *   import { FadeIn, Stagger, ScrollReveal } from "@/components/animations";
 *
 * Source of truth: 05-motion-system.md
 *
 * Components exported:
 *  FadeIn               — Directional fade entrance (up/down/left/right/none)
 *  Reveal               — Progressive clip reveal for text and containers
 *  Stagger, StaggerItem — Orchestrated stagger wrapper for lists and grids
 *  Floating             — Subtle looping Y-axis float for device mockups
 *  Parallax             — Scroll-driven parallax with configurable speed
 *  ScrollReveal         — Primary viewport-triggered scroll reveal
 *  ScaleIn              — Gentle spring-powered scale entrance
 *  PageTransition       — Route transition wrapper (fade + 10px Y)
 *  Magnetic             — Subtle desktop cursor attraction (touch-disabled)
 *  MotionConfigProvider — Shared motion config + useMotionContext hook
 *  useMotionContext      — Hook: access shared reducedMotion state and easings
 *
 * Shared constants exported:
 *  motion-constants.ts: viewport, directionOffset, staggerPresets,
 *                       floatingConfig, parallaxSpeed
 */

// Animation primitives
export { FadeIn } from "./FadeIn";
export { Reveal } from "./Reveal";
export { Stagger, StaggerItem } from "./Stagger";
export { Floating } from "./Floating";
export { Parallax } from "./Parallax";
export { ScrollReveal } from "./ScrollReveal";
export { ScaleIn } from "./ScaleIn";
export { PageTransition } from "./PageTransition";
export { Magnetic } from "./Magnetic";

// Configuration provider and hook
export { MotionConfigProvider, useMotionContext } from "./MotionConfigProvider";

// Shared constants (re-export for convenience)
export {
  viewport,
  directionOffset,
  staggerPresets,
  parallaxSpeed,
} from "./motion-constants";
export type {
  Direction,
  StaggerPreset,
  ParallaxSpeed,
} from "./motion-constants";

// FloatingVariant comes from Floating.tsx (config is internal)
export type { FloatingVariant } from "./Floating";

// Re-export token primitives for direct use in non-component contexts
export { duration, easing, springs } from "@/lib/tokens/transitions";
export type { DurationToken, EasingToken, SpringToken } from "@/lib/tokens/transitions";
