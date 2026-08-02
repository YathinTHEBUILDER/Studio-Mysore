"use client";

/**
 * HeroSection — Studio Mysore Homepage Hero (Elevated Experience)
 *
 * Full viewport cinematic entrance sequence managed via GSAP:
 *  - Navigation (Navbar) slides/fades in
 *  - Eyebrow badge fades/slides in
 *  - Headline reveals line-by-line via clip-mask
 *  - Supporting copy reveals
 *  - Action CTAs reveal with stagger
 *  - Hero imagery / layered editorial composition softly reveals
 *
 * Depth & Lighting: Soft shadows, vignette, and SVG grain overlay
 * Atmosphere: Luxury, confidence, editorial
 */

import * as React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { CafePhoneMockup } from "./CafePhoneMockup";
import { FilmFrame } from "@/components/ui/FilmFrame";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HEADLINE_LINES = ["Built around", "the way", "you work."];

export function HeroSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Instantly reveal all elements
      gsap.set(
        [
          "header",
          ".js-hero-eyebrow",
          ".js-hero-line-inner",
          ".js-hero-copy",
          ".js-hero-ctas",
          ".js-hero-pillars",
          ".js-hero-media",
        ],
        { opacity: 1, y: 0, x: 0, scale: 1 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial states with transform acceleration
      gsap.set("header", { opacity: 0, y: -12 });
      gsap.set(".js-hero-eyebrow", { opacity: 0, x: -8 });
      gsap.set(".js-hero-line-inner", { y: "105%", opacity: 0 });
      gsap.set(".js-hero-copy", { opacity: 0, y: 14 });
      gsap.set(".js-hero-ctas", { opacity: 0, y: 10 });
      gsap.set(".js-hero-pillars", { opacity: 0 });
      gsap.set(".js-hero-media", { opacity: 0, scale: 0.96, y: 18 });

      // Organic, overlapping entrance timeline (No robotic sequential waiting)
      const tl = gsap.timeline({
        defaults: {
          duration: 1.0,
          ease: "power4.out",
        },
      });

      // 1. Navigation starts fading in
      tl.to("header", { opacity: 1, y: 0, duration: 0.9 })
        // 2. Eyebrow begins right as navigation is underway
        .to(".js-hero-eyebrow", { opacity: 1, x: 0, duration: 0.7 }, "-=0.7")
        // 3. Headline starts revealing line-by-line BEFORE navigation completes
        .to(
          ".js-hero-line-inner",
          {
            y: "0%",
            opacity: 1,
            stagger: 0.09,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.55"
        )
        // 4. Supporting copy reveals while headline is settling
        .to(".js-hero-copy", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.65")
        // 5. Action CTAs appear BEFORE headline & copy completely settle
        .to(".js-hero-ctas", { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }, "-=0.55")
        // 6. Editorial photography & phone mockup float in parallel with typography
        .to(".js-hero-media", { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=0.75")
        // 7. Trust pillars drift in softly as CTAs complete
        .to(".js-hero-pillars", { opacity: 1, duration: 0.65, ease: "power2.out" }, "-=0.5");

      // Scroll-bound connection parallax & fade-out (movement below 40px)
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      })
        .to(".js-parallax-left", {
          opacity: 0.15,
          y: -30,
          ease: "none",
        }, 0)
        .to(".js-hero-media", {
          y: 35,
          ease: "none",
        }, 0);
    }, sectionRef);

    // Very subtle mouse parallax (max 8px movement)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Center offset ratio: -0.5 to 0.5
      const xNorm = clientX / innerWidth - 0.5;
      const yNorm = clientY / innerHeight - 0.5;

      // Text column moves very slightly in opposite direction (max 4px)
      gsap.to(".js-parallax-left", {
        x: xNorm * -4,
        y: yNorm * -4,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Media column moves in positive direction (max 8px)
      gsap.to(".js-parallax-right", {
        x: xNorm * 8,
        y: yNorm * 8,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'd like to talk about a website for my business."
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center min-h-[100dvh] lg:h-[100dvh] overflow-hidden bg-background pt-28 pb-16 lg:pt-32 lg:pb-20"
      aria-label="Hero — Custom Business Websites"
    >
      {/* ── 1. Lighting Layer — Subtle Vignette & Film Grain ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(9,9,11,0.95)_100%)] opacity-95"
        aria-hidden="true"
      />
      <svg
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="globalNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#globalNoise)" />
      </svg>

      {/* ── 2. Main Content Grid Area ──────────────────────────────────── */}
      <div className="relative flex flex-1 items-center z-10">
        <div className="container-wide w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            {/* Left Column: Dominating Editorial Typography */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-10 lg:space-y-12 js-parallax-left">
              {/* Eyebrow badge */}
              <div className="flex items-center gap-4 js-hero-eyebrow">
                <div className="w-12 h-[1px] bg-zinc-700/80" />
                <span className="text-xs font-mono font-medium tracking-[0.35em] uppercase text-zinc-400">
                  Studio Mysore • Issue N° 01
                </span>
              </div>

              {/* ── HEADLINE — Line-by-line reveal ── */}
              <h1
                className="font-display font-semibold text-white select-none leading-[0.95] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(56px, 8.5vw, 128px)",
                }}
              >
                {HEADLINE_LINES.map((line) => (
                  <span key={line} className="block overflow-hidden py-1">
                    <span className="block js-hero-line-inner">
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              {/* ── Supporting Copy ── */}
              <div className="space-y-3.5 text-zinc-300 font-light leading-relaxed max-w-xl text-lg sm:text-xl lg:text-2xl js-hero-copy">
                <p className="text-white font-normal">
                  Every business works differently.
                </p>
                <p className="text-zinc-400 text-base sm:text-lg lg:text-xl">
                  Instead of static screenshots or templates, try out complete
                  working websites built for different industries. Explore the
                  one that fits how your business operates.
                </p>
              </div>

              {/* ── Action CTAs ── */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2 js-hero-ctas">
                {/* Primary CTA */}
                <div className="transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]">
                  <Link
                    href="/#experiences"
                    id="hero-primary-cta"
                    className={cn(
                      "group inline-flex items-center justify-center gap-3",
                      "px-9 py-4 rounded-full",
                      "bg-white text-zinc-950",
                      "text-sm font-semibold tracking-tight",
                      "shadow-2xl shadow-white/5",
                      "transition-all duration-300 hover:bg-zinc-100 hover:shadow-white/10",
                      "outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    Browse Experiences
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                {/* Secondary CTA */}
                <div className="transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]">
                  <a
                    href={whatsappUrl}
                    id="hero-whatsapp-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5",
                      "px-9 py-4 rounded-full",
                      "bg-zinc-900/70 text-zinc-200 backdrop-blur-md",
                      "text-sm font-medium tracking-tight",
                      "border border-zinc-800",
                      "transition-all duration-300",
                      "hover:border-zinc-700 hover:text-white hover:bg-zinc-800/90",
                      "outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    <MessageCircle
                      className="h-4 w-4 text-zinc-400"
                      aria-hidden="true"
                    />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* ── Trust Pillars & Credentials ── */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-mono tracking-wide js-hero-pillars">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Direct Founder Consultation
                </span>
                <span className="text-zinc-800">•</span>
                <span>Zero Generic Templates</span>
                <span className="text-zinc-800">•</span>
                <span>24h Initial Concept Delivery</span>
              </div>
            </div>

            {/* Right Column: Layered Editorial Photography & Mockup Composition */}
            <div className="lg:col-span-5 xl:col-span-5 hidden lg:flex justify-center items-center js-parallax-right">
              <div className="relative w-full aspect-[4/5] max-w-[420px] select-none js-hero-media">
                {/* ── Editorial Film Frame ── */}
                <FilmFrame
                  src="/hero-cafe-editorial.png"
                  alt="Studio Mysore Editorial Atmosphere"
                  frameLabel="STUDIO MYSORE • 35MM FRAME 01"
                  theme="neutral"
                  contrast="normal"
                  vignette={true}
                  colorGrade="warm"
                  aspectRatio="4/5"
                  className="w-[92%] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]"
                />

                {/* ── Interactive Phone Mockup — Overlapping ── */}
                <div className="absolute bottom-0 -right-4 w-[250px] sm:w-[270px] z-10 drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <CafePhoneMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
