/**
 * Root Layout — Yathin's Catalogue
 *
 * Responsibilities:
 *  - Configure document metadata (Next.js Metadata API)
 *  - Apply font CSS variables to <body> (Clash Display + Inter)
 *  - Force dark mode (dark-first — no light mode per 04-visual-design-system.md)
 *  - Mount all application providers (Lenis + Framer Motion)
 *  - Set viewport meta for proper mobile rendering
 *
 * This is a Server Component. All "use client" directives are
 * contained inside provider files only.
 */

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, clashDisplay } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { Providers } from "@/components/providers";

// ---------------------------------------------------------------------------
// Metadata — consumed by Next.js for <head> generation
// Source: lib/site-config.ts + 02-technical-architecture.md SEO section
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  // Title template: child pages set `title` → "Page Title | Studio Mysore"
  title: {
    default: `${siteConfig.product} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Studio Mysore",
    "digital experiences",
    "café website",
    "restaurant website",
    "dental clinic website",
    "medical clinic website",
    "gym website",
    "local business",
    "Mysore",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,

  // Open Graph
  openGraph: {
    type: siteConfig.og.type,
    locale: siteConfig.og.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.product} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.og.image,
        width: 1200,
        height: 630,
        alt: `${siteConfig.product} — ${siteConfig.tagline}`,
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: siteConfig.twitter.card,
    title: `${siteConfig.product} | ${siteConfig.name}`,
    description: siteConfig.description,
    creator: siteConfig.twitter.creator,
    images: [siteConfig.og.image],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  // Manifest (add public/site.webmanifest in Sprint 2)
  // manifest: "/site.webmanifest",
};

// ---------------------------------------------------------------------------
// Viewport — Separate export per Next.js 14+ requirement
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  themeColor: "#09090B", // Matches --color-background
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility
};

// ---------------------------------------------------------------------------
// Root Layout Component
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /**
     * lang="en" — required for screen readers and SEO.
     * className is constructed from font variable strings so that
     * --font-inter and --font-clash-display CSS variables are available
     * globally throughout the document.
     *
     * Dark mode: we do not use `dark` class strategy.
     * The site is dark-only. Background and text colours are set
     * unconditionally in globals.css — no prefers-color-scheme logic needed.
     */
    <html
      lang="en"
      className={`${inter.variable} ${clashDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-text-primary font-body antialiased overflow-x-hidden">
        {/*
         * Providers wraps Lenis (smooth scroll) + Framer Motion (LazyMotion).
         * Order matters: MotionProvider → LenisProvider → children.
         */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
