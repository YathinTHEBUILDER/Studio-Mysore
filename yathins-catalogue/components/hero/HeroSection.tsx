"use client";

/**
 * HeroSection — Studio Mysore Homepage Hero
 *
 * The first impression. Occupies 100dvh. Nothing below the fold.
 *
 * Architecture:
 *  - Pure black background (#09090B). No gradients, particles or blobs.
 *  - Massive Clash Display headline dominates visual hierarchy.
 *  - Floating phone mockup with real café ordering interface.
 *  - Choreographed entrance: phone → headline → copy → CTAs → float.
 *  - Mouse parallax tilt on desktop (max 2–3°). Subtle only.
 *  - Reduced-motion: instant opacity cross-fades, no spatial shifts.
 *
 * Animation timeline (per spec):
 *  0.0s  Black background.
 *  0.4s  Phone fades in + 20px upward movement.
 *  0.8s  Headline reveals line-by-line (mask clip, not slide).
 *  1.2s  Supporting copy fades in.
 *  1.5s  CTA buttons appear.
 *  2.0s  Phone begins gentle floating loop.
 *
 * Sources:
 *  07-homepage-experience.md — headline, copy, CTA, motion rules
 *  04-visual-design-system.md — colour, typography, spacing
 *  05-motion-system.md — easing curves, spring physics, reduced motion
 */

