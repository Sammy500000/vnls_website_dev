import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { Flavour } from "@/data/products/types";
import { FlavourExperienceVisual } from "./visuals/FlavourExperienceVisual";

interface FlavourSectionProps {
  flavours: Flavour[];
}

export function FlavourSection({ flavours }: FlavourSectionProps) {
  return (
    <Section id="flavours" variant="editorial" className="py-24 md:py-32 relative">
      <Container className="flex flex-col gap-24 lg:gap-40 xl:pl-16">
        
        <MotionWrapper animation="slideUp" className="max-w-2xl text-center mx-auto mb-8">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight mb-6">
            The Sensory Experience
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Formulated to respect the evolving palate and provide comfort when it's needed most.
          </p>
        </MotionWrapper>

        {/* Sensory Story Nodes */}
        <MotionWrapper animation="stagger" className="flex flex-wrap justify-center gap-4 mb-8">
          {["Morning Sickness Friendly", "Easy Digestion", "Comfort First", "Daily Consistency"].map((node, i) => (
            <div key={i} className="px-6 py-3 rounded-full glass-surface border border-border/50 text-sm font-bold tracking-widest text-foreground uppercase shadow-md flex items-center gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
               {node}
            </div>
          ))}
        </MotionWrapper>

        {flavours.map((flavour, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              
              {/* Visual Side */}
              <MotionWrapper animation="scale" className="w-full lg:w-1/2 aspect-[4/5] rounded-[2rem] glass-surface overflow-hidden relative shadow-2xl border border-border/20">
                 <FlavourExperienceVisual flavourId={flavour.id} />
              </MotionWrapper>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col gap-10">
                <MotionWrapper animation="slideUp">
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent mb-4 block flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-accent/50" />
                    Flavour Profile
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                    {flavour.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light italic font-serif">
                    "{flavour.story}"
                  </p>
                </MotionWrapper>

                <MotionWrapper animation="stagger" delay={0.2} className="flex flex-col gap-8 mt-4 border-t border-border/50 pt-8">
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-3">Sensory Notes</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed font-light">{flavour.sensoryExperience}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-3">Emotional Connection</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed font-light">{flavour.emotionalConnection}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.15em] text-accent uppercase mb-3">Why Mothers Prefer It</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed font-light">{flavour.whyMothersPrefer}</p>
                  </div>
                </MotionWrapper>
              </div>

            </div>
          );
        })}

      </Container>
    </Section>
  );
}
