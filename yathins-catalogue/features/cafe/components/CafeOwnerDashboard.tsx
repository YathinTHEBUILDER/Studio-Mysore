"use client";

import * as React from "react";
import { m } from "framer-motion";
import {
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  Settings,
  CheckCircle2,
  AlertCircle,
  Plus,
  RefreshCw,
  Coffee,
  IndianRupee,
  Receipt,
} from "lucide-react";
import { CafeOrderDetails } from "../types";

interface CafeOwnerDashboardProps {
  orders: CafeOrderDetails[];
  onUpdateOrderStatus?: (orderId: string, newStatus: "preparing" | "ready" | "completed") => void;
}

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  unit: string;
  minThreshold: number;
}

const INITIAL_INVENTORY: InventoryItem[] = [
  { id: "inv-1", name: "Single Origin Ethiopian Yirgacheffe", category: "Beans", stock: 14.5, unit: "kg", minThreshold: 5.0 },
  { id: "inv-2", name: "Chikmagalur Arabica Dark Roast", category: "Beans", stock: 22.0, unit: "kg", minThreshold: 8.0 },
  { id: "inv-3", name: "Oatly Barista Oat Milk", category: "Dairy & Alt", stock: 6, unit: "cartons", minThreshold: 10 },
  { id: "inv-4", name: "Farm Fresh Whole Milk", category: "Dairy & Alt", stock: 34, unit: "liters", minThreshold: 15 },
  { id: "inv-5", name: "Artisan Butter Croissants", category: "Bakery", stock: 18, unit: "pcs", minThreshold: 10 },
  { id: "inv-6", name: "Madagascar Vanilla Syrup", category: "Syrups", stock: 4, unit: "bottles", minThreshold: 2 },
];

const BARISTA_ROSTER = [
  { name: "Ananya R.", role: "Head Barista", shift: "Morning (07:00 - 15:00)", drinksMade: 142, status: "Active" },
  { name: "Vikram S.", role: "Junior Barista", shift: "Midday (11:00 - 19:00)", drinksMade: 89, status: "Active" },
  { name: "Meera K.", role: "Shift Supervisor", shift: "Closing (15:00 - 23:00)", drinksMade: 0, status: "Upcoming" },
];

