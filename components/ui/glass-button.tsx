"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg disabled:opacity-50 disabled:pointer-events-none group",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-r from-[rgb(var(--accent-primary)/0.15)] to-[rgb(var(--accent-secondary)/0.1)]",
          "backdrop-blur-2xl backdrop-saturate-[2]",
          "border border-[rgb(var(--accent-primary)/0.2)]",
          "shadow-[0_0_20px_rgba(0,212,255,0.15)]",
          "hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]",
          "hover:from-[rgb(var(--accent-primary)/0.25)] hover:to-[rgb(var(--accent-secondary)/0.2)]",
          "hover:translate-y-[-2px]",
          "active:translate-y-0",
          "text-[rgb(var(--accent-primary))]",
        ],
        solid: [
          "bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))]",
          "text-black font-semibold",
          "shadow-[0_0_30px_rgba(0,212,255,0.3)]",
          "hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]",
          "hover:translate-y-[-2px]",
          "active:translate-y-0",
        ],
        ghost: [
          "bg-transparent",
          "border border-white/[0.08]",
          "hover:bg-white/[0.05]",
          "hover:border-white/[0.12]",
          "text-[rgb(var(--text-secondary))]",
          "hover:text-[rgb(var(--text-primary))]",
        ],
        secondary: [
          "bg-white/[0.05]",
          "backdrop-blur-xl",
          "border border-white/[0.08]",
          "hover:bg-white/[0.08]",
          "hover:border-white/[0.12]",
          "text-[rgb(var(--text-primary))]",
        ],
        danger: [
          "bg-gradient-to-r from-red-500/15 to-red-600/10",
          "backdrop-blur-2xl",
          "border border-red-500/20",
          "shadow-[0_0_20px_rgba(239,68,68,0.15)]",
          "hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
          "text-red-400",
        ],
        success: [
          "bg-gradient-to-r from-[rgb(var(--success-primary)/0.15)] to-[rgb(var(--success-light)/0.1)]",
          "backdrop-blur-2xl",
          "border border-[rgb(var(--success-primary)/0.2)]",
          "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
          "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
          "text-[rgb(var(--success-primary))]",
        ],
      },
      size: {
        sm: "text-sm px-3 py-2 min-h-[38px] sm:px-4 sm:py-2",
        md: "text-sm px-4 py-2.5 min-h-[44px] sm:px-6 sm:py-3",
        lg: "text-base px-6 py-3 min-h-[48px] sm:px-8 sm:py-4",
        xl: "text-lg px-8 py-4 min-h-[56px] sm:px-10 sm:py-5",
        icon: "h-11 w-11 min-h-[44px] min-w-[44px] p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface GlassButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  glow?: boolean;
  loading?: boolean;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, glow = false, loading = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          glow && [
            "after:absolute after:inset-0 after:rounded-lg",
            "after:bg-gradient-to-r after:from-[rgb(var(--accent-primary)/0.4)] after:to-[rgb(var(--accent-secondary)/0.4)]",
            "after:blur-2xl after:opacity-0 after:transition-opacity after:duration-500",
            "hover:after:opacity-60 after:pointer-events-none",
          ],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Button content */}
        <span className={cn(loading && "opacity-0")}>
          {children}
        </span>

        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";