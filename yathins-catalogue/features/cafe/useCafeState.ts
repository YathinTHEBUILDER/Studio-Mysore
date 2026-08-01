"use client";

import * as React from "react";
import { CafeCategory, CafeProduct, CafeCartItem, CafeOrderDetails } from "./types";
import { CAFE_PRODUCTS } from "./data";

export function useCafeState() {
  const [selectedCategory, setSelectedCategory] = React.useState<CafeCategory | "all">("all");
  const [selectedProduct, setSelectedProduct] = React.useState<CafeProduct | null>(null);
  const [cart, setCart] = React.useState<CafeCartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState<boolean>(false);
  const [confirmedOrder, setConfirmedOrder] = React.useState<CafeOrderDetails | null>(null);

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
      estimatedTime: orderType === "pickup" ? "10-15 mins" : "5-8 mins",
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setConfirmedOrder(order);
    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  return {
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
    addToCart,
    removeFromCart,
    updateQuantity,
    completeOrder,
  };
}
