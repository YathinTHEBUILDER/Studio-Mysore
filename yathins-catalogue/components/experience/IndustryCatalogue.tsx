"use client";

/**
 * IndustryCatalogue — Editorial Magazine Experience Cards
 *
 * Section ID: #experiences
 * Desktop height 85vh per experience.
 * Large photograph occupying ~75% of card height.
 * Title overlays image at bottom-left alignment.
 * Button below title (opacity 0 -> 1 on hover).
 * Hover animation: image scale 1 -> 1.05, overlay opacity 40 -> 15, title translateY 10px, duration 0.4s.
 * Strictly no shadows, no borders, no glass effects, no floating badges, no extra sentence text.
 */

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CatalogueItem {
  id: string;
  slug: string;
  number?: string;
  title: string;
  sentence?: string;
  cta: string;
  route: string;
  imageUrl: string;
}

export const CATALOGUE_ITEMS: CatalogueItem[] = [
  {
    id: "cafe",
    slug: "cafe",
    title: "Café",
    cta: "Explore Café Experience",
    route: "/experiences/cafe",
    imageUrl:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "restaurant",
    slug: "restaurant",
    title: "Restaurant",
    cta: "Explore Restaurant Experience",
    route: "/experiences/restaurant",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "dental",
    slug: "dental",
    title: "Dental Clinic",
    cta: "Explore Dental Experience",
    route: "/experiences/dental",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "medical",
    slug: "medical-clinic",
    title: "Medical Clinic",
    cta: "Explore Medical Experience",
    route: "/experiences/medical-clinic",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "gym",
    slug: "gym",
    title: "Gym",
    cta: "Explore Gym Experience",
    route: "/experiences/gym",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90",
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
      const duration = 0.9;

      // Section Header Entrance
      gsap.fromTo(
        ".js-catalogue-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".js-catalogue-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Card Container Scroll Entrance
      const cards = gsap.utils.toArray<HTMLElement>(".js-catalogue-card-container");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMounted, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="relative py-[288px] sm:py-[320px] bg-background border-t border-white/10 overflow-hidden"
      aria-label="Experience Catalogue"
    >
      <div className="w-full relative z-10 space-y-28 lg:space-y-[160px] px-6 sm:px-12 lg:px-[96px] max-w-7xl mx-auto">
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="max-w-4xl space-y-6 js-catalogue-header">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-emerald-400">
              Experience Catalogue
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-[-0.035em] leading-[0.96]">
            Try a website built for your industry.
          </h2>
        </div>

        {/* ── 85vh Full Editorial Magazine Experience Cards (+96px Spacing) ── */}
        <div className="flex flex-col gap-36 sm:gap-[216px] lg:gap-[256px] w-full">
          {CATALOGUE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="w-full h-[85vh] relative overflow-hidden js-catalogue-card-container"
            >
              <Link
                href={item.route}
                className="group relative block w-full h-full overflow-hidden no-underline cursor-pointer"
              >
                {/* Large photograph: Image occupies ~78% of card height */}
                <div className="relative w-full h-[78%] sm:h-[78vh] overflow-hidden">
                  {/* Image: scale 1 -> 1.05 in 0.4s */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.05]"
                  />

                  {/* Dark overlay: opacity 40 -> 15 in 0.4s */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-400 ease-out pointer-events-none" />

                  {/* Title & Button Overlay: Bottom-left alignment */}
                  <div className="absolute inset-x-0 bottom-0 p-10 sm:p-[64px] lg:p-[96px] flex flex-col items-start gap-8 z-10">
                    {/* Title: translateY 10px in 0.4s */}
                    <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none transition-transform duration-400 ease-out group-hover:translate-y-[10px] select-none">
                      {item.title}
                    </h3>

                    {/* Button below title: opacity 0 -> 1 in 0.4s */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out inline-flex items-center gap-4 px-8 py-4 bg-white text-zinc-950 font-medium text-base tracking-wide">
                      <span>{item.cta}</span>
                      <ArrowUpRight className="w-5 h-5" />
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

