/**
 * Providers — Root composition
 *
 * Composes all application providers in the correct dependency order:
 *
 *   MotionProvider   — Framer Motion LazyMotion (outermost, no deps)
 *   └─ LenisProvider — Smooth scroll + GSAP ticker (depends on DOM)
 *       └─ {children}
 *
 * This is a Server Component — providers that require "use client"
 * declare it within their own files.
 */

import type { ReactNode } from "react";
import { MotionProvider } from "./MotionProvider";
import { LenisProvider } from "./LenisProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MotionProvider>
      <LenisProvider>{children}</LenisProvider>
    </MotionProvider>
  );
}
