"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ScienceInsight } from "@/data/science/types";

interface ScienceInsightLibraryProps {
  insights: ScienceInsight[];
}

export function ScienceInsightLibrary({ insights }: ScienceInsightLibraryProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Section id="insight-library" variant="editorial" className="py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Deep Dives
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight">
            Insight Library
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
          {insights.map((insight, idx) => {
            const isExpanded = expandedId === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : idx)}
                  className={`w-full text-left p-8 md:p-10 rounded-3xl border transition-all duration-500 group relative overflow-hidden h-full flex flex-col items-start
                    ${isExpanded 
                      ? "bg-foreground/[0.03] border-accent/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" 
                      : "bg-transparent border-border/30 hover:border-border/60 hover:bg-foreground/[0.02]"
                    }
                  `}
                >
                  <div className="w-full flex items-start justify-between gap-4 mb-6">
                    <h3 className={`font-serif text-2xl md:text-3xl font-medium transition-colors duration-300
                      ${isExpanded ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}
                    `}>
                      {insight.title}
                    </h3>
                    <div className={`w-10 h-10 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-500
                      ${isExpanded ? "border-accent/40 bg-accent/10 rotate-45 text-accent" : "border-border/40 bg-transparent text-foreground/50 group-hover:border-foreground/40"}
                    `}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="8" y1="2" x2="8" y2="14" />
                        <line x1="2" y1="8" x2="14" y2="8" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-accent font-light mb-2">
                    {insight.explanation}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden w-full mt-auto"
                      >
                        <p className="text-base text-foreground/70 leading-[1.8] font-light mt-6 pt-6 border-t border-border/20">
                          {insight.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
