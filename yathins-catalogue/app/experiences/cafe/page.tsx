"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout";

import { useCafeState } from "@/features/cafe/useCafeState";
import { CafeNavbar } from "@/features/cafe/components/CafeNavbar";
import { CafeHero } from "@/features/cafe/components/CafeHero";
import { CafeMenuGrid } from "@/features/cafe/components/CafeMenuGrid";
import { CafeProductModal } from "@/features/cafe/components/CafeProductModal";
import { CafeCartDrawer } from "@/features/cafe/components/CafeCartDrawer";
import { CafeCheckoutModal } from "@/features/cafe/components/CafeCheckoutModal";
import { CafeOrderConfirmation } from "@/features/cafe/components/CafeOrderConfirmation";
import { CafeRoasterySection } from "@/features/cafe/components/CafeRoasterySection";
import { CafeCTA } from "@/features/cafe/components/CafeCTA";
import { CafeCategory } from "@/features/cafe/types";

const CATEGORIES: { id: CafeCategory | "all"; label: string; emoji: string }[] = [
  { id: "all", label: "Full Menu", emoji: "☕" },
  { id: "coffees", label: "Coffees", emoji: "⚡" },
  { id: "teas", label: "Teas", emoji: "🍵" },
  { id: "bites", label: "Bites & Pastries", emoji: "🥐" },
  { id: "beans", label: "Whole Beans", emoji: "🫘" },
];

export default function CafeExperiencePage() {
  const {
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
  } = useCafeState();

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-zinc-950">
      {/* Business-Specific Header */}
      <CafeNavbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <CafeHero />

      {/* Main Experience Interactive Body */}
      <Container variant="wide" className="py-8">
        {confirmedOrder ? (
          <CafeOrderConfirmation
            order={confirmedOrder}
            onReset={() => setConfirmedOrder(null)}
          />
        ) : (
          <CafeMenuGrid
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            products={filteredProducts}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onQuickAdd={(product) => addToCart(product)}
          />
        )}
      </Container>

      {/* Roastery Brand Story Section */}
      <CafeRoasterySection />

      {/* Final Conversion CTA */}
      <CafeCTA />

      {/* Modals & Overlays */}
      <CafeProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product, qty, options) => addToCart(product, qty, options)}
      />

      <CafeCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        subtotal={cartSubtotal}
        tax={cartTax}
        total={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CafeCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        total={cartTotal}
        onComplete={completeOrder}
      />

      <Footer />
    </div>
  );
}
