import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { ScienceCoreVisual } from "../home/visuals/ScienceCoreVisual";

interface ScienceSectionProps {
  headline: string;
  introduction: string;
  pillars: {
    title: string;
    explanation: string;
    insight: string;
  }[];
  summary: string;
}

export function ScienceSection({ headline, introduction, pillars, summary }: ScienceSectionProps) {
  return (
    <Section id="science" variant="editorial" className="overflow-hidden">
      <Container className="flex flex-col items-center gap-24">
        
        {/* Header Area */}
        <MotionWrapper animation="slideUp" className="max-w-4xl text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight text-balance mb-8">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            {introduction}
          </p>
        </MotionWrapper>

        {/* Centerpiece: Science Core Visual */}
        <div className="w-full max-w-6xl mx-auto flex justify-center py-12">
           <ScienceCoreVisual />
        </div>

        {/* Human Outcome Diagram */}
        <MotionWrapper animation="fade" className="w-full max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-[3rem] glass-surface border border-border/50 relative overflow-hidden flex flex-col items-center">
             <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 opacity-50" />
             <h3 className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-12 relative z-10">Human Outcome Pathway</h3>
             
             <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-4 md:gap-0">
               {/* Pathway Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-border/50 -translate-y-1/2 overflow-hidden">
                 <div className="w-full h-full bg-accent animate-[slideRight_3s_ease-in-out_infinite]" />
               </div>

               {/* Nodes */}
               <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-auto">
                 <div className="w-16 h-16 rounded-full glass-surface border border-accent/30 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.2)]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                 </div>
                 <span className="text-sm font-bold uppercase tracking-widest text-foreground">Nutrition</span>
               </div>
               
               <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-auto">
                 <div className="w-16 h-16 rounded-full glass-surface border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                 </div>
                 <span className="text-sm font-bold uppercase tracking-widest text-foreground">Absorption</span>
               </div>

               <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-auto">
                 <div className="w-16 h-16 rounded-full glass-surface border border-accent/30 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.2)]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                 </div>
                 <span className="text-sm font-bold uppercase tracking-widest text-foreground">Maternal Health</span>
               </div>

               <div className="flex flex-col items-center gap-3 relative z-10 w-full md:w-auto">
                 <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground border border-accent flex items-center justify-center shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.4)]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                 </div>
                 <span className="text-sm font-bold uppercase tracking-widest text-foreground">Fetal Dev</span>
               </div>
             </div>
          </div>
        </MotionWrapper>

        {/* Pillars Area */}
        <div className="w-full max-w-5xl flex flex-col gap-12">
          <MotionWrapper animation="stagger" className="flex flex-col gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 rounded-3xl glass-surface border border-border/30 hover:border-accent/30 transition-colors duration-500 items-start group">
                
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl border border-accent/20 bg-accent/5 flex items-center justify-center font-serif text-accent text-xl group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="font-serif text-3xl font-medium text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed font-light">
                    {pillar.explanation}
                  </p>
                </div>
                
                <div className="flex-1 md:border-l md:border-border/30 md:pl-12 pt-6 md:pt-0 mt-6 md:mt-0 border-t border-border/30 w-full md:w-auto">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent inline-block animate-pulse" />
                    Supporting Insight
                  </span>
                  <p className="text-base text-muted-foreground font-serif italic leading-relaxed">
                    "{pillar.insight}"
                  </p>
                </div>

              </div>
            ))}
          </MotionWrapper>
        </div>

        {/* Summary Area */}
        <MotionWrapper animation="fade" className="max-w-4xl text-center">
          <p className="text-3xl md:text-4xl font-serif text-foreground leading-relaxed italic text-balance">
            "{summary}"
          </p>
        </MotionWrapper>

      </Container>
    </Section>
  );
}
