"use client";

import * as React from "react";
import { m } from "framer-motion";
import { GymTrialBooking } from "../types";
import { CheckCircle2, QrCode, Dumbbell, ShieldCheck } from "lucide-react";

interface GymConfirmationProps {
  booking: GymTrialBooking;
  onReset: () => void;
}

export const GymConfirmation: React.FC<GymConfirmationProps> = ({
  booking,
  onReset,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-zinc-900/90 border border-indigo-500/30 text-white shadow-2xl text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block">
          Access Pass Generated • {booking.id}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Welcome to Pulse Fitness Studio!
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          Your digital turnstile QR code has been dispatched to <strong className="text-white">{booking.memberPhone}</strong>.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col items-center gap-3">
        <div className="w-32 h-32 bg-white rounded-xl p-2 flex items-center justify-center">
          <QrCode className="w-28 h-28 text-zinc-950" />
        </div>
        <span className="text-xs font-mono text-zinc-400">Scan at studio front turnstile for entry</span>
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 font-semibold text-xs transition-all shadow-md"
      >
        <Dumbbell className="w-4 h-4" />
        <span>Return to Studio Experience</span>
      </button>
    </m.div>
  );
};
