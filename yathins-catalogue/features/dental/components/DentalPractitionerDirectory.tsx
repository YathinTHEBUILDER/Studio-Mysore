"use client";

import * as React from "react";
import { DentalDoctor } from "../types";
import { Star, Award, Check } from "lucide-react";

interface DentalPractitionerDirectoryProps {
  doctors: DentalDoctor[];
  selectedDoctor: DentalDoctor;
  onSelectDoctor: (doctor: DentalDoctor) => void;
}

export const DentalPractitionerDirectory: React.FC<DentalPractitionerDirectoryProps> = ({
  doctors,
  selectedDoctor,
  onSelectDoctor,
}) => {
  return (
    <section className="py-12 bg-zinc-950/80 border-t border-zinc-900 space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">
          Our Specialist Team
        </span>
        <h2 className="text-3xl font-display font-semibold text-white">
          Board-certified dental specialists.
        </h2>
        <p className="text-xs text-zinc-400">
          Choose your preferred doctor for your upcoming procedure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map((doc) => {
          const isSelected = selectedDoctor.id === doc.id;
          return (
            <div
              key={doc.id}
              onClick={() => onSelectDoctor(doc)}
              className={`p-6 rounded-3xl bg-zinc-900/60 border cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                isSelected
                  ? "border-sky-500 bg-sky-950/20 shadow-xl shadow-sky-950/30"
                  : "border-zinc-800/80 hover:border-sky-500/40"
              }`}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-20 h-20 rounded-2xl object-cover border border-zinc-800 shrink-0"
              />
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold text-white">{doc.name}</h3>
                  {isSelected && <Check className="w-4 h-4 text-sky-400" />}
                </div>
                <span className="text-xs font-mono text-sky-400 block">{doc.role}</span>
                <span className="text-[11px] text-zinc-400 block">{doc.specialty}</span>

                <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{doc.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{doc.experience}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
