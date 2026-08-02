"use client";

import * as React from "react";
import { m } from "framer-motion";
import {
  Activity,
  Users,
  FileText,
  Pill,
  TrendingUp,
  Stethoscope,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  IndianRupee,
} from "lucide-react";

interface TriagePatient {
  tokenId: string;
  patientName: string;
  age: number;
  dept: string;
  doctor: string;
  consultationType: "In-Person OPD" | "Telehealth Video";
  triagePriority: "Urgent" | "Standard" | "Routine";
  waitTime: string;
  status: "waiting" | "in_consultation" | "dispatched";
}

const INITIAL_TRIAGE: TriagePatient[] = [
  { tokenId: "OPD-102", patientName: "Sunita Verma", age: 52, dept: "Cardiology", doctor: "Dr. Rajesh V. Iyer", consultationType: "In-Person OPD", triagePriority: "Urgent", waitTime: "4 mins", status: "in_consultation" },
  { tokenId: "OPD-103", patientName: "Rahul Hegde", age: 31, dept: "Orthopedics", doctor: "Dr. Sunita Deshmukh", consultationType: "In-Person OPD", triagePriority: "Standard", waitTime: "12 mins", status: "waiting" },
  { tokenId: "TEL-401", patientName: "Meenakshi K.", age: 44, dept: "General Medicine", doctor: "Dr. Vikram K.", consultationType: "Telehealth Video", triagePriority: "Routine", waitTime: "18 mins", status: "waiting" },
];

const PHARMACY_STOCK = [
  { name: "Amoxicillin & Clavulanate 625mg", category: "Antibiotics", stock: 240, unit: "strips", reorderAt: 50 },
  { name: "Metformin Hydrochloride 500mg", category: "Diabetic Care", stock: 480, unit: "strips", reorderAt: 100 },
  { name: "Telmisartan 40mg (BP Control)", category: "Cardiovascular", stock: 320, unit: "strips", reorderAt: 80 },
  { name: "CBC & Lipid Profile Lab Kits", category: "Diagnostics", stock: 38, unit: "kits", reorderAt: 15 },
];

export const MedicalOwnerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"triage" | "pharmacy" | "departments" | "reports">("triage");
  const [triageList, setTriageList] = React.useState<TriagePatient[]>(INITIAL_TRIAGE);

  const updateTriageStatus = (tokenId: string, status: "waiting" | "in_consultation" | "dispatched") => {
    setTriageList((prev) =>
      prev.map((p) => (p.tokenId === tokenId ? { ...p, status } : p))
    );
  };

  return (
    <div className="w-full space-y-8 bg-zinc-950 text-white rounded-3xl border border-zinc-800/80 p-6 sm:p-10 shadow-2xl">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-mono text-xs font-semibold border border-teal-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Medical Health System OS
            </span>
            <span className="text-xs font-mono text-zinc-400">OPD & Telehealth Terminal</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mt-2 tracking-tight">St. Jude Medical Center Command</h2>
          <p className="text-zinc-400 text-sm mt-1">Real-time OPD triage queue, pharmacy inventory, specialist consultations & clinical reports.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Daily Revenue</span>
            <span className="text-xl font-bold font-mono text-teal-400 mt-0.5">₹1,42,800</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">OPD Triage</span>
            <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5">18 Waiting</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col col-span-2 sm:col-span-1">
            <span className="text-xs font-mono text-zinc-400">Telehealth Queue</span>
            <span className="text-xl font-bold font-mono text-white mt-0.5">6 Connected</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800/80">
        <button
          onClick={() => setActiveTab("triage")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "triage"
              ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>OPD & Telehealth Triage Queue</span>
        </button>

        <button
          onClick={() => setActiveTab("pharmacy")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "pharmacy"
              ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Pill className="w-4 h-4" />
          <span>Pharmacy & Lab Inventory</span>
        </button>

        <button
          onClick={() => setActiveTab("departments")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "departments"
              ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Stethoscope className="w-4 h-4" />
          <span>Department Roster</span>
        </button>

        <button
          onClick={() => setActiveTab("reports")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "reports"
              ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Clinic Footfall Reports</span>
        </button>
      </div>

      {/* Tab 1: OPD Triage Queue */}
      {activeTab === "triage" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display">Live Patient Triage Stream</h3>
            <span className="text-xs font-mono text-zinc-400">Token Dispatch System</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {triageList.map((item) => (
              <div key={item.tokenId} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="font-mono text-xs text-teal-400 font-bold">{item.tokenId}</span>
                    <h4 className="font-semibold text-white text-base">{item.patientName} ({item.age} yrs)</h4>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-semibold ${
                    item.triagePriority === "Urgent"
                      ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                      : "bg-zinc-950 text-zinc-400 border-zinc-800"
                  }`}>
                    {item.triagePriority}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-zinc-300 font-mono">
                  <span className="text-white block font-medium">{item.dept}</span>
                  <span className="text-zinc-400 block">Doctor: {item.doctor}</span>
                  <span className="text-teal-300 block">{item.consultationType} • Wait: {item.waitTime}</span>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">{item.status}</span>
                  {item.status === "waiting" && (
                    <button
                      onClick={() => updateTriageStatus(item.tokenId, "in_consultation")}
                      className="px-3 py-1 rounded bg-teal-600 text-white font-semibold text-xs hover:bg-teal-500"
                    >
                      Call Patient
                    </button>
                  )}
                  {item.status === "in_consultation" && (
                    <button
                      onClick={() => updateTriageStatus(item.tokenId, "dispatched")}
                      className="px-3 py-1 rounded bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500"
                    >
                      Complete Consultation
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Pharmacy & Lab Inventory */}
      {activeTab === "pharmacy" && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold font-display">Dispensary Stock & Lab Diagnostic Reagents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PHARMACY_STOCK.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">{item.category}</span>
                  <h4 className="font-semibold text-white text-base mt-0.5">{item.name}</h4>
                </div>
                <div className="text-right">
                  <span className="font-mono text-lg font-bold text-teal-400 block">{item.stock} {item.unit}</span>
                  <span className="text-xs text-zinc-500 font-mono">Reorder Limit: {item.reorderAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Department Roster */}
      {activeTab === "departments" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Specialist Department Attendance</h3>
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="font-semibold text-white">Cardiology Department — Dr. Rajesh V. Iyer</span>
              <span className="text-emerald-400 font-mono">OPD Room 104 Active</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="font-semibold text-white">Orthopedics & Joint Clinic — Dr. Sunita Deshmukh</span>
              <span className="text-emerald-400 font-mono">OPD Room 202 Active</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-white">General Pediatrics — Dr. Vikram K.</span>
              <span className="text-teal-400 font-mono">Telehealth Studio 1 Active</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Reports */}
      {activeTab === "reports" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Patient Footfall & Revenue Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400 font-mono">In-Person OPD Consultations</span>
              <div className="text-2xl font-bold font-mono text-teal-400 mt-1">₹98,000</div>
              <span className="text-xs text-zinc-500">56 patients visited today</span>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400 font-mono">Telehealth & Diagnostics Revenue</span>
              <div className="text-2xl font-bold font-mono text-teal-400 mt-1">₹44,800</div>
              <span className="text-xs text-zinc-500">22 video consults + 18 lab tests</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
