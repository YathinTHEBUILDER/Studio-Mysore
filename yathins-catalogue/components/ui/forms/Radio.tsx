"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioGroupContextValue {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  value,
  defaultValue,
  onValueChange,
  disabled,
  label,
  className,
  ...props
}) => {
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string>(
    defaultValue ?? ""
  );
  const selectedValue = isControlled ? value : uncontrolledValue;

  const handleChange = (val: string) => {
    if (!isControlled) {
      setUncontrolledValue(val);
    }
    if (onValueChange) onValueChange(val);
  };

  return (
    <RadioGroupContext.Provider
      value={{ name, value: selectedValue, onChange: handleChange, disabled }}
    >
      <div
        role="radiogroup"
        aria-label={label}
        className={cn("flex flex-col gap-2.5", className)}
        {...props}
      >
        {label && (
          <span className="text-xs font-medium text-neutral-300 select-none">
            {label}
          </span>
        )}
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  value: string;
  label?: React.ReactNode;
  description?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, value, label, description, id, disabled, ...props }, ref) => {
    const groupContext = React.useContext(RadioGroupContext);
    const generatedId = React.useId();
    const radioId = id || generatedId;

    const isChecked = groupContext.value === value;
    const isDisabled = disabled || groupContext.disabled;

    const handleChange = () => {
      if (!isDisabled && groupContext.onChange) {
        groupContext.onChange(value);
      }
    };

    return (
      <label
        htmlFor={radioId}
        className={cn(
          "inline-flex items-start gap-3 cursor-pointer select-none group",
          isDisabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
          <input
            type="radio"
            id={radioId}
            ref={ref}
            name={groupContext.name}
            value={value}
            disabled={isDisabled}
            checked={isChecked}
            onChange={handleChange}
            className="sr-only peer"
            {...props}
          />
          <div
            className={cn(
              "w-5 h-5 rounded-full border border-[#27272A] bg-[#111111] transition-all flex items-center justify-center",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-neutral-950",
              "peer-checked:border-neutral-100",
              "group-hover:border-neutral-600"
            )}
          >
            {isChecked && (
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-100 animate-in zoom-in-50 duration-150" />
            )}
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-neutral-400 font-normal">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";
