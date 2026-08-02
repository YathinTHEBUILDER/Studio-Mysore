import { GymMembershipTier, GymTrainer, GymClassSession, GymReview } from "./types";

export const GYM_TIERS: GymMembershipTier[] = [
  {
    id: "tier-1",
    name: "Day Access Pass",
    priceMonthly: 499,
    billingPeriod: "per day",
    features: [
      "Full Gym & Sauna Lounge Access",
      "Digital Turnstile QR Pass",
      "Fresh Locker & Towel Service",
      "1 Group Fitness Class Included",
    ],
  },
  {
    id: "tier-2",
    name: "Unlimited Pulse Club",
    priceMonthly: 3500,
    billingPeriod: "/ month",
    badge: "Most Popular",
    features: [
      "24/7 Unlimited Club Access",
      "Unlimited HIIT, Spin & Yoga Classes",
      "Biometric InBody 770 Composition Scans",
      "Guest Pass (1 per month)",
      "Cryotherapy Recovery Lounge",
    ],
  },
  {
    id: "tier-3",
    name: "VIP Personal Training Pass",
    priceMonthly: 12500,
    billingPeriod: "/ month",
    badge: "All-Inclusive",
    features: [
      "Includes All Unlimited Club Perks",
      "4 Dedicated 1-on-1 PT Sessions / month",
      "Customized Indian Macro & Nutrition Plan",
      "Priority Reserved Spot in All Classes",
      "Private VIP Locker & Laundry Suite",
    ],
  },
  {
    id: "tier-4",
    name: "Annual VIP Founders Tier",
    priceMonthly: 24999,
    billingPeriod: "/ year (Save 40%)",
    badge: "Best Value",
    features: [
      "Full Year Unlimited All-Access",
      "12 Personal Trainer Check-in Sessions",
      "Cryotherapy & Sauna Unlimited",
      "24 Free Guest Passes per Year",
      "Exclusive Pulse Athletic Apparel Kit",
    ],
  },
];

export const GYM_TRAINERS: GymTrainer[] = [
  {
    id: "tr-1",
    name: "Arjun 'Titan' Vaidya",
    certifications: "CSCS, USAW Level 2 Weightlifting",
    role: "Head Strength & Conditioning Coach",
    specialty: "Powerlifting, Hypertrophy & Athletic Performance",
    bio: "Ex-national weightlifting coach with 12+ years experience training competitive athletes and strength enthusiasts.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tr-2",
    name: "Kavya Nair",
    certifications: "NASM-CPT, Schwinn Master Spin Instructor",
    role: "HIIT & Rhythm Spin Master Trainer",
    specialty: "High-Intensity Endurance & Tempo Cycling",
    bio: "Renowned for high-octane playlist tempo rides and fat-torching metabolic conditioning sessions.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tr-3",
    name: "Rohan Deshmukh",
    certifications: "FRCms, Kettlebell Level 2 Specialist",
    role: "Functional Mobility & Combat Coach",
    specialty: "Agility, Core Stability & Boxing Conditioning",
    bio: "Pro state combat champion specializing in joint longevity, core power, and functional athletic movement.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
];

export const GYM_CLASSES: GymClassSession[] = [
  {
    id: "cls-1",
    title: "HIIT Inferno 60",
    trainer: "Kavya Nair",
    time: "Today, 6:00 PM",
    duration: "45 Mins",
    intensity: "Extreme",
    spotsRemaining: 4,
    category: "HIIT",
  },
  {
    id: "cls-2",
    title: "Heavy Iron Power Hour",
    trainer: "Arjun Vaidya",
    time: "Today, 7:15 PM",
    duration: "60 Mins",
    intensity: "High",
    spotsRemaining: 2,
    category: "Strength",
  },
  {
    id: "cls-3",
    title: "Tempo Spin & Rhythm Ride",
    trainer: "Kavya Nair",
    time: "Tomorrow, 7:00 AM",
    duration: "45 Mins",
    intensity: "High",
    spotsRemaining: 6,
    category: "Spin",
  },
  {
    id: "cls-4",
    title: "Sunrise Power Vinyasa Yoga",
    trainer: "Priya Sundaram",
    time: "Tomorrow, 6:30 AM",
    duration: "50 Mins",
    intensity: "Medium",
    spotsRemaining: 8,
    category: "Yoga",
  },
];

export const GYM_REVIEWS: GymReview[] = [
  {
    id: "grev-1",
    memberName: "Siddharth Rao",
    rating: 5,
    membershipType: "Unlimited Pulse Club",
    comment: "The equipment at Pulse Athletic is insane—Eleiko plates, Wattbikes, and a pristine sauna. Coach Arjun transformed my deadlift posture in 2 sessions.",
    date: "4 days ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "grev-2",
    memberName: "Ananya Sharma",
    rating: 5,
    membershipType: "VIP Personal Training Pass",
    comment: "Kavya's morning Spin & HIIT classes give me unmatched energy for the day. Super clean locker rooms and luxury recovery amenities.",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

export const GYM_HOURS = {
  weekdays: "5:30 AM – 10:30 PM",
  weekends: "6:30 AM – 9:00 PM",
  address: "77 Jayalakshmipuram Main Road, Mysuru, KA 570012",
  phone: "+91 821 290 1122",
};
