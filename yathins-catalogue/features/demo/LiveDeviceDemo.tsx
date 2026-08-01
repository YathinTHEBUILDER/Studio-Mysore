"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { LiveDeviceFrame } from "./LiveDeviceFrame";
import { LiveCafeDemo } from "./LiveCafeDemo";
import { INDUSTRY_CONFIGS } from "./configs/industryConfigs";
import { CAFE_WORKFLOW_STEPS } from "./configs/cafeConfig";
import { IndustryType, WorkflowStep } from "./types";
import { Sparkles, Utensils, Stethoscope, Activity, Dumbbell, Coffee } from "lucide-react";

export interface LiveDeviceDemoProps {
  defaultIndustry?: IndustryType;
  showIndustrySwitcher?: boolean;
  showWorkflowGuide?: boolean;
  className?: string;
}

const INDUSTRY_ICONS: Record<IndustryType, React.ReactNode> = {
  cafe: <Coffee className="h-3.5 w-3.5" />,
  restaurant: <Utensils className="h-3.5 w-3.5" />,
  dental: <Sparkles className="h-3.5 w-3.5" />,
  clinic: <Stethoscope className="h-3.5 w-3.5" />,
  gym: <Dumbbell className="h-3.5 w-3.5" />,
};

export function LiveDeviceDemo({
  defaultIndustry = "cafe",
  showIndustrySwitcher = true,
  showWorkflowGuide = true,
  className,
}: LiveDeviceDemoProps) {
  const [currentIndustry, setCurrentIndustry] =
    React.useState<IndustryType>(defaultIndustry);
  const [currentStep, setCurrentStep] = React.useState<WorkflowStep>("menu");

  const config = INDUSTRY_CONFIGS[currentIndustry] || INDUSTRY_CONFIGS.cafe;
  const workflowSteps = CAFE_WORKFLOW_STEPS;

  return (
    <div className={cn("flex flex-col items-center space-y-6 w-full", className)}>
      {/* ── Industry Selector Bar (Future Demos Architecture) ───────────────── */}
      {showIndustrySwitcher && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-stone-800 bg-stone-900/90 p-1.5 backdrop-blur-md">
          {(Object.keys(INDUSTRY_CONFIGS) as IndustryType[]).map((indKey) => {
            const ind = INDUSTRY_CONFIGS[indKey];
            const isActive = currentIndustry === indKey;
            return (
              <button
                key={indKey}
                type="button"
                onClick={() => {
                  setCurrentIndustry(indKey);
                  setCurrentStep("menu");
                }}
                className={cn(
                  "flex items-center space-x-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                  isActive
                    ? "bg-amber-500 text-stone-950 shadow-md scale-105"
                    : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
                )}
              >
                {INDUSTRY_ICONS[indKey]}
                <span>{ind.badgeText}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ── Workflow Guide Steps Pills ─────────────────────────────────────── */}
      {showWorkflowGuide && (
        <div className="w-full max-w-lg space-y-1.5 text-center">
          <div className="flex items-center justify-center space-x-1 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
            <Activity className="h-3 w-3" />
            <span>Interactive Workflow Path</span>
          </div>
          <div className="flex overflow-x-auto justify-start sm:justify-center space-x-1.5 p-1 scrollbar-none">
            {workflowSteps.map((step, idx) => {
              const isActive = currentStep === step.id;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentStep(step.id)}
                  className={cn(
                    "rounded-md px-2 py-1 text-[10px] font-medium transition-all whitespace-nowrap focus:outline-none",
                    isActive
                      ? "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/60 font-semibold"
                      : "bg-stone-900/60 text-stone-500 hover:text-stone-300 border border-stone-800/40"
                  )}
                >
                  {step.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Device Frame with Active React Demo App ─────────────────────────── */}
      <LiveDeviceFrame title={`${config.name} Live Interactive Demo`}>
        {currentIndustry === "cafe" ? (
          <LiveCafeDemo
            initialStep={currentStep}
            onStepChange={(step) => setCurrentStep(step)}
          />
        ) : (
          /* Placeholder for future industry app payloads (Restaurant, Dental, Clinic, Gym) */
          <div className="flex h-full flex-col items-center justify-center p-6 text-center space-y-3 bg-stone-950">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30">
              {INDUSTRY_ICONS[currentIndustry]}
            </div>
            <h3 className="text-sm font-bold text-stone-100">{config.name}</h3>
            <p className="text-xs text-stone-400 max-w-[200px]">
              {config.tagline}
            </p>
            <span className="rounded-full bg-stone-900 px-3 py-1 text-[10px] font-mono text-amber-400 border border-stone-800">
              Architecture Ready
            </span>
          </div>
        )}
      </LiveDeviceFrame>
    </div>
  );
}
