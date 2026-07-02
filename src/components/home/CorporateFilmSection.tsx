import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { VideoPreviewExperience } from "./visuals/VideoPreviewExperience";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function CorporateFilmSection() {
  return (
    <Section id="corporate-film" variant="editorial">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Sticky Video Placeholder */}
        <MotionWrapper animation="scale" className="lg:sticky lg:top-32 relative h-[400px] lg:h-[60vh] w-full">
          <VideoPreviewExperience />
        </MotionWrapper>

        {/* Scrolling Narrative Content */}
        <MotionWrapper animation="stagger" className="flex flex-col gap-12 py-8 lg:py-32">
          
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-foreground tracking-tight mb-6">
              The Science Of Maternal Care
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Watch how our team of scientists and researchers approach the complex 
              nutritional requirements of pregnancy and lactation.
            </p>
          </div>
          
          <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">A Focus on Bioavailability</h3>
            <p className="text-muted-foreground">
              We don't just calculate milligrams. We analyze molecular absorption pathways to ensure every nutrient reaches its intended destination.
            </p>
          </div>
          
          <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Sensory-Adapted Formulation</h3>
            <p className="text-muted-foreground">
              Understanding that morning sickness alters taste and smell, our formulations are specifically designed for high palatability during the hardest trimesters.
            </p>
          </div>
          
        </MotionWrapper>

      </Container>
    </Section>
  );
}
