"use client";

/**
 * ExperienceSwitcher — Homepage Live Product Demonstration Section
 *
 * Placed immediately below the Hero section (#experiences).
 * Demonstrates that Studio Mysore builds completely different, tailored experiences for different businesses:
 *  1. Café & Bakery ☕
 *  2. Restaurant & Dining 🍽
 *  3. Dental Clinic 🦷
 *  4. Medical Clinic 🏥
 *  5. Gym & Fitness 💪
 */

import * as React from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import type { IndustryId } from "@/types/experience";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { MessageCircle } from "lucide-react";

// Phone Frame & Device Demos
import { LiveDeviceFrame, LiveCafeDemo } from "@/features/demo";
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
    headline: "Built around your café's daily rhythm.",
    copy: "Customers scan the QR code and order from their table. Your staff stay focused on making great coffee.",
    whatsappPrompt: "Hi Studio Mysore, I run a café and would like to build a website for my business.",
  },
  restaurant: {
    id: "restaurant",
    label: "Restaurant",
    emoji: "🍽",
    accentHex: "#E11D48",
    tagline: "TABLE RESERVATIONS & MENUS",
    headline: "Built around your dining room.",
    copy: "Guests browse your menu, pick a table time, and order. Your team focus on serving great food.",
    whatsappPrompt: "Hi Studio Mysore, I own a restaurant and would like to build a website for my business.",
  },
  dental: {
    id: "dental",
    label: "Dental",
    emoji: "🦷",
    accentHex: "#3B82F6",
    tagline: "PATIENT SCHEDULING & CARE",
    headline: "Built around patient trust.",
    copy: "Patients book appointments online when it suits them. Your receptionist spends less time answering calls.",
    whatsappPrompt: "Hi Studio Mysore, I manage a dental clinic and want to simplify patient bookings.",
  },
  medical: {
    id: "medical",
    label: "Medical Clinic",
    emoji: "🏥",
    accentHex: "#14B8A6",
    tagline: "CONSULTATIONS & PATIENT INTAKE",
    headline: "Built around patient care.",
    copy: "Patients pick a doctor and book an appointment slot online. Your front desk stays calm during peak hours.",
    whatsappPrompt: "Hi Studio Mysore, I'd like to discuss a patient booking website for my medical clinic.",
  },
  gym: {
    id: "gym",
    label: "Gym",
    emoji: "💪",
    accentHex: "#6366F1",
    tagline: "CLASS PASSES & MEMBERSHIPS",
    headline: "Built around your community.",
    copy: "New members explore plans, book trial sessions, and join online. Your trainers spend more time coaching.",
    whatsappPrompt: "Hi Studio Mysore, I run a gym and want to build a member booking website.",
  },
};

export function ExperienceSwitcher() {
  const [activeId, setActiveId] = React.useState<IndustryId>("cafe");
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const activeConfig = INDUSTRY_CONFIGS[activeId];
  const whatsappUrl = buildWhatsAppUrl(activeConfig.whatsappPrompt);

  const industryIds: IndustryId[] = ["cafe", "restaurant", "dental", "medical", "gym"];

  // Accessible keyboard navigation for tabs (Arrow keys / Home / End)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (index + 1) % industryIds.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (index - 1 + industryIds.length) % industryIds.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = industryIds.length - 1;
    }

    if (nextIndex !== index) {
      setActiveId(industryIds[nextIndex]);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="experiences"
      className="relative py-[120px] sm:py-[160px] bg-background border-t border-zinc-800/60 overflow-hidden"
      aria-label="Interactive Product Demonstration by Industry"
    >
      {/* Subtle Ambient Background Soft Lighting */}
      <m.div
        key={activeId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[140px]"
        style={{
          background: `radial-gradient(circle, ${activeConfig.accentHex} 0%, transparent 70%)`,
        }}
      />

      <div className="container-wide w-full relative z-10 space-y-16 lg:space-y-20">
        {/* ── Section Header & Industry Selector Tabs ───────────────────── */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-zinc-800" />
            <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-zinc-400">
              Product Demonstration
            </span>
            <div className="w-8 h-[1px] bg-zinc-800" />
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-5xl font-display font-semibold text-white tracking-tight leading-tight">
            We build around the way your business works.
          </h2>

          {/* Industry Tab Navigation Bar */}
          <div className="w-full pt-4 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-4">
            <div
              role="tablist"
              aria-label="Select business vertical"
              className="inline-flex items-center gap-2 p-2 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 shadow-sm"
            >
              {INDUSTRIES.map((ind, index) => {
                const isActive = activeId === ind.id;
                const config = INDUSTRY_CONFIGS[ind.id];

                return (
                  <button
                    key={ind.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={`experience-tab-${ind.id}`}
                    aria-selected={isActive}
                    aria-controls={`experience-panel-${ind.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(ind.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="relative px-6 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 min-h-[40px]"
                    style={{
                      color: isActive ? "#FFFFFF" : "#A1A1AA",
                    }}
                  >
                    <span aria-hidden="true">{config.emoji}</span>
                    <span>{config.label}</span>

                    {isActive && (
                      <m.div
                        layoutId="experienceActiveTab"
                        className="absolute inset-0 rounded-xl z-0 bg-zinc-800 border border-zinc-700/80"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Main Showcase Grid (Split 2-Column Showcase) ─────────────── */}
        <div
          role="tabpanel"
          id={`experience-panel-${activeId}`}
          aria-labelledby={`experience-tab-${activeId}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* ── LEFT COLUMN (7 cols): Copy + Photography Showcase ────── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10 min-h-[500px]">
            {/* Dynamic Headline & Copy Block */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <span
                    className="text-xs font-mono font-semibold uppercase tracking-[0.25em] block"
                    style={{ color: activeConfig.accentHex }}
                  >
                    {activeConfig.tagline}
                  </span>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[1.08]">
                    {activeConfig.headline}
                  </h3>

                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                    {activeConfig.copy}
                  </p>
                </m.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  href={`/experiences/${activeId === "medical" ? "medical-clinic" : activeId}`}
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-100 transition-all shadow-md active:scale-98"
                >
                  <span>Try It Yourself</span>
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium hover:bg-zinc-800 transition-all shadow-md active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Chat on WhatsApp</span>
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
              <LiveDeviceFrame title={`${activeConfig.label} Live Demo`}>
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.28 }}
                    className="w-full h-full"
                  >
                    {activeId === "cafe" && <LiveCafeDemo />}
                    {activeId === "restaurant" && <RestaurantPhoneMockup />}
                    {activeId === "dental" && <DentalPhoneMockup />}
                    {activeId === "medical" && <MedicalPhoneMockup />}
                    {activeId === "gym" && <GymPhoneMockup />}
                  </m.div>
                </AnimatePresence>
              </LiveDeviceFrame>
            </div>

            {/* Interactive Prompt Hint */}
            <div className="mt-6 text-center">
              <span className="text-xs font-mono text-zinc-500 tracking-wider flex items-center gap-2 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Interactive preview — tap to test flow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ExperienceSwitcher.displayName = "ExperienceSwitcher";

