import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  variant?: "default" | "elevated" | "dark";
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = false, glow = false, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-gradient-to-br from-white/[0.03] to-white/[0.01]",
          "backdrop-blur-xl backdrop-saturate-[1.8]",
          "border border-white/[0.08]",
          "shadow-[0_8px_32px_rgba(0,212,255,0.05)]",
          hover && [
            "transition-all duration-300",
            "hover:translate-y-[-4px]",
            "hover:shadow-[0_16px_48px_rgba(0,212,255,0.1)]",
            "hover:border-white/[0.12]",
          ],
          glow && [
            "before:absolute before:inset-0 before:rounded-2xl",
            "before:bg-gradient-to-r before:from-[rgb(var(--accent-primary)/0.2)] before:to-[rgb(var(--accent-secondary)/0.2)]",
            "before:blur-xl before:opacity-0 before:transition-opacity before:duration-500",
            "hover:before:opacity-100",
          ],
          variant === "elevated" && "bg-gradient-to-br from-white/[0.05] to-white/[0.02]",
          variant === "dark" && "bg-gradient-to-br from-black/20 to-black/10",
          className
        )}
        {...props}
      >
        {/* Inner gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.02] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";