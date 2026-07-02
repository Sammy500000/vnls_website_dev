import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "small" | "medium" | "large";
  interactive?: boolean;
}

export function GlassCard({
  children,
  variant = "medium",
  interactive = false,
  className = "",
  ...props
}: GlassCardProps) {
  const sizeClasses = {
    small: "p-4 sm:p-6 rounded-2xl",
    medium: "p-8 sm:p-10 rounded-3xl",
    large: "p-10 sm:p-14 rounded-[2.5rem]",
  };

  const interactiveClasses = interactive ? "hover-elevation cursor-pointer" : "";

  return (
    <div
      className={`glass-surface relative overflow-hidden ${sizeClasses[variant]} ${interactiveClasses} ${className}`}
      {...props}
    >
      {/* Subtle top reflection for added realism */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
