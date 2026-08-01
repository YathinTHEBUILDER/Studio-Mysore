"use client";

import * as React from "react";
import { MedicalDoctorProfile } from "../types";
import { Clock, Video, Calendar, ArrowRight } from "lucide-react";

interface MedicalDoctorDirectoryProps {
  doctors: MedicalDoctorProfile[];
  selectedDoctor: MedicalDoctorProfile;
  onSelectDoctor: (doc: MedicalDoctorProfile) => void;
  onBookDoctor: (doc: MedicalDoctorProfile) => void;
}

export const MedicalDoctorDirectory: React.FC<MedicalDoctorDirectoryProps> = ({
  doctors,
  selectedDoctor,
  onSelectDoctor,
  onBookDoctor,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {doctors.map((doc) => {
        const isSelected = selectedDoctor.id === doc.id;
        return (
          <div
            key={doc.id}
            onClick={() => onSelectDoctor(doc)}
            className={`p-6 rounded-3xl bg-zinc-900/60 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              isSelected
                ? "border-teal-500 bg-teal-950/20 shadow-xl shadow-teal-950/30"
                : "border-zinc-800/80 hover:border-teal-500/40"
            }`}
          >
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-44 rounded-2xl object-cover border border-zinc-800"
                />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-md bg-zinc-950/90 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Today
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-lg font-semibold text-white">{doc.name}</h3>
                <span className="text-xs font-mono text-teal-400 block">{doc.title}</span>
                <p className="text-[11px] text-zinc-400">{doc.qualifications}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/40 space-y-3 mt-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>{doc.nextAvailable}</span>
                </div>
                <span className="font-bold text-white">${doc.consultationFee}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookDoctor(doc);
                }}
                className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-teal-600/20"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Book Doctor Visit</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
