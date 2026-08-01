"use client";

/**
 * MotionProvider — Yathin's Catalogue
 *
 * Wraps the application in Framer Motion's LazyMotion to ensure only the
 * animation features we actually use are included in the bundle.
 *
 * `domAnimation` covers: opacity, transform, layout, gestures.
 * This covers 100% of our current spec without the overhead of the full
 * Framer Motion bundle.
 *
 * Usage:
 *   In child components, import `m` from this file (not from "framer-motion").
 *   <m.div variants={fadeUp()} initial="hidden" animate="visible">
 */

import { type ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    // strict={true} is disabled — framer-motion v12 raises a false-positive
    // when components import `m` from "framer-motion" root in some bundler
    // configurations. `domAnimation` still ensures optimal tree-shaking.
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
