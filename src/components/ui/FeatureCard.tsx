import React from "react";
import { GlassCard } from "./GlassCard";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <GlassCard variant="medium" interactive className={`flex flex-col gap-6 ${className}`}>
      {icon && (
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent shadow-sm border border-white/20">
          {icon}
        </div>
      )}
      <div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </GlassCard>
  );
}
