"use client";

import * as React from "react";
import { m } from "framer-motion";
import { RestaurantReservation } from "../types";
import { CheckCircle2, Calendar, Clock, Utensils, UtensilsCrossed } from "lucide-react";

interface RestaurantConfirmationProps {
  reservation: RestaurantReservation;
  onReset: () => void;
}

export const RestaurantConfirmation: React.FC<RestaurantConfirmationProps> = ({
  reservation,
  onReset,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-zinc-900/90 border border-rose-500/30 text-white shadow-2xl text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-rose-400 block">
          Reservation Confirmed • {reservation.id}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          We look forward to hosting you!
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          A calendar invite and SMS confirmation have been sent to <strong className="text-white">{reservation.guestEmail}</strong>.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left p-4 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-rose-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Date & Slot</span>
            <span className="text-white font-bold text-sm">{reservation.date}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Utensils className="w-5 h-5 text-rose-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Table Details</span>
            <span className="text-white font-bold text-sm capitalize">
              {reservation.partySize} Guests • {reservation.seatingArea.replace("_", " ")}
            </span>
          </div>
        </div>
      </div>

      {reservation.selectedCourses.length > 0 && (
        <div className="text-left border-t border-zinc-800 pt-4 space-y-2">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Pre-Selected Tasting Courses</h4>
          <div className="divide-y divide-zinc-800/60 text-xs">
            {reservation.selectedCourses.map((c, idx) => (
              <div key={idx} className="py-2 flex justify-between">
                <span className="text-zinc-300">{c.name}</span>
                <span className="font-mono text-rose-400">${c.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 text-white hover:bg-rose-500 font-semibold text-xs transition-all shadow-md"
      >
        <UtensilsCrossed className="w-4 h-4" />
        <span>Make Another Reservation</span>
      </button>
    </m.div>
  );
};
