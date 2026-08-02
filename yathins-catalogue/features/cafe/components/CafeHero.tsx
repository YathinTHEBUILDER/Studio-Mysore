"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FilmFrame } from "@/components/ui/FilmFrame";
import { Clock, MapPin, Coffee, Flame } from "lucide-react";

export const CafeHero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-stone-950 via-amber-950/20 to-stone-950 overflow-hidden border-b border-amber-900/20">
      {/* Soft Ambient Warmth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/15 rounded-full blur-[160px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-serif italic tracking-wide shadow-sm">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Micro-Batch Roastery & Artisanal Bakery</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#FDF6E2] tracking-tight leading-[1.08]">
              Slow morning rituals. <br className="hidden sm:inline" />
              <span className="italic text-amber-400 font-serif font-light">Crafted with reverence.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#CDB89C] max-w-xl leading-relaxed font-sans font-normal">
              Explore shade-grown Western Ghats single origins, V60 pourovers, and fresh butter French croissants. Order ahead for express counter pickup or savour at our cupping table.
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-4 text-xs font-mono text-amber-200/70 border-t border-amber-900/40 max-w-xl">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Freshly Roasted Daily • V60 Counter (5-8 Mins)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>142 Gokulam Main Rd, Mysore</span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <FilmFrame
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop"
              alt="Artisan Coffee Roastery atmosphere"
              frameLabel="ROASTERY 35MM • YIRGACHEFFE G1"
              theme="amber"
              contrast="normal"
              colorGrade="warm"
              vignette={true}
              aspectRatio="4/3"
              className="w-full"
            >
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-stone-950/90 backdrop-blur-xl border border-amber-500/30 flex items-center justify-between shadow-2xl">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">Roaster's Note</span>
                  <span className="text-xs sm:text-sm font-serif text-amber-100 block pt-0.5">Ethiopia Yirgacheffe G1 • Natural Process</span>
                </div>
                <div className="w-8 h-8 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
              </div>
            </FilmFrame>
          </m.div>
        </div>
      </Container>
    </section>
  );
};

