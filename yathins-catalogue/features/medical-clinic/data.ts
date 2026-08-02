import { MedicalDoctorProfile, HealthPackage, MedicalReview } from "./types";

export const MEDICAL_DOCTORS: MedicalDoctorProfile[] = [
  {
    id: "med-doc-1",
    name: "Dr. Arvind Swamy",
    department: "general_medicine",
    title: "Senior Consultant Physician",
    qualifications: "MD (General Medicine, AIIMS New Delhi), FACP (USA)",
    experience: "15+ Years Experience",
    consultationFee: 800,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    nextAvailable: "Today, 4:00 PM",
  },
  {
    id: "med-doc-2",
    name: "Dr. Meera Reddy",
    department: "cardiology",
    title: "Chief of Cardiology",
    qualifications: "DM (Cardiology, Jayadeva Institute), FACC",
    experience: "18+ Years Experience",
    consultationFee: 1500,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    nextAvailable: "Tomorrow, 11:30 AM",
  },
  {
    id: "med-doc-3",
    name: "Dr. Priya Sharma",
    department: "dermatology",
    title: "Dermatologist & Cosmetologist",
    qualifications: "DNB (Dermatology, BMCRI Bengaluru), FRCP",
    experience: "10+ Years Experience",
    consultationFee: 1000,
    image: "https://images.unsplash.com/photo-1594824813566-88855ce78964?q=80&w=800&auto=format&fit=crop",
    nextAvailable: "Today, 5:30 PM",
  },
  {
    id: "med-doc-4",
    name: "Dr. Suresh Hegde",
    department: "pediatrics",
    title: "Senior Pediatric Specialist",
    qualifications: "MD (Pediatrics, Manipal Hospital), DCH",
    experience: "12+ Years Experience",
    consultationFee: 900,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    nextAvailable: "Tomorrow, 9:00 AM",
  },
  {
    id: "med-doc-5",
    name: "Dr. Sunita Patil",
    department: "orthopedics",
    title: "Orthopedic & Joint Replacement Surgeon",
    qualifications: "MS (Orthopedics, KIMS), Fellowship in Joint Arthroplasty",
    experience: "14+ Years Experience",
    consultationFee: 1200,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    nextAvailable: "Today, 6:00 PM",
  },
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: "pkg-1",
    title: "Executive Master Health Checkup",
    category: "Full Body Diagnostic",
    price: 3499,
    testsIncluded: [
      "CBC & ESR Profile",
      "Lipid Profile & HbA1c",
      "Liver & Kidney Function Tests",
      "ECG & Chest X-Ray",
      "Doctor Consultation",
    ],
    fastingRequired: true,
    badge: "Most Popular",
  },
  {
    id: "pkg-2",
    title: "Comprehensive Cardiac Screening",
    category: "Cardiology",
    price: 4999,
    testsIncluded: [
      "High-Sensitivity CRP & Lipid Panel",
      "Color Doppler Echocardiogram",
      "Treadmill Stress Test (TMT)",
      "Senior Cardiologist Consultation",
    ],
    fastingRequired: true,
  },
  {
    id: "pkg-3",
    title: "Digital Pharmacy & Prescription Refill",
    category: "In-House Pharmacy",
    price: 0,
    testsIncluded: [
      "Same-day doorstep medicine delivery",
      "Verified pharmacist prescription review",
      "Chronic care monthly subscription discount",
    ],
    fastingRequired: false,
    badge: "24/7 Available",
  },
];

export const MEDICAL_REVIEWS: MedicalReview[] = [
  {
    id: "mrev-1",
    patientName: "Ramesh Chandra",
    rating: 5,
    doctorName: "Dr. Meera Reddy",
    department: "Cardiology",
    comment: "Dr. Meera's diagnosis and cardiac care plan saved my life. Extremely thorough, compassionate, and zero waiting time with the appointment system.",
    date: "2 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "mrev-2",
    patientName: "Kavitha Deshpande",
    rating: 5,
    doctorName: "Dr. Suresh Hegde",
    department: "Pediatrics",
    comment: "Dr. Suresh is incredible with children. He explained my daughter's allergy treatment so clearly. Highly recommend CarePoint Clinic.",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
];

export const CLINIC_TIMINGS = {
  consultationHours: "8:00 AM – 9:00 PM (Mon – Sat)",
  sundayHours: "9:00 AM – 2:00 PM",
  emergencyLine: "+91 821 299 0000 (24/7 Casualty & Ambulance)",
  pharmacyHours: "24 Hours Daily",
  address: "55 Saraswathipuram Main Road, Opposite Fire Station, Mysuru",
};
