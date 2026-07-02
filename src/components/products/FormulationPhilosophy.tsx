import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { BackgroundGradient } from "@/components/shared/BackgroundGradient";
import { GlassCard } from "@/components/ui/GlassCard";
import { FormulationFlow } from "./visuals/FormulationFlow";

interface FormulationPhilosophyProps {
  headline: string;
  explanation: string;
  pillars: {
    title: string;
    description: string;
    insight: string;
  }[];
}

export function FormulationPhilosophy({ headline, explanation, pillars }: FormulationPhilosophyProps) {
  return (
    <Section id="philosophy" variant="editorial" className="relative overflow-hidden">
      <BackgroundGradient className="opacity-40" />
      <Container className="relative z-10 flex flex-col items-center">
        
        <MotionWrapper animation="slideUp" className="text-center max-w-4xl mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent mb-6 block">
            Formulation Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground tracking-tight text-balance mb-8">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            {explanation}
          </p>
        </MotionWrapper>

        <div className="w-full max-w-5xl flex flex-col gap-12">
          
          <MotionWrapper animation="scale" className="w-full">
            <FormulationFlow />
          </MotionWrapper>

          <MotionWrapper animation="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <GlassCard key={idx} variant="small" className="h-full flex flex-col justify-start">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                  {pillar.description}
                </p>
                <div className="mt-auto pt-6 border-t border-border/30">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent">Insight</span>
                  <p className="text-sm text-foreground/80 mt-2 font-serif italic">{pillar.insight}</p>
                </div>
              </GlassCard>
            ))}
          </MotionWrapper>

        </div>

      </Container>
    </Section>
  );
}
