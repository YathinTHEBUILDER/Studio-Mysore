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
    <div className="p-7 rounded-tl-2xl rounded-br-2xl bg-zinc-900/90 border border-indigo-500/30 shadow-2xl space-y-6 text-white">
      <div className="flex items-center justify-between border-b border-indigo-900/50 pb-4">
        <div className="flex items-center gap-2.5 text-lime-400 font-mono text-xs font-bold uppercase tracking-widest">
          <Zap className="w-4 h-4 fill-lime-400 text-lime-400" />
          <span>Live Studio Class Schedule & Spot Booking</span>
        </div>
        <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider font-bold">Real-time Capacity</span>
      </div>

      <div className="divide-y divide-indigo-900/40">
        {classes.map((cls) => {
          const isSelected = selectedClass.id === cls.id;
          return (
            <div
              key={cls.id}
              onClick={() => onSelectClass(cls)}
              className={`py-4 px-4 rounded-tl-xl rounded-br-xl cursor-pointer transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isSelected ? "bg-indigo-950/60 border border-lime-400/50" : "hover:bg-indigo-950/30"
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h4 className="font-sans font-black text-base uppercase italic text-white">{cls.title}</h4>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-tl-md rounded-br-md bg-lime-400/20 text-lime-400 border border-lime-400/40">
                    {cls.intensity} Intensity
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-indigo-200/80">
                  <span>Instructor: {cls.trainer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-lime-400" />
                    <span>{cls.time} ({cls.duration})</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-lime-400">
                  <Users className="w-3.5 h-3.5" />
                  <span>{cls.spotsRemaining} spots left</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookClassSpot(cls);
                  }}
                  className="px-5 py-2.5 rounded-tl-lg rounded-br-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 border border-indigo-400/40"
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

