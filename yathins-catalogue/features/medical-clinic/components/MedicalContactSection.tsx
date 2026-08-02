"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const MedicalContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950/90 border-t border-b border-teal-500/20">
      <Container variant="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-slate-100 text-xs font-mono">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-teal-500/20 space-y-2.5 shadow-lg">
            <MapPin className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-semibold text-slate-100 font-sans">Clinic Location</h4>
            <p className="text-slate-300">Vanguard Health Tower, Mysore Medical District</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-teal-500/20 space-y-2.5 shadow-lg">
            <Phone className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-semibold text-slate-100 font-sans">24/7 Helpline</h4>
            <p className="text-slate-300">+91 (800) 456-7890</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-teal-500/20 space-y-2.5 shadow-lg">
            <Clock className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-semibold text-slate-100 font-sans">Operating Hours</h4>
            <p className="text-slate-300">Mon - Sat: 8:00 AM - 9:00 PM</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-teal-500/20 space-y-2.5 shadow-lg">
            <Mail className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-semibold text-slate-100 font-sans">Records Desk</h4>
            <p className="text-slate-300">records@vanguardhealth.com</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

