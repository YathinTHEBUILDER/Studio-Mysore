export type MedicalDepartment = "general_medicine" | "pediatrics" | "dermatology" | "cardiology" | "orthopedics" | "diagnostics";

export interface MedicalDoctorProfile {
  id: string;
  name: string;
  department: MedicalDepartment;
  title: string;
  qualifications: string;
  experience: string;
  consultationFee: number;
  image: string;
  nextAvailable: string;
}

export interface MedicalAppointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  mode: "video" | "in_person";
  department: MedicalDepartment;
  doctor: MedicalDoctorProfile;
  symptoms: string;
  date: string;
  timeSlot: string;
  createdAt: string;
}

export interface HealthPackage {
  id: string;
  title: string;
  category: string;
  price: number;
  testsIncluded: string[];
  fastingRequired: boolean;
  badge?: string;
}

export interface MedicalReview {
  id: string;
  patientName: string;
  rating: number;
  doctorName: string;
  department: string;
  comment: string;
  date: string;
  avatar: string;
}
