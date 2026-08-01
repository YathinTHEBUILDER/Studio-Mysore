"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout";

import { useRestaurantState } from "@/features/restaurant/useRestaurantState";
import { RestaurantNavbar } from "@/features/restaurant/components/RestaurantNavbar";
import { RestaurantHero } from "@/features/restaurant/components/RestaurantHero";
import { RestaurantReservationEngine } from "@/features/restaurant/components/RestaurantReservationEngine";
import { RestaurantTastingMenu } from "@/features/restaurant/components/RestaurantTastingMenu";
import { RestaurantCheckoutModal } from "@/features/restaurant/components/RestaurantCheckoutModal";
import { RestaurantConfirmation } from "@/features/restaurant/components/RestaurantConfirmation";
import { RestaurantAmbianceSection } from "@/features/restaurant/components/RestaurantAmbianceSection";
import { RestaurantCTA } from "@/features/restaurant/components/RestaurantCTA";
import { CourseCategory } from "@/features/restaurant/types";

const CATEGORIES: { id: CourseCategory | "all"; label: string; emoji: string }[] = [
  { id: "all", label: "Full Menu", emoji: "🍽" },
  { id: "starters", label: "Starters", emoji: "🦪" },
  { id: "mains", label: "Mains & Wagyu", emoji: "🥩" },
  { id: "desserts", label: "Soufflé & Desserts", emoji: "🍫" },
  { id: "cocktails", label: "Craft Cocktails", emoji: "🍸" },
];

export default function RestaurantExperiencePage() {
  const {
    partySize,
    setPartySize,
    selectedDate,
    setSelectedDate,
    seatingArea,
    setSeatingArea,
    selectedCategory,
    setSelectedCategory,
    filteredCourses,
    selectedCourses,
    toggleCourseSelection,
    depositRequired,
    isReserveModalOpen,
    setIsReserveModalOpen,
    confirmedReservation,
    setConfirmedReservation,
    completeReservation,
  } = useRestaurantState();

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-rose-600 selection:text-white">
      {/* Business Header */}
      <RestaurantNavbar onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Hero */}
      <RestaurantHero onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Main Experience Body */}
      <Container variant="wide" className="py-12 space-y-12">
        {confirmedReservation ? (
          <RestaurantConfirmation
            reservation={confirmedReservation}
            onReset={() => setConfirmedReservation(null)}
          />
        ) : (
          <>
            <RestaurantReservationEngine
              partySize={partySize}
              onSetPartySize={setPartySize}
              selectedDate={selectedDate}
              onSetSelectedDate={setSelectedDate}
              seatingArea={seatingArea}
              onSetSeatingArea={setSeatingArea}
              depositRequired={depositRequired}
              onProceed={() => setIsReserveModalOpen(true)}
            />

            <RestaurantTastingMenu
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              courses={filteredCourses}
              selectedCourses={selectedCourses}
              onToggleCourse={toggleCourseSelection}
            />
          </>
        )}
      </Container>

      {/* Ambiance */}
      <RestaurantAmbianceSection />

      {/* Conversion CTA */}
      <RestaurantCTA />

      {/* Reservation Checkout Modal */}
      <RestaurantCheckoutModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
        partySize={partySize}
        selectedDate={selectedDate}
        seatingArea={seatingArea}
        selectedCourses={selectedCourses}
        depositAmount={depositRequired}
        onComplete={completeReservation}
      />

      <Footer />
    </div>
  );
}
