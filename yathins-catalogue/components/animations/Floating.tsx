"use client";

/**
 * Floating — Yathin's Catalogue
 *
 * Gentle floating animation for device mockups: phones, tablets, laptops,
 * UI mockups. Motion remains subtle — per 99-non-negotiables.md rule 13 and
 * 05-motion-system.md Subtlety principle.
 *
 * Props:
 *  variant     — "gentle" | "subtle" | "micro" (amplitude control)
 *  disabled    — optionally disable the float (e.g. during interaction)
 *  className   — passthrough className
 *  children    — the device mockup or any element
 *
 * Performance:
 *  Animates only transform: translateY. GPU-accelerated.
 *  Uses will-change: transform on the animated element.
 *
 * Accessibility:
 *  Motion fully disabled when prefers-reduced-motion is set.
 *  Element is still visible — animation is purely decorative.
 */

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type FloatingVariant = "gentle" | "subtle" | "micro";

// Amplitude map in pixels — all values remain subtle per motion spec
const amplitudeMap: Record<FloatingVariant, number> = {
  gentle: 10,
  subtle: 6,
  micro: 4,
};

// Duration map in seconds
const durationMap: Record<FloatingVariant, number> = {
  gentle: 4,
  subtle: 5,
  micro: 6,
};

interface FloatingProps {
  children: ReactNode;
  variant?: FloatingVariant;
  disabled?: boolean;
  className?: string;
}

export function Floating({
  children,
  variant = "gentle",
  disabled = false,
  className,
}: FloatingProps) {
  const shouldReduceMotion = useReducedMotion();

  // If motion is disabled or reduced, render static — no animation
  if (shouldReduceMotion || disabled) {
    return <div className={className}>{children}</div>;
  }

  const amplitude = amplitudeMap[variant];
  const dur = durationMap[variant];

  return (
    <m.div
      className={className}
      style={{ willChange: "transform" }}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration: dur,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {children}
    </m.div>
  );
}
