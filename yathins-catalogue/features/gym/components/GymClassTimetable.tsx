"use client";

import * as React from "react";
import { GymClassSession } from "../types";
import { Clock, Zap, Check, Users } from "lucide-react";

interface GymClassTimetableProps {
  classes: GymClassSession[];
  selectedClass: GymClassSession;
  onSelectClass: (cls: GymClassSession) => void;
  onBookClassSpot: (cls: GymClassSession) => void;
}

export const GymClassTimetable: React.FC<GymClassTimetableProps> = ({
  classes,
  selectedClass,
  onSelectClass,
  onBookClassSpot,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-indigo-500/20 shadow-2xl space-y-6 text-white">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest">
          <Zap className="w-4 h-4" />
          <span>Live Studio Class Schedule & Spot Booking</span>
        </div>
        <span className="text-xs font-mono text-zinc-400">Interactive Seat Selection</span>
      </div>

      <div className="divide-y divide-zinc-800">
        {classes.map((cls) => {
          const isSelected = selectedClass.id === cls.id;
          return (
            <div
              key={cls.id}
              onClick={() => onSelectClass(cls)}
              className={`py-4 px-4 rounded-2xl cursor-pointer transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isSelected ? "bg-indigo-950/40 border border-indigo-500/40" : "hover:bg-zinc-800/40"
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-display text-base font-semibold text-white">{cls.title}</h4>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                    {cls.intensity} Intensity
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span>Instructor: {cls.trainer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-indigo-400" />
                    <span>{cls.time} ({cls.duration})</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
                  <Users className="w-3.5 h-3.5" />
                  <span>{cls.spotsRemaining} spots left</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookClassSpot(cls);
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md"
                >
                  Reserve Spot
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
