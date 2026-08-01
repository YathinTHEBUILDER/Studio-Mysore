import { DentalService, DentalDoctor } from "./types";

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "dent-1",
    title: "Laser Teeth Whitening & Polishing",
    category: "cosmetic",
    priceEstimate: "$290",
    duration: "45 Mins",
    description: "Instant 8-shade brightening using zero-sensitivity diode laser technology and enamel glaze.",
    badge: "Most Popular",
  },
  {
    id: "dent-2",
    title: "3D Digital Intraoral Checkup & Cleaning",
    category: "preventative",
    priceEstimate: "$120",
    duration: "30 Mins",
    description: "Comprehensive 360° cavity scan, ultrasonic scaling, and personalized oral hygiene roadmap.",
    badge: "Insurance Coverable",
  },
  {
    id: "dent-3",
    title: "Clear Aligner & Invisalign Consultation",
    category: "orthodontics",
    priceEstimate: "$150 (Credited)",
    duration: "60 Mins",
    description: "AI-driven 3D smile simulation showing your predicted aligner teeth alignment in real-time.",
    badge: "Free 3D Scan",
  },
  {
    id: "dent-4",
    title: "Painless Dental Implant & Crown",
    category: "surgery",
    priceEstimate: "$1,200",
    duration: "90 Mins",
    description: "Titanium implant precision guided surgery under gentle local sedation.",
  },
];

export const DENTAL_DOCTORS: DentalDoctor[] = [
  {
    id: "doc-1",
    name: "Dr. Aris Thorne, DDS",
    role: "Lead Cosmetic Surgeon",
    specialty: "Veneers & Laser Aesthetics",
    experience: "14+ Yrs Exp",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
  },
  {
    id: "doc-2",
    name: "Dr. Elena Rostova, DMD",
    role: "Orthodontic Specialist",
    specialty: "Invisalign & Clear Aligners",
    experience: "11+ Yrs Exp",
    image: "https://images.unsplash.com/photo-1594824813566-88855ce78964?q=80&w=800&auto=format&fit=crop",
    rating: 4.95,
  },
  {
    id: "doc-3",
    name: "Dr. Marcus Vance, BDS",
    role: "Periodontist & Implantologist",
    specialty: "Painless Implants & Surgery",
    experience: "16+ Yrs Exp",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
  },
];
