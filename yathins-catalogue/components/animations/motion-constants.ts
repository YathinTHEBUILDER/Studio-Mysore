/**
 * Motion Constants — Yathin's Catalogue
 *
 * Shared animation configuration consumed by every motion component.
 * Source of truth: 05-motion-system.md
 *
 * This file re-exports from lib/tokens/transitions and adds:
 *  - Named viewport presets
 *  - Direction offset map
 *  - Floating keyframe config
 *  - Parallax speed presets
 *  - Stagger presets
 */

export { duration, easing, springs } from "@/lib/tokens/transitions";
export type { DurationToken, EasingToken, SpringToken } from "@/lib/tokens/transitions";

// ---------------------------------------------------------------------------
// Viewport thresholds
// Controls at what percentage of visibility scroll-triggered animations fire.
// ---------------------------------------------------------------------------
export const viewport = {
  /** Fire when 20% of the element is visible — good for large blocks */
  relaxed: { once: true, amount: 0.2 as number },
  /** Fire when 30% of the element is visible — default for most cards */
  default: { once: true, amount: 0.3 as number },
  /** Fire when 50% of the element is visible — tight/compact sections */
  strict: { once: true, amount: 0.5 as number },
} as const;

// ---------------------------------------------------------------------------
// FadeIn direction offsets (px)
// Spatial movement stripped when prefers-reduced-motion is active.
// Only transform: translate — no top/left/margin changes.
// ---------------------------------------------------------------------------
export const directionOffset = {
  up:    { x: 0,   y: 20 },
  down:  { x: 0,   y: -20 },
  left:  { x: 20,  y: 0 },
  right: { x: -20, y: 0 },
  none:  { x: 0,   y: 0 },
} as const;

export type Direction = keyof typeof directionOffset;

// ---------------------------------------------------------------------------
// Stagger delay presets (seconds)
// Per 05-motion-system.md industry motion flavors.
// ---------------------------------------------------------------------------
export const staggerPresets = {
  /** Default for most card lists */
  default:    0.08,
  /** Café / Bakery — organic, warm */
  cafe:       0.12,
  /** Restaurant — refined, editorial */
  restaurant: 0.10,
  /** Dental / Medical — crisp, precise */
  clinical:   0.08,
  /** Gym — snappy, energetic */
  gym:        0.06,
} as const;

export type StaggerPreset = keyof typeof staggerPresets;

// FloatingVariant is exported directly from ./Floating.tsx
// floatingConfig is internal to Floating.tsx (not exposed as a constant)


// ---------------------------------------------------------------------------
// Parallax speed presets
// Applied as a multiplier to scroll progress.
// Positive = moves up relative to scroll. Negative = moves down.
// ---------------------------------------------------------------------------
export const parallaxSpeed = {
  /** Very slow drift — background decorative elements */
  slow:   -0.1,
  /** Standard parallax — section imagery */
  medium: -0.2,
  /** Pronounced — hero foreground elements */
  fast:   -0.3,
} as const;

export type ParallaxSpeed = keyof typeof parallaxSpeed;
