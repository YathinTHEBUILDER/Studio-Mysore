"use client";

/**
 * HeroSection — STUDIO MYSORE HERO V2
 *
 * Editorial Magazine Cover Presentation
 * - 12-Column Grid (Max-width 1600px, 96px horizontal padding)
 * - 100vh height, non-centered vertical layout (starts ~140px below navigation)
 * - Text: Columns 1–5
 * - Visual: Columns 7–12 (bleeds outside container to right viewport edge, ~70% Hero height)
 * - Column 6: Empty spacer gap
 * - Typography: Instrument Sans 700, clamp(96px, 8vw, 128px) desktop, 72px tablet, 48px mobile, 0.88 line-height, -0.06em letter-spacing, max 3 lines.
 * - Body: Inter font, 20px, line-height 1.7, max-width 540px, max 3 sentences.
 * - Buttons: 56px height, 999px border-radius, 16px gap, scale 1.03 in 250ms on hover. Primary solid white with black text; Secondary transparent with 1px white border.
 * - Background: #050505, 2% monochrome grain, 5% radial white light behind heading.
 */

import * as React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { gsap } from "gsap";

export function HeroSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          ".js-navbar",
          ".js-hero-heading",
          ".js-hero-body",
          ".js-hero-buttons",
          ".js-hero-image",
        ],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial states (no independent gsap.from)
      gsap.set(".js-navbar", {
        opacity: 0,
        y: -24,
      });

      gsap.set(".js-hero-heading", {
        opacity: 0,
        y: 40,
        clipPath: "inset(0% 0% 100% 0%)",
      });

      gsap.set(".js-hero-body", {
        opacity: 0,
        y: 24,
      });

      gsap.set(".js-hero-buttons", {
        opacity: 0,
        y: 24,
      });

      gsap.set(".js-hero-image", {
        opacity: 1,
        scale: 1.08,
        clipPath: "inset(0% 0% 100% 0%)",
      });

      // Single GSAP Master Timeline
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        // 0.0 — Navbar (opacity 0 → 1, y -24 → 0, Duration 0.6)
        .to(
          ".js-navbar",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          0.0
        )
        // 0.2 — Headline (Reveal using clip-path, translateY 40 → 0, Opacity 0 → 1)
        .to(
          ".js-hero-heading",
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.0,
          },
          0.2
        )
        // 0.45 — Paragraph (translateY 24 → 0, Opacity 0 → 1)
        .to(
          ".js-hero-body",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          0.45
        )
        // 0.65 — Buttons (translateY 24 → 0, Opacity 0 → 1)
        .to(
          ".js-hero-buttons",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          0.65
        )
        // 0.85 — Hero image (Reveal using clip-path, Scale 1.08 → 1.00)
        .to(
          ".js-hero-image",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1.0,
            duration: 1.2,
          },
          0.85
        );
    });

    return () => ctx.revert();
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'd like to talk about a custom website for my business."
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] min-h-[720px] bg-[#050505] overflow-hidden select-none"
      aria-label="Hero — Editorial Magazine Cover"
    >
      {/* ── Background: Very Subtle Monochrome Grain (2% opacity) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* ── Background: Very Subtle Radial Light behind Heading (5% opacity) ── */}
      <div
        className="pointer-events-none absolute top-10 left-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_70%)] opacity-[0.05] filter blur-3xl z-0"
        aria-hidden="true"
      />

      {/* ── Container with 12-Column Grid (Max 1600px, 96px Horizontal Padding) ── */}
      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-[96px] pt-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-start">
          
          {/* ── Text Content: Columns 1–5 ── */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-10">
            
            {/* Hero Heading: Instrument Sans 700, Desktop clamp(96px,8vw,128px), Tablet 72px, Mobile 48px, line-height 0.88, letter-spacing -0.06em */}
            <h1
              className="font-['Instrument_Sans',var(--font-instrument-sans),sans-serif] font-bold text-white leading-[0.88] tracking-[-0.06em] text-[48px] md:text-[72px] lg:text-[clamp(96px,8vw,128px)] js-hero-heading"
            >
              <span className="block">Built</span>
              <span className="block">around</span>
              <span className="block">you.</span>
            </h1>

            {/* Body Copy: Inter font, 20px, line-height 1.7, max-width 540px */}
            <p className="font-sans text-zinc-300 text-[20px] leading-[1.7] max-w-[540px] font-normal js-hero-body">
              Explore complete working business applications designed for your exact workflow.
            </p>

            {/* Buttons: 64px height, 999px border radius, gap 16px, 1.03 scale hover in 250ms */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 js-hero-buttons">
              {/* Primary Button */}
              <Link
                href="/#experiences"
                id="hero-primary-cta"
                className={cn(
                  "inline-flex items-center justify-center gap-4",
                  "h-[64px] px-10 rounded-[999px]",
                  "bg-white text-black",
                  "text-sm font-medium tracking-wide",
                  "transition-transform duration-[250ms] ease-out hover:scale-[1.03]",
                  "shadow-none outline-none focus-visible:ring-1 focus-visible:ring-white"
                )}
              >
                Browse Experiences
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              {/* Secondary Button */}
              <a
                href={whatsappUrl}
                id="hero-whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-4",
                  "h-[64px] px-10 rounded-[999px]",
                  "bg-transparent text-white",
                  "border border-white",
                  "text-sm font-medium tracking-wide",
                  "transition-transform duration-[250ms] ease-out hover:scale-[1.03]",
                  "shadow-none outline-none focus-visible:ring-1 focus-visible:ring-white"
                )}
              >
                <MessageCircle
                  className="h-4 w-4 text-emerald-400 fill-emerald-400"
                  aria-hidden="true"
                />
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* ── Column 6: Empty Column ── */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* ── Visual Content: Columns 7–12 (Bleeds outside container to right screen edge, ~70% Hero Height) ── */}
          <div className="lg:col-span-6 w-full mt-10 lg:mt-0 js-hero-image">
            <div className="w-full lg:w-[calc(100%+96px+max(0px,(100vw-1600px)/2))] h-[70vh] min-h-[480px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1800&auto=format&fit=crop"
                alt="Studio Mysore Editorial Scene"
                className="w-full h-full object-cover object-center rounded-none border-none shadow-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";

