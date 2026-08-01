/**
 * Typography Tokens — Yathin's Catalogue
 *
 * Source of truth: 04-visual-design-system.md
 *
 * Two typefaces:
 *   Display — Clash Display (hero headlines, major section titles, key statements)
 *   Body    — Inter        (navigation, buttons, forms, paragraphs, supporting text)
 *
 * Hierarchy is created through SIZE and SPACING — not weight.
 * Avoid excessive font weights.
 */

export const fontFamily = {
  /** Clash Display — editorial, premium, display use only */
  display: ["Clash Display", "system-ui", "sans-serif"],
  /** Inter — all UI, body copy, navigation */
  body: ["Inter", "system-ui", "sans-serif"],
} as const;

/**
 * Type scale
 * Values represent [fontSize, lineHeight, letterSpacing]
 */
export const typeScale = {
  /** Display XL — homepage hero. Max 2 lines. */
  "display-xl": {
    size: "clamp(3rem, 8vw, 6rem)",
    lineHeight: "1.05",
    letterSpacing: "-0.03em",
    fontFamily: "display",
    fontWeight: "600",
  },
  /** Display L — section introductions */
  "display-l": {
    size: "clamp(2rem, 5vw, 3.75rem)",
    lineHeight: "1.1",
    letterSpacing: "-0.025em",
    fontFamily: "display",
    fontWeight: "500",
  },
  /** Heading — content headings */
  heading: {
    size: "clamp(1.25rem, 3vw, 2rem)",
    lineHeight: "1.2",
    letterSpacing: "-0.015em",
    fontFamily: "display",
    fontWeight: "500",
  },
  /** Body — descriptions, paragraphs */
  body: {
    size: "1rem",
    lineHeight: "1.65",
    letterSpacing: "0em",
    fontFamily: "body",
    fontWeight: "400",
  },
  /** Body Large — lead paragraphs */
  "body-lg": {
    size: "1.125rem",
    lineHeight: "1.6",
    letterSpacing: "-0.005em",
    fontFamily: "body",
    fontWeight: "400",
  },
  /** Caption — supporting information, labels, metadata */
  caption: {
    size: "0.8125rem",
    lineHeight: "1.5",
    letterSpacing: "0.01em",
    fontFamily: "body",
    fontWeight: "400",
  },
  /** Label — nav links, button text, form labels */
  label: {
    size: "0.875rem",
    lineHeight: "1.4",
    letterSpacing: "0.005em",
    fontFamily: "body",
    fontWeight: "500",
  },
} as const;

export type TypeScaleToken = keyof typeof typeScale;
