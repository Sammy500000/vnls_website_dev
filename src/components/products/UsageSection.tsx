"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { UsageStep } from "@/data/products/types";
import { motion } from "framer-motion";

interface UsageSectionProps {
  steps: UsageStep[];
}

// Minimalist Preparation Icons
const PrepIcons = [
  <svg key="scoop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M6 10c0-3.3 2.7-6 6-6s6 2.7 6 6M6 10v4c0 3.3 2.7 6 6 6s6-2.7 6-6v-4M8 20l-2 3M16 20l2 3M12 4V2"/></svg>,
  <svg key="glass" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M5 4h14M7 4l2 16h6l2-16M7 12h10M9 20h6"/></svg>,
  <svg key="mix" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg key="consume" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7h.01"/></svg>
];

export function UsageSection({ steps }: UsageSectionProps) {
  // We expand the 3 steps to a 5-node narrative timeline
  const timelineNodes = [
    { label: "Morning", sub: "Awaken" },
    { label: "Preparation", sub: "Measure" },
    { label: "Consumption", sub: "Nourish" },
    { label: "Consistency", sub: "Commit" },
    { label: "Benefit", sub: "Thrive" }
  ];

  return (
    <Section id="usage" variant="editorial" className="py-24 md:py-32 bg-primary/[0.02]">
      <Container className="flex flex-col gap-24 xl:pl-16">
        
        <MotionWrapper animation="slideUp" className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight mb-4">
            The Daily Ritual
          </h2>
          <p className="text-xl text-muted-foreground">
            Integrating deep nourishment seamlessly into your day.
          </p>
        </MotionWrapper>

        {/* Narrative Timeline */}
        <div className="w-full max-w-5xl mx-auto">
           <div className="p-8 md:p-12 rounded-[3rem] glass-surface border border-border/30 relative overflow-hidden flex flex-col items-center">
             <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 opacity-30" />
             
             <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-8 md:gap-0 mt-8">
               {/* Pathway Line */}
               <div className="hidden md:block absolute top-[40%] left-[5%] right-[5%] h-[1px] bg-border/50 overflow-hidden">
                 <motion.div 
                   className="w-1/3 h-full bg-accent"
                   animate={{ x: ["-100%", "300%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 />
               </div>

               {/* Nodes */}
               {timelineNodes.map((node, i) => (
                 <div key={i} className="flex flex-col items-center gap-4 relative z-10 w-full md:w-auto group">
                   <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${i === 4 ? 'bg-accent border-accent shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.5)]' : 'bg-background border-accent/40 group-hover:border-accent group-hover:scale-150'}`} />
                   <div className="flex flex-col items-center">
                     <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1">{node.sub}</span>
                     <span className="text-sm font-serif italic text-foreground/80">{node.label}</span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Preparation Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
          {steps.map((step, idx) => (
            <MotionWrapper key={step.id} animation="fade" delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl glass-surface border border-border/30 hover:border-accent/30 transition-all duration-500 group h-full">
                
                <div className="w-20 h-20 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent/10 transition-transform duration-500 relative">
                  <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]" />
                  {PrepIcons[idx] || PrepIcons[0]}
                </div>
                
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-base font-light">
                  {step.description}
                </p>
                
              </div>
            </MotionWrapper>
          ))}
        </div>

      </Container>
    </Section>
  );
}
