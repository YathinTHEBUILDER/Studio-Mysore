"use client";

/**
 * Magnetic — Yathin's Catalogue
 *
 * Very subtle cursor attraction effect.
 * Desktop only. Disabled on touch devices.
 * Gracefully degrades to static element.
 *
 * Source of truth: 05-motion-system.md
 *  - Tactile principle: "Interactions respond with subtle physical weight and feedback."
 *  - Snappy Spring: mass 0.8 | stiffness 250 | damping 25
 *
 * Props:
 *  strength    — attraction multiplier (0–1). Default: 0.3 (subtle)
 *  className   — passthrough className
 *  children    — the element to apply magnetic effect to (usually a button)
 *
 * Performance:
 *  Uses transform: translate only — GPU-accelerated.
 *  MouseEvent listeners removed on unmount / when touch detected.
 *
 * Accessibility:
 *  Reduced motion: effect fully disabled.
 *  Touch devices: effect fully disabled (detected via pointer: coarse media query).
 *  All interactive children remain keyboard-navigable at all times.
 *
 * Design constraint: max attraction capped at 8px to keep motion subtle.
 */

import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useCallback, useEffect, useState, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Max pixel attraction — enforced ceiling for subtlety */
const MAX_ATTRACTION_PX = 8;

export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch-primary device via pointer: coarse
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Spring-driven motion values for smooth attraction
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 250, damping: 25, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 250, damping: 25, mass: 0.8 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from cursor to element center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Apply strength multiplier and cap at MAX_ATTRACTION_PX
      const attractX = Math.max(-MAX_ATTRACTION_PX, Math.min(MAX_ATTRACTION_PX, deltaX * strength));
      const attractY = Math.max(-MAX_ATTRACTION_PX, Math.min(MAX_ATTRACTION_PX, deltaY * strength));

      rawX.set(attractX);
      rawY.set(attractY);
    },
    [rawX, rawY, strength],
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  useEffect(() => {
    // Never attach on touch devices or when reduced-motion is preferred
    if (shouldReduceMotion || isTouch || !ref.current) return;

    const el = ref.current;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, shouldReduceMotion, isTouch]);

  // Degrade gracefully — static wrapper on touch/reduced-motion
  if (shouldReduceMotion || isTouch) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ x, y, willChange: "transform" }}
    >
      {children}
    </m.div>
  );
}
