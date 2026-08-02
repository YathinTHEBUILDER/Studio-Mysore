"use client";

import * as React from "react";
import Link from "next/link";
import { Utensils, Calendar, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface RestaurantNavbarProps {
  onOpenReserve: () => void;
}

export const RestaurantNavbar: React.FC<RestaurantNavbarProps> = ({ onOpenReserve }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/95 backdrop-blur-2xl border-b border-amber-500/20 py-4">
      <Container variant="wide" className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-200/60 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalogue</span>
          </Link>
          <div className="h-4 w-[1px] bg-amber-900/40" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-rose-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
              <Utensils className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <span className="font-serif text-lg font-normal text-amber-100 tracking-wide block leading-tight">
                L'Étoile Gastronomie
              </span>
              <span className="text-[10px] font-mono text-amber-400/80 tracking-[0.25em] uppercase block pt-0.5">
                Michelin Guide Selected • Evening Dining
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenReserve}
          className="flex items-center gap-2.5 px-6 py-2.5 rounded-sm bg-gradient-to-r from-rose-950 via-rose-900 to-amber-950 border border-amber-500/40 hover:border-amber-400 text-amber-100 font-mono text-xs tracking-[0.15em] uppercase transition-all duration-500 active:scale-98 shadow-xl shadow-rose-950/50"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Reserve Table</span>
        </button>
      </Container>
    </header>
  );
};

