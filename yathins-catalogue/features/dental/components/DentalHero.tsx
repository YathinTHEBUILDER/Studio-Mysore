"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Calendar, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

import { FilmFrame } from "@/components/ui/FilmFrame";

interface DentalHeroProps {
  onOpenBooking: () => void;
}

export const DentalHero: React.FC<DentalHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-slate-950 via-sky-950/20 to-slate-950 overflow-hidden border-b border-sky-500/20">
      {/* Serene Ice Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-300 text-xs font-sans tracking-wide font-medium shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>3D Digital Dentistry & Certified Painless Protocols</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-slate-50 tracking-tight leading-[1.08]">
              Pristine modern care. <br className="hidden sm:inline" />
              <span className="text-sky-400 font-normal">Pain-free precision.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-sans font-normal">
              Experience transparent digital consultations, zero-wait check-ins, 3D intraoral imaging, and comfortable specialist dentistry in a serene clinic environment.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-sans font-medium text-slate-300 border-t border-slate-800/80 max-w-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Verified Specialist Orthodontists & Surgeons</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Transparent Upfront Pricing</span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <FilmFrame
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop"
              alt="Bright Pristine Dental Studio"
              frameLabel="CLINICAL STUDIO • 35MM FRAME"
              theme="sky"
              contrast="normal"
              colorGrade="cool"
              vignette={true}
              aspectRatio="4/3"
              className="w-full"
            >
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-slate-950/90 backdrop-blur-md border border-sky-500/30 flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block">Clinical Care Guarantee</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-50 block pt-0.5">3D AI Intraoral Scan & Painless Sedation</span>
                </div>
                <div className="w-9 h-9 rounded-sm bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </FilmFrame>
          </m.div>
        </div>
      </Container>
    </section>
  );
};

