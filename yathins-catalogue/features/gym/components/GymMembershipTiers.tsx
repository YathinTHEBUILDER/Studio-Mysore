"use client";

import * as React from "react";
import { GymMembershipTier } from "../types";
import { Check, ArrowRight } from "lucide-react";

interface GymMembershipTiersProps {
  tiers: GymMembershipTier[];
  selectedTier: GymMembershipTier;
  onSelectTier: (tier: GymMembershipTier) => void;
  onJoinTier: (tier: GymMembershipTier) => void;
}

export const GymMembershipTiers: React.FC<GymMembershipTiersProps> = ({
  tiers,
  selectedTier,
  onSelectTier,
  onJoinTier,
}) => {
  return (
    <section className="py-12 bg-black space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block">
          Membership Passes & Access
        </span>
        <h2 className="text-3xl sm:text-5xl font-sans font-black uppercase tracking-wider italic text-white">
          NO CONTRACTS. PURE DISCIPLINE.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => {
          const isSelected = selectedTier.id === tier.id;
          return (
            <div
              key={tier.id}
              onClick={() => onSelectTier(tier)}
              className={`p-7 rounded-tl-2xl rounded-br-2xl bg-zinc-900/90 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "border-lime-400 bg-indigo-950/40 shadow-2xl shadow-indigo-950/80"
                  : "border-indigo-500/30 hover:border-lime-400/60"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans font-black text-xl text-white uppercase italic">{tier.name}</h3>
                  {tier.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-tl-lg rounded-br-lg bg-lime-400 text-black font-extrabold shadow-md">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-extrabold text-lime-400">₹{tier.priceMonthly.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-mono text-indigo-300/80 uppercase">/ month</span>
                </div>

                <ul className="space-y-3 border-t border-indigo-900/50 pt-5">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs font-sans text-indigo-100">
                      <Check className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onJoinTier(tier);
                }}
                className="w-full mt-7 py-3 rounded-tl-xl rounded-br-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-95 border border-indigo-400/40"
              >
                <span>Claim Pass</span>
                <ArrowRight className="w-4 h-4 text-lime-400" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

