/**
 * Colour Tokens — Yathin's Catalogue
 *
 * Source of truth: 04-visual-design-system.md
 *
 * All colour values are defined here and consumed by:
 *  - tailwind.config.ts (design token mapping)
 *  - app/globals.css   (CSS custom properties)
 *
 * Do NOT hardcode colour values in components.
 * Reference Tailwind utility classes or CSS variables instead.
 */

// ---------------------------------------------------------------------------
// Foundation — Dark-first palette
// ---------------------------------------------------------------------------
export const foundation = {
  /** Page background — deepest level */
  background: "#09090B",
  /** Default surface — cards, panels */
  surface: "#111111",
  /** Elevated surface — modals, dropdowns, hover states */
  surfaceElevated: "#18181B",
  /** Subtle dividers and outlines */
  border: "#27272A",
  /** Primary body text */
  textPrimary: "#FAFAFA",
  /** Secondary / supporting text */
  textSecondary: "#A1A1AA",
  /** Muted captions, disabled, placeholders */
  textMuted: "#71717A",
} as const;

// ---------------------------------------------------------------------------
// Functional — Status colours ONLY. Never decorative.
// ---------------------------------------------------------------------------
export const functional = {
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
} as const;

// ---------------------------------------------------------------------------
// Industry accent colours
//
// Each experience receives one subtle accent. The foundation never changes.
// Values are intentionally restrained — they support atmosphere, not dominate.
// Final hex values are directional and will be confirmed in Sprint 2 design review.
// ---------------------------------------------------------------------------
export const industryAccents = {
  /** ☕ Café & Bakery — warm coffee brown */
  cafe: {
    primary: "#A0785A",
    muted: "#6B4E37",
  },
  /** 🍽 Restaurant & Dining — deep burgundy */
  restaurant: {
    primary: "#8B1A4A",
    muted: "#5C1232",
  },
  /** 🦷 Dental — cool blue */
  dental: {
    primary: "#3B82F6",
    muted: "#1D4ED8",
  },
  /** 🏥 Medical Clinic — soft teal */
  medical: {
    primary: "#14B8A6",
    muted: "#0F766E",
  },
  /** 🏋️ Gym & Fitness — slate blue */
  gym: {
    primary: "#6366F1",
    muted: "#4338CA",
  },
} as const;

// ---------------------------------------------------------------------------
// Convenience re-export — flat map used by Tailwind config
// ---------------------------------------------------------------------------
export const colors = {
  // Foundation
  background: foundation.background,
  surface: foundation.surface,
  "surface-elevated": foundation.surfaceElevated,
  border: foundation.border,
  "text-primary": foundation.textPrimary,
  "text-secondary": foundation.textSecondary,
  "text-muted": foundation.textMuted,

  // Functional
  success: functional.success,
  warning: functional.warning,
  error: functional.error,

  // Industry accents (namespaced to avoid collision)
  "cafe-primary": industryAccents.cafe.primary,
  "cafe-muted": industryAccents.cafe.muted,
  "restaurant-primary": industryAccents.restaurant.primary,
  "restaurant-muted": industryAccents.restaurant.muted,
  "dental-primary": industryAccents.dental.primary,
  "dental-muted": industryAccents.dental.muted,
  "medical-primary": industryAccents.medical.primary,
  "medical-muted": industryAccents.medical.muted,
  "gym-primary": industryAccents.gym.primary,
  "gym-muted": industryAccents.gym.muted,
} as const;

export type ColorToken = keyof typeof colors;
