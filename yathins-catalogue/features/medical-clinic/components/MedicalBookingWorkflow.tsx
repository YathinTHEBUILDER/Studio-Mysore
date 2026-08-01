"use client";

import * as React from "react";
import { Video, Building2, Calendar, Sparkles } from "lucide-react";

interface MedicalBookingWorkflowProps {
  consultationMode: "video" | "in_person";
  onSetConsultationMode: (mode: "video" | "in_person") => void;
  selectedDate: string;
  onSetSelectedDate: (date: string) => void;
  onProceed: () => void;
}

const SLOTS = ["Today, 4:00 PM", "Today, 5:30 PM", "Tomorrow, 10:00 AM", "Tomorrow, 2:30 PM"];

export const MedicalBookingWorkflow: React.FC<MedicalBookingWorkflowProps> = ({
  consultationMode,
  onSetConsultationMode,
  selectedDate,
  onSetSelectedDate,
  onProceed,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-teal-500/20 shadow-2xl space-y-6 text-white">
      <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-widest">
        <Sparkles className="w-4 h-4" />
        <span>Step 2 • Consultation Mode & Slot</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mode selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Consultation Type</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onSetConsultationMode("video")}
              className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border transition-all ${
                consultationMode === "video"
                  ? "bg-teal-600/20 border-teal-500 text-teal-300"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Virtual Telehealth</span>
            </button>
            <button
              type="button"
              onClick={() => onSetConsultationMode("in_person")}
              className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border transition-all ${
                consultationMode === "in_person"
                  ? "bg-teal-600/20 border-teal-500 text-teal-300"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>In-Person Visit</span>
            </button>
          </div>
        </div>

        {/* Slot selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Available Slot</label>
          <div className="grid grid-cols-2 gap-2">
            {SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => onSetSelectedDate(slot)}
                className={`p-2.5 rounded-xl text-xs font-mono font-medium transition-all border ${
                  selectedDate === slot
                    ? "bg-teal-600 border-teal-500 text-white font-bold"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-800 pt-4 text-xs font-mono">
        <span className="text-zinc-400">
          Selected: <strong className="text-teal-400">{consultationMode === "video" ? "Virtual Telehealth" : "In-Person"} @ {selectedDate}</strong>
        </span>
        <button
          onClick={onProceed}
          className="px-6 py-2.5 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-500 transition-all shadow-md shadow-teal-600/20"
        >
          Confirm & Complete Intake
        </button>
      </div>
    </div>
  );
};
