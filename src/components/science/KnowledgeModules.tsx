"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { KnowledgeModule } from "@/data/science/types";

interface KnowledgeModulesProps {
  modules: KnowledgeModule[];
}

export function KnowledgeModules({ modules }: KnowledgeModulesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section id="knowledge-modules" variant="editorial" className="py-24 lg:py-32 bg-foreground/[0.01]">
      <Container className="flex flex-col gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Targeted Development
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight max-w-3xl">
            Knowledge Modules
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const isExpanded = expandedId === mod.id;
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : mod.id)}
                  className={`w-full text-left p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col items-start relative group
                    ${isExpanded 
                      ? "bg-accent/5 border-accent/30 shadow-[0_10px_30px_rgba(var(--color-accent-rgb),0.05)]" 
                      : "glass-surface border-border/30 hover:border-accent/20"
                    }
                  `}
                >
                  <div className="w-full flex justify-between items-start mb-6">
                    <span className="text-sm font-serif text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500
                      ${isExpanded ? "border-accent/40 bg-accent/10 rotate-45 text-accent" : "border-border/40 bg-transparent text-foreground/50 group-hover:border-accent/30"}
                    `}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="7" y1="2" x2="7" y2="12" />
                        <line x1="2" y1="7" x2="12" y2="7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className={`font-serif text-3xl font-medium transition-colors duration-300 mb-4
                    ${isExpanded ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}
                  `}>
                    {mod.title}
                  </h3>
                  
                  <p className="text-base text-foreground/60 font-light mb-2">
                    {mod.description}
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
                        <p className="text-base text-foreground/80 leading-[1.8] font-light pt-6 border-t border-border/20 mt-6">
                          {mod.details}
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
