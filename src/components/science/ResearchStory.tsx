"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ResearchStage } from "@/data/science/types";

interface ResearchStoryProps {
  stages: ResearchStage[];
}

export function ResearchStory({ stages }: ResearchStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <Section id="research-story" variant="editorial" className="py-32">
      <Container className="max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Methodology
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight">
            The Research Story
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-[40px] top-0 bottom-0 w-[1px] bg-border/40">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-accent origin-top"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          <div className="flex flex-col gap-20 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-8 md:gap-16 relative group"
              >
                
                {/* Node */}
                <div className="w-[48px] md:w-[80px] flex justify-center flex-shrink-0 pt-2">
                  <div className="w-4 h-4 rounded-full border-2 border-accent bg-background relative z-10 group-hover:scale-150 group-hover:bg-accent transition-all duration-500 shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.2)]" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-surface p-8 md:p-10 rounded-3xl border border-border/30 hover:border-accent/30 transition-colors duration-500">
                  <span className="text-sm font-serif text-muted-foreground mb-2 block">
                    Phase {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8 group-hover:text-accent transition-colors duration-500">
                    {stage.title}
                  </h3>

                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
                        Why It Exists
                      </span>
                      <p className="text-base text-foreground/80 font-light leading-relaxed">
                        {stage.whyItExists}
                      </p>
                    </div>

                    <div className="w-full h-[1px] bg-border/30" />

                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-2 block">
                        What Was Learned
                      </span>
                      <p className="text-base text-foreground/80 font-light leading-relaxed">
                        {stage.whatWasLearned}
                      </p>
                    </div>

                    <div className="w-full h-[1px] bg-border/30" />

                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
                        How It Influenced Formulation
                      </span>
                      <p className="text-base text-foreground/80 font-light leading-relaxed font-serif italic">
                        "{stage.howItInfluenced}"
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
