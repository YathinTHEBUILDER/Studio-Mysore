"use client";

/**
 * DentalPhoneMockup — Dental Clinic Patient Booking Interface
 *
 * Interactive phone mockup for a modern dental studio:
 *  - Treatment selection (Teeth Whitening, Cleaning, Invisalign)
 *  - Dentist / Specialist selection
 *  - Date & Time slot booking
 *  - Instant digital appointment pass confirmation
 */

import * as React from "react";
import { m } from "framer-motion";
import { Calendar, User, Clock, Check, Sparkles, Shield, ChevronRight } from "lucide-react";

export function DentalPhoneMockup() {
  const [treatment, setTreatment] = React.useState<string>("whitening");
  const [selectedSlot, setSelectedSlot] = React.useState<string>("10:30 AM");
  const [isBooked, setIsBooked] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const treatments = [
    { id: "whitening", name: "Laser Whitening", duration: "45 mins", fee: "₹3,500" },
    { id: "cleaning", name: "Prophylaxis Cleaning", duration: "30 mins", fee: "₹1,800" },
    { id: "aligners", name: "3D Scan & Aligners", duration: "60 mins", fee: "₹5,000" },
  ];

  const slots = ["09:30 AM", "10:30 AM", "02:15 PM", "04:30 PM"];

  const handleBook = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#0B132B] text-white">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="px-4 pt-3 pb-2.5 border-b border-blue-900/40 bg-[#0B132B]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold tracking-wider uppercase text-blue-400">
              DENTAL CLINIC · SELF SERVICE
            </span>
            <h2 className="text-[14px] font-bold text-white tracking-tight">
              Apex Dental Studio
            </h2>
          </div>
          <div className="px-2 py-0.5 rounded-full text-[8.5px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
            Open Today
          </div>
        </div>
      </div>

      {/* ── Body Content ────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3" style={{ scrollbarWidth: "none" }}>
        {isBooked ? (
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-2xl bg-gradient-to-b from-blue-950/80 to-slate-900 border border-blue-500/30 text-center space-y-2.5 mt-2"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mx-auto text-blue-300">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <h3 className="text-[13px] font-bold text-white">Appointment Scheduled!</h3>
            <p className="text-[9.5px] text-blue-200/70 leading-relaxed">
              Dr. Ananya Rao · Tomorrow at {selectedSlot}
            </p>
            <div className="p-2 rounded-xl bg-blue-900/30 border border-blue-800/40 text-[9px] text-blue-300 font-mono">
              Pass ID: #DENT-49102
            </div>
            <button
              onClick={() => setIsBooked(false)}
              className="text-[10px] text-blue-300 underline font-medium"
            >
              Book Another Appointment
            </button>
          </m.div>
        ) : (
          <>
            {/* Treatment Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold text-blue-200/80 flex items-center gap-1">
                <Shield className="w-3 h-3 text-blue-400" />
                Select Dental Service
              </label>
              <div className="space-y-1.5">
                {treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTreatment(t.id)}
                    className={`w-full p-2 rounded-xl text-left transition-all border flex items-center justify-between ${
                      treatment === t.id
                        ? "bg-blue-600/30 border-blue-400 text-white shadow-sm"
                        : "bg-blue-950/20 border-blue-900/30 text-blue-200/60 hover:border-blue-800/50"
                    }`}
                  >
                    <div>
                      <div className="text-[11px] font-bold leading-tight">{t.name}</div>
                      <div className="text-[8.5px] text-blue-300/70">{t.duration}</div>
                    </div>
                    <span className="text-[10.5px] font-extrabold text-blue-300">{t.fee}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Doctor Info Card */}
            <div className="p-2 rounded-xl bg-blue-950/30 border border-blue-900/40 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                AR
              </div>
              <div>
                <div className="text-[10.5px] font-bold text-white leading-tight">
                  Dr. Ananya Rao
                </div>
                <div className="text-[8.5px] text-blue-300/70">
                  Lead Cosmetic Dentist · 12 yrs exp
                </div>
              </div>
            </div>

            {/* Available Time Slots */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold text-blue-200/80 flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-400" />
                Tomorrow's Slots
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSlot(s)}
                    className={`py-1.5 px-2 rounded-xl text-[10px] font-bold transition-all border text-center ${
                      selectedSlot === s
                        ? "bg-blue-600 text-white border-blue-400"
                        : "bg-blue-950/20 text-blue-200/60 border-blue-900/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Action Footer ────────────────────────────────────────────── */}
      {!isBooked && (
        <div className="p-3 border-t border-blue-950/40 bg-[#0B132B]">
          <m.button
            whileTap={{ scale: 0.98 }}
            onClick={handleBook}
            disabled={isSubmitting}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-blue-950/60 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Confirm Appointment at {selectedSlot}</span>
              </>
            )}
          </m.button>
        </div>
      )}
    </div>
  );
}

DentalPhoneMockup.displayName = "DentalPhoneMockup";
