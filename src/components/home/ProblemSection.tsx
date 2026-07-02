import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { homepageData } from "@/data/homepage";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function ProblemSection() {
  const { title, stats } = homepageData.problem;

  return (
    <Section id="problem" variant="editorial">
      <Container className="flex flex-col gap-16 md:gap-24">
        
        <MotionWrapper animation="slideUp">
          <SectionTitle title={title} align="center" />
        </MotionWrapper>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <MotionWrapper key={idx} animation="fade" delay={idx * 0.1}>
              <GlassCard variant="medium" className="text-center h-full flex flex-col justify-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} className="mb-2" />
                <span className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </span>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>

        {/* Map & Quote Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <MotionWrapper animation="scale">
            <div className="h-[400px] md:h-[600px] rounded-[3rem] glass-surface border border-border/50 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              {/* Abstract Data Visualization replacing map */}
              <div className="relative w-[60%] h-[60%] border border-accent/20 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center">
                 <div className="absolute w-[80%] h-[80%] border border-accent/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                 <div className="absolute w-[60%] h-[60%] border border-primary/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                 <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_var(--color-accent)] animate-pulse" />
              </div>
              <span className="absolute bottom-8 text-xs tracking-widest uppercase text-muted-foreground font-bold">Nutritional Deficit Mapping</span>
            </div>
          </MotionWrapper>
          <MotionWrapper animation="stagger" delay={0.2} className="flex flex-col gap-8">
            <GlassCard variant="small" className="h-[200px] flex flex-col justify-center p-8 relative overflow-hidden">
               <span className="absolute top-4 left-4 text-6xl text-accent/10 font-serif leading-none">"</span>
               <p className="relative z-10 text-lg font-serif italic text-foreground/90 leading-relaxed">
                 The profound depletion of maternal reserves is often masked as normal postpartum fatigue, delaying critical intervention.
               </p>
               <span className="relative z-10 mt-4 text-xs font-bold tracking-widest uppercase text-accent">Clinical Insight</span>
            </GlassCard>
            <GlassCard variant="small" className="h-[200px] flex flex-col justify-center p-8 relative overflow-hidden">
               <span className="absolute top-4 left-4 text-6xl text-accent/10 font-serif leading-none">"</span>
               <p className="relative z-10 text-lg font-serif italic text-foreground/90 leading-relaxed">
                 Without bioavailable supplementation, fetal development invariably prioritizes itself over maternal bone and neurological health.
               </p>
               <span className="relative z-10 mt-4 text-xs font-bold tracking-widest uppercase text-accent">Medical Consensus</span>
            </GlassCard>
          </MotionWrapper>
        </div>

      </Container>
    </Section>
  );
}
