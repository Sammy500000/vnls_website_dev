import React from "react";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function MaternalRecoveryTimeline() {
  const points = [
    { time: "Week 1", label: "Acute Healing", detail: "Tissue repair initiation" },
    { time: "Month 1", label: "Lactogenesis", detail: "Milk supply establishment" },
    { time: "Month 3", label: "Remineralization", detail: "Bone & iron restoration" },
    { time: "Month 6", label: "Metabolic Balance", detail: "Hormonal equilibrium" }
  ];

  return (
    <div className="w-full py-16 px-8 lg:px-12 rounded-[2rem] glass-surface border border-border/50 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      
      <MotionWrapper animation="stagger" className="relative z-10 w-full flex justify-between items-start gap-4">
        
        {/* Continuous background line */}
        <div className="absolute top-[28px] left-8 right-8 h-[2px] bg-border/40 z-0 hidden sm:block" />

        {points.map((pt, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[120px]">
            <div className="w-14 h-14 rounded-full glass-surface border border-accent/40 bg-background shadow-lg flex items-center justify-center mb-6 relative group">
               <div className="absolute inset-1 rounded-full bg-accent/10 transition-transform group-hover:scale-110" />
               <span className="font-serif text-sm font-bold">{idx + 1}</span>
            </div>
            
            <h4 className="font-bold text-xs tracking-widest text-accent uppercase mb-2">{pt.time}</h4>
            <h3 className="font-serif text-lg leading-tight text-foreground mb-2">{pt.label}</h3>
            <p className="text-xs text-muted-foreground">{pt.detail}</p>
          </div>
        ))}
        
      </MotionWrapper>
    </div>
  );
}
