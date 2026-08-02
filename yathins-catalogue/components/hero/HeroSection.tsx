"use client";

/**
 * HeroSection — Cinematic Editorial Documentary Opening Shot
 *
 * Two-Layer Composition:
 *   Layer 1: Instrument Sans 700 Display Typography & Pill Actions
 *   Layer 2: Bleed Editorial Photograph (~60% width, no cards, no borders, un-rounded)
 *
 * Choreography: Single overlapping GSAP master timeline (1.6s duration, power4.out)
 */

import * as React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          "header",
          ".js-hero-headline-line",
          ".js-hero-body",
          ".js-hero-buttons",
          ".js-hero-image",
        ],
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Single timeline per section (Image -> Heading -> Body -> CTA, 35% overlap, power4.out)
      const duration = 0.9;
      const overlap = "-=0.315"; // 35% overlap of duration (0.9 * 0.35 = 0.315s)

      gsap.set(
        [
          ".js-hero-image",
          ".js-hero-heading",
          ".js-hero-body",
          ".js-hero-buttons",
        ],
        {
          opacity: 0,
          y: 30,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }
      );

      const timeline = gsap.timeline({
        defaults: {
          duration,
          ease: "power4.out",
        },
      });

      // 1. Image
      timeline.to(".js-hero-image", {
        opacity: 1,
        y: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      // 2. Heading (35% overlap)
      .to(
        ".js-hero-heading",
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        overlap
      )
      // 3. Body (35% overlap)
      .to(
        ".js-hero-body",
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        overlap
      )
      // 4. CTA (35% overlap)
      .to(
        ".js-hero-buttons",
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        overlap
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'd like to talk about a custom website for my business."
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] min-h-[720px] bg-[#060606] overflow-hidden select-none"
      aria-label="Hero — Documentary Opening"
    >
      {/* ── Background: Monochrome Grain Overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* ── Background: Very Subtle Vignette Overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(6,6,6,0.65)_100%)]"
        aria-hidden="true"
      />

      {/* ── Layer 2: Bleed Editorial Photograph (~60% Hero Width) ── */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60vw] h-full z-0 js-hero-image overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1800&auto=format&fit=crop"
          alt="Studio Mysore Editorial Café Scene with morning sunlight, natural wood, and coffee steam"
          className="w-full h-full object-cover object-center rounded-none border-none shadow-none"
        />
        {/* Soft atmospheric gradient edge blend into dark canvas on desktop */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/40 to-transparent hidden lg:block"
          aria-hidden="true"
        />
        {/* Contrast overlay for mobile screen viewports */}
        <div
          className="pointer-events-none absolute inset-0 bg-[#060606]/75 lg:hidden"
          aria-hidden="true"
        />
      </div>

      {/* ── Layer 1: Typography & Pill Actions in 12-Column Grid ── */}
      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-[96px] pt-[18vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
          <div className="lg:col-span-6 xl:col-span-5 max-w-[620px] space-y-8">
            
            {/* Hero Heading: Instrument Sans 700, clamp(5rem,8vw,8rem), 0.88 line-height, -0.055em tracking, max 9ch */}
            <h1
              className="font-['Instrument_Sans',var(--font-instrument-sans),var(--font-inter),sans-serif] font-bold text-white leading-[0.88] tracking-[-0.055em] max-w-[9ch] js-hero-heading"
              style={{
                fontSize: "clamp(5rem, 8vw, 8rem)",
              }}
            >
              <span className="block">Built</span>
              <span className="block">around</span>
              <span className="block">you.</span>
            </h1>

            {/* Body Copy: 20px, 1.7 line-height, max-width 560px */}
            <p className="text-zinc-300 text-[20px] leading-[1.7] max-w-[560px] font-normal js-hero-body">
              Explore complete working business applications designed for your exact workflow.
            </p>

            {/* Buttons: 56px height, 32px padding, 999px radius, 220ms 1.02 scale hover */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 js-hero-buttons">
              {/* Primary Button */}
              <Link
                href="/#experiences"
                id="hero-primary-cta"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "h-[56px] px-[32px] rounded-full",
                  "bg-white text-[#060606]",
                  "text-sm font-medium tracking-wide",
                  "transition-transform duration-[220ms] ease-out hover:scale-[1.02]",
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
                  "inline-flex items-center justify-center gap-2.5",
                  "h-[56px] px-[32px] rounded-full",
                  "bg-transparent text-white",
                  "border border-[rgba(255,255,255,0.12)]",
                  "text-sm font-medium tracking-wide",
                  "transition-transform duration-[220ms] ease-out hover:scale-[1.02]",
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
        </div>
      </div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
