export type CafeCategory = "coffees" | "teas" | "bites" | "beans";

export interface CafeProduct {
  id: string;
  name: string;
  category: CafeCategory;
  price: number;
  description: string;
  image: string;
  badge?: string;
  notes?: string;
  calories?: number;
}

export interface CafeCartItem {
  product: CafeProduct;
  quantity: number;
  selectedMilk?: string;
  selectedSweetness?: string;
  specialInstructions?: string;
}

export interface CafeOrderDetails {
  orderId: string;
  customerName: string;
  customerPhone: string;
  orderType: "pickup" | "dine_in";
  items: CafeCartItem[];
  subtotal: number;
  tax: number;
  total: number;
  status?: "preparing" | "ready" | "completed";
  estimatedTime: string;
  createdAt: string;
}

export interface CafeStaff {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  favoriteBrew: string;
  image: string;
}

export interface CafeReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  favoriteItem: string;
  avatar: string;
}
