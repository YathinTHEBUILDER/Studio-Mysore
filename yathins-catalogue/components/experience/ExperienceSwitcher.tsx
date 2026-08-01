"use client";

/**
 * ExperienceSwitcher — Homepage Live Product Demonstration Section
 *
 * Placed immediately below the Hero section (#experiences).
 * Allows visitors to interactively switch between 5 industry verticals:
 *  1. Café & Bakery ☕
 *  2. Restaurant & Dining 🍽
 *  3. Dental Clinic 🦷
 *  4. Medical Clinic 🏥
 *  5. Gym & Fitness 🏋️
 *
 * Synchronized live updates upon tab selection:
 *  • Phone UI mockup updates morphing between live interactive apps
 *  • Section headline updates
 *  • Supporting copy updates
 *  • Editorial photography & metrics update
 *  • Micro-interactions update in-place without page navigation
 *
 * Sources: 07-homepage-experience.md, 08-experience-engine.md, 04-visual-design-system.md
 */

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import type { IndustryId } from "@/types/experience";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { MessageCircle, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

// Phone Mockups for each industry
import { CafePhoneMockup } from "../hero/CafePhoneMockup";
import { RestaurantPhoneMockup } from "./mockups/RestaurantPhoneMockup";
import { DentalPhoneMockup } from "./mockups/DentalPhoneMockup";
import { MedicalPhoneMockup } from "./mockups/MedicalPhoneMockup";
import { GymPhoneMockup } from "./mockups/GymPhoneMockup";
import { IndustryPhotographyCard } from "./IndustryPhotographyCard";

// ─── Industry Configuration Metadata ─────────────────────────────────────────

interface IndustryConfig {
  id: IndustryId;
  label: string;
  emoji: string;
  accentHex: string;
  tagline: string;
  headline: string;
  copy: string;
  whatsappPrompt: string;
}

const INDUSTRY_CONFIGS: Record<IndustryId, IndustryConfig> = {
  cafe: {
    id: "cafe",
    label: "Café",
    emoji: "☕",
    accentHex: "#A0785A",
    tagline: "QR ORDERING & MENU DISCOVERY",
    headline: "Built around your cafe's daily rhythm.",
    copy: "Skip lines, order directly from the table, and let baristas focus on crafting exceptional coffee rather than handling cash or taking payments.",
    whatsappPrompt: "Hi Studio Mysore, I run a Cafe & Bakery and would love to see what you can build for my business.",
  },
  restaurant: {
    id: "restaurant",
    label: "Restaurant",
    emoji: "🍽",
    accentHex: "#E11D48",
    tagline: "TABLE RESERVATIONS & TASTING MENUS",
    headline: "Built around your dining room.",
    copy: "Frictionless table reservations, digital tasting menus with wine pairings, and real-time kitchen order dispatching that elevates hospitality.",
    whatsappPrompt: "Hi Studio Mysore, I own a Restaurant and would love to discuss an editorial dining experience for my restaurant.",
  },
  dental: {
    id: "dental",
    label: "Dental",
    emoji: "🦷",
    accentHex: "#3B82F6",
    tagline: "PATIENT SCHEDULING & CARE",
    headline: "Built around patient trust.",
    copy: "Reassuring, friction-free appointment scheduling with instant specialist selection and automated calendar reminders that save receptionist hours.",
    whatsappPrompt: "Hi Studio Mysore, I manage a Dental Clinic and want to streamline patient bookings.",
  },
  medical: {
    id: "medical",
    label: "Medical Clinic",
    emoji: "🏥",
    accentHex: "#14B8A6",
    tagline: "CONSULTATIONS & PATIENT INTAKE",
    headline: "Built around patient care.",
    copy: "Streamlined doctor consultations, digital intake forms, and transparent specialist schedules that turn lobby waiting into seamless check-ins.",
    whatsappPrompt: "Hi Studio Mysore, I'd like to discuss a Medical Clinic consultation & patient booking platform.",
  },
  gym: {
    id: "gym",
    label: "Gym",
    emoji: "🏋️",
    accentHex: "#6366F1",
    tagline: "CLASS PASSES & MEMBERSHIPS",
    headline: "Built around your community.",
    copy: "Seamless member onboarding, instant boutique class pass booking, and digital turnstile QR access that drives member retention.",
    whatsappPrompt: "Hi Studio Mysore, I run a Gym & Fitness Studio and want to build a member booking experience.",
  },
};

export function ExperienceSwitcher() {
  const [activeId, setActiveId] = React.useState<IndustryId>("cafe");

  const activeConfig = INDUSTRY_CONFIGS[activeId];
  const whatsappUrl = buildWhatsAppUrl(activeConfig.whatsappPrompt);

  return (
    <section
      id="experiences"
      className="relative py-24 sm:py-32 bg-background border-t border-border/40 overflow-hidden"
      aria-label="Interactive Product Demonstration by Industry"
    >
      {/* Dynamic Ambient Background Accent Lighting */}
      <m.div
        key={activeId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 0.7 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-[140px]"
        style={{
          background: `radial-gradient(circle, ${activeConfig.accentHex} 0%, transparent 70%)`,
        }}
      />

      <div className="container-wide w-full relative z-10 space-y-12">
        {/* ── Section Header & Industry Selector Tabs ───────────────────── */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] bg-surface-elevated text-text-muted border border-border">
            <Sparkles className="w-3.5 h-3.5" style={{ color: activeConfig.accentHex }} />
            <span>Interactive Product Demonstration</span>
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-5xl font-display font-semibold text-text-primary tracking-tight leading-tight">
            See how one design system adapts to your business.
          </h2>

          {/* Industry Tab Navigation Bar */}
          <div className="w-full pt-2 flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface border border-border/80 shadow-inner">
              {INDUSTRIES.map((ind) => {
                const isActive = activeId === ind.id;
                const config = INDUSTRY_CONFIGS[ind.id];

                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveId(ind.id)}
                    className="relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-text-primary"
                    style={{
                      color: isActive ? "#FAFAFA" : "#A1A1AA",
                    }}
                  >
                    <span>{config.emoji}</span>
                    <span>{config.label}</span>

                    {isActive && (
                      <m.div
                        layoutId="experienceActiveTab"
                        className="absolute inset-0 rounded-xl z-0"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          border: `1px solid ${config.accentHex}60`,
                          boxShadow: `0 0 20px ${config.accentHex}25`,
                        }}
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Main Showcase Grid (Split 2-Column Showcase) ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN (7 cols): Copy + Photography Showcase ────── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 min-h-[520px]">
            {/* Dynamic Headline & Copy Block */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeId}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3"
                >
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.2em] block"
                    style={{ color: activeConfig.accentHex }}
                  >
                    {activeConfig.tagline}
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-text-primary tracking-tight leading-[1.05]">
                    {activeConfig.headline}
                  </h3>

                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
                    {activeConfig.copy}
                  </p>
                </m.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-text-primary text-background text-sm font-semibold hover:bg-white transition-all shadow-md active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss {activeConfig.label} Solution</span>
                </a>
              </div>
            </div>

            {/* Editorial Photography & Metrics Card */}
            <div className="w-full pt-4">
              <IndustryPhotographyCard
                industryId={activeId}
                accentHex={activeConfig.accentHex}
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN (5 cols): Interactive Phone Device Showcase ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[340px] flex justify-center">
              
              {/* Phone Frame Housing Active Industry Mockup */}
              <div
                className="relative rounded-[48px] p-2.5 transition-all duration-500 shadow-2xl"
                style={{
                  width: 300,
                  height: 610,
                  background: "linear-gradient(145deg, #1C1C1F 0%, #0C0C0E 100%)",
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.12),
                    inset 0 1.5px 1px rgba(255,255,255,0.25),
                    0 30px 60px -15px rgba(0, 0, 0, 0.9),
                    0 0 40px ${activeConfig.accentHex}20
                  `,
                }}
              >
                {/* Physical Hardware Buttons */}
                <div className="absolute -left-[3px] top-[108px] w-[3px] h-[34px] bg-zinc-700 rounded-l-sm" />
                <div className="absolute -left-[3px] top-[152px] w-[3px] h-[34px] bg-zinc-700 rounded-l-sm" />
                <div className="absolute -right-[3px] top-[128px] w-[3px] h-[52px] bg-zinc-700 rounded-r-sm" />

                {/* Inner Device Screen */}
                <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-black">
                  
                  {/* Dynamic Mockup Morphing Transition */}
                  <AnimatePresence mode="wait">
                    <m.div
                      key={activeId}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      {activeId === "cafe" && <CafePhoneMockup />}
                      {activeId === "restaurant" && <RestaurantPhoneMockup />}
                      {activeId === "dental" && <DentalPhoneMockup />}
                      {activeId === "medical" && <MedicalPhoneMockup />}
                      {activeId === "gym" && <GymPhoneMockup />}
                    </m.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Interactive Prompt Hint */}
            <div className="mt-4 text-center">
              <span className="text-[11px] font-semibold text-text-muted flex items-center gap-1.5 justify-center">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ background: activeConfig.accentHex }} />
                Tap mockup screen above to interact live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ExperienceSwitcher.displayName = "ExperienceSwitcher";
