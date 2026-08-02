"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const MedicalCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored the Modern Health Clinic Experience and I'd like to discuss something similar for my medical practice."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-teal-950/30 via-slate-950 to-slate-950 border-t border-teal-500/20">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-xl bg-slate-900/90 border border-teal-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-semibold text-slate-100 tracking-tight">
              Let&apos;s build an organized clinical platform for your doctors.
            </h2>
            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              Tell us how your medical practice operates. We&apos;ll build a structured triage, appointment booking, and telehealth system that streamlines patient care.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-teal-600 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-teal-500 transition-all shadow-xl shadow-teal-600/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
