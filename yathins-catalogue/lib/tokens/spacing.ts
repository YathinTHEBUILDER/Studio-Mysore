/**
 * Spacing Tokens — Yathin's Catalogue
 *
 * Source of truth: 04-visual-design-system.md
 * Approved scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 (px)
 *
 * Tailwind's default scale already maps to 4px multiples.
 * These tokens name the semantic intent of each step.
 */

export const spacing = {
  /** 4px — tight icon gap, badge padding */
  1: "4px",
  /** 8px — small internal padding */
  2: "8px",
  /** 12px — compact element gap */
  3: "12px",
  /** 16px — base padding unit */
  4: "16px",
  /** 24px — component internal spacing */
  6: "24px",
  /** 32px — section sub-spacing */
  8: "32px",
  /** 48px — standard section gap */
  12: "48px",
  /** 64px — generous section gap */
  16: "64px",
  /** 96px — section vertical padding */
  24: "96px",
  /** 128px — hero vertical padding */
  32: "128px",
} as const;

export type SpacingToken = keyof typeof spacing;
