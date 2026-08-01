"use client";

import * as React from "react";
import { m } from "framer-motion";
import { CourseCategory, TastingCourseItem } from "../types";
import { Plus, Check, Wine } from "lucide-react";

interface RestaurantTastingMenuProps {
  categories: { id: CourseCategory | "all"; label: string; emoji: string }[];
  selectedCategory: CourseCategory | "all";
  onSelectCategory: (cat: CourseCategory | "all") => void;
  courses: TastingCourseItem[];
  selectedCourses: TastingCourseItem[];
  onToggleCourse: (course: TastingCourseItem) => void;
}

export const RestaurantTastingMenu: React.FC<RestaurantTastingMenuProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  courses,
  selectedCourses,
  onToggleCourse,
}) => {
  return (
    <section className="py-12 bg-zinc-950 space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold block">
          À La Carte & Tasting Courses
        </span>
        <h2 className="text-3xl font-display font-semibold text-white">
          Explore the Chef's Tasting Menu.
        </h2>
        <p className="text-xs text-zinc-400">
          Select dishes to pre-order for your table reservation or explore sommelier pairings.
        </p>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-medium tracking-wide uppercase flex items-center gap-2 transition-all ${
                isActive
                  ? "bg-rose-600 text-white font-bold shadow-lg shadow-rose-600/20"
                  : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {courses.map((course) => {
          const isSelected = selectedCourses.some((c) => c.id === course.id);
          return (
            <m.div
              key={course.id}
              layout
              className={`rounded-3xl bg-zinc-900/60 border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                isSelected ? "border-rose-500 bg-rose-950/20 shadow-xl shadow-rose-950/30" : "border-zinc-800/80 hover:border-rose-500/40"
              }`}
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-zinc-950">
                  <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                  {course.dietary && (
                    <div className="absolute top-3 left-3 flex gap-1">
                      {course.dietary.map((d) => (
                        <span key={d} className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-950/80 text-rose-300 backdrop-blur-md">
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-display text-lg font-semibold text-white">{course.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{course.description}</p>
                  {course.winePairing && (
                    <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-rose-400/90">
                      <Wine className="w-3.5 h-3.5" />
                      <span>{course.winePairing}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-zinc-800/40 mt-2">
                <span className="font-mono text-lg font-bold text-white">${course.price}</span>
                <button
                  onClick={() => onToggleCourse(course)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-rose-600 text-white"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Order</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Course</span>
                    </>
                  )}
                </button>
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
  );
};
