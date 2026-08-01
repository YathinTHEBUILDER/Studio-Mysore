"use client";

import * as React from "react";
import { GymTrainer } from "../types";

interface GymTrainerDirectoryProps {
  trainers: GymTrainer[];
  selectedTrainer: GymTrainer;
  onSelectTrainer: (trainer: GymTrainer) => void;
}

export const GymTrainerDirectory: React.FC<GymTrainerDirectoryProps> = ({
  trainers,
  selectedTrainer,
  onSelectTrainer,
}) => {
  return (
    <section className="py-12 bg-zinc-950/80 border-t border-zinc-900 space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block">
          Elite Master Coaches
        </span>
        <h2 className="text-3xl font-display font-semibold text-white">
          Train with industry leaders.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trainers.map((tr) => {
          const isSelected = selectedTrainer.id === tr.id;
          return (
            <div
              key={tr.id}
              onClick={() => onSelectTrainer(tr)}
              className={`p-6 rounded-3xl bg-zinc-900/60 border cursor-pointer transition-all duration-300 space-y-4 ${
                isSelected
                  ? "border-indigo-500 bg-indigo-950/20 shadow-xl shadow-indigo-950/30"
                  : "border-zinc-800/80 hover:border-indigo-500/40"
              }`}
            >
              <img
                src={tr.image}
                alt={tr.name}
                className="w-full h-48 rounded-2xl object-cover border border-zinc-800"
              />

              <div className="space-y-1">
                <h3 className="font-display text-lg font-semibold text-white">{tr.name}</h3>
                <span className="text-xs font-mono text-indigo-400 block">{tr.role}</span>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">{tr.bio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
