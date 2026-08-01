"use client";

/**
 * IndustryCatalogue — Homepage Entrance to Industry Experiences
 *
 * Section ID: #experiences
 * Displays premium entrance cards for 5 industries:
 *  1. Café & Bakery ☕
 *  2. Restaurant & Dining 🍽
 *  3. Dental Clinic 🦷
 *  4. Medical Clinic 🏥
 *  5. Gym & Fitness 💪
 *
 * Hover interactions are subtle. Clicking a card navigates directly to the dedicated page.
 */

import * as React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryItem {
  id: string;
  slug: string;
  emoji: string;
  badge: string;
  title: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  imageUrl: string;
}

const INDUSTRY_ITEMS: IndustryItem[] = [
  {
    id: "cafe",
    slug: "cafe",
    emoji: "☕",
    badge: "Café & Bakery",
    title: "Artisan Coffee & QR Ordering",
    description:
      "Customers scan the QR code, order drinks, and pay from their table without waiting at the counter.",
    accentColor: "#A0785A",
    bgGradient: "radial-gradient(circle at 80% 20%, rgba(160, 120, 90, 0.15) 0%, rgba(9, 9, 11, 0.95) 70%)",
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "restaurant",
    slug: "restaurant",
    emoji: "🍽",
    badge: "Restaurant & Dining",
    title: "Dining & Table Reservations",
    description:
      "Guests reserve tables online, explore your menu, and place orders directly to your kitchen.",
    accentColor: "#E11D48",
    bgGradient: "radial-gradient(circle at 80% 20%, rgba(225, 29, 72, 0.15) 0%, rgba(9, 9, 11, 0.95) 70%)",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dental",
    slug: "dental",
    emoji: "🦷",
    badge: "Dental Clinic",
    title: "Patient Care & Appointments",
    description:
      "Patients select dates and book appointments online. Your reception spends less time answering calls.",
    accentColor: "#3B82F6",
    bgGradient: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, rgba(9, 9, 11, 0.95) 70%)",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "medical",
    slug: "medical",
    emoji: "🏥",
    badge: "Medical Clinic",
    title: "Doctor Booking & Consultations",
    description:
      "Patients find the right specialist and pick a time slot online. Your daily schedule stays organised.",
    accentColor: "#14B8A6",
    bgGradient: "radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15) 0%, rgba(9, 9, 11, 0.95) 70%)",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gym",
    slug: "gym",
    emoji: "💪",
    badge: "Gym & Fitness",
    title: "Fitness Classes & Memberships",
    description:
      "Visitors explore membership plans, book trial sessions, and join online without desk delays.",
    accentColor: "#6366F1",
    bgGradient: "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, rgba(9, 9, 11, 0.95) 70%)",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
];

export function IndustryCatalogue() {
  return (
    <section
      id="experiences"
      className="relative py-28 sm:py-36 bg-background border-t border-zinc-800/60 overflow-hidden"
      aria-label="Industry Catalogue"
    >
      <div className="container-wide w-full relative z-10 space-y-16">
        
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-zinc-700" />
            <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-zinc-400">
              Industry Catalogue
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[1.05]">
            Choose your business.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Each experience below is a complete website built for a specific industry. Select yours to try it.
          </p>
        </div>

        {/* ── Industry Cards Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRY_ITEMS.map((item, index) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl overflow-hidden min-h-[380px] p-8",
                "bg-zinc-900/60 border border-zinc-800/80 shadow-xl",
                "transition-all duration-300 ease-out hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/60"
              )}
              style={{ background: item.bgGradient }}
            >
              {/* Background Editorial Image with Dark Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 transition-opacity duration-500 group-hover:opacity-30">
                <img
                  src={item.imageUrl}
                  alt={item.badge}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
              </div>

              {/* Card Top Content */}
              <div className="relative z-10 space-y-6">
                {/* Badge & Emoji */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-zinc-900/90 text-zinc-300 border border-zinc-800/90">
                    <span>{item.emoji}</span>
                    <span>{item.badge}</span>
                  </div>

                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.accentColor }}
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="text-2xl font-display font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom CTA Link */}
              <div className="relative z-10 pt-8 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
                <Link
                  href={`/experiences/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
                >
                  <span>Try It Yourself</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </Link>

                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  Real Website
                </span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

IndustryCatalogue.displayName = "IndustryCatalogue";
