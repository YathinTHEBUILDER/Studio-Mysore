"use client";

import * as React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export interface ExperienceItem {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  sentence: string;
  cta: string;
  route: string;
  image: string;
  gridSpanClass: string;
}

export const EXPERIENCES_LIST: ExperienceItem[] = [
  {
    id: "cafe",
    slug: "cafe",
    title: "Café",
    emoji: "☕",
    sentence: "Less time taking orders.\nMore time making coffee.",
    cta: "Open Café Experience",
    route: "/experiences/cafe",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    gridSpanClass: "lg:col-span-2",
  },
  {
    id: "restaurant",
    slug: "restaurant",
    title: "Restaurant",
    emoji: "🍽",
    sentence: "Give customers a better dining experience.",
    cta: "Open Restaurant Experience",
    route: "/experiences/restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gridSpanClass: "lg:col-span-2",
  },
  {
    id: "dental",
    slug: "dental",
    title: "Dental Clinic",
    emoji: "🦷",
    sentence: "Appointments shouldn't require a phone call.",
    cta: "Open Dental Experience",
    route: "/experiences/dental",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    gridSpanClass: "lg:col-span-2",
  },
  {
    id: "medical",
    slug: "medical-clinic",
    title: "Medical Clinic",
    emoji: "🏥",
    sentence: "Help patients before they arrive.",
    cta: "Open Medical Experience",
    route: "/experiences/medical-clinic",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    gridSpanClass: "lg:col-span-3",
  },
  {
    id: "gym",
    slug: "gym",
    title: "Gym",
    emoji: "💪",
    sentence: "Make joining your gym simple.",
    cta: "Open Gym Experience",
    route: "/experiences/gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    gridSpanClass: "lg:col-span-3",
  },
];

export const ExperienceDirectoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950">
      <Container variant="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {EXPERIENCES_LIST.map((exp, index) => (
            <m.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cn("h-full", exp.gridSpanClass)}
            >
              <Link
                href={exp.route}
                className={cn(
                  "group relative flex flex-col justify-between rounded-sm p-1 overflow-hidden h-full min-h-[460px] sm:min-h-[500px]",
                  "bg-zinc-950/90 border border-zinc-800/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]",
                  "transition-all duration-700 ease-out hover:-translate-y-2 hover:border-zinc-500/50 hover:shadow-black/95 cursor-pointer block"
                )}
              >
                {/* 1. Cinematic 35mm Film Still */}
                <div className="absolute inset-1 z-0 overflow-hidden pointer-events-none rounded-none">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(9,9,11,0.85)_100%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/20 group-hover:via-zinc-950/65 transition-colors duration-500" />
                </div>

                {/* 2. Film Frame Content Layout */}
                <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl" role="img" aria-label={exp.title}>
                      {exp.emoji}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                      {exp.title}
                    </h3>
                  </div>

                  {/* 3. One Short Sentence */}
                  <div className="my-auto py-8">
                    <p className="font-display text-2xl sm:text-3xl font-light text-zinc-100 leading-snug tracking-tight group-hover:text-white transition-colors duration-300 whitespace-pre-line">
                      "{exp.sentence}"
                    </p>
                  </div>

                  {/* 4. One CTA Button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center justify-between w-full px-6 py-4 rounded-full bg-white text-zinc-950 font-semibold text-sm transition-all duration-300 group-hover:bg-amber-400 group-hover:text-zinc-950 shadow-md group-hover:shadow-xl">
                      <span>{exp.cta}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
