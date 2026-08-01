"use client";

/**
 * IndustryPhotographyCard — Editorial Visual & Photography Showcase
 *
 * Displays rich, dark-mode photography and visual atmosphere for each industry.
 * Dynamically changes photography, feature highlights, and color atmosphere
 * when the active experience changes.
 */

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import type { IndustryId } from "@/types/experience";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";

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
    imageBg: "radial-gradient(ellipse at top left, #3D261A 0%, #170E0A 50%, #09090B 100%)",
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
    imageBg: "radial-gradient(ellipse at top left, #4A0E27 0%, #1F0510 50%, #09090B 100%)",
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
    imageBg: "radial-gradient(ellipse at top left, #0D2C54 0%, #051329 50%, #09090B 100%)",
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
    imageBg: "radial-gradient(ellipse at top left, #0E3D38 0%, #051A18 50%, #09090B 100%)",
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
    imageBg: "radial-gradient(ellipse at top left, #23225C 0%, #0E0D28 50%, #09090B 100%)",
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
    <div className="relative w-full h-full min-h-[380px] rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-white/10 shadow-2xl transition-all">
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

      {/* Decorative Photorealistic Mesh Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Card Content Top */}
      <div className="relative z-10 space-y-4">
        {/* Industry Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-white border border-white/15">
          <span className="w-2 h-2 rounded-full" style={{ background: accentHex }} />
          {data.badge}
        </div>

        {/* Dynamic Title & Subtitle */}
        <AnimatePresence mode="wait">
          <m.div
            key={industryId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight leading-snug">
              {data.title}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
              {data.subtitle}
            </p>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Card Content Bottom: Feature Highlights & Metrics */}
      <div className="relative z-10 space-y-6 pt-6 border-t border-white/10">
        {/* Workflow Feature Chips */}
        <AnimatePresence mode="wait">
          <m.div
            key={industryId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
              Core Business Workflow
            </span>
            <div className="flex flex-wrap gap-2">
              {data.highlights.map((feat) => (
                <div
                  key={feat}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-semibold text-zinc-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: accentHex }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </m.div>
        </AnimatePresence>

        {/* Business Metrics */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          {data.metrics.map((m, i) => (
            <div
              key={m.label}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight" style={{ color: accentHex }}>
                {m.value}
              </div>
              <div className="text-[11px] font-medium text-zinc-400">
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
