"use client";

/**
 * PageTransition — Yathin's Catalogue
 *
 * Reusable page route transition wrapper.
 * Fade + small Y translate. No excessive effects.
 *
 * Source of truth: 05-motion-system.md
 *  - Mode: AnimatePresence with mode="wait"
 *  - Exit: opacity 0, Y -10px, 250ms ease-in
 *  - Enter: opacity 1, Y 10px → 0px, 400ms ease-out-smooth
 *  - Scroll Reset: handled by the router; this component handles animation only.
 *
 * Usage:
 *   Place PageTransition inside AnimatePresence in the root layout.
 *   Pass the current route key so AnimatePresence knows when to swap.
 *
 *   // app/layout.tsx
 *   <AnimatePresence mode="wait">
 *     <PageTransition key={pathname}>
 *       {children}
 *     </PageTransition>
 *   </AnimatePresence>
 *
 * Props:
 *  children  — page content
 *  className — passthrough className
 *
 * Accessibility:
 *  Reduced motion: Y movement removed, instant opacity only (200ms).
 */

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { pageTransition, pageTransitionReduced } from "@/lib/animation";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? pageTransitionReduced : pageTransition;

  return (
    <m.div
      className={className}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </m.div>
  );
}
