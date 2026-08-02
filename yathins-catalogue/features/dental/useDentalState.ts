"use client";

import * as React from "react";
import { DentalService, DentalDoctor, DentalAppointment } from "./types";
import { DENTAL_SERVICES, DENTAL_DOCTORS } from "./data";

export function useDentalState() {
  const [viewMode, setViewMode] = React.useState<"customer" | "owner">("customer");
  const [selectedService, setSelectedService] = React.useState<DentalService>(DENTAL_SERVICES[0]);
  const [selectedDoctor, setSelectedDoctor] = React.useState<DentalDoctor>(DENTAL_DOCTORS[0]);
  const [selectedDate, setSelectedDate] = React.useState<string>("Tomorrow, 10:00 AM");
  const [selectedSlot, setSelectedSlot] = React.useState<string>("10:00 AM");
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState<boolean>(false);
  const [confirmedAppointment, setConfirmedAppointment] = React.useState<DentalAppointment | null>(null);

  const completeBooking = (name: string, phone: string, email: string, insurance?: string) => {
    const appointment: DentalAppointment = {
      id: `DENT-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: name,
      patientPhone: phone,
      patientEmail: email,
      service: selectedService,
      doctor: selectedDoctor,
      date: selectedDate,
      timeSlot: selectedSlot,
      insuranceProvider: insurance,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setConfirmedAppointment(appointment);
    setIsBookingModalOpen(false);
  };

  return {
    viewMode,
    setViewMode,
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
    services: DENTAL_SERVICES,
    doctors: DENTAL_DOCTORS,
  };
}
