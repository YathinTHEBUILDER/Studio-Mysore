"use client";

/**
 * Reveal — Yathin's Catalogue
 *
 * Progressive reveal animation for text and containers.
 * Text mode: clips from bottom, characters slide up (editorial feel).
 * Container mode: standard fade-up with a clipping mask.
 *
 * Source of truth: 05-motion-system.md
 *
 * Props:
 *  mode        — "text" clips inline, "container" reveals a block
 *  delay       — start delay in seconds
 *  once        — fire only first time in viewport
 *  amount      — viewport visibility threshold
 *  className   — passthrough className
 *  children    — any ReactNode
 *
 * Performance: clip-path + opacity + transform — GPU-accelerated.
 * Accessibility: clip-path motion removed under prefers-reduced-motion.
 */

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  mode?: "text" | "container";
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

// Framer Motion variants for the outer wrapper
const containerVariants = {
  hidden: { opacity: 1 }, // outer is always visible; child clips
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
    },
  },
};

export function Reveal({
  children,
  mode = "container",
  delay = 0,
  once = true,
  amount = 0.3,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // Reduced-motion: plain opacity fade, no clip/translate
  if (shouldReduceMotion) {
    return (
      <m.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount }}
        transition={{ duration: 0.25, delay }}
      >
        {children}
      </m.div>
    );
  }

  if (mode === "text") {
    // Clip-from-bottom reveal for headlines and display text.
    // Outer div clips; inner div translates up.
    return (
      <div
        className={className}
        style={{ overflow: "hidden", display: "inline-block" }}
      >
        <m.div
          initial={{ y: "110%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once, amount }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay,
          }}
        >
          {children}
        </m.div>
      </div>
    );
  }

  // Container mode: fade-up reveal with a subtle clip-path expansion
  return (
    <m.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      <m.div
        initial={{ opacity: 0, y: 24, clipPath: "inset(8% 0% 0% 0%)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once, amount }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
