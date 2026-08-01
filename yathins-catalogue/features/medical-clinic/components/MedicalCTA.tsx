"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const MedicalCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored the Medical Clinic Experience and I'd like to discuss a custom website and patient booking system for my clinic."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-teal-950/20 to-zinc-950 border-t border-teal-900/20">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-teal-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-semibold text-white tracking-tight">
              Let&apos;s build something for your clinic.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Tell us how your clinic works. We&apos;ll suggest ideas that fit your doctors, your patients and the way your clinic operates.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 transition-all shadow-lg shadow-teal-600/20"
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
