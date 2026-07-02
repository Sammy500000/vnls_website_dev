"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { Ingredient } from "@/data/products/types";

interface IngredientExplorerProps {
  ingredients: Ingredient[];
}

export function IngredientExplorer({ ingredients }: IngredientExplorerProps) {
  const [activeId, setActiveId] = useState(ingredients[0].id);

  const activeIngredient = ingredients.find(i => i.id === activeId) || ingredients[0];

  return (
    <Section id="ingredients" variant="editorial" className="py-24 lg:py-32 relative">
      <Container className="flex flex-col gap-16 lg:gap-24">
        
        <MotionWrapper animation="slideUp">
          <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight max-w-3xl">
            The Formulation
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
            Precision-engineered micronutrients, evaluated for maximum absorption and safety during the maternal journey.
          </p>
        </MotionWrapper>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* Column 1: Ingredient Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3 lg:sticky lg:top-32 lg:max-h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar pb-12">
            <h3 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6 px-2">
              Formula Components
            </h3>
            <div className="flex flex-col gap-1">
              {ingredients.map((ing) => {
                const isActive = activeId === ing.id;
                return (
                  <button
                    key={ing.id}
                    onClick={() => setActiveId(ing.id)}
                    className={`
                      w-full py-3 px-4 text-left transition-all duration-400 relative group
                      ${isActive ? "pl-6" : "hover:pl-6"}
                    `}
                  >
                    {/* Active indicator bar */}
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-accent transition-all duration-400 ${isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-50"}`} />
                    
                    <span className={`block font-serif text-base transition-colors duration-300 ${isActive ? "text-foreground font-semibold" : "text-muted-foreground group-hover:text-foreground/70"}`}>
                      {ing.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Ingredient Content */}
          <div className="lg:col-span-9 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIngredient.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-16"
              >
                {/* Ingredient Name */}
                <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.05] tracking-tight pb-8 border-b border-border/40">
                  {activeIngredient.name}
                </h3>

                {/* 2×2 Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">Why Included</h4>
                    <p className="text-base text-foreground/80 leading-[1.8] font-light">{activeIngredient.whyIncluded}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">When It Matters</h4>
                    <p className="text-base text-foreground/80 leading-[1.8] font-light">{activeIngredient.whenItMatters}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">Scientific Context</h4>
                    <p className="text-base text-foreground/80 leading-[1.8] font-light">{activeIngredient.scientificContext}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">Clinical Insight</h4>
                    <p className="text-base text-foreground/80 leading-[1.8] font-light">{activeIngredient.clinicalInsight || "Evaluated for bioavailability and purity."}</p>
                  </div>
                </div>

                {/* Interactive Connection Pathway */}
                <div className="py-12 border-t border-b border-border/30 my-4 flex flex-col gap-8 bg-foreground/[0.01] px-8 rounded-3xl">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase text-center">Outcome Pathway</h4>
                  
                  <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 relative">
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex-1 glass-surface p-6 rounded-2xl border border-accent/20 flex flex-col items-center justify-center text-center z-10"
                    >
                      <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">Ingredient</span>
                      <span className="font-serif text-xl">{activeIngredient.name}</span>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="hidden md:flex flex-col items-center justify-center text-accent/40 w-8"
                    >
                      <div className="h-[1px] w-full bg-accent/20" />
                      <span className="absolute">→</span>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="md:hidden flex items-center justify-center text-accent/40 h-8"
                    >
                      <div className="w-[1px] h-full bg-accent/20" />
                      <span className="absolute rotate-90">→</span>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex-1 glass-surface p-6 rounded-2xl border border-primary/20 flex flex-col items-center justify-center text-center z-10"
                    >
                      <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3">Maternal Benefit</span>
                      <span className="text-sm font-light text-foreground/80 leading-relaxed">{activeIngredient.maternalBenefit}</span>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="hidden md:flex flex-col items-center justify-center text-accent/40 w-8"
                    >
                      <div className="h-[1px] w-full bg-accent/20" />
                      <span className="absolute">→</span>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="md:hidden flex items-center justify-center text-accent/40 h-8"
                    >
                      <div className="w-[1px] h-full bg-accent/20" />
                      <span className="absolute rotate-90">→</span>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className="flex-1 glass-surface p-6 rounded-2xl border border-accent/20 flex flex-col items-center justify-center text-center z-10 shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.05)]"
                    >
                      <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">Fetal Benefit</span>
                      <span className="text-sm font-light text-foreground/80 leading-relaxed">{activeIngredient.fetalBenefit}</span>
                    </motion.div>

                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                  {/* Traditional Relevance */}
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-5 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Traditional Relevance
                    </h4>
                    <p className="text-lg text-foreground/60 leading-relaxed font-light font-serif italic">
                      &ldquo;{activeIngredient.traditionalRelevance}&rdquo;
                    </p>
                  </div>

                  {/* Related Science */}
                  {activeIngredient.relatedScience && (
                    <div className="glass-surface p-6 rounded-2xl border border-border/30 hover:border-accent/30 transition-colors duration-300">
                      <h4 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Related Science
                      </h4>
                      <p className="font-serif text-xl text-foreground font-medium mb-4">
                        {activeIngredient.relatedScience}
                      </p>
                      <button 
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                        onClick={() => {
                          const el = document.getElementById("science-insights");
                          if(el) window.scrollTo({top: el.offsetTop - 100, behavior: "smooth"});
                        }}
                      >
                        Read Insight →
                      </button>
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </Container>
    </Section>
  );
}
