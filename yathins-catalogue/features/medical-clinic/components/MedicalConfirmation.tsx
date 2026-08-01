"use client";

import * as React from "react";
import { m } from "framer-motion";
import { MedicalAppointment } from "../types";
import { CheckCircle2, Clock, Video, Stethoscope, ArrowRight } from "lucide-react";

interface MedicalConfirmationProps {
  appointment: MedicalAppointment;
  onReset: () => void;
}

export const MedicalConfirmation: React.FC<MedicalConfirmationProps> = ({
  appointment,
  onReset,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-zinc-900/90 border border-teal-500/30 text-white shadow-2xl text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-teal-400 block">
          Consultation Confirmed • {appointment.id}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Telehealth Room & Appointment Ready!
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          Thank you, <strong className="text-white">{appointment.patientName}</strong>. Your encrypted video room link has been dispatched to {appointment.patientEmail}.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left p-4 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-teal-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Scheduled Time</span>
            <span className="text-white font-bold text-sm">{appointment.date}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Stethoscope className="w-5 h-5 text-teal-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Attending Doctor</span>
            <span className="text-white font-bold text-sm">{appointment.doctor.name}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white hover:bg-teal-500 font-semibold text-xs transition-all shadow-md"
      >
        <Video className="w-4 h-4" />
        <span>Book Another Consultation</span>
      </button>
    </m.div>
  );
};
