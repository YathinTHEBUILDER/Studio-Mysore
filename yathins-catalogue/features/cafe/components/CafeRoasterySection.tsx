"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Award, Flame, HeartHandshake, Sparkles } from "lucide-react";

export const CafeRoasterySection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950/80 border-t border-b border-amber-900/10">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Artisan Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight">
            Micro-roasted weekly in Mysore.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We partner directly with high-altitude farms across Yirgacheffe, Colombia Huila, and Chikmagalur to source single-origin micro-lots roasted with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Drum Roasted Fresh</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Batch-roasted on a restored 1968 Cast-Iron Diedrich roaster every Tuesday morning.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">88+ Cupping Score</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every bean origin undergoes strict sensory evaluation and Q-grader cupping before release.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Direct Trade Farmers</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We pay 40% above fair-trade floor prices directly to family-owned coffee estates.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
