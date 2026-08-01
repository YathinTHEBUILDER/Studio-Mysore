"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Calendar, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface DentalHeroProps {
  onOpenBooking: () => void;
}

export const DentalHero: React.FC<DentalHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-12 pb-16 bg-gradient-to-b from-zinc-950 via-sky-950/10 to-zinc-950 overflow-hidden border-b border-sky-900/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Gentle & Painless Dentistry</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-semibold text-white tracking-tight leading-[1.08]">
              Precision Dental Care & Smile Design.
            </h1>

            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              Experience stress-free dental visits with 3D intraoral scans, painless laser whitening, and instant online doctor scheduling.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 text-white font-semibold text-sm hover:bg-sky-500 transition-all shadow-xl shadow-sky-600/20 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/20 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop"
                alt="Modern Dental Operatory"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-sky-500/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block">Clinic Guarantee</span>
                  <span className="text-sm font-semibold text-white block">100% Painless Sedation Protocol</span>
                </div>
                <Sparkles className="w-5 h-5 text-sky-400" />
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
};
