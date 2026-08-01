"use client";

import * as React from "react";
import { m } from "framer-motion";
import { CafeCategory, CafeProduct } from "../types";
import { Plus } from "lucide-react";

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
    <section className="py-12 bg-zinc-950">
      {/* Category Selector Filter Bar */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-medium tracking-wide uppercase flex items-center gap-2 shrink-0 transition-all ${
                isActive
                  ? "bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
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
            transition={{ duration: 0.3 }}
            className="group rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-amber-950/20"
          >
            <div>
              {/* Product Image & Badges */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative h-48 overflow-hidden cursor-pointer bg-zinc-950"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                {product.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-amber-500/90 text-zinc-950">
                    {product.badge}
                  </span>
                )}
                {product.calories && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-zinc-300 px-2 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-md">
                    {product.calories} kcal
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-2 cursor-pointer" onClick={() => onSelectProduct(product)}>
                <h3 className="font-display text-lg font-semibold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                {product.notes && (
                  <span className="text-[11px] font-mono text-amber-400/80 block pt-1">
                    {product.notes}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Row (Price & Add Button) */}
            <div className="p-5 pt-0 flex items-center justify-between border-t border-zinc-800/40 mt-2">
              <span className="font-mono text-lg font-bold text-white">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => onQuickAdd(product)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold text-xs transition-all active:scale-95 shadow-md shadow-amber-500/10"
                aria-label={`Add ${product.name} to order`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
};
