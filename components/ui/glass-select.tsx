"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlassSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{
    value: string;
    label: string;
    count?: number;
  }>;
}

export const GlassSelect = forwardRef<HTMLSelectElement, GlassSelectProps>(
  ({ className, label, options, ...props }, ref) => {
    return (
      <div className="relative">
        {label && (
          <label className="block text-sm text-[rgb(var(--text-tertiary))] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "appearance-none w-full px-4 py-2.5 pr-10 rounded-lg",
              "bg-white/[0.03] backdrop-blur-sm",
              "border border-white/[0.08]",
              "text-[rgb(var(--text-primary))]",
              "hover:bg-white/[0.05] hover:border-white/[0.12]",
              "focus:outline-none focus:border-[rgb(var(--accent-primary)/0.5)]",
              "focus:ring-1 focus:ring-[rgb(var(--accent-primary)/0.2)]",
              "transition-all duration-300",
              "cursor-pointer",
              // Style the option elements
              "[&>option]:bg-[rgb(var(--bg-primary))]",
              "[&>option]:text-[rgb(var(--text-primary))]",
              "[&>option]:py-2",
              "[&>optgroup]:bg-[rgb(var(--bg-secondary))]",
              "[&>optgroup]:text-[rgb(var(--text-secondary))]",
              className
            )}
            {...props}
          >
            {options.map((option, index) => (
              <option key={`${option.value}-${index}`} value={option.value}>
                {option.label}
                {option.count !== undefined && ` (${option.count})`}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-[rgb(var(--text-tertiary))]" />
          </div>
        </div>
      </div>
    );
  }
);

GlassSelect.displayName = "GlassSelect";

// Alternative version with more glassmorphism effects
export const GlassSelectEnhanced = forwardRef<HTMLSelectElement, GlassSelectProps>(
  ({ className, label, options, ...props }, ref) => {
    return (
      <div className="relative">
        {label && (
          <label className="block text-sm font-medium text-[rgb(var(--text-secondary))] mb-2">
            {label}
          </label>
        )}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-primary)/0.1)] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <select
            ref={ref}
            className={cn(
              "relative appearance-none w-full px-4 py-3 pr-10 rounded-lg",
              "bg-gradient-to-br from-white/[0.03] to-white/[0.01]",
              "backdrop-blur-xl backdrop-saturate-[1.8]",
              "border border-white/[0.08]",
              "text-[rgb(var(--text-primary))]",
              "shadow-[0_8px_32px_rgba(0,212,255,0.02)]",
              "hover:bg-white/[0.05] hover:border-white/[0.12]",
              "hover:shadow-[0_8px_32px_rgba(0,212,255,0.05)]",
              "focus:outline-none focus:border-[rgb(var(--accent-primary)/0.5)]",
              "focus:ring-2 focus:ring-[rgb(var(--accent-primary)/0.15)]",
              "focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]",
              "transition-all duration-300",
              "cursor-pointer",
              // Style the option elements with dark theme
              "[&>option]:bg-[rgb(10,10,15)]",
              "[&>option]:text-[rgb(var(--text-primary))]",
              "[&>option]:py-2 [&>option]:px-4",
              "[&>option:hover]:bg-[rgb(var(--accent-primary)/0.1)]",
              "[&>optgroup]:bg-[rgb(15,15,20)]",
              "[&>optgroup]:text-[rgb(var(--text-secondary))]",
              "[&>optgroup]:font-semibold",
              className
            )}
            {...props}
          >
            {options.map((option, index) => (
              <option key={`${option.value}-${index}`} value={option.value}>
                {option.label}
                {option.count !== undefined && ` (${option.count})`}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown className="w-5 h-5 text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300" />
          </div>
        </div>
      </div>
    );
  }
);

GlassSelectEnhanced.displayName = "GlassSelectEnhanced";