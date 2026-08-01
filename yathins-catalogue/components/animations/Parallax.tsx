"use client";

/**
 * Parallax — Yathin's Catalogue
 *
 * Reusable scroll-driven parallax wrapper. Configurable speed.
 * GPU-accelerated: animates only transform (translateY via motionValue).
 *
 * Source of truth: 05-motion-system.md
 *  - GPU-Accelerated Properties Only: transform and opacity
 *  - will-change: transform on active scrolling elements
 *  - Lenis integration: uses scroll Y progress from useScroll
 *
 * Props:
 *  speed       — named preset ("slow" | "medium" | "fast") or raw multiplier number
 *  offset      — scroll range to listen on (default: full element scroll range)
 *  className   — passthrough className
 *  children    — any ReactNode
 *
 * Performance:
 *  Uses useScroll + useTransform — no layout triggers.
 *  will-change applied during scroll; removed post-animation via CSS.
 *
 * Accessibility:
 *  Parallax disabled entirely under prefers-reduced-motion.
 */

import {
  m,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { parallaxSpeed, type ParallaxSpeed } from "./motion-constants";

interface ParallaxProps {
  children: ReactNode;
  speed?: ParallaxSpeed | number;
  className?: string;
}

export function Parallax({
  children,
  speed = "medium",
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Resolve multiplier from named preset or raw number
  const multiplier =
    typeof speed === "number"
      ? speed
      : parallaxSpeed[speed];

  // Transform scroll progress [0, 1] to pixel offset
  // At 0% scrolled past: 0px. At 100% scrolled past: multiplier * 200px.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${multiplier * 200}px`],
  );

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <m.div style={{ y, willChange: "transform" }}>
        {children}
      </m.div>
    </div>
  );
}
