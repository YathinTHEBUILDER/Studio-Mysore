export type DentalServiceCategory = "preventative" | "cosmetic" | "orthodontics" | "surgery";

export interface DentalService {
  id: string;
  title: string;
  category: DentalServiceCategory;
  priceEstimate: string;
  duration: string;
  description: string;
  badge?: string;
}

export interface DentalDoctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  rating: number;
}

export interface DentalAppointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  service: DentalService;
  doctor: DentalDoctor;
  date: string;
  timeSlot: string;
  insuranceProvider?: string;
  createdAt: string;
}
