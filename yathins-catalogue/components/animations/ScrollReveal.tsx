"use client";

/**
 * ScrollReveal — Yathin's Catalogue
 *
 * Reveals children as they enter the viewport while scrolling.
 * This is the primary scroll-triggered animation primitive for sections,
 * cards, and content blocks.
 *
 * Source of truth: 05-motion-system.md
 *  - Scroll Reveal: "Fade up with 20px Y-axis offset, 500ms duration, staggered by 0.08s"
 *  - Prefers-reduced-motion: "Replace movement with simple instant opacity cross-fades"
 *
 * Props:
 *  delay       — start delay in seconds
 *  once        — if true, animation fires only once (default: true)
 *  amount      — fraction of element visible before triggering (0–1)
 *  distance    — Y travel distance in px (default: 20)
 *  className   — passthrough className
 *  children    — any ReactNode
 *
 * Accessibility:
 *  Reduced motion: spatial movement removed, opacity fade only.
 *  Element is always reachable regardless of animation state.
 */

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  amount?: number;
  distance?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  once = true,
  amount = 0.3,
  distance = 20,
  className,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2, delay }
          : {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay,
            }
      }
    >
      {children}
    </m.div>
  );
}
