"use client";

/**
 * FadeIn — Yathin's Catalogue
 *
 * Versatile fade + directional entrance wrapper.
 * Used for any content that should appear on viewport entry.
 *
 * Source of truth: 05-motion-system.md
 *
 * Props:
 *  direction   — which axis the element travels from (up | down | left | right | none)
 *  delay       — animation start delay in seconds
 *  duration    — named duration token (micro | quick | standard | extended)
 *  once        — if true, animation fires only the first time in viewport
 *  amount      — fraction of element visible before triggering (0–1)
 *  className   — passthrough className
 *  children    — any ReactNode
 *
 * Performance: animates only transform + opacity (GPU-accelerated).
 * Accessibility: spatial movement disabled when prefers-reduced-motion is set.
 */

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { directionOffset, type Direction } from "./motion-constants";
import { duration as durationTokens } from "@/lib/tokens/transitions";
import type { DurationToken } from "@/lib/tokens/transitions";

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: DurationToken;
  once?: boolean;
  amount?: number;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = "standard",
  once = true,
  amount = 0.3,
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionOffset[direction];

  const initial = {
    opacity: 0,
    x: shouldReduceMotion ? 0 : offset.x,
    y: shouldReduceMotion ? 0 : offset.y,
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const transition = {
    duration: durationTokens[duration] / 1000, // convert ms → seconds
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // smoothOut
    delay,
  };

  return (
    <m.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </m.div>
  );
}
