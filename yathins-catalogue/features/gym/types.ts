export interface GymMembershipTier {
  id: string;
  name: string;
  priceMonthly: number;
  badge?: string;
  features: string[];
}

export interface GymTrainer {
  id: string;
  name: string;
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
