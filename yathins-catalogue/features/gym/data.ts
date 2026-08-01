import { GymMembershipTier, GymTrainer, GymClassSession } from "./types";

export const GYM_TIERS: GymMembershipTier[] = [
  {
    id: "tier-1",
    name: "Day Access Pass",
    priceMonthly: 25,
    features: [
      "Full Gym & Sauna Access",
      "Digital Turnstile QR Pass",
      "Locker & Towel Service",
      "1 Group Fitness Class",
    ],
  },
  {
    id: "tier-2",
    name: "Unlimited Pulse Club",
    priceMonthly: 89,
    badge: "Most Popular",
    features: [
      "24/7 Unlimited Gym Access",
      "Unlimited HIIT & Spin Classes",
      "Biometric InBody Composition Scans",
      "Guest Pass (1 per month)",
      "Cryotherapy Recovery Lounge",
    ],
  },
  {
    id: "tier-3",
    name: "VIP Personal Training Tier",
    priceMonthly: 220,
    badge: "All-Inclusive",
    features: [
      "Includes Unlimited Club Perks",
      "4 Dedicated 1-on-1 PT Sessions/mo",
      "Custom Macro & Nutrition Plan",
      "Priority Class Spot Reservations",
      "Private VIP Locker Suite",
    ],
  },
];

export const GYM_TRAINERS: GymTrainer[] = [
  {
    id: "tr-1",
    name: "Alex 'Apex' Mercer",
    role: "Head Strength & Conditioning Coach",
    specialty: "Powerlifting & Hypertrophy",
    bio: "Former Olympic weightlifting coach with 12+ years of transformation expertise.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tr-2",
    name: "Maya Lin",
    role: "HIIT & Spin Master Trainer",
    specialty: "High-Intensity Endurance",
    bio: "Passionate about high-energy tempo music rides and fat-torching conditioning.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tr-3",
    name: "David Vance",
    role: "Mobility & Boxing Coach",
    specialty: "Functional Movement & Boxing",
    bio: "Pro Golden Gloves champion specializing in agility, core stability, and combat fitness.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
];

export const GYM_CLASSES: GymClassSession[] = [
  {
    id: "cls-1",
    title: "HIIT Inferno 60",
    trainer: "Maya Lin",
    time: "Today, 6:00 PM",
    duration: "45 Mins",
    intensity: "Extreme",
    spotsRemaining: 4,
  },
  {
    id: "cls-2",
    title: "Heavy Iron Power Hour",
    trainer: "Alex Mercer",
    time: "Today, 7:15 PM",
    duration: "60 Mins",
    intensity: "High",
    spotsRemaining: 2,
  },
  {
    id: "cls-3",
    title: "Tempo Spin & Rhythm Ride",
    trainer: "Maya Lin",
    time: "Tomorrow, 7:00 AM",
    duration: "45 Mins",
    intensity: "High",
    spotsRemaining: 6,
  },
];
