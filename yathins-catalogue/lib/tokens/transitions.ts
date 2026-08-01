/**
 * Transition & Easing Tokens — Yathin's Catalogue
 *
 * Source of truth: 05-motion-system.md
 *
 * These tokens are used by both:
 *  - CSS transitions (via tailwind.config.ts → transitionTimingFunction / transitionDuration)
 *  - Framer Motion (via lib/animation.ts variant factories)
 *
 * RULES:
 *  - Animate only `transform` and `opacity` (GPU-accelerated).
 *  - Never animate width, height, margin, padding, top, or left.
 *  - Always provide reduced-motion fallbacks.
 */

// ---------------------------------------------------------------------------
// Duration tokens (milliseconds)
// ---------------------------------------------------------------------------
export const duration = {
  /** 100–150ms — button press, icon hover, tooltip */
  micro: 120,
  /** 200–300ms — dropdowns, tab indicators, modal backdrops */
  quick: 250,
  /** 400–600ms — scroll reveals, card expansions, drawer slide-ins */
  standard: 500,
  /** 800–1200ms — hero choreography, scroll storytelling, showcase transitions */
  extended: 900,
} as const;

/** Duration values as CSS strings (for tailwind config) */
export const durationCSS = {
  micro: "120ms",
  quick: "250ms",
  standard: "500ms",
  extended: "900ms",
} as const;

// ---------------------------------------------------------------------------
// Easing curves (CSS cubic-bezier)
// ---------------------------------------------------------------------------
export const easing = {
  /**
   * Smooth Out — Default entrance curve (Custom Quintic Out)
   * Quick start with ultra-smooth deceleration.
   * Use for: UI component entrances, card reveals, dropdowns.
   */
  smoothOut: "cubic-bezier(0.16, 1, 0.3, 1)",

  /**
   * Editorial Smooth In-Out (Custom Cubic In-Out)
   * Use for: hero section transitions, full-screen overlays, page route changes.
   */
  editorialInOut: "cubic-bezier(0.65, 0, 0.35, 1)",

  /** Standard ease-in for exits */
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",

  /** Linear — for opacity-only fades */
  linear: "linear",
} as const;

// ---------------------------------------------------------------------------
// Spring physics presets (Framer Motion)
// ---------------------------------------------------------------------------
export const springs = {
  /**
   * Snappy Spring — buttons, toggles, micro-interactions
   * Mass: 0.8 | Stiffness: 250 | Damping: 25
   */
  snappy: {
    type: "spring" as const,
    mass: 0.8,
    stiffness: 250,
    damping: 25,
  },

  /**
   * Gentle Spring — cards, modal drawers, layout shifts
   * Mass: 1.0 | Stiffness: 120 | Damping: 20
   */
  gentle: {
    type: "spring" as const,
    mass: 1.0,
    stiffness: 120,
    damping: 20,
  },

  /**
   * Energetic Spring — gym experience, high-impact elements
   * Mass: 0.6 | Stiffness: 300 | Damping: 20
   */
  energetic: {
    type: "spring" as const,
    mass: 0.6,
    stiffness: 300,
    damping: 20,
  },
} as const;

export type DurationToken = keyof typeof duration;
export type EasingToken = keyof typeof easing;
export type SpringToken = keyof typeof springs;
