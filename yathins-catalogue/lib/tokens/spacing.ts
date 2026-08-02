/**
 * Spacing Tokens — Studio Mysore Design System
 *
 * Strict Spacing Scale:
 * Allowed values (px): 8, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160, 192
 */

export const spacing = {
  8: "8px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  64: "64px",
  80: "80px",
  96: "96px",
  120: "120px",
  160: "160px",
  192: "192px",
} as const;

export type SpacingToken = keyof typeof spacing;
