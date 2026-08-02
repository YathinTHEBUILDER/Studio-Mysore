"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { MedicalDoctorProfile } from "../types";
import { X, CheckCircle2, Video, ShieldCheck, Loader2, Check } from "lucide-react";
import { useInteractionRhythm } from "@/hooks/useInteractionRhythm";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { springs } from "@/lib/tokens/transitions";

interface MedicalIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: MedicalDoctorProfile;
  mode: "video" | "in_person";
  date: string;
  onComplete: (name: string, phone: string, email: string, symptoms: string) => void;
}

export const MedicalIntakeModal: React.FC<MedicalIntakeModalProps> = ({
  isOpen,
  onClose,
  doctor,
  mode,
  date,
  onComplete,
}) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [symptoms, setSymptoms] = React.useState("");
  const { isLoading, isSuccess, execute } = useInteractionRhythm({ defaultDelayMs: 900, defaultSuccessMs: 500 });
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    execute(
      () => {
        onComplete(name, phone, email, symptoms);
      },
      { delayMs: 900, successMs: 500, resetAfter: false }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            transition={springs.gentle}
            className="relative z-10 w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl text-white space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="font-display text-xl font-semibold">Medical Consultation Intake</h3>
                <span className="text-xs font-mono text-teal-400">Mysore Care Clinic</span>
              </div>
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </m.button>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs font-mono text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Consultant:</span>
                <span className="text-white font-bold">{doctor.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Mode:</span>
                <span className="text-teal-400 font-bold capitalize">{mode === "video" ? "Virtual HD Telehealth" : "In-Person Clinic Visit"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Scheduled:</span>
                <span className="text-white font-bold">{date}</span>
              </div>
              <div className="flex justify-between border-t border-zinc-800 pt-2">
                <span className="text-zinc-500">Consultation Fee (UPI/GPay):</span>
                <span className="text-teal-400 font-bold">₹{doctor.consultationFee.toLocaleString('en-IN')}</span>
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
                    placeholder="e.g. Suresh Kumar"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Mobile Phone (For Link & Passcode)</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Primary Symptoms / Reason for Visit</label>
                  <textarea
                    rows={2}
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Describe any symptoms, duration, or current medications..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <m.button
                whileHover={isLoading || isSuccess || shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={isLoading || isSuccess || shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={springs.snappy}
                type="submit"
                disabled={isLoading || isSuccess}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                  isSuccess
                    ? "bg-emerald-500 text-zinc-950 shadow-emerald-500/20"
                    : "bg-teal-600 text-white hover:bg-teal-500 shadow-teal-600/20"
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Booking Consultation...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-zinc-950" />
                    <span>Consultation Scheduled!</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm & Generate Consultation Access</span>
                  </>
                )}
              </m.button>
            </form>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};
