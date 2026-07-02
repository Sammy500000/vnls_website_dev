"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { Nutrient } from "@/data/science/types";

interface NutrientExplorerProps {
  nutrients: Nutrient[];
}

export function NutrientExplorer({ nutrients }: NutrientExplorerProps) {
  const [activeId, setActiveId] = useState(nutrients[0].id);

  const activeNutrient = nutrients.find(n => n.id === activeId) || nutrients[0];

  return (
    <Section id="nutrient-explorer" variant="editorial" className="py-24 lg:py-40">
      <Container className="flex flex-col gap-16 lg:gap-24">
        
        <MotionWrapper animation="slideUp">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Nutritional Components
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground tracking-tight max-w-4xl text-balance">
            The Building Blocks of Life
          </h2>
        </MotionWrapper>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
          
          {/* Column 1: Nutrient Navigation (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-2 lg:sticky lg:top-32">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6 px-4">
              Select Nutrient
            </h3>
            <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible no-scrollbar pb-4 lg:pb-0">
              {nutrients.map((nut) => {
                const isActive = activeId === nut.id;
                return (
                  <button
                    key={nut.id}
                    onClick={() => setActiveId(nut.id)}
                    className={`
                      flex-shrink-0 lg:w-full py-4 px-6 lg:px-4 text-left transition-all duration-400 relative group rounded-2xl lg:rounded-none
                      ${isActive ? "lg:pl-8 bg-foreground/[0.03] lg:bg-transparent" : "lg:hover:pl-8 hover:bg-foreground/[0.02] lg:hover:bg-transparent"}
                    `}
                  >
                    <span className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-accent transition-all duration-400 ${isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-50"}`} />
                    
                    <span className={`block font-serif text-lg lg:text-xl transition-colors duration-300 ${isActive ? "text-foreground font-medium" : "text-foreground/50 group-hover:text-foreground/80"}`}>
                      {nut.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-9 w-full min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNutrient.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
              >
                
                {/* Column 2: Nutrient Story (lg:col-span-7) */}
                <div className="lg:col-span-7 flex flex-col gap-12">
                  <h3 className="font-serif text-5xl md:text-6xl font-medium text-foreground leading-[1.1] tracking-tight border-b border-border/30 pb-8">
                    {activeNutrient.name}
                  </h3>

                  <div className="flex flex-col gap-10">
                    <InfoBlock label="What It Is" text={activeNutrient.whatItIs} />
                    <InfoBlock label="Why It Matters" text={activeNutrient.whyItMatters} highlight />
                    <InfoBlock label="When It Matters" text={activeNutrient.whenItMatters} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border/20">
                      <InfoBlock label="Maternal Impact" text={activeNutrient.maternalImpact} />
                      <InfoBlock label="Development Impact" text={activeNutrient.developmentImpact} />
                    </div>
                  </div>
                </div>

                {/* Column 3: Knowledge Connections (lg:col-span-5) */}
                <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-8">
                  <div className="glass-surface p-8 rounded-3xl border border-border/40 shadow-sm flex flex-col gap-10 sticky top-32">
                    
                    <h4 className="font-serif text-2xl text-foreground pb-4 border-b border-border/30">
                      Knowledge Connections
                    </h4>

                    {/* Related Science */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Related Science Topics</span>
                      <div className="flex flex-wrap gap-2">
                        {activeNutrient.connections.science.map((item, idx) => (
                          <span key={idx} className="px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs text-foreground/80 font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Related Ingredients */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Related Ingredients</span>
                      <div className="flex flex-col gap-2">
                        {activeNutrient.connections.ingredients.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-foreground/80 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Related Products */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Formulations</span>
                      <div className="flex flex-wrap gap-3">
                        {activeNutrient.connections.products.map((item, idx) => (
                          <span key={idx} className="font-serif text-lg italic text-foreground border-b border-foreground/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </Container>
    </Section>
  );
}

function InfoBlock({ label, text, highlight = false }: { label: string, text: string, highlight?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${highlight ? "text-accent" : "text-muted-foreground"}`}>
        {label}
      </span>
      <p className={`text-base md:text-lg leading-[1.8] font-light ${highlight ? "text-foreground" : "text-foreground/70"}`}>
        {text}
      </p>
    </div>
  );
}
