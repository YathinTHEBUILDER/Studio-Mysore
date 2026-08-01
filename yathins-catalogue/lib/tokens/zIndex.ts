/**
 * Z-Index Tokens — Yathin's Catalogue
 *
 * A clearly ordered stacking context prevents z-index wars.
 * Never use raw numeric z-index values in components — always reference these tokens.
 */

export const zIndex = {
  /** Default document flow */
  base: 0,
  /** Standard content elements */
  content: 10,
  /** Sticky headers and scroll-pinned elements */
  sticky: 100,
  /** Floating overlays, dropdowns, tooltips */
  overlay: 200,
  /** Modals and dialogs */
  modal: 300,
  /** Toast notifications — always on top */
  toast: 400,
} as const;

export type ZIndexToken = keyof typeof zIndex;
