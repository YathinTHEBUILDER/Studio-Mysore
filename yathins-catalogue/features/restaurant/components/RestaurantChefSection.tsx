"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CHEF_PROFILE, RESTAURANT_REVIEWS, RESTAURANT_HOURS } from "../data";
import { UtensilsCrossed, Award, Clock, Star, Quote, MapPin, Phone } from "lucide-react";

export function RestaurantChefSection() {
  return (
    <section className="py-20 bg-zinc-950 text-white border-t border-zinc-900">
      <Container variant="wide">
        {/* Chef Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative">
            <div className="relative h-[500px] w-full rounded-sm border border-rose-500/30 p-1 bg-stone-950 overflow-hidden shadow-[0_25px_60px_-15px_rgba(225,29,72,0.25)] group">
              <div className="relative h-full w-full overflow-hidden bg-zinc-950">
                <Image
                  src={CHEF_PROFILE.image}
                  alt={CHEF_PROFILE.name}
                  fill
                  className="object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-rose-950/10 mix-blend-soft-light pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(9,9,11,0.85)_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-rose-300/80 bg-stone-950/90 px-2.5 py-1 rounded-sm border border-rose-500/30 uppercase">
                  EXECUTIVE PORTRAIT • 35MM
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-stone-950/90 backdrop-blur-md border border-rose-500/30">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-500/30 px-3 py-1 rounded-sm mb-2">
                    <Award className="w-3.5 h-3.5" />
                    {CHEF_PROFILE.experience}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {CHEF_PROFILE.name}
                  </h3>
                  <p className="text-rose-400 text-xs font-medium mt-0.5">
                    {CHEF_PROFILE.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              Culinary Vision
            </div>

            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Heritage Recipes Meets Modern Progressive Fine Dining
            </h2>

            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              "{CHEF_PROFILE.philosophy}"
            </p>

            <div className="p-4 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs space-y-2">
              <div className="text-zinc-400 font-medium">Signature Creation:</div>
              <div className="text-rose-300 font-bold text-sm">{CHEF_PROFILE.signatureDish}</div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                Accolades & Recognition
              </h4>
              <div className="flex flex-wrap gap-2">
                {CHEF_PROFILE.awards.map((award, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium"
                  >
                    <Award className="w-3.5 h-3.5 text-rose-400" />
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guest Reviews & Dining Info */}
        <div className="border-t border-zinc-900 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1 text-rose-400 text-sm font-semibold mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-rose-400 text-rose-400" />
              ))}
              <span className="ml-2 text-zinc-300 font-normal">4.9 / 5.0 Michelin-Standard Reviews</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Guest Reflections</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {RESTAURANT_REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-rose-400/90 font-medium">{rev.occasion}</span>
                </div>
                <Quote className="w-5 h-5 text-rose-500/20 mb-2" />
                <p className="text-zinc-300 text-xs italic leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/80">
                  <div className="relative w-9 h-9 rounded-sm border border-rose-500/30 p-0.5 bg-stone-950 overflow-hidden shrink-0 shadow-md">
                    <Image src={rev.avatar} alt={rev.author} fill className="object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05]" />
                  </div>
                  <div className="text-xs font-bold text-white">{rev.author}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Restaurant Hours & Location Banner */}
          <div className="bg-gradient-to-r from-zinc-900 via-rose-950/20 to-zinc-900 border border-rose-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Dining Hours & Reservations</h4>
                <p className="text-zinc-300 text-xs mt-1">Lunch: {RESTAURANT_HOURS.lunch} | Dinner: {RESTAURANT_HOURS.dinner}</p>
                <p className="text-zinc-400 text-xs mt-0.5"><MapPin className="w-3 h-3 inline mr-1" />{RESTAURANT_HOURS.address} • Dress Code: {RESTAURANT_HOURS.dressCode}</p>
              </div>
            </div>

            <a
              href={`tel:${RESTAURANT_HOURS.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-600/20 shrink-0"
            >
              <Phone className="w-4 h-4" />
              Reserve Concierge: {RESTAURANT_HOURS.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
