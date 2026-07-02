"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { JourneyStage } from "@/data/products/types";

interface MaternalJourneyMapProps {
  stages: JourneyStage[];
}

export function MaternalJourneyMap({ stages }: MaternalJourneyMapProps) {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  const handleStageClick = (scrollTarget?: string) => {
    if (!scrollTarget) return;
    const el = document.getElementById(scrollTarget);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <Section id="journey-map" variant="editorial" className="py-24 overflow-hidden">
      <Container className="flex flex-col gap-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            The Maternal Timeline
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight">
            Comprehensive Stage Coverage
          </h2>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto pb-32">
          
          {/* Main Horizontal Track */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border/30 -translate-y-1/2 rounded-full overflow-hidden">
             {/* Highlighted Coverage Area */}
             <div className="absolute inset-y-0 left-0 bg-accent/40 rounded-full transition-all duration-1000 ease-in-out" 
                  style={{
                    // Calculate start and end percentages based on covered stages
                    left: `${(stages.findIndex(s => s.covered) / Math.max(stages.length - 1, 1)) * 100}%`,
                    width: `${((stages.findLastIndex(s => s.covered) - stages.findIndex(s => s.covered)) / Math.max(stages.length - 1, 1)) * 100}%`,
                    display: stages.some(s => s.covered) ? 'block' : 'none'
                  }}
             >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 animate-[slideRight_3s_ease-in-out_infinite]" />
             </div>
          </div>

          {/* Stages Grid */}
          <div className="relative z-10 flex justify-between items-center w-full">
            {stages.map((stage, idx) => {
              const isHovered = hoveredStage === stage.id;
              
              return (
                <div 
                  key={stage.id}
                  className="flex flex-col items-center relative group"
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Label (Top) */}
                  <div className={`absolute bottom-full mb-6 whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 left-1/2
                    ${stage.covered ? "text-foreground" : "text-muted-foreground/50"}
                    ${isHovered ? "-translate-y-2 text-accent" : ""}
                  `}>
                    <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-center block">
                      {stage.label}
                    </span>
                  </div>

                  {/* Node */}
                  <button
                    onClick={() => handleStageClick(stage.scrollTarget)}
                    disabled={!stage.scrollTarget}
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 bg-background transition-all duration-500 relative z-10
                      ${stage.covered ? "border-accent shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.3)]" : "border-border/50"}
                      ${isHovered ? "scale-150 border-accent bg-accent/10" : ""}
                      ${stage.scrollTarget ? "cursor-pointer" : "cursor-default"}
                    `}
                  >
                    {/* Inner active dot */}
                    {stage.covered && (
                      <div className={`absolute inset-1 rounded-full bg-accent transition-all duration-300
                        ${isHovered ? "scale-50 opacity-50" : "scale-100 opacity-100"}
                      `} />
                    )}
                  </button>

                  {/* Tooltip (Bottom) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full mt-6 w-48 p-4 rounded-xl glass-surface border border-border/30 shadow-2xl z-20 left-1/2 -translate-x-1/2 pointer-events-none"
                      >
                        <p className="text-sm text-foreground/80 leading-relaxed font-light text-center">
                          {stage.description}
                        </p>
                        {stage.scrollTarget && (
                          <p className="text-[10px] font-bold tracking-widest text-accent uppercase text-center mt-3 pt-3 border-t border-border/30">
                            Click to explore
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}
