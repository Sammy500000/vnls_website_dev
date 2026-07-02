import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homepageData } from "@/data/homepage";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function NutritionForAllSection() {
  const { headline } = homepageData.nutritionForAll;

  return (
    <Section id="nutrition-for-all" variant="editorial">
      <Container className="flex flex-col items-center gap-16 md:gap-24">
        
        <MotionWrapper animation="slideUp" className="max-w-4xl mx-auto">
          <SectionTitle 
            title={headline}
            align="center" 
          />
        </MotionWrapper>

        {/* Visual Mosaic Placeholder representing different mothers/regions */}
        <MotionWrapper animation="stagger" className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="col-span-2 row-span-2 aspect-square rounded-3xl bg-primary/20 border border-primary/30 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent mix-blend-overlay" />
             <span className="text-muted-foreground/50 font-serif italic text-lg z-10">Primary Story</span>
          </div>
          <div className="col-span-1 row-span-1 aspect-square rounded-3xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
             <span className="text-muted-foreground/50 font-serif italic text-sm">Region A</span>
          </div>
          <div className="col-span-1 row-span-1 aspect-square rounded-3xl bg-accent/20 border border-accent/30 flex items-center justify-center">
             <span className="text-muted-foreground/50 font-serif italic text-sm">Region B</span>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 aspect-[2/1] md:aspect-square rounded-3xl bg-muted border border-border flex items-center justify-center">
             <span className="text-muted-foreground/50 font-serif italic text-sm">Journey A</span>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 aspect-[2/1] md:aspect-square rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
             <span className="text-muted-foreground/50 font-serif italic text-sm">Journey B</span>
          </div>
        </MotionWrapper>

      </Container>
    </Section>
  );
}
