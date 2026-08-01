"use client";

import * as React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  emoji: string;
  accentHex: string;
  description: string;
  route: string;
  image: string;
  workflows: string[];
}

export const EXPERIENCES_LIST: ExperienceItem[] = [
  {
    id: "cafe",
    title: "Artisan Café & Roasters",
    category: "Food & Beverage",
    emoji: "☕",
    accentHex: "#D97706",
    description: "Speedy espresso & pastry mobile ordering web app with live cart, customization, and express pickup checkout.",
    route: "/experiences/cafe",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    workflows: ["Categories & Menu", "Custom Drink Modals", "Cart & Express Checkout", "Order Confirmation"],
  },
  {
    id: "restaurant",
    title: "L'Étoile Fine Dining & Lounge",
    category: "Hospitality & Dining",
    emoji: "🍽",
    accentHex: "#E11D48",
    description: "Editorial dining website with interactive table reservation engine, multi-course tasting menu, and sommelier wine pairings.",
    route: "/experiences/restaurant",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
    workflows: ["Table Reservation Engine", "Multi-Course Tasting Menu", "Wine Pairing Selector", "Holding Deposit Checkout"],
  },
  {
    id: "dental",
    title: "Apex Dental Studio",
    category: "Healthcare & Aesthetics",
    emoji: "🦷",
    accentHex: "#0284C7",
    description: "Reassuring dental practice web app with 3D treatment showcase, practitioner directory, slot calendar, and HIPAA intake.",
    route: "/experiences/dental",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    workflows: ["Treatment Services", "Specialist Directory", "Slot Calendar Booking", "Patient Intake Modal"],
  },
  {
    id: "medical-clinic",
    title: "Vanguard Health Clinic",
    category: "Medical & Telehealth",
    emoji: "🏥",
    accentHex: "#0D9488",
    description: "Modern health clinic web app featuring clinical department triage, verified doctor profiles, and telehealth consultation rooms.",
    route: "/experiences/medical-clinic",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    workflows: ["Department Directory", "Doctor Profiles", "Telehealth vs In-Person", "Encrypted Intake"],
  },
  {
    id: "gym",
    title: "Pulse Fitness Studio",
    category: "Fitness & Wellness",
    emoji: "💪",
    accentHex: "#8B5CF6",
    description: "High-energy gym website with membership tier pass purchase, live class timetable spot booking, and digital turnstile QR access.",
    route: "/experiences/gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    workflows: ["Membership Tier Passes", "Live Class Timetable", "Spot Reservation", "Digital QR Entry Pass"],
  },
];

export const ExperienceDirectoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-950">
      <Container variant="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_LIST.map((exp) => (
            <m.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-xs font-mono font-medium text-white">
                    <span>{exp.emoji}</span>
                    <span>{exp.category}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="border-t border-zinc-800/60 pt-3 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block font-semibold">
                      Complete Workflows Included
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-zinc-300">
                      {exp.workflows.map((wf, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{wf}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={exp.route}
                  className="w-full py-3.5 px-6 rounded-xl bg-white text-zinc-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 hover:bg-zinc-100 shadow-md group-hover:shadow-lg"
                >
                  <span>Launch Standalone Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
