/**
 * Experience Types — Yathin's Catalogue
 * Industry and experience configuration shapes.
 */

import type { ColorToken } from "@/lib/tokens/colors";

/** Supported industry verticals */
export type IndustryId =
  | "cafe"
  | "restaurant"
  | "dental"
  | "medical"
  | "gym";

export interface Industry {
  /** Unique identifier (used in routing) */
  id: IndustryId;
  /** Display label */
  label: string;
  /** URL slug — maps to /experience/[slug] */
  slug: string;
  /** Emoji symbol for UI use */
  emoji: string;
  /** Accent colour token reference — from lib/tokens/colors.ts */
  accentColor: ColorToken;
  /** Short description for experience cards */
  description: string;
}

/** Per-industry motion flavour config */
export interface IndustryMotionConfig {
  /** Stagger delay between child elements (seconds) */
  staggerDelay: number;
  /** Spring damping for this industry's feel */
  springDamping: number;
}
