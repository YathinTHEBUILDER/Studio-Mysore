"use client";

import * as React from "react";
import { DentalService } from "../types";
import { Clock, ArrowRight } from "lucide-react";

interface DentalServicesGridProps {
  services: DentalService[];
  selectedService: DentalService;
  onSelectService: (service: DentalService) => void;
  onBookService: (service: DentalService) => void;
}

export const DentalServicesGrid: React.FC<DentalServicesGridProps> = ({
  services,
  selectedService,
  onSelectService,
  onBookService,
}) => {
  return (
    <section className="py-12 bg-slate-950 space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">
          Specialized Dental Treatments
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-slate-50 tracking-tight">
          Transparent, reassuring care plans.
        </h2>
        <p className="text-xs font-sans text-slate-300">
          Select a clinical treatment to view procedures, duration, and transparent cost estimates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const isSelected = selectedService.id === service.id;
          return (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className={`p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "border-sky-400 bg-sky-950/30 shadow-xl shadow-sky-950/40"
                  : "border-sky-500/20 hover:border-sky-400/50 hover:bg-slate-900/80"
              }`}
            >
              <div className="space-y-3">
                {service.badge && (
                  <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/30 shadow-sm">
                    {service.badge}
                  </span>
                )}
                <h3 className="font-sans text-lg font-semibold text-slate-50 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs font-sans text-slate-300 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 space-y-3 mt-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="font-bold text-sky-300 text-sm">{service.priceEstimate}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookService(service);
                  }}
                  className="w-full py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-sans font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20 active:scale-98"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

