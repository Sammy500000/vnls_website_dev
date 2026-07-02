"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ScienceInsight } from "@/data/products/types";

interface ScienceInsightsProps {
  insights: ScienceInsight[];
}

export function ScienceInsights({ insights }: ScienceInsightsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Section id="science-insights" variant="editorial" className="py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Knowledge Base
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight max-w-3xl">
            Science Insights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight, idx) => {
            const isExpanded = expandedId === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : idx)}
                  className={`w-full text-left p-8 rounded-2xl border transition-all duration-500 group relative overflow-hidden
                    ${isExpanded 
                      ? "bg-foreground/[0.03] border-accent/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" 
                      : "bg-transparent border-border/30 hover:border-border/60 hover:bg-foreground/[0.02]"
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`font-serif text-xl md:text-2xl font-medium transition-colors duration-300
                      ${isExpanded ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}
                    `}>
                      {insight.title}
                    </h3>
                    <div className={`w-8 h-8 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-500
                      ${isExpanded ? "border-accent/40 bg-accent/10 rotate-45" : "border-border/40 bg-transparent group-hover:border-border"}
                    `}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="7" y1="2" x2="7" y2="12" />
                        <line x1="2" y1="7" x2="12" y2="7" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-base text-foreground/70 leading-[1.8] font-light mt-6 pt-6 border-t border-border/20">
                          {insight.explanation}
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
