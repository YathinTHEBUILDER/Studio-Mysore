"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CAFE_STAFF, CAFE_HOURS } from "../data";
import { Coffee, Award, Clock, MapPin, Phone } from "lucide-react";

export function CafeStaffSection() {
  return (
    <section className="py-16 bg-zinc-900/60 border-t border-zinc-800/60">
      <Container variant="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Coffee className="w-3.5 h-3.5" />
              Craft & Passion
            </div>
            <h2 className="text-3xl font-serif tracking-tight text-white font-bold">
              Meet Our Artisans & Roasters
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Every bean is ethically sourced, sample-cupped, and roasted in small batches by our certified coffee team.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 p-3.5 rounded-xl">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <div className="text-white font-medium">Roastery Opening Hours</div>
              <div>Mon–Sun: {CAFE_HOURS.weekdays}</div>
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CAFE_STAFF.map((staff, idx) => (
            <div
              key={staff.id}
              className="group bg-stone-950/90 border border-amber-900/40 rounded-sm p-1 overflow-hidden hover:border-amber-500/50 transition-all duration-500 flex flex-col shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)]"
            >
              <div className="relative h-72 w-full overflow-hidden bg-zinc-950 rounded-none border-b border-amber-900/30">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  fill
                  className="object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-soft-light pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(9,9,11,0.8)_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                <div className="absolute top-2.5 left-3 text-[9px] font-mono tracking-widest text-amber-400/80 bg-stone-950/90 px-2 py-0.5 rounded-sm border border-amber-500/30 uppercase">
                  35MM PORTRAIT • 0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-amber-300 bg-amber-950/90 border border-amber-500/30 px-3 py-1 rounded-sm shadow-md">
                    <Award className="w-3 h-3" />
                    {staff.experience}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {staff.name}
                  </h3>
                  <p className="text-amber-500/90 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-3">
                    {staff.role}
                  </p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    {staff.bio}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400">
                  <span className="text-zinc-500 font-medium">Favorite Pick: </span>
                  <span className="text-amber-200 font-medium">{staff.favoriteBrew}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Opening Hours Banner */}
        <div className="bg-gradient-to-r from-zinc-900 via-amber-950/20 to-zinc-900 border border-amber-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Visit Our Flagship Gokulam Roastery</h4>
              <p className="text-zinc-300 text-xs mt-1">{CAFE_HOURS.address}</p>
              <p className="text-zinc-400 text-xs mt-0.5">Kitchen Closes: {CAFE_HOURS.kitchenCloses} • {CAFE_HOURS.cuppingSessions}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CAFE_HOURS.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-zinc-950 text-xs font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10"
            >
              <Phone className="w-4 h-4" />
              Call Roastery: {CAFE_HOURS.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
