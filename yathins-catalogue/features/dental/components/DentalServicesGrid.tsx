"use client";

import * as React from "react";
import { DentalService } from "../types";
import { Clock, ArrowRight, Check } from "lucide-react";

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
    <section className="py-12 bg-zinc-950 space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">
          Specialized Dental Treatments
        </span>
        <h2 className="text-3xl font-display font-semibold text-white">
          Transparent, reassuring care plans.
        </h2>
        <p className="text-xs text-zinc-400">
          Select a service to view details or proceed directly to scheduling your specialist visit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const isSelected = selectedService.id === service.id;
          return (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className={`p-6 rounded-3xl bg-zinc-900/60 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "border-sky-500 bg-sky-950/20 shadow-xl shadow-sky-950/30"
                  : "border-zinc-800/80 hover:border-sky-500/40"
              }`}
            >
              <div className="space-y-3">
                {service.badge && (
                  <span className="inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    {service.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/40 space-y-3 mt-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="font-bold text-white text-sm">{service.priceEstimate}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookService(service);
                  }}
                  className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-600/20"
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
