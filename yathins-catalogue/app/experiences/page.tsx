"use client";

import * as React from "react";
import { Navbar, Footer } from "@/components/layout";
import { ExperienceDirectoryHero } from "@/features/experiences/components/ExperienceDirectoryHero";
import { ExperienceDirectoryGrid } from "@/features/experiences/components/ExperienceDirectoryGrid";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ExperiencesDirectoryPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-amber-500 selection:text-zinc-950">
      <Navbar />
      <ExperienceDirectoryHero />
      <ExperienceDirectoryGrid />
      <FinalCTA />
      <Footer />
    </main>
  );
}
