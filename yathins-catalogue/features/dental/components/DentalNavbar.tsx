"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowLeft, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface DentalNavbarProps {
  onOpenBooking: () => void;
}

export const DentalNavbar: React.FC<DentalNavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-2xl border-b border-sky-500/20 py-4">
      <Container variant="wide" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-xs font-sans font-medium tracking-wide text-sky-200/70 hover:text-sky-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalogue</span>
          </Link>
          <div className="h-4 w-[1px] bg-slate-800" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-sm">
              <Shield className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-sans text-base font-semibold text-slate-50 tracking-tight block leading-tight">
                Apex Dental Studio & Implantology
              </span>
              <span className="text-[10px] font-mono text-sky-400/90 tracking-wider uppercase block pt-0.5">
                Digital Smile Design • Zero Anxiety Clinic
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-sans font-semibold text-xs tracking-tight transition-all active:scale-95 shadow-lg shadow-sky-500/20"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </Container>
    </header>
  );
};

