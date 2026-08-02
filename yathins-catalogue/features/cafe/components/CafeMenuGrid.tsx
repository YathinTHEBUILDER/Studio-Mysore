"use client";

import * as React from "react";
import { m } from "framer-motion";
import { CafeCategory, CafeProduct } from "../types";
import { Plus, Coffee } from "lucide-react";

interface CafeMenuGridProps {
  categories: { id: CafeCategory | "all"; label: string; emoji: string }[];
  selectedCategory: CafeCategory | "all";
  onSelectCategory: (cat: CafeCategory | "all") => void;
  products: CafeProduct[];
  onSelectProduct: (p: CafeProduct) => void;
  onQuickAdd: (p: CafeProduct) => void;
}

export const CafeMenuGrid: React.FC<CafeMenuGridProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  products,
  onSelectProduct,
  onQuickAdd,
}) => {
  return (
    <section className="py-12 bg-stone-950">
      {/* Category Selector Filter Bar */}
      <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase flex items-center gap-2 shrink-0 transition-all ${
                isActive
                  ? "bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-stone-900/80 text-amber-200/70 border border-amber-900/30 hover:text-amber-100 hover:border-amber-700/50"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {products.map((product) => (
          <m.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-sm bg-stone-950/90 border border-amber-900/40 hover:border-amber-500/60 overflow-hidden flex flex-col justify-between transition-all duration-500 p-1 shadow-[0_20px_50px_-10px_rgba(180,83,9,0.15)] hover:shadow-2xl hover:shadow-amber-950/60"
          >
            <div>
              {/* Product Image & Badges — 35mm Film Still */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative h-52 overflow-hidden cursor-pointer bg-stone-950 rounded-none border-b border-amber-900/30"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover contrast-[1.07] brightness-[0.97] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle Warm Color Grade & Radial Vignette */}
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-soft-light pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(9,9,11,0.75)_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90" />
                
                {/* Film Frame Stamp & Badges */}
                <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="text-[9px] font-mono tracking-widest text-amber-300/80 bg-stone-950/80 px-2 py-0.5 rounded-sm border border-amber-500/20 uppercase">
                    {product.badge || "35MM MENU"}
                  </span>
                  {product.calories && (
                    <span className="text-[9px] font-mono text-amber-200/90 px-2 py-0.5 rounded-sm bg-stone-950/80 border border-amber-900/40">
                      {product.calories} kcal
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-2 cursor-pointer" onClick={() => onSelectProduct(product)}>
                <h3 className="font-serif text-xl font-normal text-amber-50 group-hover:text-amber-400 transition-colors leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs font-sans text-amber-200/70 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                {product.notes && (
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] font-mono text-amber-400/90">
                    <Coffee className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{product.notes}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Row (Price & Add Button) */}
            <div className="p-5 pt-0 flex items-center justify-between border-t border-amber-900/20 mt-2">
              <span className="font-serif text-xl font-medium text-amber-100">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <button
                onClick={() => onQuickAdd(product)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 text-stone-950 hover:bg-amber-400 font-semibold text-xs transition-all active:scale-95 shadow-md shadow-amber-500/20"
                aria-label={`Add ${product.name} to order`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="font-mono uppercase tracking-wider text-[11px]">Add</span>
              </button>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
};

