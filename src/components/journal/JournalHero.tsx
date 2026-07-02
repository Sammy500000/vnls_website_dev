"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function JournalHero() {
  return (
    <Section id="journal-hero" variant="hero" className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden bg-background">
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center pt-24">
        
        {/* Left: Content */}
        <div className="flex flex-col gap-8 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-6 block">
              Knowledge Ecosystem
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground text-balance">
              Understanding Maternal Nutrition
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed text-balance">
              Editorial insights, clinical research, and stage-specific knowledge that supports every phase of motherhood.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50"
          >
            <span className="w-8 h-[1px] bg-foreground/30" />
            Curated Publications
          </motion.div>
        </div>

        {/* Right: Editorial Visual */}
        <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 glass-surface rounded-3xl border border-border/40 overflow-hidden flex items-center justify-center shadow-sm"
          >
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(var(--color-accent-rgb),0.05),transparent_60%)] relative">
                {/* Abstract graphic representing pages/knowledge */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                  <motion.rect x="30" y="20" width="40" height="60" rx="2" fill="none" stroke="var(--color-foreground)" strokeWidth="0.2" 
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }}
                  />
                  <motion.rect x="35" y="25" width="40" height="60" rx="2" fill="none" stroke="var(--color-accent)" strokeWidth="0.2" 
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.line x1="40" y1="35" x2="65" y2="35" stroke="var(--color-foreground)" strokeWidth="0.2" />
                  <motion.line x1="40" y1="45" x2="60" y2="45" stroke="var(--color-foreground)" strokeWidth="0.2" />
                  <motion.line x1="40" y1="55" x2="65" y2="55" stroke="var(--color-foreground)" strokeWidth="0.2" />
                </svg>
             </div>
          </motion.div>
        </div>

      </Container>
    </Section>
  );
}
