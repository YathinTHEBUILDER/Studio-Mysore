"use client";

/**
 * HeroSection — Studio Mysore Homepage Hero
 *
 * Handcrafted, editorial hero occupying 100dvh. High visual hierarchy,
 * refined typographic scaling, micro-choreographed motion timing, and
 * mouse-driven 3D parallax tilt showcasing a live interactive cafe interface.
 *
 * Architecture:
 *  - Pure dark background (#09090B).
 *  - Massive Clash Display headline with tight line height & clip-mask entrance.
 *  - Floating 3D phone mockup housing a live interactive React cafe app.
 *  - Multi-stage motion choreography: Phone → Eyebrow → Headline → Copy → CTAs → Float.
 *  - Desktop mouse parallax (max 3° tilt) with spring physics.
 *  - Full WCAG accessibility and reduced-motion compliance.
 *
 * Sources:
 *  07-homepage-experience.md — headline, copy, CTA, motion rules
 *  04-visual-design-system.md — typography, spacing, contrast
 *  05-motion-system.md — easing curves, spring physics
 */

import * as React from "react";
import Link from "next/link";
import { m, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { CafePhoneMockup } from "./CafePhoneMockup";

// ─── Easing tokens ─────────────────────────────────────────────────────────────
const EASE_SMOOTH_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_EDITORIAL = [0.76, 0, 0.24, 1] as const;

// ─── Headline lines ────────────────────────────────────────────────────────────
const HEADLINE_LINES = ["Built around", "the way", "you work."];

// ─── Main Component ────────────────────────────────────────────────────────────

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);

  // Mouse position for spring parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useSpring(mouseY, { stiffness: 70, damping: 22, mass: 1 });
  const tiltY = useSpring(mouseX, { stiffness: 70, damping: 22, mass: 1 });

  // Track mouse within hero container
  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (shouldReduceMotion) return;
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(nx * 3.5);
      mouseY.set(-ny * 3);
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  const handleMouseLeave = React.useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Direct WhatsApp link
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I just saw Studio Mysore and I'd love to learn more about what you can build for my business."
  );

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between min-h-dvh overflow-hidden bg-background"
      aria-label="Hero — Studio Mysore"
    >
      {/* ── Subtle Ambient Backdrop Gradient ───────────────────────────── */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(160, 120, 90, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      {/* ── Main Content Area ──────────────────────────────────────────── */}
      <div className="relative flex flex-1 items-center z-10 pt-20 pb-16 lg:py-0">
        <div className="container-wide w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center min-h-[calc(100dvh-120px)] lg:min-h-0">
            
            {/* ── LEFT COLUMN: Text Content & Actions ────────────────── */}
            <div className="flex flex-col gap-8 lg:gap-10 max-w-[620px]">
              
              {/* Eyebrow badge */}
              <m.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.6,
                  duration: 0.6,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-[1px] bg-zinc-600/50" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-500">
                  Studio Mysore
                </span>
              </m.div>

              {/* ── HEADLINE ─────────────────────────────────────────── */}
              <h1
                className="font-display font-semibold text-text-primary select-none"
                style={{
                  fontSize: "clamp(48px, 7.5vw, 98px)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.035em",
                }}
              >
                {HEADLINE_LINES.map((line, i) => (
                  <HeadlineLine
                    key={line}
                    line={line}
                    delay={shouldReduceMotion ? 0 : 0.8 + i * 0.12}
                    shouldReduceMotion={shouldReduceMotion ?? false}
                  />
                ))}
              </h1>

              {/* ── Supporting Copy ──────────────────────────────────── */}
              <m.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 1.25,
                  duration: 0.65,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="text-text-secondary font-normal"
                style={{
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  lineHeight: 1.65,
                  maxWidth: "440px",
                }}
              >
                Every business works differently.{" "}
                <br className="hidden sm:block" />
                Your digital experience should too.
              </m.p>

              {/* ── Action CTAs ──────────────────────────────────────── */}
              <m.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 1.45,
                  duration: 0.65,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                {/* Primary CTA */}
                <m.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                >
                  <Link
                    href="/#experiences"
                    id="hero-primary-cta"
                    className={cn(
                      "group inline-flex items-center justify-center gap-3",
                      "px-7 py-3.5 rounded-xl",
                      "bg-text-primary text-background",
                      "text-[14px] font-semibold tracking-tight",
                      "shadow-[0_4px_20px_rgba(255,255,255,0.12)]",
                      "transition-all duration-200 hover:bg-white hover:shadow-[0_6px_25px_rgba(255,255,255,0.22)]",
                      "outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    Explore Experiences
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </m.div>

                {/* Secondary CTA */}
                <m.div
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                >
                  <a
                    href={whatsappUrl}
                    id="hero-whatsapp-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5",
                      "px-7 py-3.5 rounded-xl",
                      "bg-transparent text-text-secondary",
                      "text-[14px] font-medium tracking-tight",
                      "border border-border",
                      "transition-all duration-200",
                      "hover:border-zinc-700 hover:text-text-primary hover:bg-surface-elevated/60",
                      "outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </m.div>
              </m.div>
            </div>

            {/* ── RIGHT COLUMN: Interactive Device Showcase ─────────── */}
            <PhoneColumn
              tiltX={tiltX}
              tiltY={tiltY}
              shouldReduceMotion={shouldReduceMotion ?? false}
            />
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator Hint ──────────────────────────────────────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 2.2,
          duration: 0.8,
          ease: EASE_SMOOTH_OUT,
        }}
        className="relative z-10 pb-6 flex flex-col items-center gap-2 select-none"
        aria-hidden="true"
      >
        <span
          className="text-[10px] font-medium tracking-[0.16em] uppercase"
          style={{ color: "#52525B" }}
        >
          Scroll
        </span>
        <m.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 6, 0],
                  opacity: [0.3, 0.75, 0.3],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[1px] h-7 bg-zinc-700 rounded-full"
        />
      </m.div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * HeadlineLine — Reveals a single line of text with clip-mask elevation.
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
    <span className="block overflow-hidden py-0.5" aria-hidden="false">
      <m.span
        className="block"
        initial={{
          y: shouldReduceMotion ? 0 : "108%",
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
                duration: 0.85,
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
 * PhoneColumn — Handles device 3D parallax tilt & gentle floating animation.
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
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 0.35,
        duration: 0.95,
        ease: EASE_SMOOTH_OUT,
      }}
      className="flex items-center justify-center lg:justify-end scale-90 sm:scale-95 lg:scale-100 origin-center"
      style={{ perspective: 1000 }}
    >
      {/* Tilt wrapper */}
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
        {/* Organic float loop */}
        <m.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -12, 0],
                  rotateZ: [0, 0.6, 0, -0.6, 0],
                }
          }
          transition={{
            delay: 2.0,
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        >
          {/* Floor Shadow */}
          <m.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scaleX: [1, 0.86, 1],
                    opacity: [0.45, 0.25, 0.45],
                  }
            }
            transition={{
              delay: 2.0,
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-52 h-7 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
            aria-hidden="true"
          />

          <CafePhoneMockup />
        </m.div>
      </m.div>
    </m.div>
  );
}