import * as React from "react";
import Link from "next/link";
import { m, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { CafePhoneMockup } from "./CafePhoneMockup";

// ─── Easing tokens (from 05-motion-system.md) ─────────────────────────────────
const EASE_SMOOTH_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_EDITORIAL = [0.65, 0, 0.35, 1] as const;

// ─── Headline — three lines as specified ──────────────────────────────────────
const HEADLINE_LINES = ["Built around", "the way", "you work."];

// ─── Main Component ───────────────────────────────────────────────────────────

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);

  // Mouse position for tilt — raw motion values track immediately
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-smooth the raw values. Gentle spring = max 2–3° tilt only.
  const tiltX = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 1 });
  const tiltY = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 1 });

  // Track mouse within hero bounds for tilt effect
  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (shouldReduceMotion) return;
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Normalize to [-1, 1]
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      // Scale to max 3°
      mouseX.set(nx * 3);
      mouseY.set(-ny * 2.5);
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  const handleMouseLeave = React.useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // WhatsApp URL with hero-specific message
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I just saw Studio Mysore and I'd love to learn more about what you can build for my business."
  );

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col min-h-dvh overflow-hidden bg-background"
      aria-label="Hero — Studio Mysore"
    >
      {/* ── Content Area ─────────────────────────────────────────────────── */}
      <div className="relative flex flex-1 items-center">
        <div className="container-wide w-full">
          {/*
           * DESKTOP / TABLET (lg+): Two-column layout
           *   Left  60% visual weight → typography + CTAs
           *   Right 40% visual weight → floating phone
           *
           * MOBILE: Stacked — typography, then phone, then CTAs
           */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-8 items-center pt-24 pb-12 lg:py-0 min-h-dvh lg:min-h-0">

            {/* ── LEFT: Text content ──────────────────────────────────────── */}
            <div className="flex flex-col gap-8 lg:gap-10 max-w-[640px]">

              {/* Eyebrow — ultra subtle, barely there */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.6,
                  duration: 0.5,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="hidden lg:flex items-center gap-3"
              >
                <div
                  className="w-5 h-[1px]"
                  style={{ background: "rgba(161,161,170,0.4)" }}
                />
                <span
                  className="text-[11px] font-medium tracking-[0.14em] uppercase"
                  style={{ color: "#71717A" }}
                >
                  Studio Mysore
                </span>
              </m.div>

              {/* ── HEADLINE — the hero within the Hero ─────────────────── */}
              <h1
                className="font-display font-semibold leading-[1.0] tracking-tight text-text-primary"
                style={{
                  fontSize: "clamp(52px, 8vw, 108px)",
                  letterSpacing: "-0.03em",
                }}
              >
                {HEADLINE_LINES.map((line, i) => (
                  <HeadlineLine
                    key={line}
                    line={line}
                    delay={shouldReduceMotion ? 0 : 0.8 + i * 0.09}
                    shouldReduceMotion={shouldReduceMotion ?? false}
                  />
                ))}
              </h1>

              {/* ── Supporting copy ──────────────────────────────────────── */}
              <m.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 1.2,
                  duration: 0.6,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="text-text-secondary leading-relaxed"
                style={{
                  fontSize: "clamp(15px, 1.4vw, 18px)",
                  maxWidth: "420px",
                  lineHeight: 1.6,
                }}
              >
                Every business works differently.{" "}
                <br className="hidden sm:block" />
                Your digital experience should too.
              </m.p>

              {/* ── CTA Buttons ──────────────────────────────────────────── */}
              <m.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 1.5,
                  duration: 0.6,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                {/* Primary CTA */}
                <m.div
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link
                    href="/#experiences"
                    id="hero-primary-cta"
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5",
                      "px-6 py-3.5 rounded-[12px]",
                      "bg-text-primary text-background",
                      "text-[14px] font-semibold tracking-tight",
                      "transition-colors duration-200",
                      "outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      "hover:bg-white"
                    )}
                  >
                    Explore Experiences
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </m.div>

                {/* Secondary CTA */}
                <m.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <a
                    href={whatsappUrl}
                    id="hero-whatsapp-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5",
                      "px-6 py-3.5 rounded-[12px]",
                      "bg-transparent text-text-secondary",
                      "text-[14px] font-medium tracking-tight",
                      "border border-border",
                      "transition-all duration-200",
                      "hover:border-border/80 hover:text-text-primary hover:bg-surface",
                      "outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </m.div>
              </m.div>
            </div>

            {/* ── RIGHT / BOTTOM: Phone mockup ────────────────────────────── */}
            <PhoneColumn
              tiltX={tiltX}
              tiltY={tiltY}
              shouldReduceMotion={shouldReduceMotion ?? false}
            />
          </div>
        </div>
      </div>

      {/* ── Scroll hint — fades out naturally as user scrolls ──────────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 2.2,
          duration: 0.8,
          ease: EASE_SMOOTH_OUT,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="text-[10px] font-medium tracking-[0.12em] uppercase"
          style={{ color: "#3F3F46" }}
        >
          Scroll
        </div>
        <m.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 5, 0],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[1px] h-8"
          style={{ background: "rgba(63,63,70,0.8)" }}
        />
      </m.div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * HeadlineLine — Reveals a single line of the hero headline.
 *
 * Uses a clip-mask reveal (overflow hidden + translateY) so the text
 * appears to rise up from behind an invisible baseline. This is the
 * cleanest, most editorial entrance pattern — used by Linear, Vercel, etc.
 */
function HeadlineLine({
  line,
  delay,
  shouldReduceMotion,
}: {
  line: string;
  delay: number;
  shouldReduceMotion: boolean;
}) {
  return (
    <span className="block overflow-hidden" aria-hidden="false">
      <m.span
        className="block"
        initial={{
          y: shouldReduceMotion ? 0 : "105%",
          opacity: shouldReduceMotion ? 0 : 1,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={
          shouldReduceMotion
            ? { delay: 0, duration: 0.3 }
            : {
                delay,
                duration: 0.75,
                ease: EASE_EDITORIAL,
              }
        }
      >
        {line}
      </m.span>
    </span>
  );
}

/**
 * PhoneColumn — Handles all device motion:
 *   1. Initial entrance (0.4s after mount).
 *   2. Continuous gentle floating loop (begins ~2.0s).
 *   3. Mouse tilt from parent (desktop only).
 *   4. Reduced-motion: static, no movement.
 */
function PhoneColumn({
  tiltX,
  tiltY,
  shouldReduceMotion,
}: {
  tiltX: ReturnType<typeof useSpring>;
  tiltY: ReturnType<typeof useSpring>;
  shouldReduceMotion: boolean;
}) {
  return (
    <m.div
      // Entrance
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 0.4,
        duration: 0.9,
        ease: EASE_SMOOTH_OUT,
      }}
      /*
       * On mobile: phone sits centered below the text, full width.
       * On desktop: phone aligns to the right, occupying the right column.
       */
      className="flex items-center justify-center lg:justify-end lg:pr-8"
      style={{ perspective: 800 }}
    >
      {/* Tilt wrapper — responds to mouse position on desktop */}
      <m.div
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX: tiltX,
                rotateY: tiltY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative"
      >
        {/* Float animation wrapper — begins after entrance settles */}
        <m.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -10, 0],
                }
          }
          transition={{
            delay: 2.0,
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        >
          {/* Subtle shadow below device — moves with float */}
          <m.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scaleX: [1, 0.88, 1],
                    opacity: [0.4, 0.25, 0.4],
                  }
            }
            transition={{
              delay: 2.0,
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
            aria-hidden="true"
          />

          <CafePhoneMockup />
        </m.div>
      </m.div>
    </m.div>
  );
}
