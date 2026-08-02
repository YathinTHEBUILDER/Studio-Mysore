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
      "Share your daily routine and staff workflow so every screen is built for your actual operation.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "A simple, clear customer flow is mapped out to drive quick actions and save your team time.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Uncluttered layouts tailored specifically to your business with clear visual hierarchy.",
  },
  {
    step: "04",
    title: "Build",
    description:
      "Fast, responsive code engineered to run seamlessly across all phone, tablet, and desktop screens.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "Continuous post-launch care to keep your site optimized as your business grows.",
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
      const duration = 0.9;
      const overlap = "-=0.315"; // 35% overlap (0.9 * 0.35 = 0.315s)

      gsap.set(
        [
          ".js-work-image",
          ".js-work-heading",
          ".js-work-body",
          ".js-work-steps-grid",
        ],
        {
          opacity: 0,
          y: 30,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: {
          duration,
          ease: "power4.out",
        },
      });

      // 1. Image / Eyebrow visual anchor
      timeline
        .to(".js-work-image", {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
        // 2. Heading (35% overlap)
        .to(
          ".js-work-heading",
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          overlap
        )
        // 3. Body (35% overlap)
        .to(
          ".js-work-body",
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          overlap
        )
        // 4. CTA / Steps Grid (35% overlap)
        .to(
          ".js-work-steps-grid",
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          overlap
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMounted, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-[288px] sm:py-[320px] lg:py-[320px] bg-background border-t border-white/10 overflow-hidden"
      aria-label="How It Works — Process"
    >
      <div className="container-wide w-full relative z-10 space-y-24 lg:space-y-[120px]">
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-4 js-work-image">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-emerald-400">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-[-0.03em] leading-[0.98] js-work-heading">
            Built around your business.
          </h2>

          <p className="text-zinc-400 text-lg sm:text-2xl font-light leading-relaxed max-w-[45ch] js-work-body">
            Tell us how your business works—your website gets built around your workflow.
          </p>
        </div>

        {/* ── Editorial Process Steps Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-20 lg:gap-24 js-work-steps-grid">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className={cn(
                "border-t border-zinc-800/80 pt-10 sm:pt-12 flex flex-col justify-between space-y-10 group transition-all duration-500 hover:border-zinc-600/80 js-work-step",
                isMounted && !prefersReducedMotion && "opacity-0"
              )}
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl sm:text-5xl lg:text-6xl text-zinc-600 font-light tracking-tight group-hover:text-zinc-300 transition-colors duration-500 block">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
                    PHASE // {item.step}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-[-0.025em] group-hover:text-amber-400/90 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light max-w-[50ch]">
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
