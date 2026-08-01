/**
 * Typography Utilities — Yathin's Catalogue
 *
 * A single source of truth for Tailwind class strings per type scale token.
 * Components import and apply these instead of constructing class strings ad-hoc.
 *
 * Aligns with: lib/tokens/typography.ts
 *
 * Usage:
 *   import { typeClasses } from "@/lib/typography"
 *   <h1 className={typeClasses["display-xl"]}>{headline}</h1>
 */

export const typeClasses = {
  /**
   * Display XL — Homepage hero headline.
   * Clash Display, fluid scale from 3rem → 6rem.
   */
  "display-xl":
    "font-display text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-[-0.03em] font-semibold",

  /**
   * Display L — Section introductions.
   * Clash Display, fluid scale from 2rem → 3.75rem.
   */
  "display-l":
    "font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] tracking-[-0.025em] font-medium",

  /**
   * Heading — Content headings within sections.
   * Clash Display, fluid scale from 1.25rem → 2rem.
   */
  heading:
    "font-display text-[clamp(1.25rem,3vw,2rem)] leading-[1.2] tracking-[-0.015em] font-medium",

  /**
   * Body — Default paragraph and description text.
   * Inter, 1rem, comfortable reading line-height.
   */
  body: "font-body text-base leading-[1.65] tracking-[0em] font-normal",

  /**
   * Body Large — Lead paragraphs and supporting copy.
   * Inter, 1.125rem.
   */
  "body-lg":
    "font-body text-[1.125rem] leading-[1.6] tracking-[-0.005em] font-normal",

  /**
   * Caption — Labels, metadata, supporting detail.
   * Inter, 0.8125rem.
   */
  caption:
    "font-body text-[0.8125rem] leading-[1.5] tracking-[0.01em] font-normal",

  /**
   * Label — Navigation links, button text, form labels.
   * Inter, 0.875rem, medium weight.
   */
  label:
    "font-body text-[0.875rem] leading-[1.4] tracking-[0.005em] font-medium",
} as const;

export type TypeClass = keyof typeof typeClasses;
