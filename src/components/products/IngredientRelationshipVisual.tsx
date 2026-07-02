import React from "react";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function IngredientRelationshipVisual() {
  return (
    <div className="w-full aspect-video md:aspect-[4/3] rounded-[2rem] glass-surface relative flex flex-col items-center justify-center p-8 overflow-hidden">
      
      {/* Background abstract connection lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50% 20% C 50% 50%, 20% 50%, 20% 80%" stroke="var(--color-primary)" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 50% 20% C 50% 50%, 50% 50%, 50% 80%" stroke="var(--color-accent)" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 50% 20% C 50% 50%, 80% 50%, 80% 80%" stroke="var(--color-primary)" fill="none" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <MotionWrapper animation="stagger" className="relative z-10 w-full h-full flex flex-col items-center justify-between">
        
        {/* Top Node */}
        <div className="w-32 h-32 rounded-full border border-accent/30 bg-background/50 backdrop-blur-md flex items-center justify-center shadow-lg relative">
          <div className="absolute inset-2 rounded-full border border-accent/10 border-dashed animate-[spin_20s_linear_infinite]" />
          <span className="font-serif italic text-lg text-foreground">Mother</span>
        </div>

        {/* Center Node */}
        <div className="w-48 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center my-4">
          <span className="font-bold tracking-widest uppercase text-xs text-accent">Nourishment</span>
        </div>

        {/* Bottom Clusters */}
        <div className="flex w-full justify-between items-end px-4">
          <div className="w-24 h-24 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm flex items-center justify-center text-center p-2">
             <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Recovery</span>
          </div>
          <div className="w-28 h-28 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm flex items-center justify-center text-center p-2 mb-4">
             <span className="text-[10px] uppercase font-bold tracking-wider text-accent">Development</span>
          </div>
          <div className="w-24 h-24 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm flex items-center justify-center text-center p-2">
             <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Immunity</span>
          </div>
        </div>

      </MotionWrapper>
    </div>
  );
}
