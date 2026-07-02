"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, matchMedia } from "@/lib/gsap";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homepageData } from "@/data/homepage";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function PhilosophySection() {
  const { sections } = homepageData.philosophy;
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    matchMedia.add("(min-width: 768px)", () => {
      const images = gsap.utils.toArray<HTMLElement>(".philosophy-image");
      
      images.forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    });
  }, { scope: sectionRef });

  return (
    <Section ref={sectionRef} id="philosophy" variant="editorial">
      <Container className="flex flex-col gap-24 lg:gap-32">
        
        {sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div key={idx} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              
              {/* Content Side */}
              <MotionWrapper animation="slideUp" className="w-full md:w-1/2 flex flex-col items-start text-left">
                <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-accent mb-4">
                  0{idx + 1}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  {section.description}
                </p>
              </MotionWrapper>

              {/* Visual Side */}
              <MotionWrapper animation="fade" delay={0.2} className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative">
                 <div className="philosophy-image absolute inset-[-20%] w-[140%] h-[140%] bg-gradient-to-tr from-accent/20 to-primary/20 mix-blend-overlay" />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="font-mono text-sm tracking-widest text-muted-foreground/50 uppercase">
                      Editorial Visual
                    </span>
                 </div>
              </MotionWrapper>
              
            </div>
          );
        })}

      </Container>
    </Section>
  );
}
