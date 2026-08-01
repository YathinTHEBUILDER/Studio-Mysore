/**
 * Container Width Tokens — Yathin's Catalogue
 *
 * Source of truth: 04-visual-design-system.md
 *
 * Each page should use consistent container widths.
 * Editorial moments may intentionally break the grid to create emphasis.
 */

export const containers = {
  /** Narrow — long-form reading, focused content */
  narrow: "680px",
  /** Standard — default page content */
  standard: "1100px",
  /** Wide — editorial layouts, full showcase sections */
  wide: "1400px",
  /** Full — edge-to-edge with padding only */
  full: "100%",
} as const;

/**
 * Horizontal page padding at each breakpoint.
 * Applied as padding-inline on all container variants.
 */
export const containerPadding = {
  mobile: "20px",
  tablet: "32px",
  desktop: "48px",
} as const;

export type ContainerToken = keyof typeof containers;
