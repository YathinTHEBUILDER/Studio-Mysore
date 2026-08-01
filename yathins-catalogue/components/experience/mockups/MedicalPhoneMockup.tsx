"use client";

/**
 * MedicalPhoneMockup — Medical Clinic Patient Triage & Booking
 *
 * Interactive phone mockup for a modern medical care clinic:
 *  - Consultation mode toggle (In-Person vs Virtual Telehealth)
 *  - Department selector (General Medicine, Cardiology, Pediatrics)
 *  - Doctor availability & Slot booking
 *  - Instant digital patient check-in QR pass
 */

import * as React from "react";
import { m } from "framer-motion";
import { Stethoscope, Video, MapPin, Calendar, Check, Sparkles, UserCheck } from "lucide-react";

export function MedicalPhoneMockup() {
  const [mode, setMode] = React.useState<"clinic" | "telehealth">("clinic");
  const [dept, setDept] = React.useState<string>("General Medicine");
  const [selectedTime, setSelectedTime] = React.useState<string>("11:00 AM");
  const [isBooked, setIsBooked] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const depts = ["General Medicine", "Cardiology", "Dermatology"];
  const times = ["10:00 AM", "11:00 AM", "03:30 PM", "05:00 PM"];

  const handleBook = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#081817] text-white">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="px-4 pt-3 pb-2.5 border-b border-teal-900/40 bg-[#081817]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold tracking-wider uppercase text-teal-400">
              MEDICAL CARE · PATIENT PORTAL
            </span>
            <h2 className="text-[14px] font-bold text-white tracking-tight">
              St. Jude Care Clinic
            </h2>
          </div>
          <div className="px-2 py-0.5 rounded-full text-[8.5px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
            Live Triage
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex gap-2 mt-2.5 bg-teal-950/40 p-0.5 rounded-lg border border-teal-900/30">
          <button
            onClick={() => setMode("clinic")}
            className={`flex-1 py-1 text-[10px] font-bold rounded-md flex items-center justify-center gap-1 transition-all ${
              mode === "clinic" ? "bg-teal-700/80 text-white shadow-xs" : "text-teal-300/60"
            }`}
          >
            <MapPin className="w-3 h-3" />
            In-Clinic Visit
          </button>
          <button
            onClick={() => setMode("telehealth")}
            className={`flex-1 py-1 text-[10px] font-bold rounded-md flex items-center justify-center gap-1 transition-all ${
              mode === "telehealth" ? "bg-teal-700/80 text-white shadow-xs" : "text-teal-300/60"
            }`}
          >
            <Video className="w-3 h-3" />
            Video Consult
          </button>
        </div>
      </div>

      {/* ── Body Content ────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3" style={{ scrollbarWidth: "none" }}>
        {isBooked ? (
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-2xl bg-gradient-to-b from-teal-950/80 to-slate-900 border border-teal-500/30 text-center space-y-2.5 mt-2"
          >
            <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mx-auto text-teal-300">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <h3 className="text-[13px] font-bold text-white">Consultation Confirmed!</h3>
            <p className="text-[9.5px] text-teal-200/70 leading-relaxed">
              Dr. Siddharth Mehta · {mode === "clinic" ? "Lobby Desk 2" : "Virtual Room Link"} · {selectedTime}
            </p>
            <div className="p-2 rounded-xl bg-teal-900/30 border border-teal-800/40 text-[9px] font-mono text-teal-300 flex items-center justify-center gap-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>QR Check-in Pass Saved</span>
            </div>
            <button
              onClick={() => setIsBooked(false)}
              className="text-[10px] text-teal-300 underline font-medium"
            >
              Book Another Visit
            </button>
          </m.div>
        ) : (
          <>
            {/* Department Selection */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold text-teal-200/80 flex items-center gap-1">
                <Stethoscope className="w-3 h-3 text-teal-400" />
                Select Department
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {depts.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDept(d)}
                    className={`w-full p-2 rounded-xl text-left text-[11px] font-bold transition-all border flex items-center justify-between ${
                      dept === d
                        ? "bg-teal-800/40 border-teal-500 text-white"
                        : "bg-teal-950/20 border-teal-900/30 text-teal-200/60"
                    }`}
                  >
                    <span>{d}</span>
                    <span className="text-[9px] font-semibold text-teal-400">Available Today</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Doctor Info Card */}
            <div className="p-2.5 rounded-xl bg-teal-950/30 border border-teal-900/40 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
                SM
              </div>
              <div>
                <div className="text-[10.5px] font-bold text-white leading-tight">
                  Dr. Siddharth Mehta
                </div>
                <div className="text-[8.5px] text-teal-300/70">
                  Senior Physician · {dept}
                </div>
              </div>
            </div>

            {/* Time Slot Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold text-teal-200/80 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-teal-400" />
                Today's Open Slots
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-1.5 px-2 rounded-xl text-[10px] font-bold transition-all border text-center ${
                      selectedTime === t
                        ? "bg-teal-600 text-white border-teal-400"
                        : "bg-teal-950/20 text-teal-200/60 border-teal-900/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Action Footer ────────────────────────────────────────────── */}
      {!isBooked && (
        <div className="p-3 border-t border-teal-950/40 bg-[#081817]">
          <m.button
            whileTap={{ scale: 0.98 }}
            onClick={handleBook}
            disabled={isSubmitting}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-teal-950/60 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book {mode === "clinic" ? "In-Clinic" : "Video"} Visit for {selectedTime}</span>
              </>
            )}
          </m.button>
        </div>
      )}
    </div>
  );
}

MedicalPhoneMockup.displayName = "MedicalPhoneMockup";
