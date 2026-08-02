"use client";

import * as React from "react";
import { CafeCategory, CafeProduct, CafeCartItem, CafeOrderDetails } from "./types";
import { CAFE_PRODUCTS } from "./data";

const SAMPLE_INITIAL_ORDERS: CafeOrderDetails[] = [
  {
    orderId: "CAFE-8042",
    customerName: "Rohan Sharma",
    customerPhone: "+91 98765 43210",
    orderType: "pickup",
    items: [
      { product: CAFE_PRODUCTS[0], quantity: 2, selectedMilk: "Oat Milk", selectedSweetness: "100%", specialInstructions: "Extra hot" },
      { product: CAFE_PRODUCTS[3], quantity: 1, selectedMilk: "Whole Milk", selectedSweetness: "100%", specialInstructions: "" },
    ],
    subtotal: 580,
    tax: 46.4,
    total: 626.4,
    status: "preparing",
    estimatedTime: "10-15 mins",
    createdAt: "10:14 AM",
  },
  {
    orderId: "CAFE-8041",
    customerName: "Priya Nair",
    customerPhone: "+91 98123 45678",
    orderType: "dine_in",
    items: [
      { product: CAFE_PRODUCTS[1], quantity: 1, selectedMilk: "Almond Milk", selectedSweetness: "50%", specialInstructions: "Table 4" },
    ],
    subtotal: 280,
    tax: 22.4,
    total: 302.4,
    status: "ready",
    estimatedTime: "5-8 mins",
    createdAt: "10:08 AM",
  },
];

export function useCafeState() {
  const [viewMode, setViewMode] = React.useState<"customer" | "owner">("customer");
  const [selectedCategory, setSelectedCategory] = React.useState<CafeCategory | "all">("all");
  const [selectedProduct, setSelectedProduct] = React.useState<CafeProduct | null>(null);
  const [cart, setCart] = React.useState<CafeCartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState<boolean>(false);
  const [confirmedOrder, setConfirmedOrder] = React.useState<CafeOrderDetails | null>(null);
  const [allOrders, setAllOrders] = React.useState<CafeOrderDetails[]>(SAMPLE_INITIAL_ORDERS);

  const filteredProducts = React.useMemo(() => {
    if (selectedCategory === "all") return CAFE_PRODUCTS;
    return CAFE_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const addToCart = (product: CafeProduct, quantity = 1, options?: { milk?: string; sweetness?: string; notes?: string }) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id && item.selectedMilk === options?.milk);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedMilk: options?.milk || "Whole Milk",
          selectedSweetness: options?.sweetness || "100%",
          specialInstructions: options?.notes || "",
        },
      ];
    });
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartTax = cartSubtotal * 0.08;
  const cartTotal = cartSubtotal + cartTax;
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const completeOrder = (customerName: string, customerPhone: string, orderType: "pickup" | "dine_in") => {
    const order: CafeOrderDetails = {
      orderId: `CAFE-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      customerPhone,
      orderType,
      items: [...cart],
      subtotal: cartSubtotal,
      tax: cartTax,
      total: cartTotal,
      status: "preparing",
      estimatedTime: orderType === "pickup" ? "10-15 mins" : "5-8 mins",
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setConfirmedOrder(order);
    setAllOrders((prev) => [order, ...prev]);
    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  return {
    viewMode,
    setViewMode,
    selectedCategory,
    setSelectedCategory,
    selectedProduct,
    setSelectedProduct,
    filteredProducts,
    cart,
    cartCount,
    cartSubtotal,
    cartTax,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    isCheckoutOpen,
    setIsCheckoutOpen,
    confirmedOrder,
    setConfirmedOrder,
    allOrders,
    addToCart,
    removeFromCart,
    updateQuantity,
    completeOrder,
  };
}
