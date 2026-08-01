"use client";

/**
 * ScaleIn — Yathin's Catalogue
 *
 * Gentle spring-based scale entrance animation.
 * Never dramatic — scale range is always subtle (0.94–1.0).
 *
 * Source of truth: 05-motion-system.md
 *  - scaleIn: "Spring-based scale entrance for interactive elements. Suitable for cards."
 *  - Gentle Spring: mass 1.0 | stiffness 120 | damping 20
 *
 * Props:
 *  from        — starting scale (default: 0.94 — never go below 0.9)
 *  delay       — start delay in seconds
 *  once        — fire only first time in viewport
 *  amount      — viewport visibility threshold
 *  spring      — spring preset ("gentle" | "snappy")
 *  className   — passthrough className
 *  children    — any ReactNode
 *
 * Performance: scale uses transform — GPU-accelerated.
 * Accessibility: scale animation removed under prefers-reduced-motion.
 */

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springs } from "@/lib/tokens/transitions";
import type { SpringToken } from "@/lib/tokens/transitions";

interface ScaleInProps {
  children: ReactNode;
  from?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  spring?: SpringToken;
  className?: string;
}

export function ScaleIn({
  children,
  from = 0.94,
  delay = 0,
  once = true,
  amount = 0.3,
  spring = "gentle",
  className,
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  // Enforce subtle scale floor — never below 0.9
  const clampedFrom = Math.max(from, 0.9);

  const initial = {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : clampedFrom,
  };

  const animate = {
    opacity: 1,
    scale: 1,
    transition: {
      ...(shouldReduceMotion
        ? { duration: 0.2, delay }
        : { ...springs[spring], delay }),
    },
  };

  return (
    <m.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
    >
      {children}
    </m.div>
  );
}
