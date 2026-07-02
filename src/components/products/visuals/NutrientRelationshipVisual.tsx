import React from "react";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function NutrientRelationshipVisual() {
  return (
    <div className="w-full aspect-[4/3] rounded-[2rem] glass-surface border border-border/50 relative overflow-hidden flex items-center justify-center">
      
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
         <path d="M 30% 30% C 50% 50%, 70% 30%, 70% 30%" stroke="var(--color-primary)" fill="none" strokeWidth="1" strokeDasharray="4 4" />
         <path d="M 30% 70% C 50% 50%, 70% 70%, 70% 70%" stroke="var(--color-accent)" fill="none" strokeWidth="1" strokeDasharray="4 4" />
         <path d="M 50% 50% L 80% 50%" stroke="var(--color-foreground)" fill="none" strokeWidth="1" strokeDasharray="2 2" />
      </svg>

      <MotionWrapper animation="stagger" className="relative z-10 w-full h-full flex items-center justify-center">
        
        {/* Core Node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-accent bg-background shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.3)] flex items-center justify-center z-20">
          <span className="font-serif italic text-lg text-foreground">Synergy</span>
        </div>

        {/* Satellite Nodes */}
        <div className="absolute left-[20%] top-[20%] w-20 h-20 rounded-full glass-surface border border-primary/40 flex items-center justify-center flex-col p-2 text-center">
          <span className="text-xs font-bold text-foreground">DHA</span>
          <span className="text-[8px] uppercase text-muted-foreground">Cognition</span>
        </div>

        <div className="absolute right-[20%] top-[20%] w-20 h-20 rounded-full glass-surface border border-primary/40 flex items-center justify-center flex-col p-2 text-center">
          <span className="text-xs font-bold text-foreground">Choline</span>
          <span className="text-[8px] uppercase text-muted-foreground">Transport</span>
        </div>

        <div className="absolute left-[20%] bottom-[20%] w-20 h-20 rounded-full glass-surface border border-primary/40 flex items-center justify-center flex-col p-2 text-center">
          <span className="text-xs font-bold text-foreground">Calcium</span>
          <span className="text-[8px] uppercase text-muted-foreground">Structure</span>
        </div>

        <div className="absolute right-[20%] bottom-[20%] w-20 h-20 rounded-full glass-surface border border-primary/40 flex items-center justify-center flex-col p-2 text-center">
          <span className="text-xs font-bold text-foreground">Vit D3</span>
          <span className="text-[8px] uppercase text-muted-foreground">Absorption</span>
        </div>

      </MotionWrapper>
    </div>
  );
}
