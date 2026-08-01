/**
 * Site Types — Yathin's Catalogue
 * Navigation, site config, and social link shapes.
 */

export interface NavLink {
  /** Display text */
  label: string;
  /** Internal anchor or route path */
  href: string;
  /** Optional external link flag */
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string; // ARIA label for screen readers
}

export interface SiteConfig {
  name: string;
  product: string;
  tagline: string;
  description: string;
  url: string;
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  og: {
    image: string;
    type: "website" | "article";
    locale: string;
  };
  twitter: {
    card: "summary" | "summary_large_image";
    creator: string;
  };
}
