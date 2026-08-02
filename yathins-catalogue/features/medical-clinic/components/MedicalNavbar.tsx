"use client";

import * as React from "react";
import Link from "next/link";
import { Activity, Calendar, ArrowLeft, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface MedicalNavbarProps {
  onOpenBooking: () => void;
}

export const MedicalNavbar: React.FC<MedicalNavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-xl border-b border-teal-500/20 py-3.5">
      <Container variant="wide" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-200/70 hover:text-teal-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalogue</span>
          </Link>
          <div className="h-4 w-[1px] bg-slate-800" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Activity className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-sans text-base font-semibold text-slate-100 tracking-tight block leading-tight">
                Vanguard Health & Telemedicine
              </span>
              <span className="text-[10px] font-mono text-teal-400/90 tracking-wider uppercase block pt-0.5">
                Multi-Specialty Clinic • Instant Telehealth Triage
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telehealth Active</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-sans font-semibold text-xs tracking-tight transition-all active:scale-95 shadow-md shadow-teal-600/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>
      </Container>
    </header>
  );
};

