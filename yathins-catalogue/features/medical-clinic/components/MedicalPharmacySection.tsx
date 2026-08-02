"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HEALTH_PACKAGES, MEDICAL_REVIEWS, CLINIC_TIMINGS } from "../data";
import { ShieldCheck, Stethoscope, Clock, Star, Quote, PhoneCall, Pill, CheckCircle2 } from "lucide-react";

export function MedicalPharmacySection() {
  return (
    <section className="py-16 bg-zinc-950 text-white border-t border-zinc-900">
      <Container variant="wide">
        {/* Preventive Health & Diagnostics Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3">
            <Pill className="w-3.5 h-3.5" />
            Pharmacy & Diagnostic Services
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Preventive Health Checkups & In-House Pharmacy
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            NABL-Accredited laboratory diagnostics, full-body health screening packages, and doorstep prescription fulfillment.
          </p>
        </div>

        {/* Health Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {HEALTH_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-teal-400 uppercase font-semibold">
                    {pkg.category}
                  </span>
                  {pkg.badge && (
                    <span className="text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>

                <div className="text-2xl font-bold text-teal-400 font-mono mb-4">
                  {pkg.price > 0 ? `₹${pkg.price.toLocaleString("en-IN")}` : "Free Service"}
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.testsIncluded.map((test, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>{pkg.fastingRequired ? "10-12 Hrs Fasting Required" : "No Fasting Needed"}</span>
                <span className="text-teal-300 font-semibold cursor-pointer">Book Package →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Patient Reviews */}
        <div className="border-t border-zinc-900 pt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1 text-teal-400 text-sm font-semibold mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-teal-400 text-teal-400" />
              ))}
              <span className="ml-2 text-zinc-300 font-normal">4.95 / 5.0 Patient Satisfaction</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Patient Testimonials</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {MEDICAL_REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-teal-400 text-teal-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-teal-300">{rev.department}</span>
                </div>
                <Quote className="w-5 h-5 text-teal-500/20 mb-2" />
                <p className="text-zinc-300 text-xs italic leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/80">
                  <div className="relative w-9 h-9 rounded-sm border border-teal-500/30 p-0.5 bg-slate-950 overflow-hidden shrink-0 shadow-md">
                    <Image src={rev.avatar} alt={rev.patientName} fill className="object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{rev.patientName}</div>
                    <div className="text-[11px] text-zinc-400">Treated by: {rev.doctorName}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 24/7 Emergency & Clinic Timings Banner */}
          <div className="bg-gradient-to-r from-zinc-900 via-teal-950/20 to-zinc-900 border border-teal-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Clinic Consultation Hours</h4>
                <p className="text-zinc-300 text-xs mt-1">OPD: {CLINIC_TIMINGS.consultationHours} | Pharmacy: {CLINIC_TIMINGS.pharmacyHours}</p>
                <p className="text-zinc-400 text-xs mt-0.5">{CLINIC_TIMINGS.address}</p>
              </div>
            </div>

            <a
              href={`tel:${CLINIC_TIMINGS.emergencyLine}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-500 transition-colors shadow-lg shadow-teal-600/20 shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              Emergency Helpline: {CLINIC_TIMINGS.emergencyLine}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
