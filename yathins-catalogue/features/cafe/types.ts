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
  estimatedTime: string;
  createdAt: string;
}
