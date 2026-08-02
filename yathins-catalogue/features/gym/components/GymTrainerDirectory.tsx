"use client";

import * as React from "react";
import { GymTrainer } from "../types";
import { Award, Check } from "lucide-react";

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
    <section className="py-12 bg-black border-t border-indigo-900/40 space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold block">
          Elite Master Coaches
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans font-black uppercase tracking-wider italic text-white">
          TRAIN WITH CERTIFIED ATHLETIC MASTER COACHES.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trainers.map((tr) => {
          const isSelected = selectedTrainer.id === tr.id;
          return (
            <div
              key={tr.id}
              onClick={() => onSelectTrainer(tr)}
              className={`p-1 rounded-sm bg-black border cursor-pointer transition-all duration-500 space-y-4 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] ${
                isSelected
                  ? "border-lime-400 bg-indigo-950/40 shadow-2xl shadow-indigo-950/90"
                  : "border-indigo-500/40 hover:border-lime-400/80"
              }`}
            >
              <div className="p-4 space-y-4">
                <div className="relative h-56 w-full rounded-none overflow-hidden bg-black border border-indigo-500/40 group">
                  <img
                    src={tr.image}
                    alt={tr.name}
                    className="w-full h-full object-cover contrast-[1.12] brightness-[0.95] saturate-[1.08] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-lime-900/10 mix-blend-soft-light pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(9,9,11,0.85)_100%)] pointer-events-none" />
                  
                  <span className="absolute top-2.5 left-2.5 text-[9px] font-mono tracking-widest text-lime-400 bg-black/90 px-2 py-0.5 rounded-sm border border-lime-500/40 uppercase">
                    35MM ATHLETE
                  </span>

                  {isSelected && (
                    <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-sm bg-lime-400 text-zinc-950 flex items-center justify-center font-bold shadow-lg">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 pt-4">
                  <h3 className="font-sans font-black text-lg text-white uppercase italic">{tr.name}</h3>
                  <span className="text-xs font-mono text-lime-400 font-bold block uppercase">{tr.role}</span>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed pt-1">{tr.bio}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-indigo-900/60 flex items-center gap-2 text-[11px] font-mono text-lime-300">
                <Award className="w-3.5 h-3.5 shrink-0 text-lime-400" />
                <span className="truncate">{tr.certifications}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
