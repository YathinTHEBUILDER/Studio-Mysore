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
            className={`p-1 rounded-sm bg-slate-950/90 border cursor-pointer transition-all duration-500 flex flex-col justify-between shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85)] ${
              isSelected
                ? "border-teal-400 bg-teal-950/40 shadow-xl shadow-teal-950/50"
                : "border-slate-800/90 hover:border-teal-500/50"
            }`}
          >
            <div className="p-4 space-y-4">
              <div className="relative h-52 w-full rounded-none overflow-hidden bg-slate-950 border border-teal-500/30 group">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-teal-900/10 mix-blend-soft-light pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(9,9,11,0.8)_100%)] pointer-events-none" />
                
                <span className="absolute top-2.5 left-2.5 text-[9px] font-mono tracking-widest text-teal-300/80 bg-slate-950/90 px-2 py-0.5 rounded-sm border border-teal-500/30 uppercase">
                  35MM PHYSICIAN
                </span>

                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-emerald-300 font-semibold px-2.5 py-1 rounded-sm bg-slate-950/90 border border-emerald-500/30 flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Today
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-sans text-base font-semibold text-slate-100">{doc.name}</h3>
                <span className="text-xs font-mono text-teal-400 block">{doc.title}</span>
                <p className="text-[11px] font-mono text-slate-300 pt-0.5">{doc.qualifications}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-3 mt-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>{doc.nextAvailable}</span>
                </div>
                <span className="font-bold text-teal-300 text-sm">₹{doc.consultationFee.toLocaleString('en-IN')}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookDoctor(doc);
                }}
                className="w-full py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-sans font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-teal-600/20 active:scale-98"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Book Consultation Visit</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

