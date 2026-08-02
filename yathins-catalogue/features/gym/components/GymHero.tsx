"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Dumbbell, Zap, Flame, Trophy } from "lucide-react";

import { FilmFrame } from "@/components/ui/FilmFrame";

interface GymHeroProps {
  onOpenTrial: () => void;
}

export const GymHero: React.FC<GymHeroProps> = ({ onOpenTrial }) => {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-black via-indigo-950/30 to-black overflow-hidden border-b border-indigo-500/30">
      {/* High Energy Electric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-indigo-600/20 to-lime-500/15 rounded-full blur-[170px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-tl-xl rounded-br-xl bg-zinc-950 border-2 border-lime-500/80 text-lime-400 text-xs font-mono font-black tracking-widest uppercase shadow-2xl">
              <Zap className="w-4 h-4 text-lime-400 fill-lime-400" />
              <span>Heavy Iron & Functional Athletic Lab</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tight italic text-transparent bg-clip-text bg-gradient-to-r from-white via-lime-200 to-lime-500 leading-[1.02]">
              Unleash peak power. <br className="hidden sm:inline" />
              <span className="text-lime-400 font-black">Dominate limits.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-sans font-semibold">
              Heavy iron strength suite, Olympic powerlifting platforms, high-octane HIIT conditioning, and 24/7 biometric turnstile access.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-mono font-black uppercase tracking-wider text-lime-400 border-t border-zinc-800 max-w-xl">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-lime-400" />
                <span>Olympic Weightlifting Rigs</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-lime-400" />
                <span>Infrared Sauna & Recovery Suite</span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <FilmFrame
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
              alt="Pulse Fitness Heavy Iron Gym Floor"
              frameLabel="ATHLETIC LAB • 35MM FRAME"
              theme="lime"
              contrast="high"
              colorGrade="vibrant"
              vignette={true}
              aspectRatio="4/3"
              className="w-full"
            >
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-black/90 backdrop-blur-md border border-lime-500/40 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-mono font-bold text-lime-400 uppercase tracking-widest block">Live Gym Floor Occupancy</span>
                  <span className="text-xs sm:text-sm font-sans font-black text-white italic uppercase block pt-0.5">34% Capacity (Peak Open)</span>
                </div>
                <div className="w-9 h-9 rounded-sm bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-lime-400 shrink-0">
                  <Flame className="w-4.5 h-4.5 text-lime-400" />
                </div>
              </div>
            </FilmFrame>
          </m.div>
        </div>
      </Container>
    </section>
  );
};

