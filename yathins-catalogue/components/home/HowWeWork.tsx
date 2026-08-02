"use client";

/**
 * HowWeWork — Homepage Editorial Process Section
 *
 * Section ID: #how-we-work
 * Describes Studio Mysore's collaborative process across 5 key steps:
 *  1. Understand
 *  2. Plan
 *  3. Design
 *  4. Build
 *  5. Support
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "Share your daily routine, staff workflow, and how your customers buy so everything is designed for your actual operation.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "A simple, clear customer flow is mapped out to help visitors take action quickly and save your team time.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Every screen is tailored specifically to your business with clear typography and simple, uncluttered layouts.",
  },
  {
    step: "04",
    title: "Build",
    description:
      "Your website loads fast and works seamlessly across phones, tablets, and desktop screens.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "Continuous support after launch keeps your website updated and running smoothly as your business grows.",
  },
];

export function HowWeWork() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const prefersMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timer = setTimeout(() => {
      setIsMounted(true);
      setPrefersReducedMotion(prefersMotion);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!isMounted || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Orchestrated, overlapping section timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // 1. Reveal Section Header
      tl.fromTo(
        ".js-work-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power4.out",
        }
      )
      // 2. Steps begin revealing BEFORE header animation finishes
      .fromTo(
        ".js-work-step",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.55"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMounted, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-36 sm:py-48 lg:py-56 bg-background border-t border-zinc-900 overflow-hidden"
      aria-label="How It Works — Process"
    >
      <div className="container-wide w-full relative z-10 space-y-20 lg:space-y-24">
        
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div
          className={cn(
            "max-w-4xl space-y-6 js-work-header",
            isMounted && !prefersReducedMotion && "opacity-0"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-zinc-700" />
            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-zinc-400">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold text-white tracking-tight leading-[1.02]">
            Built around your business.
          </h2>

          <p className="text-zinc-400 text-lg sm:text-2xl font-light leading-relaxed max-w-2xl">
            Tell us how your business works, and your website gets built around your daily routine—not a generic template.
          </p>
        </div>

        {/* ── Editorial Process Steps Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 js-work-steps-grid">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className={cn(
                "border-t border-zinc-800/80 pt-8 sm:pt-10 flex flex-col justify-between space-y-8 group transition-all duration-500 hover:border-zinc-600/80 js-work-step",
                isMounted && !prefersReducedMotion && "opacity-0"
              )}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl sm:text-5xl lg:text-6xl text-zinc-600 font-light tracking-tight group-hover:text-zinc-300 transition-colors duration-500 block">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
                    PHASE // {item.step}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight group-hover:text-amber-400/90 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

HowWeWork.displayName = "HowWeWork";
