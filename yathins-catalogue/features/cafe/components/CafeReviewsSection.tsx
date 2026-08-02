"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CAFE_REVIEWS } from "../data";
import { Star, Quote } from "lucide-react";

export function CafeReviewsSection() {
  return (
    <section className="py-16 bg-zinc-950 border-t border-zinc-900">
      <Container variant="wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 text-amber-400 text-sm font-semibold mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-zinc-300 font-normal">4.9 / 5.0 (480+ Reviews)</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
            What Coffee Lovers Say
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Real guest experiences from our daily Gokulam cafe visitors and whole bean coffee subscribers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAFE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500">{review.date}</span>
                </div>

                <Quote className="w-6 h-6 text-amber-500/20 mb-2" />
                <p className="text-zinc-300 text-xs leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
                <div className="relative w-11 h-11 rounded-sm border border-amber-500/30 p-0.5 bg-stone-950 shrink-0 overflow-hidden shadow-md">
                  <Image src={review.avatar} alt={review.author} fill className="object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05]" />
                  <div className="absolute inset-0 bg-amber-900/10 mix-blend-soft-light pointer-events-none" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold">{review.author}</div>
                  <div className="text-zinc-400 text-[11px]">
                    Loves: <span className="text-amber-300">{review.favoriteItem}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
