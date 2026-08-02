"use client";

import * as React from "react";
import { m } from "framer-motion";
import {
  UtensilsCrossed,
  ChefHat,
  Users,
  Grid,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Wine,
  Plus,
  RefreshCw,
  IndianRupee,
  Layers,
} from "lucide-react";

interface TableStatus {
  id: number;
  name: string;
  capacity: number;
  status: "occupied" | "reserved" | "available";
  guestName?: string;
  time?: string;
  server?: string;
}

const INITIAL_TABLES: TableStatus[] = [
  { id: 1, name: "Table 01 (Window)", capacity: 2, status: "occupied", guestName: "Vikram & Guest", time: "19:30", server: "Rajesh M." },
  { id: 2, name: "Table 02 (Window)", capacity: 2, status: "reserved", guestName: "Anand M.", time: "20:30", server: "Rajesh M." },
  { id: 3, name: "Table 03 (Booth)", capacity: 4, status: "occupied", guestName: "Kapoor Family", time: "19:00", server: "Sneha P." },
  { id: 4, name: "Table 04 (Booth)", capacity: 4, status: "available" },
  { id: 5, name: "Table 05 (Center)", capacity: 6, status: "reserved", guestName: "Corporate Tasting", time: "21:00", server: "Sneha P." },
  { id: 6, name: "Table 06 (Chef Counter)", capacity: 2, status: "occupied", guestName: "Siddharth C.", time: "19:45", server: "Head Chef Marco" },
];

const KITCHEN_TICKETS = [
  { ticketId: "KDS-401", table: "Table 03", courses: ["Seared Wagyu A5", "Truffle Tagliolini"], timeAgo: "6 mins", chef: "Station 2 (Grill)", status: "cooking" },
  { ticketId: "KDS-402", table: "Table 01", courses: ["Hokkaido Scallop Ceviche", "Lobster Bisque"], timeAgo: "12 mins", chef: "Station 1 (Cold)", status: "ready" },
  { ticketId: "KDS-403", table: "Table 06", courses: ["Grand Tasting Menu - Course 4"], timeAgo: "2 mins", chef: "Pastry & Plating", status: "prep" },
];

const WINE_INVENTORY = [
  { name: "Dom Pérignon Vintage 2013", region: "Champagne, France", stock: 8, unit: "bottles", price: "₹38,000" },
  { name: "Barolo Cannubi DOCG 2018", region: "Piedmont, Italy", stock: 14, unit: "bottles", price: "₹24,500" },
  { name: "Sula Tropical Brut Sparkler", region: "Nashik, India", stock: 32, unit: "bottles", price: "₹3,200" },
  { name: "Miyazaki Wagyu Striploin A5", region: "Japan", stock: 6.4, unit: "kg", price: "₹18,500/kg" },
];

