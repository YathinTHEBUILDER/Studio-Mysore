/**
 * Border Radius Tokens — Yathin's Catalogue
 *
 * Source of truth: 04-visual-design-system.md
 * sm=10px | md=16px | lg=24px
 *
 * Avoid exaggerated rounding. Corners should feel considered.
 */

export const radius = {
  /** 10px — inputs, badges, small cards */
  sm: "10px",
  /** 16px — cards, panels, buttons */
  md: "16px",
  /** 24px — modals, overlays, large containers */
  lg: "24px",
} as const;

export type RadiusToken = keyof typeof radius;
