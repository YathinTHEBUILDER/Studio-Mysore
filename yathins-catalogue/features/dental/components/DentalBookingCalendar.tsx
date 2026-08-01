"use client";

import * as React from "react";
import { Calendar, Clock, Sparkles } from "lucide-react";

interface DentalBookingCalendarProps {
  selectedDate: string;
  onSetSelectedDate: (date: string) => void;
  selectedSlot: string;
  onSetSelectedSlot: (slot: string) => void;
  onProceed: () => void;
}

const DAYS = [
  "Tomorrow, Aug 2",
  "Monday, Aug 3",
  "Tuesday, Aug 4",
  "Wednesday, Aug 5",
];

const TIME_SLOTS = ["09:00 AM", "10:30 AM", "02:00 PM", "04:15 PM", "05:30 PM"];

export const DentalBookingCalendar: React.FC<DentalBookingCalendarProps> = ({
  selectedDate,
  onSetSelectedDate,
  selectedSlot,
  onSetSelectedSlot,
  onProceed,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-sky-500/20 shadow-2xl space-y-6 text-white">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Calendar & Slot Selector</span>
        </div>
        <span className="text-xs font-mono text-zinc-400">Real-Time Doctor Availability</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Day selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-400" />
            <span>Select Date</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => onSetSelectedDate(day)}
                className={`p-3 rounded-xl text-xs font-mono font-medium text-left transition-all border ${
                  selectedDate === day
                    ? "bg-sky-600/20 border-sky-500 text-sky-300"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Time slots */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Select Time Slot</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => onSetSelectedSlot(slot)}
                className={`p-2.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
                  selectedSlot === slot
                    ? "bg-sky-600 border-sky-500 text-white shadow-md shadow-sky-600/30"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
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
          Selected Slot: <strong className="text-sky-400">{selectedDate} @ {selectedSlot}</strong>
        </span>
        <button
          onClick={onProceed}
          className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-500 transition-all shadow-md shadow-sky-600/20"
        >
          Proceed to Patient Intake
        </button>
      </div>
    </div>
  );
};
