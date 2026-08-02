"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout";

import { useGymState } from "@/features/gym/useGymState";
import { GymNavbar } from "@/features/gym/components/GymNavbar";
import { GymHero } from "@/features/gym/components/GymHero";
import { GymMembershipTiers } from "@/features/gym/components/GymMembershipTiers";
import { GymClassTimetable } from "@/features/gym/components/GymClassTimetable";
import { GymTrainerDirectory } from "@/features/gym/components/GymTrainerDirectory";
import { GymTrialBookingModal } from "@/features/gym/components/GymTrialBookingModal";
import { GymConfirmation } from "@/features/gym/components/GymConfirmation";
import { GymFacilitiesSection } from "@/features/gym/components/GymFacilitiesSection";
import { GymCTA } from "@/features/gym/components/GymCTA";
import { GymOwnerDashboard } from "@/features/gym/components/GymOwnerDashboard";
import { SystemModeBar } from "@/components/experience/SystemModeBar";

export default function GymExperiencePage() {
  const {
    viewMode,
    setViewMode,
    selectedTier,
    setSelectedTier,
    selectedTrainer,
    setSelectedTrainer,
    selectedClass,
    setSelectedClass,
    isTrialModalOpen,
    setIsTrialModalOpen,
    confirmedBooking,
    setConfirmedBooking,
    completeTrialBooking,
    tiers,
    trainers,
    classes,
  } = useGymState();

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-600 selection:text-white">
      {/* Gym Header */}
      <GymNavbar onOpenTrial={() => setIsTrialModalOpen(true)} />

      {/* Dual System Mode Switcher */}
      <SystemModeBar
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        industryName="Fitness Club"
        badgeText="Gate Attendance, Member Passes & Trainer OS"
      />

      {viewMode === "owner" ? (
        <Container variant="wide" className="py-12">
          <GymOwnerDashboard />
        </Container>
      ) : (
        <>
          {/* Hero */}
          <GymHero onOpenTrial={() => setIsTrialModalOpen(true)} />

          {/* Main Body */}
          <Container variant="wide" className="py-12 space-y-12">
            {confirmedBooking ? (
              <GymConfirmation
                booking={confirmedBooking}
                onReset={() => setConfirmedBooking(null)}
              />
            ) : (
              <>
                <GymMembershipTiers
                  tiers={tiers}
                  selectedTier={selectedTier}
                  onSelectTier={setSelectedTier}
                  onJoinTier={(t) => {
                    setSelectedTier(t);
                    setIsTrialModalOpen(true);
                  }}
                />

                <GymClassTimetable
                  classes={classes}
                  selectedClass={selectedClass}
                  onSelectClass={setSelectedClass}
                  onBookClassSpot={(cls) => {
                    setSelectedClass(cls);
                    setIsTrialModalOpen(true);
                  }}
                />

                <GymTrainerDirectory
                  trainers={trainers}
                  selectedTrainer={selectedTrainer}
                  onSelectTrainer={setSelectedTrainer}
                />
              </>
            )}
          </Container>

          {/* Facilities */}
          <GymFacilitiesSection />

          {/* Conversion CTA */}
          <GymCTA />
        </>
      )}

      {/* Trial Booking Modal */}
      <GymTrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        tier={selectedTier}
        selectedClass={selectedClass}
        onComplete={completeTrialBooking}
      />

      <Footer />
    </div>
  );
}
