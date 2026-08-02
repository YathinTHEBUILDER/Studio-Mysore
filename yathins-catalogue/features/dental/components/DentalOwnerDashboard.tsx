"use client";

import * as React from "react";
import { m } from "framer-motion";
import {
  Calendar,
  UserCheck,
  FileText,
  CreditCard,
  Activity,
  CheckCircle2,
  Clock,
  Search,
  Plus,
  ShieldAlert,
  Stethoscope,
  IndianRupee,
} from "lucide-react";

interface AppointmentItem {
  id: string;
  patientName: string;
  phone: string;
  chair: string;
  doctor: string;
  procedure: string;
  time: string;
  status: "confirmed" | "in_chair" | "completed";
}

const APPOINTMENTS: AppointmentItem[] = [
  { id: "DEN-901", patientName: "Aarav Mehta", phone: "+91 99001 12233", chair: "Chair 01 (Operatory A)", doctor: "Dr. Ananya Rao", procedure: "3D Aligners Progress Scan", time: "10:00 AM", status: "in_chair" },
  { id: "DEN-902", patientName: "Deepa K.", phone: "+91 98440 55667", chair: "Chair 02 (Operatory B)", doctor: "Dr. Vikram Seth", procedure: "Laser Teeth Whitening", time: "11:30 AM", status: "confirmed" },
  { id: "DEN-903", patientName: "Karthik R.", phone: "+91 97330 88990", chair: "Chair 03 (Surgical Bay)", doctor: "Dr. Ananya Rao", procedure: "Painless Root Canal & Crown", time: "02:00 PM", status: "confirmed" },
];

const PATIENT_RECORDS = [
  { chartId: "P-4089", name: "Aarav Mehta", age: 29, bloodGroup: "O+", lastVisit: "Today", treatmentHistory: "Aligner Tray 14/24 Issued. Minor IPD at #24", medicalAlerts: "No Known Allergies" },
  { chartId: "P-3822", name: "Deepa K.", age: 34, bloodGroup: "A+", lastVisit: "12 May 2026", treatmentHistory: "Composite Bonding #11, #21. Periodic Hygiene Clean.", medicalAlerts: "Penicillin Sensitivity" },
];

