"use client";

/**
 * HeroSection — STUDIO MYSORE HERO V5
 *
 * Creative direction: Premium editorial studio. NOT a SaaS template.
 *
 * Grid:
 *   12-column, max-w-[1560px], px-[96px]
 *   Content starts 140px below the navigation.
 *   Cols 1–6 → text content
 *   Col 7   → empty spacer
 *   Cols 8–12 → abstract editorial visual
 *
 * Visual:
 *   Pure SVG editorial composition — no photos, no mockups.
 *   Thin grid lines, subtle grain, oversized outlined rect,
 *   coordinate labels, animated cursor, moving progress line.
 *
 * GSAP: Single master timeline, power4.out only.
 *
 * Colours: #060606 / #F5F5F5 / #D4AF37 only.
 */

import * as React from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { buildWhatsAppUrl } from "@/lib/site-config";

// ─────────────────────────────────────────────────────────────────────────────
// Grain filter — very subtle SVG noise, opacity 2%
// ─────────────────────────────────────────────────────────────────────────────
function GrainLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ zIndex: 0, opacity: 0.022 }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EditorialVisual — abstract composition, right panel
// ─────────────────────────────────────────────────────────────────────────────
function EditorialVisual({ className }: { className?: string }) {
  const progressRef = React.useRef<SVGLineElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  // Moving progress line: animates along x-axis with GSAP (after entrance)
  React.useEffect(() => {
    const prog = progressRef.current;
    const cursor = cursorRef.current;
    if (!prog || !cursor) return;

    // Progress line slides from left to right, looping
    gsap.fromTo(
      prog,
      { attr: { x1: "5%", x2: "5%" } },
      {
        attr: { x1: "95%", x2: "95%" },
        duration: 7,
        ease: "none",
        repeat: -1,
        delay: 2.2,
      }
    );

    // Cursor blink
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.55,
      ease: "none",
      repeat: -1,
      yoyo: true,
      delay: 2.0,
    });
  }, []);

  return (
    <div
      className={`js-hero-visual relative w-full h-full ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* SVG composition */}
      <svg
        viewBox="0 0 600 700"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        {/* ── Horizontal grid lines ── */}
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 46 + 8}
            x2="600"
            y2={i * 46 + 8}
            stroke="#F5F5F5"
            strokeWidth="0.4"
            opacity="0.055"
          />
        ))}

        {/* ── Vertical grid lines ── */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 68 + 12}
            y1="0"
            x2={i * 68 + 12}
            y2="700"
            stroke="#F5F5F5"
            strokeWidth="0.4"
            opacity="0.055"
          />
        ))}

        {/* ── Oversized outlined geometric rectangle (gold) ── */}
        <rect
          x="48"
          y="72"
          width="490"
          height="560"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.7"
          opacity="0.14"
        />

        {/* Inner inset rectangle, thinner */}
        <rect
          x="96"
          y="130"
          width="400"
          height="450"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.4"
          opacity="0.07"
        />

        {/* ── Coordinate labels ── */}
        <text x="52" y="66" fontSize="8" fontFamily="monospace" fill="#F5F5F5" opacity="0.22">
          48.0, 72.0
        </text>
        <text x="490" y="66" fontSize="8" fontFamily="monospace" fill="#F5F5F5" opacity="0.22">
          538.0, 72.0
        </text>
        <text x="52" y="646" fontSize="8" fontFamily="monospace" fill="#F5F5F5" opacity="0.22">
          48.0, 632.0
        </text>
        <text x="460" y="646" fontSize="8" fontFamily="monospace" fill="#F5F5F5" opacity="0.22">
          538.0, 632.0
        </text>

        {/* ── Small cross markers at corners ── */}
        {[
          [48, 72],
          [538, 72],
          [48, 632],
          [538, 632],
        ].map(([cx, cy], i) => (
          <g key={`cross${i}`} opacity="0.28">
            <line
              x1={cx - 6}
              y1={cy}
              x2={cx + 6}
              y2={cy}
              stroke="#D4AF37"
              strokeWidth="0.7"
            />
            <line
              x1={cx}
              y1={cy - 6}
              x2={cx}
              y2={cy + 6}
              stroke="#D4AF37"
              strokeWidth="0.7"
            />
          </g>
        ))}

        {/* ── Center division tick ── */}
        <line
          x1="0"
          y1="350"
          x2="28"
          y2="350"
          stroke="#F5F5F5"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <text x="32" y="354" fontSize="7.5" fontFamily="monospace" fill="#F5F5F5" opacity="0.18">
          y=350
        </text>

        {/* ── Moving progress line (animated via ref) ── */}
        <line
          ref={progressRef}
          x1="5%"
          y1="350"
          x2="5%"
          y2="352"
          stroke="#D4AF37"
          strokeWidth="1.2"
          opacity="0.55"
          strokeLinecap="round"
        >
          {/* x1/x2 driven by GSAP above */}
        </line>

        {/* Progress track */}
        <line
          x1="5%"
          y1="351"
          x2="95%"
          y2="351"
          stroke="#F5F5F5"
          strokeWidth="0.3"
          opacity="0.1"
        />

        {/* ── Studio label (very small, monospace) ── */}
        <text
          x="300"
          y="695"
          fontSize="7"
          fontFamily="monospace"
          fill="#F5F5F5"
          opacity="0.15"
          textAnchor="middle"
        >
          STUDIO MYSORE — COMPOSITION REF 001
        </text>
      </svg>

      {/* ── Blinking cursor (outside SVG for CSS control) ── */}
      <div
        ref={cursorRef}
        style={{
          position: "absolute",
          top: "49.8%",
          left: "4.8%",
          width: 9,
          height: 13,
          background: "#D4AF37",
          opacity: 1,
          borderRadius: 1,
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HeroSection
// ─────────────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'd like to book a discovery call for a digital product project."
  );

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          ".js-hero-heading",
          ".js-hero-body",
          ".js-hero-buttons",
          ".js-hero-visual",
        ],
        { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // ── Initial hidden states ──
      gsap.set(".js-hero-heading", {
        opacity: 0,
        y: 48,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(".js-hero-body", { opacity: 0, y: 24 });
      gsap.set(".js-hero-buttons", { opacity: 0, y: 20 });
      gsap.set(".js-hero-visual", { opacity: 0 });

      // ── Single master timeline ──
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl
        // Headline reveals upward (clip-path wipe)
        .to(
          ".js-hero-heading",
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
          },
          0.15
        )
        // Body paragraph
        .to(
          ".js-hero-body",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.65"
        )
        // CTAs
        .to(
          ".js-hero-buttons",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.55"
        )
        // Editorial visual fades in last, slightly slower
        .to(
          ".js-hero-visual",
          {
            opacity: 1,
            duration: 1.4,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#060606] overflow-hidden select-none"
      style={{ height: "100vh", minHeight: 720 }}
      aria-label="Hero — Studio Mysore"
    >
      {/* ── Grain overlay ── */}
      <GrainLayer />

      {/* ── Grid container: max 1560px, 96px horizontal padding, 140px top ── */}
      <div
        className="relative w-full h-full mx-auto"
        style={{
          maxWidth: 1560,
          paddingLeft: 96,
          paddingRight: 96,
          paddingTop: 140,
          zIndex: 1,
        }}
      >
        <div
          className="grid w-full h-full items-start"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            columnGap: 24,
          }}
        >
          {/* ──────────────────────────────────────────────
              LEFT CONTENT — Columns 1–6
          ────────────────────────────────────────────── */}
          <div
            className="flex flex-col"
            style={{
              gridColumn: "1 / 7",
              gap: 0,
            }}
          >
            {/* Eyebrow label */}
            <div
              className="js-hero-heading"
              style={{ marginBottom: 48 }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}
              >
                Premium Digital Studio — Mysore
              </span>
            </div>

            {/* ── Headline: exact text, stacked ── */}
            <h1
              className="js-hero-heading"
              style={{
                fontFamily:
                  "var(--font-instrument-sans), 'Instrument Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(68px, 6.2vw, 100px)",
                lineHeight: 0.91,
                letterSpacing: "-0.05em",
                color: "#F5F5F5",
                margin: 0,
                marginBottom: 48,
              }}
            >
              <span style={{ display: "block" }}>Building</span>
              <span style={{ display: "block" }}>software</span>
              <span style={{ display: "block" }}>people</span>
              <span
                style={{ display: "block", color: "#D4AF37" }}
              >
                love to use.
              </span>
            </h1>

            {/* ── Description ── */}
            <p
              className="js-hero-body"
              style={{
                fontFamily:
                  "var(--font-inter), system-ui, sans-serif",
                fontSize: 20,
                lineHeight: 1.7,
                color: "#F5F5F5",
                opacity: 0.65,
                maxWidth: 520,
                margin: 0,
                marginBottom: 48,
                fontWeight: 400,
              }}
            >
              Studio Mysore designs and builds complete digital products
              that help businesses operate better, serve customers faster
              and grow with confidence.
            </p>

            {/* ── CTAs ── */}
            <div
              className="js-hero-buttons"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              {/* Primary — filled gold */}
              <Link
                href="/#what-we-build"
                id="hero-primary-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 56,
                  paddingLeft: 32,
                  paddingRight: 32,
                  borderRadius: 9999,
                  background: "#D4AF37",
                  color: "#060606",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  textDecoration: "none",
                  transition: "opacity 200ms ease, transform 200ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "scale(1)";
                }}
              >
                Explore Our Work
              </Link>

              {/* Secondary — text link with animated arrow */}
              <a
                href={whatsappUrl}
                id="hero-secondary-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-text-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#F5F5F5",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  textDecoration: "none",
                  letterSpacing: "0.005em",
                  opacity: 0.75,
                  transition: "opacity 200ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.opacity = "1";
                  const arrow = el.querySelector<HTMLSpanElement>(
                    ".hero-arrow"
                  );
                  if (arrow) arrow.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.opacity = "0.75";
                  const arrow = el.querySelector<HTMLSpanElement>(
                    ".hero-arrow"
                  );
                  if (arrow) arrow.style.transform = "translateX(0)";
                }}
              >
                <span>Book a Discovery Call</span>
                <span
                  className="hero-arrow"
                  style={{
                    display: "inline-block",
                    transition: "transform 220ms ease",
                    fontSize: 15,
                  }}
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ──────────────────────────────────────────────
              EMPTY SPACER — Column 7
          ────────────────────────────────────────────── */}
          <div style={{ gridColumn: "7 / 8" }} aria-hidden="true" />

          {/* ──────────────────────────────────────────────
              RIGHT CONTENT — Columns 8–12
              Editorial abstract visual composition
          ────────────────────────────────────────────── */}
          <div
            style={{
              gridColumn: "8 / 13",
              position: "relative",
              height: "calc(100vh - 140px - 64px)",
              minHeight: 480,
            }}
          >
            <EditorialVisual className="absolute inset-0" />
          </div>
        </div>
      </div>

      {/* ── Responsive: collapse grid on mobile ── */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
