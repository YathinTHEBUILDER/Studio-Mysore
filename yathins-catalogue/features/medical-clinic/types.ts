export type MedicalDepartment = "general_medicine" | "pediatrics" | "dermatology" | "cardiology" | "telehealth";

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
