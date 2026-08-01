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
