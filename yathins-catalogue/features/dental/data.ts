import { DentalService, DentalDoctor, DentalReview } from "./types";

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "dent-1",
    title: "Laser Teeth Whitening & Enamel Polishing",
    category: "cosmetic",
    priceEstimate: "₹3,500",
    duration: "45 Mins",
    description: "Instant 8-shade brightening using zero-sensitivity German diode laser technology and protective mineral glaze finish.",
    badge: "Most Requested",
  },
  {
    id: "dent-2",
    title: "3D Digital Intraoral Scan & Ultrasonic Hygiene",
    category: "preventative",
    priceEstimate: "₹1,500",
    duration: "30 Mins",
    description: "360° digital cavity scan, painless ultrasonic calculus removal, and personalized fluoride cavity prevention roadmap.",
    badge: "Insurance Coverable",
  },
  {
    id: "dent-3",
    title: "Clear Aligner & Invisalign Diamond Consultation",
    category: "orthodontics",
    priceEstimate: "₹1,800 (Credited)",
    duration: "60 Mins",
    description: "AI-driven iTero 3D smile simulation demonstrating your predicted aligner teeth alignment progression step-by-step.",
    badge: "Free 3D Scan Included",
  },
  {
    id: "dent-4",
    title: "Guided Titanium Dental Implant & Crown",
    category: "surgery",
    priceEstimate: "₹25,000",
    duration: "90 Mins",
    description: "Swiss titanium implant placement using computer-guided flapless surgery under comfortable local sedation.",
    badge: "Lifetime Warranty",
  },
  {
    id: "dent-5",
    title: "Painless Microscope-Guided Root Canal",
    category: "surgery",
    priceEstimate: "₹6,500",
    duration: "60 Mins",
    description: "Single-sitting precision root canal treatment under 3D dental microscope magnification with zirconia crown restoration.",
  },
];

export const DENTAL_DOCTORS: DentalDoctor[] = [
  {
    id: "doc-1",
    name: "Dr. Ananya Rao",
    qualifications: "MDS (Prosthodontics), AIIMS New Delhi",
    role: "Lead Cosmetic Dental Surgeon",
    specialty: "Digital Smile Design, Porcelain Veneers & Laser Aesthetics",
    experience: "14+ Years Experience",
    availableDays: "Mon, Wed, Fri (9 AM - 1 PM)",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
  },
  {
    id: "doc-2",
    name: "Dr. Rajesh Kulkarni",
    qualifications: "MDS (Orthodontics), Manipal Academy",
    role: "Senior Orthodontist & Invisalign Diamond Provider",
    specialty: "Clear Aligners, Braces & Complex Jaw Alignments",
    experience: "11+ Years Experience",
    availableDays: "Tue, Thu, Sat (4 PM - 8:30 PM)",
    image: "https://images.unsplash.com/photo-1594824813566-88855ce78964?q=80&w=800&auto=format&fit=crop",
    rating: 4.95,
  },
  {
    id: "doc-3",
    name: "Dr. Vikram Mysore",
    qualifications: "MDS (Periodontics & Implantology), SDM Dharwad",
    role: "Chief Implantologist & Dental Surgeon",
    specialty: "Painless Computer-Guided Implants & Bone Grafts",
    experience: "16+ Years Experience",
    availableDays: "Daily On Appointment",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
  },
];

export const DENTAL_REVIEWS: DentalReview[] = [
  {
    id: "drev-1",
    patientName: "Sunil Hegde",
    rating: 5,
    treatment: "Titanium Dental Implant",
    doctorName: "Dr. Vikram Mysore",
    comment: "I was terrified of getting a dental implant. Dr. Vikram made the entire procedure completely painless. The 3D scanner technology they use is state-of-the-art.",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "drev-2",
    patientName: "Pooja Deshmukh",
    rating: 5,
    treatment: "Invisalign Clear Aligners",
    doctorName: "Dr. Rajesh Kulkarni",
    comment: "Finished my 8-month Invisalign treatment with Dr. Rajesh. My smile looks incredible. Transparent pricing and super punctual clinic appointments.",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

export const CLINIC_TIMINGS = {
  morningSession: "9:00 AM – 1:00 PM",
  eveningSession: "4:00 PM – 8:30 PM",
  sundayHours: "10:00 AM – 2:00 PM (Prior Appointment)",
  emergencyHelpline: "+91 821 277 0000 (24/7 Dental Trauma Care)",
  address: "204 Kalidasa Road, Vontikoppal, Mysuru, KA 570002",
};
