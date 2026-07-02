import React from "react";
import { GlassCard } from "./GlassCard";
import { GlassButton } from "./GlassButton";

interface CTACardProps {
  title: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
}

export function CTACard({
  title,
  description,
  primaryActionLabel,
  primaryActionHref = "#",
  secondaryActionLabel,
  secondaryActionHref = "#",
}: CTACardProps) {
  return (
    <GlassCard variant="large" className="text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient glow specific to CTA */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground tracking-tight text-balance">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-balance">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <GlassButton variant="primary" size="lg" className="w-full sm:w-auto" href={primaryActionHref}>
            {primaryActionLabel}
          </GlassButton>
          {secondaryActionLabel && (
            <GlassButton variant="secondary" size="lg" className="w-full sm:w-auto" href={secondaryActionHref}>
              {secondaryActionLabel}
            </GlassButton>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
