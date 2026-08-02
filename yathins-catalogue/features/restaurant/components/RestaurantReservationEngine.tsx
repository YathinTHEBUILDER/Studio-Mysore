"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Users, Calendar, Clock, Sparkles } from "lucide-react";
import { springs } from "@/lib/tokens/transitions";

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
    <div className="p-8 rounded-sm bg-gradient-to-b from-stone-900/90 via-stone-950 to-stone-950 border border-amber-500/30 shadow-2xl space-y-6 text-amber-50 relative">
      <div className="flex items-center gap-2.5 text-amber-400 font-mono text-[11px] uppercase tracking-[0.25em]">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>Stage I • Evening Table Reservation</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Guests */}
        <div className="space-y-2.5">
          <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-200/60 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Party Size</span>
          </label>
          <div className="flex items-center gap-1.5 p-1 bg-stone-950 rounded-sm border border-amber-900/40">
            {[1, 2, 4, 6, 8].map((size) => (
              <m.button
                key={size}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springs.snappy}
                onClick={() => onSetPartySize(size)}
                className={`flex-1 py-2 text-xs font-mono font-bold transition-colors rounded-sm ${
                  partySize === size
                    ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20"
                    : "text-amber-200/60 hover:text-amber-100 hover:bg-stone-900"
                }`}
              >
                {size} {size === 1 ? "Guest" : "Guests"}
              </m.button>
            ))}
          </div>
        </div>

        {/* Date / Time */}
        <div className="space-y-2.5">
          <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-200/60 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Seating Time</span>
          </label>
          <select
            value={selectedDate}
            onChange={(e) => onSetSelectedDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-sm bg-stone-950 border border-amber-900/40 text-xs font-mono text-amber-100 focus:outline-none focus:border-amber-400 transition-colors"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Seating Area */}
        <div className="space-y-2.5">
          <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-200/60 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Atmosphere</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <m.button
              whileTap={{ scale: 0.96 }}
              onClick={() => onSetSeatingArea("main_dining")}
              className={`p-2 rounded-sm text-[10px] font-mono uppercase tracking-wider font-semibold transition-all border ${
                seatingArea === "main_dining"
                  ? "bg-rose-950/80 border-amber-500 text-amber-200 shadow-md"
                  : "bg-stone-950 border-amber-900/30 text-amber-200/50 hover:text-amber-200"
              }`}
            >
              Main Dining
            </m.button>
            <m.button
              whileTap={{ scale: 0.96 }}
              onClick={() => onSetSeatingArea("chef_counter")}
              className={`p-2 rounded-sm text-[10px] font-mono uppercase tracking-wider font-semibold transition-all border ${
                seatingArea === "chef_counter"
                  ? "bg-rose-950/80 border-amber-500 text-amber-200 shadow-md"
                  : "bg-stone-950 border-amber-900/30 text-amber-200/50 hover:text-amber-200"
              }`}
            >
              Chef's Bar
            </m.button>
            <m.button
              whileTap={{ scale: 0.96 }}
              onClick={() => onSetSeatingArea("terrace")}
              className={`p-2 rounded-sm text-[10px] font-mono uppercase tracking-wider font-semibold transition-all border ${
                seatingArea === "terrace"
                  ? "bg-rose-950/80 border-amber-500 text-amber-200 shadow-md"
                  : "bg-stone-950 border-amber-900/30 text-amber-200/50 hover:text-amber-200"
              }`}
            >
              Garden Patio
            </m.button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-amber-900/30 pt-5 text-xs font-mono gap-4">
        <div className="text-amber-200/60">
          Table Holding Deposit: <strong className="text-amber-400 font-bold">₹{depositRequired.toLocaleString('en-IN')}</strong> (₹500/guest)
        </div>
        <m.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={springs.snappy}
          onClick={onProceed}
          className="w-full sm:w-auto px-7 py-3 rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-mono font-bold text-xs uppercase tracking-[0.15em] hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
        >
          Confirm Reservation
        </m.button>
      </div>
    </div>
  );
};

