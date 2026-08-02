"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Calendar, Stethoscope, Activity, CheckCircle2 } from "lucide-react";

import { FilmFrame } from "@/components/ui/FilmFrame";

interface MedicalHeroProps {
  onOpenBooking: () => void;
}

export const MedicalHero: React.FC<MedicalHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-slate-950 via-teal-950/20 to-slate-950 overflow-hidden border-b border-teal-500/20">
      {/* Surgical Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono tracking-wider uppercase">
              <Stethoscope className="w-4 h-4 text-teal-400" />
              <span>Board-Certified Specialists • Integrated Outpatient Protocol</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-slate-100 tracking-tight leading-[1.08]">
              Structured specialist care. <br className="hidden sm:inline" />
              <span className="text-teal-400 font-normal">Diagnostic clarity.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-sans font-normal">
              Access board-certified department heads, rapid triage protocols, digital electronic health record intake, and same-day clinical diagnostics.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-800/80 max-w-xl text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>AI Triage Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Same-Day Diagnostic Lab</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>EHR Encrypted</span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <FilmFrame
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
              alt="CarePoint Modern Clean Medical Center Lounge"
              frameLabel="OUTPATIENT CLINIC • 35MM FRAME"
              theme="teal"
              contrast="normal"
              colorGrade="cool"
              vignette={true}
              aspectRatio="4/3"
              className="w-full"
            >
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-slate-950/90 backdrop-blur-md border border-teal-500/30 flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block">Chief Consultant On Duty</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 block pt-0.5">Dr. Evelyn Vance, MD (Johns Hopkins)</span>
                </div>
                <div className="w-8 h-8 rounded-sm bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
              </div>
            </FilmFrame>
          </m.div>
        </div>
      </Container>
    </section>
  );
};
