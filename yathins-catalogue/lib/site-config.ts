/**
 * Site Configuration — Yathin's Catalogue
 *
 * Single source of truth for all site-level metadata.
 * Used by: app/layout.tsx (Next.js Metadata API), SEO components, footer.
 *
 * Source of truth: 03-brand-principles.md, 02-technical-architecture.md
 */

export const siteConfig = {
  /** Studio name */
  name: "Studio Mysore",

  /** Product name */
  product: "Yathin's Catalogue",

  /** Brand tagline — from 03-brand-principles.md */
  tagline: "Built around the way you work.",

  /** Short description for meta tags */
  description:
    "Studio Mysore builds thoughtful digital experiences for local businesses. See how your industry could look online.",

  /** Canonical base URL — update for production */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yathinscatalogue.com",

  /**
   * WhatsApp configuration
   * Replace with the actual Studio Mysore WhatsApp number.
   * Format: country code + number, no spaces or dashes.
   */
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919xxxxxxxxx",
    defaultMessage:
      "Hi, I just saw Yathin's Catalogue and I'd love to learn more about what you can build for my business.",
  },

  /** Open Graph / Twitter card defaults */
  og: {
    image: "/og-image.jpg",
    type: "website" as const,
    locale: "en_IN",
  },

  /** Twitter card */
  twitter: {
    card: "summary_large_image" as const,
    creator: "@studiomysore",
  },
} as const;

/** Build a WhatsApp deep-link URL */
export function buildWhatsAppUrl(
  customMessage?: string,
): string {
  const message = encodeURIComponent(
    customMessage ?? siteConfig.whatsapp.defaultMessage,
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;
}