export const CafeOwnerDashboard: React.FC<CafeOwnerDashboardProps> = ({ orders }) => {
  const [activeTab, setActiveTab] = React.useState<"orders" | "inventory" | "staff" | "sales" | "settings">("orders");
  const [localOrders, setLocalOrders] = React.useState<CafeOrderDetails[]>(orders);
  const [inventory, setInventory] = React.useState<InventoryItem[]>(INITIAL_INVENTORY);

  React.useEffect(() => {
    setLocalOrders(orders);
  }, [orders]);

  const updateOrderStatus = (orderId: string, status: "preparing" | "ready" | "completed") => {
    setLocalOrders((prev) =>
      prev.map((o) => (o.orderId === orderId ? { ...o, status } : o))
    );
  };

  const adjustStock = (id: string, delta: number) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stock: Math.max(0, Number((item.stock + delta).toFixed(1))) } : item
      )
    );
  };

  const totalRevenue = React.useMemo(() => {
    const base = 28450;
    const additional = localOrders.reduce((sum, o) => sum + o.total, 0);
    return base + additional;
  }, [localOrders]);

  const activeOrdersCount = localOrders.filter((o) => o.status !== "completed").length;

  return (
    <div className="w-full space-y-8 bg-zinc-950 text-white rounded-3xl border border-zinc-800/80 p-6 sm:p-10 shadow-2xl">
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold border border-amber-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Owner Operating System
            </span>
            <span className="text-xs font-mono text-zinc-400">Live POS Terminal #01</span>
          </div>
          <h2 className="text-3xl font-display font-semibold mt-2 tracking-tight">Artisan Roasters Command Center</h2>
          <p className="text-zinc-400 text-sm mt-1">Real-time counter orders, stock inventory, barista rosters & sales analytics.</p>
        </div>

        {/* Top Summary Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Today&apos;s Revenue</span>
            <span className="text-xl font-bold font-mono text-amber-400 flex items-center gap-0.5 mt-0.5">
              ₹{totalRevenue.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <span className="text-xs font-mono text-zinc-400">Active Queue</span>
            <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
              {activeOrdersCount} Orders
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col col-span-2 sm:col-span-1">
            <span className="text-xs font-mono text-zinc-400">System Status</span>
            <span className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Online
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800/80">
        <button
          onClick={() => setActiveTab("orders")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "orders"
              ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800"
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Live Orders Queue</span>
          {activeOrdersCount > 0 && (
            <span className="ml-1.5 px-2 py-0.5 rounded-full bg-zinc-950 text-amber-400 text-[10px] font-mono">
              {activeOrdersCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("inventory")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "inventory"
              ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800"
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Inventory & Stock</span>
        </button>

        <button
          onClick={() => setActiveTab("staff")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "staff"
              ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800"
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Barista Roster</span>
        </button>

        <button
          onClick={() => setActiveTab("sales")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "sales"
              ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Sales & Analytics</span>
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "settings"
              ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800"
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>POS Settings</span>
        </button>
      </div>

      {/* Tab 1: Live Orders Queue */}
      {activeTab === "orders" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display flex items-center gap-2">
              <Coffee className="w-5 h-5 text-amber-400" /> Live Counter Orders
            </h3>
            <span className="text-xs text-zinc-400 font-mono">Auto-refreshes every 5s</span>
          </div>

          {localOrders.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-zinc-800 rounded-2xl space-y-3">
              <Receipt className="w-10 h-10 text-zinc-600 mx-auto" />
              <h4 className="font-semibold text-zinc-300">No active customer orders right now.</h4>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Switch to <span className="text-amber-400 font-medium">Customer Experience Mode</span> in the header to place a test order. It will appear here instantly!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {localOrders.map((order) => (
                <m.div
                  key={order.orderId}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-5 rounded-2xl border transition-all space-y-4 flex flex-col justify-between ${
                    order.status === "ready"
                      ? "bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                      : order.status === "completed"
                      ? "bg-zinc-900/40 border-zinc-800 opacity-60"
                      : "bg-zinc-900 border-zinc-800"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                      <div>
                        <span className="font-mono text-xs font-bold text-amber-400 block">{order.orderId}</span>
                        <h4 className="font-semibold text-white text-base">{order.customerName}</h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                        {order.createdAt}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-zinc-300">
                      <div className="flex items-center justify-between text-zinc-400 font-mono text-[11px]">
                        <span>Type: {order.orderType === "pickup" ? "Express Pickup" : "Table Dine-In"}</span>
                        <span>{order.customerPhone}</span>
                      </div>
                      <div className="divide-y divide-zinc-800/40 pt-1">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="py-1.5 flex items-center justify-between">
                            <span>
                              <strong className="text-white">{item.quantity}x</strong> {item.product.name} ({item.selectedMilk})
                            </span>
                            <span className="font-mono text-zinc-400">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">Total Paid</span>
                      <span className="font-mono font-bold text-amber-400 text-sm">₹{order.total.toLocaleString("en-IN")}</span>
                    </div>

                    {/* Status Action Buttons */}
                    <div className="flex items-center gap-1.5">
                      {order.status !== "ready" && order.status !== "completed" && (
                        <button
                          onClick={() => updateOrderStatus(order.orderId, "ready")}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-xs hover:bg-emerald-400 transition-colors"
                        >
                          Mark Ready
                        </button>
                      )}
                      {order.status === "ready" && (
                        <button
                          onClick={() => updateOrderStatus(order.orderId, "completed")}
                          className="px-3 py-1.5 rounded-lg bg-zinc-700 text-white font-semibold text-xs hover:bg-zinc-600 transition-colors"
                        >
                          Dispatch
                        </button>
                      )}
                      {order.status === "completed" && (
                        <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" /> Completed
                        </span>
                      )}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Inventory & Stock */}
      {activeTab === "inventory" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold font-display">Raw Materials & Ingredient Stock</h3>
              <p className="text-xs text-zinc-400">Live track espresso beans, milk inventory, and bakery display case.</p>
            </div>
            <button className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Add New Stock Item
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inventory.map((item) => {
              const isLow = item.stock <= item.minThreshold;
              return (
                <div key={item.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-zinc-500">{item.category}</span>
                      <h4 className="font-semibold text-white text-sm mt-0.5">{item.name}</h4>
                    </div>
                    {isLow && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Low Stock
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline justify-between border-y border-zinc-800/80 py-3">
                    <span className="text-xs text-zinc-400">Current Stock</span>
                    <span className="font-mono text-xl font-bold text-white">
                      {item.stock} <span className="text-xs font-normal text-zinc-400">{item.unit}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-zinc-500">Min Threshold: {item.minThreshold} {item.unit}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => adjustStock(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 font-bold flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <button
                        onClick={() => adjustStock(item.id, 5)}
                        className="px-2.5 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 font-semibold text-xs flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" /> Refill
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Staff Roster */}
      {activeTab === "staff" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold font-display">Barista & Supervisor Shift Roster</h3>
              <p className="text-xs text-zinc-400">Manage shift schedules, drinks crafted metrics, and counter assignments.</p>
            </div>
          </div>

          <div className="divide-y divide-zinc-800 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
            {BARISTA_ROSTER.map((staff, idx) => (
              <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center font-mono">
                    {staff.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">{staff.name}</h4>
                    <span className="text-xs font-mono text-zinc-400">{staff.role} • {staff.shift}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">Shift Throughput</span>
                    <span className="font-mono text-sm font-bold text-amber-400">{staff.drinksMade} Drinks</span>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                    staff.status === "Active"
                      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                      : "bg-zinc-800 text-zinc-400 border-zinc-700"
                  }`}>
                    {staff.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Sales & Analytics */}
      {activeTab === "sales" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Total Counter Gross</span>
              <div className="text-2xl font-bold font-mono text-amber-400 flex items-center gap-1">
                <IndianRupee className="w-5 h-5" />
                {totalRevenue.toLocaleString("en-IN")}
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">+18.4% vs last Saturday</span>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Average Ticket Value</span>
              <div className="text-2xl font-bold font-mono text-white">
                ₹385
              </div>
              <span className="text-[11px] text-zinc-400 font-mono">Based on 74 orders today</span>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Top Product</span>
              <div className="text-lg font-semibold text-amber-300 font-display">
                Oat Milk Iced Latte
              </div>
              <span className="text-[11px] text-zinc-400 font-mono">42 cups served (56% sales volume)</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: POS Settings */}
      {activeTab === "settings" && (
        <div className="space-y-6 max-w-xl">
          <h3 className="text-lg font-semibold font-display">Counter Terminal & Gateway Configuration</h3>
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="font-semibold text-white block">Thermal Kitchen Printer</span>
                <span className="text-zinc-400">Epson TM-T88VI connected on 192.168.1.42</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono">Connected</span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="font-semibold text-white block">UPI Gateway Terminal</span>
                <span className="text-zinc-400">PhonePe / GooglePay Dynamic QR Active</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono">Online</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-white block">GST Invoice Header</span>
                <span className="text-zinc-400">GSTIN: 29AAAAA0000A1Z5</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">Configured</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
