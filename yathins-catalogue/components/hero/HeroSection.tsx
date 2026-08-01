"use client";

/**
 * HeroSection — Studio Mysore Homepage Hero
 *
 * Minimal, editorial hero with large typography, generous whitespace,
 * and high visual hierarchy. Acts strictly as an entrance to the product.
 */

import * as React from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";

// ─── Easing tokens ─────────────────────────────────────────────────────────────
const EASE_SMOOTH_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_EDITORIAL = [0.65, 0, 0.35, 1] as const;

// ─── Headline lines ────────────────────────────────────────────────────────────
const HEADLINE_LINES = ["Built around", "the way", "you work."];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // WhatsApp conversion link
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I'd like to learn more about complete digital experiences for my business."
  );

  return (
    <section
      className="relative flex flex-col justify-between min-h-[90dvh] lg:min-h-dvh overflow-hidden bg-background pt-28 pb-16 lg:py-24"
      aria-label="Hero — Studio Mysore"
    >
      {/* ── Background Subtle Glow Gradient ──────────────────────────── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none blur-[160px] opacity-15"
        style={{
          background: "radial-gradient(circle, #A1A1AA 0%, transparent 70%)",
        }}
      />

      {/* ── Main Content Area ──────────────────────────────────────────── */}
      <div className="relative flex flex-1 items-center z-10">
        <div className="container-wide w-full">
          <div className="max-w-4xl space-y-10 lg:space-y-12">
            
            {/* Eyebrow badge */}
            <m.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.15,
                duration: 0.5,
                ease: EASE_SMOOTH_OUT,
              }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-zinc-700" />
              <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-zinc-400">
                Studio Mysore
              </span>
            </m.div>

            {/* ── HEADLINE ─────────────────────────────────────────── */}
            <h1
              className="font-display font-semibold text-white select-none"
              style={{
                fontSize: "clamp(56px, 9vw, 120px)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
              }}
            >
              {HEADLINE_LINES.map((line, i) => (
                <HeadlineLine
                  key={line}
                  line={line}
                  delay={shouldReduceMotion ? 0 : 0.3 + i * 0.1}
                  shouldReduceMotion={shouldReduceMotion ?? false}
                />
              ))}
            </h1>

            {/* ── Supporting Copy ──────────────────────────────────── */}
            <m.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.6,
                duration: 0.6,
                ease: EASE_SMOOTH_OUT,
              }}
              className="space-y-3 text-zinc-300 font-normal leading-relaxed max-w-2xl"
              style={{
                fontSize: "clamp(17px, 1.35vw, 22px)",
              }}
            >
              <p>Every business works differently.</p>
              <p className="text-zinc-400">
                Instead of showing you screenshots, we&apos;ve built complete working websites for different industries.
              </p>
              <p className="text-zinc-400">
                Explore one that feels closest to your business.
              </p>
            </m.div>

            {/* ── Action CTAs ──────────────────────────────────────── */}
            <m.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.75,
                duration: 0.55,
                ease: EASE_SMOOTH_OUT,
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
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
                    "group inline-flex items-center justify-center gap-3",
                    "px-8 py-4 rounded-xl",
                    "bg-white text-zinc-950",
                    "text-sm font-semibold tracking-tight",
                    "shadow-lg shadow-white/5",
                    "transition-all duration-200 hover:bg-zinc-100",
                    "outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                >
                  Browse Experiences
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
                    "px-8 py-4 rounded-xl",
                    "bg-zinc-900/80 text-zinc-200",
                    "text-sm font-medium tracking-tight",
                    "border border-zinc-800",
                    "transition-all duration-200",
                    "hover:border-zinc-700 hover:text-white hover:bg-zinc-800",
                    "outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </m.div>
            </m.div>
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
        className="relative z-10 pt-12 flex flex-col items-center gap-2 select-none"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-zinc-500">
          Explore Below
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
