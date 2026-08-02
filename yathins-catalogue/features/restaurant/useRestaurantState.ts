"use client";

import * as React from "react";
import { CourseCategory, TastingCourseItem, RestaurantReservation } from "./types";
import { RESTAURANT_COURSES } from "./data";

export function useRestaurantState() {
  const [viewMode, setViewMode] = React.useState<"customer" | "owner">("customer");
  const [partySize, setPartySize] = React.useState<number>(2);
  const [selectedDate, setSelectedDate] = React.useState<string>("Tonight, 7:30 PM");
  const [seatingArea, setSeatingArea] = React.useState<"main_dining" | "chef_counter" | "terrace">("main_dining");
  const [selectedCategory, setSelectedCategory] = React.useState<CourseCategory | "all">("all");
  const [selectedCourses, setSelectedCourses] = React.useState<TastingCourseItem[]>([]);
  const [isReserveModalOpen, setIsReserveModalOpen] = React.useState<boolean>(false);
  const [confirmedReservation, setConfirmedReservation] = React.useState<RestaurantReservation | null>(null);

  const filteredCourses = React.useMemo(() => {
    if (selectedCategory === "all") return RESTAURANT_COURSES;
    return RESTAURANT_COURSES.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const toggleCourseSelection = (course: TastingCourseItem) => {
    setSelectedCourses((prev) => {
      const exists = prev.some((c) => c.id === course.id);
      if (exists) return prev.filter((c) => c.id !== course.id);
      return [...prev, course];
    });
  };

  const courseSubtotal = selectedCourses.reduce((sum, item) => sum + item.price, 0);
  const depositRequired = 2500 * partySize;

  const completeReservation = (guestName: string, guestPhone: string, guestEmail: string, notes?: string) => {
    const reservation: RestaurantReservation = {
      id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
      guestName,
      guestPhone,
      guestEmail,
      partySize,
      date: selectedDate,
      timeSlot: selectedDate,
      seatingArea,
      selectedCourses,
      depositAmount: depositRequired,
      dietaryNotes: notes,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setConfirmedReservation(reservation);
    setIsReserveModalOpen(false);
  };

  return {
    viewMode,
    setViewMode,
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
    courseSubtotal,
    depositRequired,
    isReserveModalOpen,
    setIsReserveModalOpen,
    confirmedReservation,
    setConfirmedReservation,
    completeReservation,
  };
}
