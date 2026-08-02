"use client";

import * as React from "react";
import { DentalDoctor } from "../types";
import { Star, Award, Check, Clock } from "lucide-react";

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
          Board-certified dental specialists & MDS surgeons.
        </h2>
        <p className="text-xs text-zinc-400">
          Select your preferred practitioner to schedule a consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map((doc) => {
          const isSelected = selectedDoctor.id === doc.id;
          return (
            <div
              key={doc.id}
              onClick={() => onSelectDoctor(doc)}
              className={`p-1 rounded-sm bg-slate-950/90 border cursor-pointer transition-all duration-500 flex flex-col justify-between shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85)] ${
                isSelected
                  ? "border-sky-400 bg-sky-950/30 shadow-xl shadow-sky-950/40"
                  : "border-slate-800/90 hover:border-sky-500/50"
              }`}
            >
              <div className="p-5 flex flex-col sm:flex-row items-start gap-4">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-sm border border-sky-400/30 p-0.5 bg-slate-950 overflow-hidden shrink-0 shadow-md group">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-sky-900/10 mix-blend-soft-light pointer-events-none" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-semibold text-white">{doc.name}</h3>
                    {isSelected && <Check className="w-4 h-4 text-sky-400" />}
                  </div>
                  <span className="text-xs font-mono text-sky-400 block font-medium">{doc.role}</span>
                  <span className="text-[11px] text-sky-200/90 font-medium block">{doc.qualifications}</span>
                  <span className="text-[11px] text-zinc-400 block">{doc.specialty}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{doc.rating}</span>
                  <span className="text-zinc-500 font-normal ml-1">({doc.experience})</span>
                </div>

                <div className="flex items-center gap-1 text-sky-300 text-[10px]">
                  <Clock className="w-3 h-3" />
                  <span>{doc.availableDays}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
