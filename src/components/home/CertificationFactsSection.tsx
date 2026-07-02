import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { homepageData } from "@/data/homepage";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BackgroundGradient } from "@/components/shared/BackgroundGradient";

export function CertificationFactsSection() {
  const { facts } = homepageData.certification;

  return (
    <Section id="facts" variant="editorial" className="relative overflow-hidden">
      <BackgroundGradient className="opacity-50" />
      <Container className="relative z-10">
        
        <MotionWrapper animation="stagger" className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {facts.map((fact, idx) => (
            <GlassCard key={idx} variant="small" className="flex flex-col items-center justify-center text-center w-64 aspect-square">
              <AnimatedCounter 
                value={fact.value} 
                suffix={fact.suffix}
                className="mb-4"
              />
              <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                {fact.description}
              </span>
            </GlassCard>
          ))}
        </MotionWrapper>

      </Container>
    </Section>
  );
}
