export type CourseCategory = "starters" | "mains" | "desserts" | "cocktails";

export interface TastingCourseItem {
  id: string;
  name: string;
  category: CourseCategory;
  price: number;
  description: string;
  image: string;
  winePairing?: string;
  dietary?: string[];
  isSpecial?: boolean;
}

export interface RestaurantReservation {
  id: string;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  partySize: number;
  date: string;
  timeSlot: string;
  seatingArea: "main_dining" | "chef_counter" | "terrace";
  selectedCourses: TastingCourseItem[];
  depositAmount: number;
  dietaryNotes?: string;
  createdAt: string;
}

export interface ChefProfile {
  name: string;
  role: string;
  experience: string;
  philosophy: string;
  signatureDish: string;
  awards: string[];
  image: string;
}

export interface RestaurantReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  occasion: string;
  avatar: string;
}
