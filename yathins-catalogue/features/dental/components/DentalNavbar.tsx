"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface DentalNavbarProps {
  onOpenBooking: () => void;
}

export const DentalNavbar: React.FC<DentalNavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-xl border-b border-sky-900/20 py-4">
      <Container variant="wide" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalogue</span>
          </Link>
          <div className="h-4 w-[1px] bg-zinc-800" />
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display text-base font-semibold text-white tracking-tight block leading-tight">
                Apex Dental Studio & Implantology
              </span>
              <span className="text-[10px] font-mono text-sky-400/80 tracking-wider uppercase block">
                Digital Smile Design • Zero Anxiety Clinic
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs tracking-wide transition-all active:scale-95 shadow-lg shadow-sky-600/20"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </Container>
    </header>
  );
};
