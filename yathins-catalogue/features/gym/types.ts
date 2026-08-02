export interface GymMembershipTier {
  id: string;
  name: string;
  priceMonthly: number;
  badge?: string;
  features: string[];
  billingPeriod?: string;
}

export interface GymTrainer {
  id: string;
  name: string;
  certifications: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface GymClassSession {
  id: string;
  title: string;
  trainer: string;
  time: string;
  duration: string;
  intensity: "High" | "Medium" | "Extreme";
  spotsRemaining: number;
  category: "HIIT" | "Strength" | "Spin" | "Yoga" | "Combat";
}

export interface GymTrialBooking {
  id: string;
  memberName: string;
  memberPhone: string;
  memberEmail: string;
  tier?: GymMembershipTier;
  preferredClass?: GymClassSession;
  date: string;
  createdAt: string;
}

export interface GymReview {
  id: string;
  memberName: string;
  rating: number;
  membershipType: string;
  comment: string;
  date: string;
  avatar: string;
}
