"use client";

import * as React from "react";
import { m } from "framer-motion";
import { DentalAppointment } from "../types";
import { CheckCircle2, Clock, Calendar, UserCheck, ShieldCheck } from "lucide-react";

interface DentalConfirmationProps {
  appointment: DentalAppointment;
  onReset: () => void;
}

export const DentalConfirmation: React.FC<DentalConfirmationProps> = ({
  appointment,
  onReset,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-zinc-900/90 border border-sky-500/30 text-white shadow-2xl text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block">
          Appointment Scheduled • {appointment.id}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Your dental visit is confirmed!
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          Thank you, <strong className="text-white">{appointment.patientName}</strong>. A calendar invite and SMS alert have been sent.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left p-4 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-sky-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Date & Slot</span>
            <span className="text-white font-bold text-sm">{appointment.date} @ {appointment.timeSlot}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <UserCheck className="w-5 h-5 text-sky-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Attending Specialist</span>
            <span className="text-white font-bold text-sm">{appointment.doctor.name}</span>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-left text-xs font-mono space-y-1">
        <div className="flex justify-between">
          <span className="text-zinc-500">Service:</span>
          <span className="text-white font-bold">{appointment.service.title}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Estimated Duration:</span>
          <span className="text-sky-400 font-bold">{appointment.service.duration}</span>
        </div>
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-500 font-semibold text-xs transition-all shadow-md"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Another Appointment</span>
      </button>
    </m.div>
  );
};
