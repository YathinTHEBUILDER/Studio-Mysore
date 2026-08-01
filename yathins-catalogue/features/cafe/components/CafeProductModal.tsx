"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { CafeProduct } from "../types";
import { X, Plus, Minus, Check } from "lucide-react";

interface CafeProductModalProps {
  product: CafeProduct | null;
  onClose: () => void;
  onAddToCart: (product: CafeProduct, quantity: number, options: { milk: string; sweetness: string; notes: string }) => void;
}

const MILK_OPTIONS = ["Whole Milk", "Oat Milk (+$0.60)", "Almond Milk (+$0.60)", "Skim Milk"];
const SWEETNESS_OPTIONS = ["0%", "50%", "100% (Standard)"];

export const CafeProductModal: React.FC<CafeProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedMilk, setSelectedMilk] = React.useState("Whole Milk");
  const [selectedSweetness, setSelectedSweetness] = React.useState("100% (Standard)");
  const [notes, setNotes] = React.useState("");

  React.useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedMilk("Whole Milk");
      setSelectedSweetness("100% (Standard)");
      setNotes("");
    }
  }, [product]);

  if (!product) return null;

  const isDrink = product.category === "coffees" || product.category === "teas";

  const handleAdd = () => {
    onAddToCart(product, quantity, {
      milk: isDrink ? selectedMilk : "",
      sweetness: isDrink ? selectedSweetness : "",
      notes,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl overflow-hidden text-white space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Product Header */}
          <div className="flex gap-4 items-start pt-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 rounded-2xl object-cover border border-zinc-800 shrink-0"
            />
            <div className="space-y-1">
              {product.badge && (
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {product.badge}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold leading-tight">{product.name}</h3>
              <span className="font-mono text-lg font-bold text-amber-400 block">${product.price.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/80 pt-4">
            {product.description}
          </p>

          {/* Customizable Options for Beverages */}
          {isDrink && (
            <div className="space-y-4 border-t border-zinc-800/80 pt-4">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Milk Choice</label>
                <div className="grid grid-cols-2 gap-2">
                  {MILK_OPTIONS.map((milk) => (
                    <button
                      key={milk}
                      onClick={() => setSelectedMilk(milk)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                        selectedMilk === milk
                          ? "bg-amber-500/10 border-amber-500 text-amber-300"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      {milk}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Sweetness</label>
                <div className="grid grid-cols-3 gap-2">
                  {SWEETNESS_OPTIONS.map((sweet) => (
                    <button
                      key={sweet}
                      onClick={() => setSelectedSweetness(sweet)}
                      className={`p-2 rounded-xl text-xs font-medium text-center transition-all border ${
                        selectedSweetness === sweet
                          ? "bg-amber-500/10 border-amber-500 text-amber-300"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      {sweet}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-2 border-t border-zinc-800/80 pt-4">
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Special Instructions</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Extra hot, light ice, separate lid..."
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Quantity & Add Button */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-3 p-1 rounded-xl bg-zinc-950 border border-zinc-800">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-sm font-bold px-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 ml-4 py-3.5 px-6 rounded-xl bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Check className="w-4 h-4" />
              <span>Add to Order — ${(product.price * quantity).toFixed(2)}</span>
            </button>
          </div>
        </m.div>
      </div>
    </AnimatePresence>
  );
};
