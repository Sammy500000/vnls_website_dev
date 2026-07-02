"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { TimelineStage } from "@/data/science/types";

interface MaternalNutritionTimelineProps {
  stages: TimelineStage[];
}

export function MaternalNutritionTimeline({ stages }: MaternalNutritionTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <Section id="timeline" variant="editorial" className="py-24 lg:py-40 bg-foreground/[0.01]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-32"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            The Maternal Journey
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight mb-6">
            Chronology of Need
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Pregnancy is not a static state. The physiological architecture of the mother and child changes dynamically, demanding precise nutritional intervention at every stage.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
          
          {/* Vertical Progress Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border/30 -translate-x-1/2 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-accent origin-top"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          <div className="flex flex-col gap-32 relative z-10">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={stage.id} className={`flex flex-col md:flex-row items-start md:items-center gap-12 group w-full
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}>
                  
                  {/* Content Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}
                  >
                    <h3 className="font-serif text-4xl lg:text-5xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
                      {stage.title}
                    </h3>
                    <p className="text-xl text-foreground/70 font-light font-serif italic mb-8">
                      "{stage.overview}"
                    </p>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-left
                      ${isEven ? "md:text-right" : "md:text-left"}
                    `}>
                      <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3 block">
                          Nutritional Priorities
                        </span>
                        <ul className="flex flex-col gap-2">
                          {stage.nutritionalPriorities.map((item, i) => (
                            <li key={i} className="text-sm font-light text-foreground/80">{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-3 block">
                          Development Priorities
                        </span>
                        <ul className="flex flex-col gap-2">
                          {stage.developmentPriorities.map((item, i) => (
                            <li key={i} className="text-sm font-light text-foreground/80">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={`glass-surface p-6 rounded-2xl border border-border/20 relative overflow-hidden inline-block text-left max-w-md w-full
                      ${isEven ? "md:ml-auto" : ""}
                    `}>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
                        Clinical Insight
                      </span>
                      <p className="text-sm text-foreground/70 leading-relaxed font-light">
                        {stage.insight}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Node */}
                  <div className="absolute left-[20px] md:static md:w-16 flex items-center justify-center flex-shrink-0 -translate-x-1/2 md:translate-x-0 mt-8 md:mt-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                      className="w-4 h-4 rounded-full border-2 border-accent bg-background relative z-10 group-hover:scale-150 group-hover:bg-accent transition-all duration-500 shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.3)]"
                    />
                  </div>

                  {/* Empty Spacer for layout */}
                  <div className="hidden md:block flex-1" />

                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}
