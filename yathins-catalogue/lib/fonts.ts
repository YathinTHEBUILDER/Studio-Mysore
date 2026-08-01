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

import { Inter } from "next/font/google";

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
 * clashDisplay — Sprint 1 stub
 *
 * When the font file is available:
 *   1. Install: import localFont from "next/font/local"
 *   2. Replace this stub with:
 *
 *   export const clashDisplay = localFont({
 *     src: [{ path: "../public/fonts/ClashDisplay-Variable.woff2", style: "normal" }],
 *     display: "swap",
 *     variable: "--font-clash-display",
 *     preload: true,
 *     fallback: ["system-ui", "sans-serif"],
 *   });
 *
 * For now, we return an object that matches the shape next/font returns
 * so the rest of the codebase compiles without changes.
 */
export const clashDisplay = {
  variable: "--font-clash-display",
  className: "",
} as const;

/**
 * Combined font class names string.
 * Apply to <html> in the root layout.
 */
export const fontVariables = `${inter.variable} ${clashDisplay.variable}`;
