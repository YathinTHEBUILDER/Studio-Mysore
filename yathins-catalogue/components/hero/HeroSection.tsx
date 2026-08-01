"use client";

/**
 * HeroSection — Studio Mysore Homepage Hero
 *
 * Handcrafted, editorial hero occupying 100dvh. High visual hierarchy,
 * dominant typographic scaling, micro-choreographed motion timing, and
 * mouse-driven 3D parallax tilt showcasing a live interactive cafe interface.
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
const EASE_EDITORIAL = [0.65, 0, 0.35, 1] as const;

// ─── Headline lines ────────────────────────────────────────────────────────────
const HEADLINE_LINES = ["Built around", "the way", "you work."];

// ─── Main Component ────────────────────────────────────────────────────────────

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);

  // Mouse position for spring parallax tilt (strictly bounded to ±2deg)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useSpring(mouseY, { stiffness: 90, damping: 26, mass: 1 });
  const tiltY = useSpring(mouseX, { stiffness: 90, damping: 26, mass: 1 });

  // Track mouse within hero container — max ±2° tilt
  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (shouldReduceMotion) return;
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      const targetY = Math.max(-2, Math.min(2, nx * 4));
      const targetX = Math.max(-2, Math.min(2, -ny * 4));
      mouseX.set(targetY);
      mouseY.set(targetX);
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
      {/* ── Main Content Area ──────────────────────────────────────────── */}
      <div className="relative flex flex-1 items-center z-10 pt-20 pb-12 lg:py-0">
        <div className="container-wide w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            
            {/* ── LEFT COLUMN: Text Content & Actions ────────────────── */}
            <div className="flex flex-col gap-8 lg:gap-10 max-w-[640px]">
              
              {/* Eyebrow badge */}
              <m.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.2,
                  duration: 0.5,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-[1px] bg-zinc-700" />
                <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-zinc-400">
                  Studio Mysore
                </span>
              </m.div>

              {/* ── HEADLINE ─────────────────────────────────────────── */}
              <h1
                className="font-display font-semibold text-white select-none"
                style={{
                  fontSize: "clamp(52px, 8vw, 110px)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.04em",
                }}
              >
                {HEADLINE_LINES.map((line, i) => (
                  <HeadlineLine
                    key={line}
                    line={line}
                    delay={shouldReduceMotion ? 0 : 0.35 + i * 0.1}
                    shouldReduceMotion={shouldReduceMotion ?? false}
                  />
                ))}
              </h1>

              {/* ── Supporting Copy ──────────────────────────────────── */}
              <m.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.65,
                  duration: 0.55,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="text-zinc-400 font-normal leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 1.2vw, 19px)",
                  maxWidth: "460px",
                }}
              >
                Every business works differently.{" "}
                <br className="hidden sm:block" />
                Your digital experience should too.
              </m.p>

              {/* ── Action CTAs ──────────────────────────────────────── */}
              <m.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.8,
                  duration: 0.55,
                  ease: EASE_SMOOTH_OUT,
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
              >
                {/* Primary CTA */}
                <m.div
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 450, damping: 28 }}
                >
                  <Link
                    href="/#experiences"
                    id="hero-primary-cta"
                    className={cn(
                      "group inline-flex items-center justify-center gap-2.5",
                      "px-7 py-3.5 rounded-xl",
                      "bg-white text-zinc-950",
                      "text-sm font-semibold tracking-tight",
                      "shadow-md",
                      "transition-all duration-200 hover:bg-zinc-100",
                      "outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                  transition={{ type: "spring", stiffness: 450, damping: 28 }}
                >
                  <a
                    href={whatsappUrl}
                    id="hero-whatsapp-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5",
                      "px-7 py-3.5 rounded-xl",
                      "bg-zinc-900/60 text-zinc-300",
                      "text-sm font-medium tracking-tight",
                      "border border-zinc-800",
                      "transition-all duration-200",
                      "hover:border-zinc-700 hover:text-white hover:bg-zinc-800/80",
                      "outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
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
          delay: shouldReduceMotion ? 0 : 1.0,
          duration: 0.6,
          ease: EASE_SMOOTH_OUT,
        }}
        className="relative z-10 pb-6 flex flex-col items-center gap-2 select-none"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-zinc-500">
          Scroll
        </span>
        <m.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 5, 0],
                  opacity: [0.35, 0.8, 0.35],
                }
          }
          transition={{
            duration: 2.0,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[1px] h-6 bg-zinc-700 rounded-full"
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
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 0.05,
        duration: 0.75,
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
                  y: [0, -8, 0],
                  rotateZ: [0, 0.4, 0, -0.4, 0],
                }
          }
          transition={{
            delay: 1.2,
            duration: 6.0,
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
                    scaleX: [1, 0.9, 1],
                    opacity: [0.35, 0.2, 0.35],
                  }
            }
            transition={{
              delay: 1.2,
              duration: 6.0,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-4 rounded-full pointer-events-none bg-black/70 blur-md"
            aria-hidden="true"
          />

          <CafePhoneMockup />
        </m.div>
      </m.div>
    </m.div>
  );
}


