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
    <section className="py-12 bg-stone-950 space-y-10">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block">
          À La Carte & Tasting Courses
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-amber-50">
          Explore the Chef's Tasting Menu.
        </h2>
        <p className="text-xs font-sans text-amber-200/60 font-light">
          Select courses to pair with your table reservation or discover sommelier grand cru recommendations.
        </p>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-mono font-medium tracking-[0.15em] uppercase flex items-center gap-2 transition-all duration-300 ${
                isActive
                  ? "bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-stone-900/80 text-amber-200/60 border border-amber-900/30 hover:text-amber-100 hover:border-amber-700/50"
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-sm bg-stone-950/90 border p-1 overflow-hidden transition-all duration-500 flex flex-col justify-between ${
                isSelected
                  ? "border-amber-400 bg-rose-950/40 shadow-2xl shadow-rose-950/60"
                  : "border-amber-900/40 hover:border-amber-500/60"
              }`}
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-stone-950 rounded-none border-b border-amber-900/30">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-rose-950/10 mix-blend-soft-light pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(9,9,11,0.8)_100%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90" />
                  
                  <div className="absolute top-2.5 right-2.5 text-[9px] font-mono tracking-widest text-amber-400/80 bg-stone-950/90 px-2 py-0.5 rounded-sm border border-amber-500/30 uppercase">
                    35MM COURSE
                  </div>

                  {course.dietary && (
                    <div className="absolute top-2.5 left-2.5 flex gap-1">
                      {course.dietary.map((d) => (
                        <span key={d} className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm bg-stone-950/90 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-normal text-amber-50">{course.name}</h3>
                  <p className="text-xs font-sans text-amber-200/70 leading-relaxed font-light">{course.description}</p>
                  {course.winePairing && (
                    <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-amber-400/90 border-t border-amber-900/30">
                      <Wine className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="italic font-serif">{course.winePairing}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-amber-900/20 mt-2">
                <span className="font-serif text-xl font-medium text-amber-100">₹{course.price.toLocaleString('en-IN')}</span>
                <button
                  onClick={() => onToggleCourse(course)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                    isSelected
                      ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20"
                      : "bg-stone-950 text-amber-200/80 border border-amber-900/40 hover:border-amber-500 hover:text-amber-100"
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Reserved</span>
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

