# public/fonts/

Clash Display variable font files must be placed here before Sprint 2.

## Required Files

- `ClashDisplay-Variable.woff2`  ← Primary format (modern browsers)
- `ClashDisplay-Variable.woff`   ← Fallback format

## How to Get the Font

1. Visit: https://www.fontshare.com/fonts/clash-display
2. Download the Variable font package
3. Place `.woff2` and `.woff` files in this directory

## Why Self-Hosted?

Clash Display is not available on Google Fonts.
Self-hosting via `next/font/local` gives us:
  - Zero layout shift (font preloaded by Next.js)
  - No external network dependency
  - Full control over font subsetting (future)

## Font Configuration

The font is configured in: lib/fonts.ts
The CSS variable it creates: --font-clash-display
Applied to <html> in: app/layout.tsx
