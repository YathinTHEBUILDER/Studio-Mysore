"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout";

import { useMedicalState } from "@/features/medical-clinic/useMedicalState";
import { MedicalNavbar } from "@/features/medical-clinic/components/MedicalNavbar";
import { MedicalHero } from "@/features/medical-clinic/components/MedicalHero";
import { MedicalDepartmentsOverview } from "@/features/medical-clinic/components/MedicalDepartmentsOverview";
import { MedicalDoctorDirectory } from "@/features/medical-clinic/components/MedicalDoctorDirectory";
import { MedicalBookingWorkflow } from "@/features/medical-clinic/components/MedicalBookingWorkflow";
import { MedicalContactSection } from "@/features/medical-clinic/components/MedicalContactSection";
import { MedicalPharmacySection } from "@/features/medical-clinic/components/MedicalPharmacySection";
import { MedicalIntakeModal } from "@/features/medical-clinic/components/MedicalIntakeModal";
import { MedicalConfirmation } from "@/features/medical-clinic/components/MedicalConfirmation";
import { MedicalCTA } from "@/features/medical-clinic/components/MedicalCTA";
import { MedicalOwnerDashboard } from "@/features/medical-clinic/components/MedicalOwnerDashboard";
import { SystemModeBar } from "@/components/experience/SystemModeBar";

export default function MedicalClinicExperiencePage() {
  const {
    viewMode,
    setViewMode,
    selectedDept,
    setSelectedDept,
    selectedDoctor,
    setSelectedDoctor,
    consultationMode,
    setConsultationMode,
    selectedDate,
    setSelectedDate,
    filteredDoctors,
    isBookingModalOpen,
    setIsBookingModalOpen,
    confirmedAppointment,
    setConfirmedAppointment,
    completeBooking,
  } = useMedicalState();

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-teal-600 selection:text-white">
      {/* Clinic Navbar */}
      <MedicalNavbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Dual System Mode Switcher */}
      <SystemModeBar
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        industryName="Medical Clinic"
        badgeText="OPD Triage, Pharmacy Inventory & Telehealth System"
      />

      {viewMode === "owner" ? (
        <Container variant="wide" className="py-12">
          <MedicalOwnerDashboard />
        </Container>
      ) : (
        <>
          {/* Hero */}
          <MedicalHero onOpenBooking={() => setIsBookingModalOpen(true)} />

          {/* Main Experience Body */}
          <Container variant="wide" className="py-12 space-y-12">
            {confirmedAppointment ? (
              <MedicalConfirmation
                appointment={confirmedAppointment}
                onReset={() => setConfirmedAppointment(null)}
              />
            ) : (
              <>
                <MedicalDepartmentsOverview
                  selectedDept={selectedDept}
                  onSelectDept={setSelectedDept}
                />

                <MedicalDoctorDirectory
                  doctors={filteredDoctors}
                  selectedDoctor={selectedDoctor}
                  onSelectDoctor={setSelectedDoctor}
                  onBookDoctor={(doc) => {
                    setSelectedDoctor(doc);
                    setIsBookingModalOpen(true);
                  }}
                />

                <MedicalBookingWorkflow
                  consultationMode={consultationMode}
                  onSetConsultationMode={setConsultationMode}
                  selectedDate={selectedDate}
                  onSetSelectedDate={setSelectedDate}
                  onProceed={() => setIsBookingModalOpen(true)}
                />
              </>
            )}
          </Container>

          {/* Pharmacy & Diagnostics */}
          <MedicalPharmacySection />

          {/* Clinic Contact & Hours */}
          <MedicalContactSection />

          {/* Conversion CTA */}
          <MedicalCTA />
        </>
      )}

      {/* Intake Modal */}
      <MedicalIntakeModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        doctor={selectedDoctor}
        mode={consultationMode}
        date={selectedDate}
        onComplete={completeBooking}
      />

      <Footer />
    </div>
  );
}
