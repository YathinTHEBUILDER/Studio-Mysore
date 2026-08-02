"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const DentalCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored the Precision Dental Experience and I'd like to discuss something similar for my clinic."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-sky-950/30 via-slate-950 to-slate-950 border-t border-sky-500/20">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-sky-400/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-semibold text-slate-50 tracking-tight">
              Let&apos;s build a calm, trustworthy experience for your practice.
            </h2>
            <p className="text-slate-300 text-sm font-sans leading-relaxed">
              Tell us how your dental clinic operates. We&apos;ll craft a seamless digital booking workflow that reduces front-desk load and reassures your patients.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-sky-500 text-slate-950 text-xs font-sans font-semibold uppercase tracking-wide hover:bg-sky-400 transition-all shadow-xl shadow-sky-500/20 active:scale-95"
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
