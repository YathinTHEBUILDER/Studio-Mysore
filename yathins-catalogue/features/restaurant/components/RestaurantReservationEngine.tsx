"use client";

import * as React from "react";
import { Users, Calendar, Clock, Sparkles } from "lucide-react";

interface RestaurantReservationEngineProps {
  partySize: number;
  onSetPartySize: (size: number) => void;
  selectedDate: string;
  onSetSelectedDate: (date: string) => void;
  seatingArea: "main_dining" | "chef_counter" | "terrace";
  onSetSeatingArea: (area: "main_dining" | "chef_counter" | "terrace") => void;
  depositRequired: number;
  onProceed: () => void;
}

const TIME_SLOTS = [
  "Tonight, 6:00 PM",
  "Tonight, 7:30 PM",
  "Tonight, 8:45 PM",
  "Tomorrow, 7:00 PM",
];

export const RestaurantReservationEngine: React.FC<RestaurantReservationEngineProps> = ({
  partySize,
  onSetPartySize,
  selectedDate,
  onSetSelectedDate,
  seatingArea,
  onSetSeatingArea,
  depositRequired,
  onProceed,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-rose-500/20 shadow-2xl space-y-6 text-white">
      <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest">
        <Sparkles className="w-4 h-4" />
        <span>Step 1 • Table Selection Engine</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Guests */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Users className="w-4 h-4 text-rose-400" />
            <span>Party Size</span>
          </label>
          <div className="flex items-center gap-2 p-1 bg-zinc-950 rounded-xl border border-zinc-800">
            {[1, 2, 4, 6, 8].map((size) => (
              <button
                key={size}
                onClick={() => onSetPartySize(size)}
                className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg transition-all ${
                  partySize === size
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {size} {size === 1 ? "Guest" : "Guests"}
              </button>
            ))}
          </div>
        </div>

        {/* Date / Time */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Clock className="w-4 h-4 text-rose-400" />
            <span>Select Time Slot</span>
          </label>
          <select
            value={selectedDate}
            onChange={(e) => onSetSelectedDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-white focus:outline-none focus:border-rose-500"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Seating Area */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rose-400" />
            <span>Atmosphere</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onSetSeatingArea("main_dining")}
              className={`p-2 rounded-xl text-[11px] font-mono font-semibold transition-all border ${
                seatingArea === "main_dining"
                  ? "bg-rose-600/20 border-rose-500 text-rose-300"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400"
              }`}
            >
              Main Room
            </button>
            <button
              onClick={() => onSetSeatingArea("chef_counter")}
              className={`p-2 rounded-xl text-[11px] font-mono font-semibold transition-all border ${
                seatingArea === "chef_counter"
                  ? "bg-rose-600/20 border-rose-500 text-rose-300"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400"
              }`}
            >
              Chef's Bar
            </button>
            <button
              onClick={() => onSetSeatingArea("terrace")}
              className={`p-2 rounded-xl text-[11px] font-mono font-semibold transition-all border ${
                seatingArea === "terrace"
                  ? "bg-rose-600/20 border-rose-500 text-rose-300"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400"
              }`}
            >
              Garden Patio
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-800 pt-4 text-xs font-mono">
        <div className="text-zinc-400">
          Table Holding Deposit: <strong className="text-rose-400">${depositRequired}</strong> (${25}/guest)
        </div>
        <button
          onClick={onProceed}
          className="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-500 transition-all shadow-md shadow-rose-600/20"
        >
          Confirm Reservation Slot
        </button>
      </div>
    </div>
  );
};
