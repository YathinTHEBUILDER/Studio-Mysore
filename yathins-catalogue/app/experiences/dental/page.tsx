"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout";

import { useDentalState } from "@/features/dental/useDentalState";
import { DentalNavbar } from "@/features/dental/components/DentalNavbar";
import { DentalHero } from "@/features/dental/components/DentalHero";
import { DentalServicesGrid } from "@/features/dental/components/DentalServicesGrid";
import { DentalPractitionerDirectory } from "@/features/dental/components/DentalPractitionerDirectory";
import { DentalBookingCalendar } from "@/features/dental/components/DentalBookingCalendar";
import { DentalIntakeModal } from "@/features/dental/components/DentalIntakeModal";
import { DentalConfirmation } from "@/features/dental/components/DentalConfirmation";
import { DentalTechnologySection } from "@/features/dental/components/DentalTechnologySection";
import { DentalCTA } from "@/features/dental/components/DentalCTA";

export default function DentalExperiencePage() {
  const {
    selectedService,
    setSelectedService,
    selectedDoctor,
    setSelectedDoctor,
    selectedDate,
    setSelectedDate,
    selectedSlot,
    setSelectedSlot,
    isBookingModalOpen,
    setIsBookingModalOpen,
    confirmedAppointment,
    setConfirmedAppointment,
    completeBooking,
    services,
    doctors,
  } = useDentalState();

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-sky-600 selection:text-white">
      {/* Clinic Header */}
      <DentalNavbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Hero */}
      <DentalHero onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Main Body */}
      <Container variant="wide" className="py-12 space-y-12">
        {confirmedAppointment ? (
          <DentalConfirmation
            appointment={confirmedAppointment}
            onReset={() => setConfirmedAppointment(null)}
          />
        ) : (
          <>
            <DentalServicesGrid
              services={services}
              selectedService={selectedService}
              onSelectService={setSelectedService}
              onBookService={(serv) => {
                setSelectedService(serv);
                setIsBookingModalOpen(true);
              }}
            />

            <DentalPractitionerDirectory
              doctors={doctors}
              selectedDoctor={selectedDoctor}
              onSelectDoctor={setSelectedDoctor}
            />

            <DentalBookingCalendar
              selectedDate={selectedDate}
              onSetSelectedDate={setSelectedDate}
              selectedSlot={selectedSlot}
              onSetSelectedSlot={setSelectedSlot}
              onProceed={() => setIsBookingModalOpen(true)}
            />
          </>
        )}
      </Container>

      {/* Clinical Tech Overview */}
      <DentalTechnologySection />

      {/* Conversion CTA */}
      <DentalCTA />

      {/* Intake Modal */}
      <DentalIntakeModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedService}
        doctor={selectedDoctor}
        date={selectedDate}
        slot={selectedSlot}
        onComplete={completeBooking}
      />

      <Footer />
    </div>
  );
}
