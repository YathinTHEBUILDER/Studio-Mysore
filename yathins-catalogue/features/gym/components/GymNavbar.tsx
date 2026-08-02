"use client";

import * as React from "react";
import Link from "next/link";
import { Dumbbell, Calendar, ArrowLeft, Flame } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface GymNavbarProps {
  onOpenTrial: () => void;
}

export const GymNavbar: React.FC<GymNavbarProps> = ({ onOpenTrial }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-2xl border-b border-indigo-500/30 py-3.5">
      <Container variant="wide" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-300/70 hover:text-indigo-200 transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalogue</span>
          </Link>
          <div className="h-4 w-[1px] bg-indigo-900/40" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-tl-xl rounded-br-xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-lime-400 shadow-inner">
              <Dumbbell className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-sans font-black text-lg text-white uppercase tracking-wider italic block leading-tight">
                PULSE FITNESS CLUB
              </span>
              <span className="text-[10px] font-mono text-lime-400 font-bold tracking-widest uppercase block pt-0.5">
                BOUTIQUE HIIT • TURNSTILE QR ACCESS
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-tl-lg rounded-br-lg bg-indigo-950/80 border border-indigo-500/40 text-lime-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-lime-400 animate-pulse" />
            <span>🔥 42% Live Capacity</span>
          </div>

          <button
            onClick={onOpenTrial}
            className="flex items-center gap-2 px-5 py-2.5 rounded-tl-xl rounded-br-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-indigo-600/30 border border-indigo-400/40"
          >
            <Calendar className="w-4 h-4" />
            <span>Claim Free Day Pass</span>
          </button>
        </div>
      </Container>
    </header>
  );
};

