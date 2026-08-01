"use client";

/**
 * useScrollProgress — Yathin's Catalogue
 *
 * Returns a 0–1 scroll progress value for a given element ref,
 * using GSAP ScrollTrigger internally.
 *
 * 0 = element top has just entered the viewport
 * 1 = element bottom has just left the viewport
 *
 * Usage:
 *   const ref = useRef<HTMLDivElement>(null)
 *   const progress = useScrollProgress(ref)
 *   // progress is a Framer Motion MotionValue<number>
 *
 * Note: Returns a Framer Motion MotionValue so it can be used directly
 * with `useTransform` for scroll-linked animations without causing re-renders.
 */

import { useEffect, useRef, RefObject } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress(
  elementRef: RefObject<HTMLElement | null>,
  options: {
    /** ScrollTrigger start string, default "top bottom" */
    start?: string;
    /** ScrollTrigger end string, default "bottom top" */
    end?: string;
  } = {},
): MotionValue<number> {
  const progress = useMotionValue(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    triggerRef.current = ScrollTrigger.create({
      trigger: element,
      start: options.start ?? "top bottom",
      end: options.end ?? "bottom top",
      scrub: true,
      onUpdate: (self) => {
        progress.set(self.progress);
      },
    });

    return () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
    };
  }, [elementRef, options.start, options.end, progress]);

  return progress;
}
