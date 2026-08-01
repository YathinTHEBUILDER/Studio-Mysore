"use client";

/**
 * RestaurantPhoneMockup — Fine Dining & Reservation Interface
 *
 * Interactive phone mockup demonstrating a luxury dining app:
 *  - Party size selector (2, 4, 6 guests)
 *  - Date & Time slot picker
 *  - Chef's tasting menu overview
 *  - Instant reservation confirmation flow with booking reference
 */

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { Calendar, Users, Clock, Check, Sparkles, Utensils, ChevronRight } from "lucide-react";

export function RestaurantPhoneMockup() {
  const [guests, setGuests] = React.useState<number>(2);
  const [selectedTime, setSelectedTime] = React.useState<string>("19:30");
  const [isReserved, setIsReserved] = React.useState<boolean>(false);
  const [isReserving, setIsReserving] = React.useState<boolean>(false);
  const [activeTab, setActiveTab] = React.useState<"reserve" | "menu">("reserve");

  const timeSlots = ["18:30", "19:00", "19:30", "20:15", "21:00"];

  const tastingMenu = [
    { course: "Course 1", name: "Hokkaido Scallop Crudo", desc: "Yuzu, finger lime, white truffle oil", price: "₹1,400" },
    { course: "Course 2", name: "A5 Miyazaki Wagyu", desc: "Smoked bone marrow puree, maitake", price: "₹3,200" },
    { course: "Course 3", name: "Valrhona Dark Chocolate", desc: "Gold leaf, hazelnut praline", price: "₹950" },
  ];

  const handleBook = () => {
    setIsReserving(true);
    setTimeout(() => {
      setIsReserving(false);
      setIsReserved(true);
    }, 1000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#0F0A0D] text-white">
      {/* ── App Header ──────────────────────────────────────────────── */}
      <div className="px-4 pt-3 pb-2.5 border-b border-rose-950/40 bg-[#0F0A0D]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold tracking-wider uppercase text-rose-400/80">
              FINE DINING · TABLE RESERVATION
            </span>
            <h2 className="text-[14px] font-bold text-white tracking-tight">
              Maison de Mysore
            </h2>
          </div>
          <div className="px-2 py-0.5 rounded-full text-[8.5px] font-bold bg-rose-500/10 text-rose-300 border border-rose-500/20">
            Michelin Starred
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex gap-2 mt-2.5 bg-rose-950/30 p-0.5 rounded-lg border border-rose-900/30">
          <button
            onClick={() => setActiveTab("reserve")}
            className={`flex-1 py-1 text-[10px] font-bold rounded-md transition-all ${
              activeTab === "reserve" ? "bg-rose-900/60 text-white shadow-xs" : "text-rose-300/60"
            }`}
          >
            Reserve Table
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`flex-1 py-1 text-[10px] font-bold rounded-md transition-all ${
              activeTab === "menu" ? "bg-rose-900/60 text-white shadow-xs" : "text-rose-300/60"
            }`}
          >
            Tasting Menu
          </button>
        </div>
      </div>

      {/* ── Body Content ────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3" style={{ scrollbarWidth: "none" }}>
        {activeTab === "reserve" ? (
          <>
            {isReserved ? (
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-gradient-to-b from-rose-950/60 to-black border border-rose-500/30 text-center space-y-2 mt-4"
              >
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-300">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <h3 className="text-[13px] font-bold text-white">Table Confirmed!</h3>
                <p className="text-[9.5px] text-rose-200/70 leading-relaxed">
                  Reservation #MDM-8821 for {guests} guests at {selectedTime} tonight.
                </p>
                <div className="pt-2 text-[9px] font-mono text-rose-400/80">
                  Confirmation sent to your phone
                </div>
                <button
                  onClick={() => setIsReserved(false)}
                  className="mt-2 text-[10px] text-rose-300 underline font-medium"
                >
                  Modify Reservation
                </button>
              </m.div>
            ) : (
              <>
                {/* Party Size Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-rose-200/80 flex items-center gap-1">
                    <Users className="w-3 h-3 text-rose-400" />
                    Party Size
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[2, 4, 6, 8].map((n) => (
                      <button
                        key={n}
                        onClick={() => setGuests(n)}
                        className={`py-1.5 rounded-xl text-[11px] font-bold transition-all border ${
                          guests === n
                            ? "bg-rose-700 text-white border-rose-500 shadow-md shadow-rose-950/50"
                            : "bg-rose-950/20 text-rose-200/60 border-rose-900/30 hover:border-rose-800/50"
                        }`}
                      >
                        {n} Guests
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-rose-200/80 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-rose-400" />
                    Tonight's Available Slots
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-1.5 rounded-xl text-[10.5px] font-bold transition-all border ${
                          selectedTime === t
                            ? "bg-rose-700 text-white border-rose-500"
                            : "bg-rose-950/20 text-rose-200/60 border-rose-900/30"
                        }`}
                      >
                        {t} PM
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dining Note */}
                <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-900/30 text-[9.5px] text-rose-200/70 flex items-center justify-between">
                  <span>Chef's Counter Seating</span>
                  <span className="text-rose-400 font-bold">Included</span>
                </div>
              </>
            )}
          </>
        ) : (
          /* Tasting Menu Tab */
          <div className="space-y-2">
            {tastingMenu.map((item) => (
              <div
                key={item.course}
                className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-0.5"
              >
                <div className="flex justify-between items-center text-[9px] font-bold text-rose-400 uppercase">
                  <span>{item.course}</span>
                  <span>{item.price}</span>
                </div>
                <h4 className="text-[11px] font-bold text-white leading-tight">{item.name}</h4>
                <p className="text-[9px] text-rose-200/60">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Action Button Footer ────────────────────────────────────── */}
      {activeTab === "reserve" && !isReserved && (
        <div className="p-3 border-t border-rose-950/40 bg-[#0F0A0D]">
          <m.button
            whileTap={{ scale: 0.98 }}
            onClick={handleBook}
            disabled={isReserving}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white font-bold text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-rose-950/60 disabled:opacity-50"
          >
            {isReserving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Table for {guests} at {selectedTime}</span>
              </>
            )}
          </m.button>
        </div>
      )}
    </div>
  );
}

RestaurantPhoneMockup.displayName = "RestaurantPhoneMockup";
