"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const MedicalContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-950/80 border-t border-b border-teal-900/10">
      <Container variant="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white text-xs font-mono">
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-2">
            <MapPin className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-bold text-white font-display">Clinic Location</h4>
            <p className="text-zinc-400">Vanguard Health Tower, Mysore Medical District</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-2">
            <Phone className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-bold text-white font-display">24/7 Helpline</h4>
            <p className="text-zinc-400">+91 (800) 456-7890</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-2">
            <Clock className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-bold text-white font-display">Operating Hours</h4>
            <p className="text-zinc-400">Mon - Sat: 8:00 AM - 9:00 PM</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-2">
            <Mail className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-bold text-white font-display">Records Desk</h4>
            <p className="text-zinc-400">records@vanguardhealth.com</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
