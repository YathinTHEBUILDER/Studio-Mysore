"use client";

/**
 * GymPhoneMockup — Gym & Fitness Studio Member Booking
 *
 * Interactive phone mockup for a high-energy fitness studio:
 *  - Class schedule filter (HIIT, Yoga, Boxing, Spin)
 *  - Live spots remaining indicator
 *  - Reserve class spot with instant QR turnstile pass generation
 */

import * as React from "react";
import { m } from "framer-motion";
import { Zap, Flame, QrCode, Check, Sparkles, Trophy } from "lucide-react";

export function GymPhoneMockup() {
  const [selectedClass, setSelectedClass] = React.useState<string>("hiit");
  const [isReserved, setIsReserved] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const classes = [
    { id: "hiit", name: "HIIT & Strength", time: "07:00 AM", instructor: "Coach Alex", spots: 3, kcal: "650 kcal" },
    { id: "spin", name: "Rhythm Cycle", time: "08:30 AM", instructor: "Maya Lin", spots: 2, kcal: "520 kcal" },
    { id: "yoga", name: "Power Vinyasa", time: "05:30 PM", instructor: "Rohan D.", spots: 5, kcal: "380 kcal" },
  ];

  const handleBook = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsReserved(true);
    }, 1000);
  };

  const activeClassObj = classes.find((c) => c.id === selectedClass);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#120E24] text-white">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="px-4 pt-3 pb-2.5 border-b border-indigo-900/40 bg-[#120E24]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold tracking-wider uppercase text-indigo-400">
              BOUTIQUE FITNESS · MEMBER PASS
            </span>
            <h2 className="text-[14px] font-bold text-white tracking-tight">
              Kinetix Athletic Club
            </h2>
          </div>
          <div className="px-2 py-0.5 rounded-full text-[8.5px] font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            PRO MEMBER
          </div>
        </div>
      </div>

      {/* ── Body Content ────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3" style={{ scrollbarWidth: "none" }}>
        {isReserved ? (
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-2xl bg-gradient-to-b from-indigo-950/80 to-slate-900 border border-indigo-500/40 text-center space-y-3 mt-2"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mx-auto text-indigo-300">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <h3 className="text-[13px] font-bold text-white">Spot Reserved!</h3>
              <p className="text-[9.5px] text-indigo-200/70">
                {activeClassObj?.name} · {activeClassObj?.time}
              </p>
            </div>

            {/* Turnstile QR Code Mockup */}
            <div className="p-3 rounded-xl bg-white/10 border border-indigo-500/30 flex flex-col items-center gap-1.5">
              <QrCode className="w-16 h-16 text-indigo-300" />
              <span className="text-[8.5px] font-mono text-indigo-200 tracking-wider">
                SCAN AT TURNSTILE GATE
              </span>
            </div>

            <button
              onClick={() => setIsReserved(false)}
              className="text-[10px] text-indigo-300 underline font-medium"
            >
              Book Another Class
            </button>
          </m.div>
        ) : (
          <>
            {/* Today's Schedule Header */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-indigo-200/80 flex items-center gap-1">
                <Flame className="w-3 h-3 text-indigo-400" />
                Today's Class Schedule
              </span>
              <span className="text-[9px] text-indigo-400 font-bold">Studio 1</span>
            </div>

            {/* Class Cards List */}
            <div className="space-y-2">
              {classes.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedClass(c.id)}
                  className={`w-full p-2.5 rounded-xl text-left transition-all border flex items-center justify-between ${
                    selectedClass === c.id
                      ? "bg-indigo-700/40 border-indigo-500 text-white shadow-md shadow-indigo-950/50"
                      : "bg-indigo-950/20 border-indigo-900/30 text-indigo-200/60 hover:border-indigo-800/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-white">{c.name}</span>
                      <span className="text-[8px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300">
                        {c.kcal}
                      </span>
                    </div>
                    <div className="text-[9px] text-indigo-300/70 mt-0.5">
                      {c.time} · {c.instructor}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[9.5px] font-extrabold text-indigo-400 block">
                      {c.spots} spots left
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Gym Streak Highlight */}
            <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-900/40 flex items-center justify-between text-[9.5px] text-indigo-200/80">
              <div className="flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Weekly Workout Streak</span>
              </div>
              <span className="font-bold text-white">4 Days 🔥</span>
            </div>
          </>
        )}
      </div>

      {/* ── Action Footer ────────────────────────────────────────────── */}
      {!isReserved && (
        <div className="p-3 border-t border-indigo-950/40 bg-[#120E24]">
          <m.button
            whileTap={{ scale: 0.98 }}
            onClick={handleBook}
            disabled={isSubmitting}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/60 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Zap className="w-3.5 h-3.5" />
                <span>Reserve Spot for {activeClassObj?.name}</span>
              </>
            )}
          </m.button>
        </div>
      )}
    </div>
  );
}

GymPhoneMockup.displayName = "GymPhoneMockup";
