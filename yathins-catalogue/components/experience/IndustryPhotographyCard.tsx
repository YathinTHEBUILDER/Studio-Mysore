"use client";

/**
 * IndustryPhotographyCard — Editorial Visual & Photography Showcase
 *
 * Displays rich, dark-mode visual atmosphere for each industry.
 * Dynamically updates visual theme, feature highlights, and business metrics.
 */

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import type { IndustryId } from "@/types/experience";

interface IndustryPhotographyCardProps {
  industryId: IndustryId;
  accentHex: string;
}

interface PhotographyData {
  title: string;
  subtitle: string;
  badge: string;
  imageBg: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
}

const PHOTOGRAPHY_DATA: Record<IndustryId, PhotographyData> = {
  cafe: {
    title: "Artisanal Coffee & Bakery Workflow",
    subtitle: "Built to handle morning rushes with zero table friction.",
    badge: "Cafe & Bakery",
    imageBg: "radial-gradient(ellipse at top left, #2D1C13 0%, #140C08 50%, #09090B 100%)",
    highlights: [
      "Table QR Ordering",
      "Real-Time Kitchen Display",
      "Single-Tap Digital Payments",
    ],
    metrics: [
      { label: "Order Speed", value: "3x Faster" },
      { label: "Table Turnover", value: "+38%" },
    ],
  },
  restaurant: {
    title: "Fine Dining & Hospitality Workflow",
    subtitle: "Designed to build anticipation from booking to final dessert.",
    badge: "Restaurant & Dining",
    imageBg: "radial-gradient(ellipse at top left, #360B1C 0%, #17040C 50%, #09090B 100%)",
    highlights: [
      "Frictionless Table Booking",
      "Digital Tasting Menus",
      "Automated Sommelier Pairings",
    ],
    metrics: [
      { label: "No-Show Rate", value: "-62%" },
      { label: "Guest Satisfaction", value: "4.9/5" },
    ],
  },
  dental: {
    title: "Modern Clinical Trust Workflow",
    subtitle: "Reassuring patient journeys that turn one-time visits into lifelong care.",
    badge: "Dental Clinic",
    imageBg: "radial-gradient(ellipse at top left, #0B2242 0%, #040E1D 50%, #09090B 100%)",
    highlights: [
      "Self-Service 24/7 Booking",
      "Interactive Care Overviews",
      "Automated SMS Reminders",
    ],
    metrics: [
      { label: "Admin Hours Saved", value: "15 hrs/wk" },
      { label: "Online Bookings", value: "84%" },
    ],
  },
  medical: {
    title: "Streamlined Care & Triage Workflow",
    subtitle: "Calm, transparent consultation scheduling for patients and staff.",
    badge: "Medical Clinic",
    imageBg: "radial-gradient(ellipse at top left, #0A2E2A 0%, #041412 50%, #09090B 100%)",
    highlights: [
      "In-Person & Telehealth Triage",
      "Lobby Digital QR Check-in",
      "Instant Doctor Sync",
    ],
    metrics: [
      { label: "Lobby Wait Time", value: "-45%" },
      { label: "Patient Intake", value: "100% Digital" },
    ],
  },
  gym: {
    title: "Boutique Athletic Community Workflow",
    subtitle: "High-energy member onboarding that drives retention and class fill-rates.",
    badge: "Gym & Fitness Studio",
    imageBg: "radial-gradient(ellipse at top left, #1B1A47 0%, #0A0A1F 50%, #09090B 100%)",
    highlights: [
      "1-Tap Class Spot Reservation",
      "Turnstile QR Entry Pass",
      "Personal Trainer Booking",
    ],
    metrics: [
      { label: "Class Occupancy", value: "94%" },
      { label: "Member Retention", value: "+42%" },
    ],
  },
};

export function IndustryPhotographyCard({
  industryId,
  accentHex,
}: IndustryPhotographyCardProps) {
  const data = PHOTOGRAPHY_DATA[industryId];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-zinc-800/80 bg-zinc-900/40 shadow-xl transition-all">
      {/* Background Animated Gradient Backdrop */}
      <AnimatePresence mode="wait">
        <m.div
          key={industryId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: data.imageBg }}
        />
      </AnimatePresence>

      {/* Card Content Top */}
      <div className="relative z-10 space-y-4">
        {/* Industry Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest uppercase bg-zinc-900/80 text-zinc-300 border border-zinc-800">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentHex }} />
          {data.badge}
        </div>

        {/* Dynamic Title & Subtitle */}
        <AnimatePresence mode="wait">
          <m.div
            key={industryId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="space-y-1.5"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight leading-snug">
              {data.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              {data.subtitle}
            </p>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Card Content Bottom: Feature Highlights & Metrics */}
      <div className="relative z-10 space-y-5 pt-6 mt-6 border-t border-zinc-800/80">
        {/* Workflow Feature Chips */}
        <AnimatePresence mode="wait">
          <m.div
            key={industryId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-2"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
              Core Business Workflow
            </span>
            <div className="flex flex-wrap gap-2">
              {data.highlights.map((feat) => (
                <div
                  key={feat}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300"
                >
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </m.div>
        </AnimatePresence>

        {/* Business Metrics */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {data.metrics.map((m) => (
            <div
              key={m.label}
              className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80"
            >
              <div className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                {m.value}
              </div>
              <div className="text-[11px] font-mono text-zinc-500 tracking-wide mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

IndustryPhotographyCard.displayName = "IndustryPhotographyCard";

