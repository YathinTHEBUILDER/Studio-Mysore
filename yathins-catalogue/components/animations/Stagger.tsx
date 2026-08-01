"use client";

/**
 * Stagger — Yathin's Catalogue
 *
 * Reusable stagger wrapper. Children animate automatically.
 * The parent container controls stagger timing; each child inherits
 * the `visible` variant trigger.
 *
 * Source of truth: 05-motion-system.md
 *  - Default stagger: 0.08s
 *  - Industry-specific stagger presets available via `preset` prop
 *
 * Props:
 *  stagger       — delay between children (seconds). Overrides preset.
 *  preset        — named stagger preset (default | cafe | restaurant | clinical | gym)
 *  delayChildren — initial delay before first child animates
 *  once          — fire only the first time in viewport
 *  amount        — viewport visibility threshold
 *  childVariants — override the child entrance variant
 *  className     — passthrough className
 *  children      — list of child elements
 *
 * Usage:
 *   <Stagger preset="cafe">
 *     <div>Card 1</div>
 *     <div>Card 2</div>
 *     <div>Card 3</div>
 *   </Stagger>
 *
 * Children do NOT need their own animation wrappers.
 * Wrap each child in a <StaggerItem> if fine-grained control is needed.
 */

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerPresets, type StaggerPreset } from "./motion-constants";
import type { Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Default child variant (fade-up 20px)
// ---------------------------------------------------------------------------
const defaultChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Reduced-motion child variant — opacity only
const reducedChildVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

interface StaggerProps {
  children: ReactNode;
  stagger?: number;
  preset?: StaggerPreset;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
  childVariants?: Variants;
  className?: string;
}

export function Stagger({
  children,
  stagger,
  preset = "default",
  delayChildren = 0,
  once = true,
  amount = 0.2,
  childVariants,
  className,
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  // Resolve stagger delay: explicit > preset
  const staggerDelay = stagger ?? staggerPresets[preset];
  const resolvedChildVariants =
    childVariants ?? (shouldReduceMotion ? reducedChildVariants : defaultChildVariants);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <m.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {/* Each direct child gets the child variant automatically */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <m.div key={i} variants={resolvedChildVariants}>
              {child}
            </m.div>
          ))
        : <m.div variants={resolvedChildVariants}>{children}</m.div>
      }
    </m.div>
  );
}

// ---------------------------------------------------------------------------
// StaggerItem — Manual child wrapper for fine-grained control.
// Use when you need to control the wrapping element's className or role.
//
// Usage:
//   <Stagger>
//     <StaggerItem className="col-span-4">...</StaggerItem>
//   </Stagger>
// ---------------------------------------------------------------------------
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.div
      className={className}
      variants={shouldReduceMotion ? reducedChildVariants : defaultChildVariants}
    >
      {children}
    </m.div>
  );
}
