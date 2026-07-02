"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

interface ProductStoryProps {
  headline: string;
  themes: string[];
  content: string[];
}

export function ProductStory({ headline, themes, content }: ProductStoryProps) {
  const narrativeNodes = ["Mother", "Growth", "Nourishment", "Birth"];

  return (
    <Section id="story" variant="editorial" className="py-24 md:py-32 relative">
      <Container className="flex flex-col gap-16 lg:gap-24 xl:pl-16">
        
        {/* Themes row */}
        <MotionWrapper animation="stagger" className="flex flex-wrap gap-4 border-b border-border/50 pb-8">
          {themes.map((theme, idx) => (
            <span key={idx} className="text-sm font-bold tracking-widest text-muted-foreground uppercase after:content-['•'] after:mx-4 last:after:content-['']">
              {theme}
            </span>
          ))}
        </MotionWrapper>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Headline & Timeline */}
          <MotionWrapper animation="slideUp" className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-32">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground tracking-tight text-balance">
              {headline}
            </h2>
            
            {/* Animated SVG Timeline */}
            <div className="relative pl-6 mt-8 hidden md:block">
              {/* Vertical Line */}
              <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-border/40 overflow-hidden">
                <motion.div 
                  className="w-full h-1/3 bg-accent"
                  animate={{ y: ["-100%", "300%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="flex flex-col gap-16">
                {narrativeNodes.map((node, i) => (
                  <div key={i} className="flex items-center gap-6 relative group">
                    <div className="absolute left-[-24px] w-5 h-5 rounded-full border-2 border-background bg-accent/20 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-accent/40 z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.8)]" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60 transition-colors duration-300 group-hover:text-accent">
                      {node}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
          
          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:pl-12 pt-4">
            <MotionWrapper animation="stagger" delay={0.2} className="flex flex-col gap-12">
              {content.map((paragraph, idx) => (
                <div key={idx} className="relative">
                  {idx === 0 && (
                    <span className="absolute -left-16 top-0 text-6xl text-accent/20 font-serif leading-none hidden md:block">
                      &ldquo;
                    </span>
                  )}
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
                    {paragraph}
                  </p>
                </div>
              ))}
            </MotionWrapper>

            {/* Ambient Story Visual (Replacing standard Image) */}
            <MotionWrapper animation="fade" delay={0.4} className="mt-8 relative w-full aspect-video rounded-[3rem] overflow-hidden glass-surface border border-border/20 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-accent/10 opacity-60" />
              <motion.div 
                className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full border border-accent/20 flex items-center justify-center relative">
                   <motion.div 
                     className="absolute inset-0 rounded-full border-t border-accent/40"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   />
                   <span className="text-xs font-bold uppercase tracking-widest text-accent text-center leading-tight">Life<br/>Source</span>
                 </div>
              </div>
            </MotionWrapper>
          </div>

        </div>

      </Container>
    </Section>
  );
}
