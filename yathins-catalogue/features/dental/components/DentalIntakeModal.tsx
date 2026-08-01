"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { DentalService, DentalDoctor } from "../types";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";

interface DentalIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: DentalService;
  doctor: DentalDoctor;
  date: string;
  slot: string;
  onComplete: (name: string, phone: string, email: string, insurance?: string) => void;
}

export const DentalIntakeModal: React.FC<DentalIntakeModalProps> = ({
  isOpen,
  onClose,
  service,
  doctor,
  date,
  slot,
  onComplete,
}) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [insurance, setInsurance] = React.useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    onComplete(name, phone, email, insurance);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl text-white space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h3 className="font-display text-xl font-semibold">Patient Intake Form</h3>
              <span className="text-xs font-mono text-sky-400">Apex Dental Studio Booking</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Booking Summary */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs font-mono text-zinc-300">
            <div className="flex justify-between">
              <span className="text-zinc-500">Service:</span>
              <span className="text-white font-bold">{service.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Practitioner:</span>
              <span className="text-sky-400 font-bold">{doctor.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Scheduled:</span>
              <span className="text-white font-bold">{date} @ {slot}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Patient Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Mobile Phone (SMS Reminders)</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Email Address (Calendar Invite)</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Insurance Provider (Optional)</label>
                <input
                  type="text"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  placeholder="e.g. Cigna, Aetna, Star Health..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center gap-3 text-xs font-mono text-zinc-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>HIPAA Compliant Encrypted Patient Portal</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-sky-600 text-white hover:bg-sky-500 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm Dental Appointment</span>
            </button>
          </form>
        </m.div>
      </div>
    </AnimatePresence>
  );
};
