import React from "react";
import { GlassCard } from "./GlassCard";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function TimelineCard({ year, title, description, isLast = false }: TimelineCardProps) {
  return (
    <div className="relative flex gap-8 md:gap-12 group">
      {/* Timeline Line & Node */}
      <div className="flex flex-col items-center relative z-10">
        <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-white/40 shadow-sm z-10 transition-transform duration-medium group-hover:scale-125" />
        {!isLast && <div className="w-px h-full bg-gradient-to-b from-accent/50 to-transparent mt-2" />}
      </div>

      {/* Content */}
      <div className="pb-16 -mt-2 flex-1">
        <span className="text-sm font-bold tracking-widest text-accent uppercase mb-2 block">
          {year}
        </span>
        <GlassCard variant="small" interactive>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
        </GlassCard>
      </div>
    </div>
  );
}
