"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { TimingScenario } from "@/data/science/types";

interface WhyTimingMattersProps {
  scenarios: TimingScenario[];
}

export function WhyTimingMatters({ scenarios }: WhyTimingMattersProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scenario = scenarios[activeIdx];

  return (
    <Section id="timing-matters" variant="editorial" className="py-24 lg:py-40 bg-foreground/[0.02]">
      <Container className="flex flex-col gap-16 lg:gap-24">
        
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end border-b border-border/30 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
              Formulation Logic
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight">
              Why Timing Matters
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {scenarios.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border
                  ${activeIdx === idx 
                    ? "bg-accent/10 border-accent/40 text-accent shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.1)]" 
                    : "bg-transparent border-border/40 text-foreground/50 hover:text-foreground hover:border-border"}
                `}
              >
                {s.nutrient} Scenario
              </button>
            ))}
          </motion.div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-16"
            >
              
              <div className="text-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-3 block">Same Nutrient</span>
                <span className="font-serif text-4xl text-foreground bg-background px-8 py-4 rounded-full border shadow-sm inline-block">
                  {scenario.nutrient}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                
                {/* Visual VS divider */}
                <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-border/40 items-center justify-center">
                   <span className="bg-background px-2 text-[10px] font-bold tracking-[0.2em] text-foreground/30 uppercase">VS</span>
                </div>

                {/* Stage 1 */}
                <TimingFlowColumn stage={scenario.stage1} delay={0.2} />
                
                {/* Stage 2 */}
                <TimingFlowColumn stage={scenario.stage2} delay={0.4} />

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </Section>
  );
}

function TimingFlowColumn({ stage, delay }: { stage: TimingScenario['stage1'], delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center gap-8 glass-surface p-10 rounded-3xl border border-border/30 hover:border-accent/20 transition-colors duration-500"
    >
      <div className="flex flex-col gap-2 items-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Different Stage</span>
        <span className="font-serif text-2xl text-foreground">{stage.name}</span>
      </div>

      <div className="w-[1px] h-8 bg-gradient-to-b from-border/50 to-transparent" />

      <div className="flex flex-col gap-2 items-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">Different Need</span>
        <p className="text-lg text-foreground/80 font-light leading-relaxed max-w-xs">{stage.need}</p>
      </div>

      <div className="w-[1px] h-8 bg-gradient-to-b from-accent/30 to-transparent" />

      <div className="flex flex-col gap-2 items-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Different Outcome</span>
        <p className="text-lg text-foreground/80 font-light leading-relaxed max-w-xs">{stage.outcome}</p>
      </div>

      <div className="w-[1px] h-8 bg-gradient-to-b from-primary/30 to-transparent" />

      <div className="flex flex-col gap-2 items-center mt-4">
        <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Formulation Delivered</span>
        <span className="font-serif text-2xl italic text-foreground px-6 py-2 border rounded-full bg-background/50">
          {stage.product}
        </span>
      </div>
    </motion.div>
  );
}
