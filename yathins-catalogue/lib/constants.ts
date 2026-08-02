/**
 * Application Constants — Yathin's Catalogue
 *
 * Contains: industry list, navigation links, breakpoints.
 * All values align with the approved documentation.
 *
 * Sources: 04-visual-design-system.md, 06-ui-system.md, 02-technical-architecture.md
 */

import type { Industry, NavLink } from "@/types";

// ---------------------------------------------------------------------------
// Industry Catalogue
// Ordered as they appear in the product roadmap (14-build-roadmap.md)
// ---------------------------------------------------------------------------
export const INDUSTRIES: Industry[] = [
  {
    id: "cafe",
    label: "Café & Bakery",
    slug: "cafe",
    emoji: "☕",
    accentColor: "cafe-primary",
    description:
      "Customers scan the QR code and order from their phone, keeping your staff focused on making great coffee.",
  },
  {
    id: "restaurant",
    label: "Restaurant & Dining",
    slug: "restaurant",
    emoji: "🍽",
    accentColor: "restaurant-primary",
    description:
      "Guests browse your menu and order right from their table while your team focuses on serving food.",
  },
  {
    id: "dental",
    label: "Dental Clinic",
    slug: "dental",
    emoji: "🦷",
    accentColor: "dental-primary",
    description:
      "Patients book appointments online at their convenience, so your front desk spends less time handling phone calls.",
  },
  {
    id: "medical",
    label: "Medical Clinic",
    slug: "medical",
    emoji: "🏥",
    accentColor: "medical-primary",
    description:
      "Patients select a doctor and book visits online, keeping your reception calm during peak hours.",
  },
  {
    id: "gym",
    label: "Gym & Fitness",
    slug: "gym",
    emoji: "💪",
    accentColor: "gym-primary",
    description:
      "Visitors explore membership plans and book trial sessions online, giving your team more time to coach.",
  },
] as const;

// ---------------------------------------------------------------------------
// Navigation Links
// ---------------------------------------------------------------------------
export const NAV_LINKS: NavLink[] = [
  { label: "Experiences", href: "/#experiences" },
  { label: "How It Works", href: "/#how-it-works" },
] as const;

// ---------------------------------------------------------------------------
// Responsive Breakpoints (matches Tailwind defaults)
// ---------------------------------------------------------------------------
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// ---------------------------------------------------------------------------
// Scroll threshold (px) at which the navigation transitions from
// transparent to glassmorphism — per 06-ui-system.md Navigation spec.
// ---------------------------------------------------------------------------
export const NAV_SCROLL_THRESHOLD = 50;

// ---------------------------------------------------------------------------
// Animation stagger delays per industry flavour (05-motion-system.md)
// ---------------------------------------------------------------------------
export const INDUSTRY_STAGGER = {
  cafe: 0.12,
  restaurant: 0.1,
  dental: 0.08,
  medical: 0.08,
  gym: 0.06,
} as const;
