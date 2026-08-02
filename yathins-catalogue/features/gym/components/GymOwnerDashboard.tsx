"use client";

import * as React from "react";
import { m } from "framer-motion";
import {
  Dumbbell,
  Users,
  Calendar,
  CreditCard,
  TrendingUp,
  QrCode,
  CheckCircle2,
  AlertCircle,
  Plus,
  RefreshCw,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

interface CheckInLog {
  scanId: string;
  memberName: string;
  passType: "VIP All-Access" | "Standard Strength" | "Trial Day-Pass";
  time: string;
  gate: string;
  status: "granted" | "denied";
}

const LIVE_CHECKINS: CheckInLog[] = [
  { scanId: "SCAN-401", memberName: "Karan Johar", passType: "VIP All-Access", time: "06:14 AM", gate: "Turnstile Gate A", status: "granted" },
  { scanId: "SCAN-402", memberName: "Ananya Panday", passType: "Standard Strength", time: "06:22 AM", gate: "Turnstile Gate B", status: "granted" },
  { scanId: "SCAN-403", memberName: "Rishabh Pant", passType: "Trial Day-Pass", time: "06:30 AM", gate: "Turnstile Gate A", status: "granted" },
];

const MEMBERSHIP_ROSTER = [
  { id: "MEM-801", name: "Karan Johar", plan: "VIP All-Access", renewalDate: "14 Oct 2026", status: "Active (Auto-Debit)", visitsThisMonth: 18 },
  { id: "MEM-802", name: "Ananya Panday", plan: "Standard Strength", renewalDate: "02 Sep 2026", status: "Active", visitsThisMonth: 12 },
  { id: "MEM-803", name: "Rishabh Pant", plan: "Trial Pass", renewalDate: "Tomorrow", status: "Trial Expiring", visitsThisMonth: 3 },
];

export const GymOwnerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"attendance" | "members" | "classes" | "revenue">("attendance");
  const [scans, setScans] = React.useState<CheckInLog[]>(LIVE_CHECKINS);

  return (
    <div className="w-full space-y-8 bg-zinc-950 text-white rounded-3xl border border-zinc-800/80 p-6 sm:p-10 shadow-2xl">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-xs font-semibold border border-indigo-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Fitness Platform OS
            </span>
            <span className="text-xs font-mono text-zinc-400">Turnstile Scanner #01</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mt-2 tracking-tight">Pulse Athletics Facility Command</h2>
          <p className="text-zinc-400 text-sm mt-1">Live gate check-ins, member pass subscriptions, trainer scheduling & MRR reports.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Monthly Recurring (MRR)</span>
            <span className="text-xl font-bold font-mono text-indigo-400 mt-0.5">₹3,85,000</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Active Members</span>
            <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5">248 Passholders</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col col-span-2 sm:col-span-1">
            <span className="text-xs font-mono text-zinc-400">Checked-In Right Now</span>
            <span className="text-xl font-bold font-mono text-white mt-0.5">34 Athletes</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800/80">
        <button
          onClick={() => setActiveTab("attendance")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "attendance"
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <QrCode className="w-4 h-4" />
          <span>Live Turnstile Attendance</span>
        </button>

        <button
          onClick={() => setActiveTab("members")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "members"
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Member Pass Roster</span>
        </button>

        <button
          onClick={() => setActiveTab("classes")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "classes"
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Classes & Trainer Utilization</span>
        </button>

        <button
          onClick={() => setActiveTab("revenue")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "revenue"
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Subscriptions & MRR</span>
        </button>
      </div>

      {/* Tab 1: Live Turnstile Attendance */}
      {activeTab === "attendance" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display">Gate Scanner Stream</h3>
            <span className="text-xs font-mono text-zinc-400">RFID & QR Turnstile Terminal</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {scans.map((log) => (
              <div key={log.scanId} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="font-mono text-xs text-indigo-400 font-bold">{log.scanId}</span>
                    <h4 className="font-semibold text-white text-base">{log.memberName}</h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {log.time}
                  </span>
                </div>

                <div className="space-y-1 text-xs font-mono text-zinc-300">
                  <span className="text-indigo-300 block">{log.passType}</span>
                  <span className="text-zinc-400 block">{log.gate}</span>
                </div>

                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Access Granted
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Members */}
      {activeTab === "members" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display">Active Gym Memberships</h3>
            <button className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Issue Member Pass
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MEMBERSHIP_ROSTER.map((mem) => (
              <div key={mem.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="font-mono text-xs text-indigo-400 font-bold">{mem.id}</span>
                    <h4 className="font-semibold text-white text-base">{mem.name}</h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                    {mem.visitsThisMonth} Visits
                  </span>
                </div>

                <div className="space-y-1 font-mono text-zinc-300">
                  <span className="text-white block font-medium">{mem.plan}</span>
                  <span className="text-zinc-400 block">Renews: {mem.renewalDate}</span>
                </div>

                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400">{mem.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Classes */}
      {activeTab === "classes" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Group Class Capacity & Trainer Schedule</h3>
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="font-semibold text-white">HIIT Conditioning (07:00 AM) — Coach Rahul M.</span>
              <span className="text-emerald-400 font-mono">18 / 20 Booked (90% Full)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="font-semibold text-white">Powerlifting Workshop (06:00 PM) — Coach Alex R.</span>
              <span className="text-indigo-400 font-mono">12 / 15 Booked (80% Full)</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Revenue */}
      {activeTab === "revenue" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Recurring Membership Revenue (MRR)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400 font-mono">VIP All-Access Passes</span>
              <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">₹2,40,000</div>
              <span className="text-xs text-zinc-500">48 members at ₹5,000/mo</span>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400 font-mono">Standard Strength Passes</span>
              <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">₹1,45,000</div>
              <span className="text-xs text-zinc-500">58 members at ₹2,500/mo</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
