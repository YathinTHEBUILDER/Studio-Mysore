"use client";

import * as React from "react";
import { GymMembershipTier, GymTrainer, GymClassSession, GymTrialBooking } from "./types";
import { GYM_TIERS, GYM_TRAINERS, GYM_CLASSES } from "./data";

export function useGymState() {
  const [viewMode, setViewMode] = React.useState<"customer" | "owner">("customer");
  const [selectedTier, setSelectedTier] = React.useState<GymMembershipTier>(GYM_TIERS[1]);
  const [selectedTrainer, setSelectedTrainer] = React.useState<GymTrainer>(GYM_TRAINERS[0]);
  const [selectedClass, setSelectedClass] = React.useState<GymClassSession>(GYM_CLASSES[0]);
  const [isTrialModalOpen, setIsTrialModalOpen] = React.useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = React.useState<GymTrialBooking | null>(null);

  const completeTrialBooking = (name: string, phone: string, email: string) => {
    const booking: GymTrialBooking = {
      id: `GYM-${Math.floor(1000 + Math.random() * 9000)}`,
      memberName: name,
      memberPhone: phone,
      memberEmail: email,
      tier: selectedTier,
      preferredClass: selectedClass,
      date: new Date().toLocaleDateString([], { month: "short", day: "numeric" }),
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setConfirmedBooking(booking);
    setIsTrialModalOpen(false);
  };

  return {
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
    tiers: GYM_TIERS,
    trainers: GYM_TRAINERS,
    classes: GYM_CLASSES,
  };
}
