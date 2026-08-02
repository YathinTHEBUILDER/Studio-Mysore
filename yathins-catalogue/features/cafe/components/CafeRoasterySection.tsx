"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Award, Flame, HeartHandshake, Coffee } from "lucide-react";

export const CafeRoasterySection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-950/90 border-t border-b border-amber-900/20 relative">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>The Artisan Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-amber-50 tracking-tight">
            Micro-roasted weekly in Mysore.
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base leading-relaxed font-sans">
            We partner directly with high-altitude farms across Yirgacheffe, Colombia Huila, and Chikmagalur to source single-origin micro-lots roasted with unhurried precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-stone-900/60 border border-amber-900/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Flame className="w-5.5 h-5.5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-amber-100">Cast-Iron Drum Roasted</h3>
            <p className="text-xs font-sans text-amber-200/70 leading-relaxed">
              Batch-roasted on a restored 1968 Cast-Iron Diedrich roaster every Tuesday morning to unlock complex sugar browning.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900/60 border border-amber-900/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Award className="w-5.5 h-5.5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-amber-100">88+ Specialty Score</h3>
            <p className="text-xs font-sans text-amber-200/70 leading-relaxed">
              Every bean origin undergoes strict sensory evaluation and certified Q-grader cupping before entering our hopper.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900/60 border border-amber-900/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <HeartHandshake className="w-5.5 h-5.5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-amber-100">Direct Farm Relationships</h3>
            <p className="text-xs font-sans text-amber-200/70 leading-relaxed">
              We pay 40% above fair-trade floor prices directly to family-owned single-estate growers in South India & Africa.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