export const RestaurantOwnerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"floor" | "kitchen" | "inventory" | "staff" | "sales">("floor");
  const [tables, setTables] = React.useState<TableStatus[]>(INITIAL_TABLES);

  const toggleTableStatus = (id: number) => {
    setTables((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const nextStatus = t.status === "available" ? "reserved" : t.status === "reserved" ? "occupied" : "available";
        return { ...t, status: nextStatus };
      })
    );
  };

  return (
    <div className="w-full space-y-8 bg-zinc-950 text-white rounded-3xl border border-zinc-800/80 p-6 sm:p-10 shadow-2xl">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-mono text-xs font-semibold border border-rose-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              Fine Dining OS
            </span>
            <span className="text-xs font-mono text-zinc-400">Kitchen & Floor Terminal</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mt-2 tracking-tight">Le Petit Gourmet Operations</h2>
          <p className="text-zinc-400 text-sm mt-1">Live table occupancy, Kitchen Display System (KDS), cellar stock & cover metrics.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Tonight&apos;s Revenue</span>
            <span className="text-xl font-bold font-mono text-rose-400 mt-0.5">₹1,84,200</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Floor Occupancy</span>
            <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5">82% Full</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col col-span-2 sm:col-span-1">
            <span className="text-xs font-mono text-zinc-400">Covers Served</span>
            <span className="text-xl font-bold font-mono text-white mt-0.5">48 Guests</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800/80">
        <button
          onClick={() => setActiveTab("floor")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "floor"
              ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Grid className="w-4 h-4" />
          <span>Floor Plan & Tables</span>
        </button>

        <button
          onClick={() => setActiveTab("kitchen")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "kitchen"
              ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <ChefHat className="w-4 h-4" />
          <span>Kitchen Display (KDS)</span>
        </button>

        <button
          onClick={() => setActiveTab("inventory")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "inventory"
              ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Wine className="w-4 h-4" />
          <span>Cellar & Pantry Stock</span>
        </button>

        <button
          onClick={() => setActiveTab("staff")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "staff"
              ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Floor & Kitchen Staff</span>
        </button>

        <button
          onClick={() => setActiveTab("sales")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "sales"
              ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Covers & Revenue</span>
        </button>
      </div>

      {/* Tab 1: Floor Plan & Tables */}
      {activeTab === "floor" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display">Dining Room Table Grid</h3>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Occupied</span>
              <span className="flex items-center gap-1.5 text-amber-400"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Reserved</span>
              <span className="flex items-center gap-1.5 text-zinc-400"><span className="w-2.5 h-2.5 rounded-full bg-zinc-700" /> Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tables.map((table) => (
              <div
                key={table.id}
                onClick={() => toggleTableStatus(table.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  table.status === "occupied"
                    ? "bg-emerald-950/30 border-emerald-500/50 shadow-lg"
                    : table.status === "reserved"
                    ? "bg-amber-950/30 border-amber-500/50"
                    : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white uppercase">{table.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                    Cap: {table.capacity} Guests
                  </span>
                </div>

                {table.status !== "available" ? (
                  <div className="space-y-1 text-xs text-zinc-300 border-t border-zinc-800/80 pt-2">
                    <span className="font-semibold text-white block">{table.guestName}</span>
                    <span className="text-zinc-400 font-mono text-[11px]">Seated / Time: {table.time} • Server: {table.server}</span>
                  </div>
                ) : (
                  <span className="text-xs text-zinc-500 block border-t border-zinc-800/80 pt-2 font-mono">
                    Ready for walk-in or booking
                  </span>
                )}

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Click to cycle status</span>
                  <span className="uppercase font-semibold text-zinc-400">{table.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Kitchen Display System (KDS) */}
      {activeTab === "kitchen" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display">Live Order Ticket Stream</h3>
            <span className="text-xs font-mono text-zinc-400">Head Chef & Pass Line View</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {KITCHEN_TICKETS.map((ticket) => (
              <div key={ticket.ticketId} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="font-mono text-xs text-rose-400 font-bold">{ticket.ticketId}</span>
                    <h4 className="font-semibold text-white text-base">{ticket.table}</h4>
                  </div>
                  <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {ticket.timeAgo}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Items Ordered</span>
                  <div className="space-y-1">
                    {ticket.courses.map((item, i) => (
                      <div key={i} className="p-2 rounded bg-zinc-950 border border-zinc-850 font-medium text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{ticket.chef}</span>
                  <button className="px-3 py-1 rounded bg-rose-600 text-white font-semibold hover:bg-rose-500 transition-colors">
                    Pass Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Inventory */}
      {activeTab === "inventory" && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold font-display">Wine Cellar & Fine Ingredient Stock</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WINE_INVENTORY.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white text-base">{item.name}</h4>
                  <span className="text-xs text-zinc-400 font-mono">{item.region}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-lg font-bold text-rose-400 block">{item.stock} {item.unit}</span>
                  <span className="text-xs text-zinc-500 font-mono">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Staff */}
      {activeTab === "staff" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Kitchen Brigade & Sommelier Shift</h3>
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="font-semibold text-white">Chef de Cuisine - Marco Rossi</span>
              <span className="text-emerald-400 font-mono">On Duty (Pass Line)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="font-semibold text-white">Head Sommelier - Antoine Laurent</span>
              <span className="text-emerald-400 font-mono">On Duty (Main Floor)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-white">Maitre d&apos; - Claire Dupont</span>
              <span className="text-emerald-400 font-mono">On Duty (Host Stand)</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Sales */}
      {activeTab === "sales" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Tasting Menu & Beverage Revenue Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400 font-mono">7-Course Chef Tasting Sales</span>
              <div className="text-2xl font-bold font-mono text-rose-400 mt-1">₹1,24,000</div>
              <span className="text-xs text-zinc-500">28 covers at ₹4,500/person</span>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400 font-mono">Sommelier Wine Pairing Sales</span>
              <div className="text-2xl font-bold font-mono text-rose-400 mt-1">₹60,200</div>
              <span className="text-xs text-zinc-500">18 pairings at ₹3,350/person</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
