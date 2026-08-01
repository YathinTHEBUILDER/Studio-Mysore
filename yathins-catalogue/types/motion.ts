/**
 * Motion Types — Yathin's Catalogue
 * Type contracts for animation infrastructure.
 */

import type { Variants, SpringOptions } from "framer-motion";
import type { DurationToken, EasingToken } from "@/lib/tokens/transitions";

/** A fully-defined Framer Motion variant set */
export type MotionVariants = Variants;

/** Spring configuration shape for Framer Motion spring transitions */
export type SpringConfig = SpringOptions & { type: "spring" };

/** Easing token name from the approved system */
export type { EasingToken, DurationToken };

/** Which animation library to use for a given element */
export type AnimationEngine = "framer-motion" | "gsap" | "css";

/**
 * Scroll trigger configuration for GSAP ScrollTrigger.
 * Typed here so GSAP triggers are consistently configured.
 */
export interface ScrollTriggerConfig {
  /** Element to trigger on */
  trigger: string | Element;
  /** When to start: "top bottom" = when top of element hits bottom of viewport */
  start?: string;
  /** When to end */
  end?: string;
  /** Pin the trigger element for scroll-bound storytelling */
  pin?: boolean;
  /** Scrub the animation progress to scroll position */
  scrub?: boolean | number;
  /** Log markers in dev — always remove for production */
  markers?: boolean;
}
