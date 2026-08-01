"use client";

import * as React from "react";
import { MedicalDepartment, MedicalDoctorProfile, MedicalAppointment } from "./types";
import { MEDICAL_DOCTORS } from "./data";

export function useMedicalState() {
  const [selectedDept, setSelectedDept] = React.useState<MedicalDepartment | "all">("all");
  const [selectedDoctor, setSelectedDoctor] = React.useState<MedicalDoctorProfile>(MEDICAL_DOCTORS[0]);
  const [consultationMode, setConsultationMode] = React.useState<"video" | "in_person">("video");
  const [selectedDate, setSelectedDate] = React.useState<string>("Today, 4:00 PM");
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState<boolean>(false);
  const [confirmedAppointment, setConfirmedAppointment] = React.useState<MedicalAppointment | null>(null);

  const filteredDoctors = React.useMemo(() => {
    if (selectedDept === "all") return MEDICAL_DOCTORS;
    return MEDICAL_DOCTORS.filter((d) => d.department === selectedDept);
  }, [selectedDept]);

  const completeBooking = (name: string, phone: string, email: string, symptoms: string) => {
    const appointment: MedicalAppointment = {
      id: `MED-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: name,
      patientPhone: phone,
      patientEmail: email,
      mode: consultationMode,
      department: selectedDoctor.department,
      doctor: selectedDoctor,
      symptoms,
      date: selectedDate,
      timeSlot: selectedDate,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setConfirmedAppointment(appointment);
    setIsBookingModalOpen(false);
  };

  return {
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
    doctors: MEDICAL_DOCTORS,
  };
}
