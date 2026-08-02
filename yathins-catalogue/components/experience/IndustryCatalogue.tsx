"use client";

/**
 * IndustryCatalogue — Experience Catalogue
 *
 * Section ID: #experiences
 * Premium cover page entry points for 5 business experiences:
 *  1. Café ☕
 *  2. Restaurant 🍽
 *  3. Dental Clinic 🦷
 *  4. Medical Clinic 🏥
 *  5. Gym 💪
 *
 * Each card features strictly:
 *  - Large photography
 *  - Industry title
 *  - One short sentence
 *  - One CTA button
 *  - Nothing else
 *
 * Clicking a card navigates directly to the complete experience page.
 */

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CatalogueItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  sentence: string;
  cta: string;
  route: string;
  imageUrl: string;
  gridSpanClass: string;
}

export const CATALOGUE_ITEMS: CatalogueItem[] = [
  {
    id: "cafe",
    slug: "cafe",
    number: "01 / 05",
    title: "Café",
    sentence: "Less time taking orders.\nMore time making coffee.",
    cta: "Explore Café Website",
    route: "/experiences/cafe",
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=90",
    gridSpanClass: "lg:col-span-2",
  },
  {
    id: "restaurant",
    slug: "restaurant",
    number: "02 / 05",
    title: "Restaurant",
    sentence: "Let guests view menus and order right from their table.",
    cta: "Explore Restaurant Website",
    route: "/experiences/restaurant",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
    gridSpanClass: "lg:col-span-2",
  },
  {
    id: "dental",
    slug: "dental",
    number: "03 / 05",
    title: "Dental Clinic",
    sentence: "Patients book appointments online without needing to call.",
    cta: "Explore Dental Website",
    route: "/experiences/dental",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=90",
    gridSpanClass: "lg:col-span-2",
  },
  {
    id: "medical",
    slug: "medical-clinic",
    number: "04 / 05",
    title: "Medical Clinic",
    sentence: "Patients find answers and book visits before stepping inside.",
    cta: "Explore Medical Website",
    route: "/experiences/medical-clinic",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=90",
    gridSpanClass: "lg:col-span-3",
  },
  {
    id: "gym",
    slug: "gym",
    number: "05 / 05",
    title: "Gym",
    sentence: "New members pick a plan and sign up in seconds.",
    cta: "Explore Gym Website",
    route: "/experiences/gym",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90",
    gridSpanClass: "lg:col-span-3",
  },
];

export function IndustryCatalogue() {
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
      // Orchestrated master timeline for Industry Catalogue section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // 1. Section Header entrance
      tl.fromTo(
        ".js-catalogue-header",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power4.out",
        }
      );

      // 2. Cards stagger-reveal in overlap BEFORE header animation finishes
      const cards = gsap.utils.toArray<HTMLElement>(".js-catalogue-card-container");
      tl.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.55"
      );

      // 3. Image clip-path unwrapping & scale-down synchronized across cards
      cards.forEach((card, idx) => {
        const img = card.querySelector(".js-catalogue-card-img");
        if (img) {
          tl.fromTo(
            img,
            {
              clipPath: "inset(6% 6% 6% 6% round 2px)",
              scale: 1.08,
            },
            {
              clipPath: "inset(0% 0% 0% 0% round 2px)",
              scale: 1.0,
              duration: 1.1,
              ease: "power4.out",
            },
            `-=${0.75 - idx * 0.05}` // Continuous fluid stagger overlap
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMounted, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="relative py-36 sm:py-48 lg:py-56 bg-zinc-950 border-t border-zinc-900 overflow-hidden"
      aria-label="Experience Catalogue"
    >
      <div className="container-wide w-full relative z-10 space-y-20 lg:space-y-24">
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div
          className={cn(
            "max-w-4xl space-y-6 js-catalogue-header",
            isMounted && !prefersReducedMotion && "opacity-0"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-zinc-700" />
            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-zinc-400">
              Experience Catalogue
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold text-white tracking-tight leading-[1.02]">
            Try a website built for your industry.
          </h2>

          <p className="text-zinc-400 text-lg sm:text-2xl font-light leading-relaxed max-w-2xl">
            Explore complete, production-grade applications tailored to different business models.
          </p>
        </div>

        {/* ── Editorial Experience Cards Grid ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {CATALOGUE_ITEMS.map((item) => (
            <div
              key={item.id}
              className={cn(
                "h-full js-catalogue-card-container",
                isMounted && !prefersReducedMotion && "opacity-0",
                item.gridSpanClass
              )}
            >
              <Link
                href={item.route}
                className={cn(
                  "group relative flex flex-col justify-between rounded-sm p-1 overflow-hidden h-full min-h-[500px] sm:min-h-[560px]",
                  "bg-zinc-950/90 border border-zinc-800/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]",
                  "transition-all duration-700 ease-out hover:-translate-y-2 hover:border-zinc-500/50 hover:shadow-black/95 cursor-pointer block"
                )}
              >
                {/* 1. Cinematic Film Frame Still */}
                <div className="absolute inset-1 z-0 overflow-hidden pointer-events-none rounded-none">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] transition-transform duration-1000 ease-out group-hover:scale-105 js-catalogue-card-img"
                    style={
                      isMounted && !prefersReducedMotion
                        ? { clipPath: "inset(6% 6% 6% 6% round 2px)" }
                        : undefined
                    }
                  />
                  {/* Subtle Radial Vignette Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(9,9,11,0.85)_100%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/20 group-hover:via-zinc-950/65 transition-colors duration-500" />
                </div>

                {/* 2. Film Frame Content Layout */}
                <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10">
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-6">
                    <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                      {item.number}
                    </span>
                  </div>

                  {/* 3. One Editorial Sentence */}
                  <div className="my-auto py-10">
                    <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-zinc-100 leading-snug tracking-tight group-hover:text-white transition-colors duration-300 whitespace-pre-line">
                      {item.sentence}
                    </p>
                  </div>

                  {/* 4. Action CTA Indicator */}
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-800/60">
                    <span className="font-mono text-xs text-zinc-300 font-medium tracking-wide uppercase group-hover:text-white transition-colors">
                      {item.cta}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-950 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

IndustryCatalogue.displayName = "IndustryCatalogue";
