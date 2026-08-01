"use client";

import * as React from "react";
import { MedicalDepartment } from "../types";
import { Activity, Heart, Baby, Sparkles, Video } from "lucide-react";

interface MedicalDepartmentsOverviewProps {
  selectedDept: MedicalDepartment | "all";
  onSelectDept: (dept: MedicalDepartment | "all") => void;
}

const DEPARTMENTS: { id: MedicalDepartment | "all"; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All Specialties", icon: <Activity className="w-4 h-4" /> },
  { id: "general_medicine", label: "General Care", icon: <Activity className="w-4 h-4" /> },
  { id: "cardiology", label: "Cardiology", icon: <Heart className="w-4 h-4" /> },
  { id: "dermatology", label: "Dermatology", icon: <Sparkles className="w-4 h-4" /> },
  { id: "pediatrics", label: "Pediatrics", icon: <Baby className="w-4 h-4" /> },
  { id: "telehealth", label: "Virtual Care", icon: <Video className="w-4 h-4" /> },
];

export const MedicalDepartmentsOverview: React.FC<MedicalDepartmentsOverviewProps> = ({
  selectedDept,
  onSelectDept,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold block">
          Clinical Departments
        </span>
        <h2 className="text-3xl font-display font-semibold text-white">
          Verified Medical Specialists.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {DEPARTMENTS.map((dept) => {
          const isActive = selectedDept === dept.id;
          return (
            <button
              key={dept.id}
              onClick={() => onSelectDept(dept.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-medium tracking-wide uppercase flex items-center gap-2 transition-all ${
                isActive
                  ? "bg-teal-600 text-white font-bold shadow-lg shadow-teal-600/20"
                  : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              {dept.icon}
              <span>{dept.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
