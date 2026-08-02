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
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1800&q=90",
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
      const duration = 0.9;
      const overlap = "-=0.315"; // 35% overlap of 0.9s duration (0.9 * 0.35 = 0.315s)

      // 1. Section Header Timeline
      gsap.set(
        [
          ".js-catalogue-header-image",
          ".js-catalogue-header-heading",
        ],
        {
          opacity: 0,
          y: 30,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }
      );

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".js-catalogue-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: {
          duration,
          ease: "power4.out",
        },
      });

      headerTl
        .to(".js-catalogue-header-image", {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
        .to(
          ".js-catalogue-header-heading",
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          overlap
        );

      // 2. Individual 85vh Card Timelines (Image -> Heading -> CTA, 35% overlap, power4.out)
      const cards = gsap.utils.toArray<HTMLElement>(".js-catalogue-card-container");
      cards.forEach((card) => {
        const img = card.querySelector(".js-catalogue-card-img");
        const heading = card.querySelector(".js-catalogue-card-heading");
        const cta = card.querySelector(".js-catalogue-card-cta");

        if (img && heading && cta) {
          gsap.set([img, heading, cta], {
            opacity: 0,
            y: 30,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          });

          const cardTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            defaults: {
              duration,
              ease: "power4.out",
            },
          });

          cardTl
            .to(img, {
              opacity: 1,
              y: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            })
            .to(
              heading,
              {
                opacity: 1,
                y: 0,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              },
              overlap
            )
            .to(
              cta,
              {
                opacity: 1,
                y: 0,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              },
              overlap
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
      className="relative py-24 sm:py-36 bg-zinc-950 border-t border-zinc-900 overflow-hidden"
      aria-label="Experience Catalogue"
    >
      <div className="w-full relative z-10 space-y-16 lg:space-y-24 px-4 sm:px-8 lg:px-16">
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="max-w-4xl space-y-6 js-catalogue-header">
          <div className="flex items-center gap-4 js-catalogue-header-image">
            <div className="w-12 h-[1px] bg-zinc-700" />
            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-zinc-400">
              Experience Catalogue
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-[-0.035em] leading-[0.96] js-catalogue-header-heading">
            Try a website built for your industry.
          </h2>
        </div>

        {/* ── 85vh Full Editorial Experience Cards Sequence (One Card Visible at a Time) ── */}
        <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32 w-full">
          {CATALOGUE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="w-full h-[85vh] relative overflow-hidden js-catalogue-card-container"
            >
              <Link
                href={item.route}
                className="group relative block w-full h-full overflow-hidden no-underline border-0 shadow-none bg-transparent cursor-pointer"
              >
                {/* 1. Large Editorial Photograph Container (~80% of Viewport Height) */}
                <div className="relative w-full h-[80vh] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover js-catalogue-card-img transition-transform duration-[450ms] ease-out group-hover:scale-[1.04]"
                  />

                  {/* 2. Dark Overlay (35% -> 15% on hover) */}
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-[450ms] ease-out pointer-events-none" />

                  {/* 3. Title & Button Content directly on top of image */}
                  <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14 lg:p-20 flex flex-col items-start gap-6 z-10">
                    {/* Title sits directly on image, translateY 10px on hover */}
                    <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none transition-transform duration-[450ms] ease-out group-hover:translate-y-[10px] js-catalogue-card-heading">
                      {item.title}
                    </h3>

                    {/* Button sits below title, fades from 0 -> 1 on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] ease-out inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 font-medium text-base tracking-wide border-0 shadow-none js-catalogue-card-cta">
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