export const DentalOwnerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<"schedule" | "patients" | "billing" | "doctors">("schedule");
  const [appointments, setAppointments] = React.useState<AppointmentItem[]>(APPOINTMENTS);

  const updateStatus = (id: string, status: "confirmed" | "in_chair" | "completed") => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  return (
    <div className="w-full space-y-8 bg-zinc-950 text-white rounded-3xl border border-zinc-800/80 p-6 sm:p-10 shadow-2xl">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-xs font-semibold border border-sky-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Dental Practice OS
            </span>
            <span className="text-xs font-mono text-zinc-400">Clinical Terminal #01</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mt-2 tracking-tight">Apex Dental Clinical Command</h2>
          <p className="text-zinc-400 text-sm mt-1">Live operatory chairs, EHR patient charts, practitioner schedules & insurance claims.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Today&apos;s Billings</span>
            <span className="text-xl font-bold font-mono text-sky-400 mt-0.5">₹94,500</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Chairs Active</span>
            <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5">3 / 3 Chairs</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col col-span-2 sm:col-span-1">
            <span className="text-xs font-mono text-zinc-400">Appointments</span>
            <span className="text-xl font-bold font-mono text-white mt-0.5">14 Scheduled</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800/80">
        <button
          onClick={() => setActiveTab("schedule")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "schedule"
              ? "bg-sky-600 text-white shadow-lg shadow-sky-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Operatory Chairs Schedule</span>
        </button>

        <button
          onClick={() => setActiveTab("patients")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "patients"
              ? "bg-sky-600 text-white shadow-lg shadow-sky-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Patient EHR Charts</span>
        </button>

        <button
          onClick={() => setActiveTab("billing")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "billing"
              ? "bg-sky-600 text-white shadow-lg shadow-sky-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Invoices & Insurance</span>
        </button>

        <button
          onClick={() => setActiveTab("doctors")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "doctors"
              ? "bg-sky-600 text-white shadow-lg shadow-sky-600/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
          }`}
        >
          <Stethoscope className="w-4 h-4" />
          <span>Practitioner Roster</span>
        </button>
      </div>

      {/* Tab 1: Operatory Chairs Schedule */}
      {activeTab === "schedule" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display">Daily Clinical Chair Schedule</h3>
            <span className="text-xs font-mono text-zinc-400">Real-time chair status</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {appointments.map((apt) => (
              <div key={apt.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="font-mono text-xs text-sky-400 font-bold">{apt.id}</span>
                    <h4 className="font-semibold text-white text-base">{apt.patientName}</h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                    {apt.time}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-zinc-300">
                  <span className="text-sky-300 font-medium block">{apt.procedure}</span>
                  <span className="text-zinc-400 block font-mono">{apt.chair}</span>
                  <span className="text-zinc-500 block font-mono">Dentist: {apt.doctor}</span>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border uppercase font-semibold ${
                    apt.status === "in_chair"
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                      : apt.status === "completed"
                      ? "bg-zinc-800 text-zinc-400 border-zinc-700"
                      : "bg-sky-500/20 text-sky-300 border-sky-500/40"
                  }`}>
                    {apt.status}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {apt.status === "confirmed" && (
                      <button
                        onClick={() => updateStatus(apt.id, "in_chair")}
                        className="px-3 py-1 rounded bg-sky-600 text-white font-semibold text-xs hover:bg-sky-500"
                      >
                        Seat Patient
                      </button>
                    )}
                    {apt.status === "in_chair" && (
                      <button
                        onClick={() => updateStatus(apt.id, "completed")}
                        className="px-3 py-1 rounded bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500"
                      >
                        Complete Session
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Patient EHR Charts */}
      {activeTab === "patients" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display">Electronic Health Records (EHR)</h3>
            <button className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Add Patient Record
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PATIENT_RECORDS.map((rec) => (
              <div key={rec.chartId} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="font-mono text-xs text-sky-400 font-bold">{rec.chartId}</span>
                    <h4 className="font-semibold text-white text-base">{rec.name} ({rec.age} yrs)</h4>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 font-mono">Blood: {rec.bloodGroup}</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Treatment History & Notes</span>
                    <p className="text-zinc-300 font-mono mt-0.5">{rec.treatmentHistory}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-400 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" /> Medical Alerts & Allergies
                    </span>
                    <p className="text-zinc-300 font-mono mt-0.5">{rec.medicalAlerts}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Billing */}
      {activeTab === "billing" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Patient Invoices & Insurance Claims</h3>
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <div>
                <span className="font-semibold text-white block">Aarav Mehta — Inv #INV-3042</span>
                <span className="text-zinc-400">Aligners Phase 1 Payment (HDFC Ergo Claim Approved)</span>
              </div>
              <span className="font-mono font-bold text-sky-400 text-sm">₹45,000</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-white block">Deepa K. — Inv #INV-3041</span>
                <span className="text-zinc-400">Laser Whitening & Hygiene Package</span>
              </div>
              <span className="font-mono font-bold text-sky-400 text-sm">₹12,500</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Doctors */}
      {activeTab === "doctors" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-display">Practitioner Schedule & Specialties</h3>
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <div>
                <span className="font-semibold text-white block">Dr. Ananya Rao (MDS Orthodontics)</span>
                <span className="text-zinc-400">Operatory Chair 1 • 6 Patients Seated Today</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono">Active in Chair</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-white block">Dr. Vikram Seth (MDS Endodontics)</span>
                <span className="text-zinc-400">Operatory Chair 2 • 4 Patients Seated Today</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono">Active in Chair</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
