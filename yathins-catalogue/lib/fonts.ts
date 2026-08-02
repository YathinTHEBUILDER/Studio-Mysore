/**
 * Font Configuration — Yathin's Catalogue
 *
 * Two typefaces as specified in 04-visual-design-system.md:
 *
 *   Display — Clash Display (locally hosted, variable font)
 *   Body    — Inter (Google Fonts via next/font/google)
 *
 * ─── SPRINT 1 NOTE ────────────────────────────────────────────
 * Clash Display is NOT on Google Fonts and must be self-hosted.
 * The font files have NOT been added yet.
 *
 * ACTION REQUIRED before Sprint 2:
 *   1. Download from: https://www.fontshare.com/fonts/clash-display
 *   2. Place ClashDisplay-Variable.woff2 in: public/fonts/
 *   3. Restore the localFont import below (replace the stub).
 *
 * For Sprint 1, Clash Display falls back to system-ui so the build
 * succeeds without the font file present.
 * ──────────────────────────────────────────────────────────────
 */

import { Inter, Instrument_Sans } from "next/font/google";

/**
 * Inter — Google Fonts
 * Subsets: latin only for performance.
 * Variable font — covers all weights 100–900.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

/**
 * Instrument Sans — Google Fonts
 * Hero Display & Editorial Typography
 */
export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const clashDisplay = {
  variable: "--font-clash-display",
  className: "",
} as const;

/**
 * Combined font class names string.
 * Apply to <html> in the root layout.
 */
export const fontVariables = `${inter.variable} ${instrumentSans.variable} ${clashDisplay.variable}`;

