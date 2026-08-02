"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Calendar, Wine, Star } from "lucide-react";

import { FilmFrame } from "@/components/ui/FilmFrame";

interface RestaurantHeroProps {
  onOpenReserve: () => void;
}

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({ onOpenReserve }) => {
  return (
    <section className="relative pt-16 pb-24 bg-gradient-to-b from-stone-950 via-rose-950/20 to-stone-950 overflow-hidden border-b border-amber-500/20">
      {/* Candlelit Evening Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-rose-900/15 to-amber-600/15 rounded-full blur-[170px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-[#120B0F] border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-serif tracking-[0.3em] uppercase shadow-2xl">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span>Michelin Guide Selected • Evening Tasting Room</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#FAF6ED] tracking-wide leading-[1.08]">
              An Unforgettable <br className="hidden sm:inline" />
              <span className="italic text-[#D4AF37] font-serif font-light">Culinary Opera.</span>
            </h1>

            <p className="text-base sm:text-lg text-amber-100/70 max-w-xl leading-relaxed font-serif italic font-light">
              Experience an intimate multi-sensory tasting menu. Curated by Executive Chef Antoine Vance with Sommelier-paired Grand Cru vintages under ambient candlelight.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-5">
              <button
                onClick={onOpenReserve}
                className="flex items-center gap-3 px-9 py-4 rounded-none bg-[#D4AF37] text-stone-950 font-serif text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#F3E5AB] transition-all duration-700 shadow-2xl shadow-[#D4AF37]/20 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve An Evening Table</span>
              </button>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <FilmFrame
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop"
              alt="Fine Dining Evening Ambiance"
              frameLabel="SOMMELIER SELECTION • 35MM FRAME"
              theme="rose"
              contrast="normal"
              colorGrade="warm"
              vignette={true}
              aspectRatio="4/3"
              className="w-full"
            >
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-none bg-stone-950/90 backdrop-blur-xl border border-amber-500/30 flex items-center justify-between shadow-2xl">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.25em] block">Sommelier Selection</span>
                  <span className="text-xs sm:text-sm font-serif text-amber-100 block pt-0.5">7-Course Chef's Tasting & Grand Cru Pairing</span>
                </div>
                <div className="w-9 h-9 rounded-none bg-rose-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Wine className="w-4.5 h-4.5" />
                </div>
              </div>
            </FilmFrame>
          </m.div>
        </div>
      </Container>
    </section>
  );
};

