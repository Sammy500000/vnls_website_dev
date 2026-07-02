"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { HeroData } from "@/data/science/types";

interface ScienceHubHeroProps {
  data: HeroData;
}

export function ScienceHubHero({ data }: ScienceHubHeroProps) {
  return (
    <Section id="hero" variant="hero" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center pt-20">
        
        {/* Left: Content */}
        <div className="flex flex-col gap-8 max-w-xl">
          <MotionWrapper animation="slideUp" delay={0.1}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              VNLS Knowledge Hub
            </span>
          </MotionWrapper>
          
          <MotionWrapper animation="slideUp" delay={0.2}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground text-balance">
              {data.headline}
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="slideUp" delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed text-balance">
              {data.supportingText}
            </p>
          </MotionWrapper>

          <MotionWrapper animation="fade" delay={0.6}>
             <div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/50">
               <span className="w-8 h-[1px] bg-foreground/30" />
               Scroll to explore the ecosystem
             </div>
          </MotionWrapper>
        </div>

        {/* Right: Structural Visual Flow */}
        <div className="relative h-[500px] flex items-center justify-center lg:justify-end pr-0 lg:pr-12">
           <div className="flex flex-col items-center gap-6 relative z-10">
              
              <HeroNode label="Mother" delay={0.4} />
              <Connector delay={0.6} />
              <HeroNode label="Nutrition" delay={0.8} highlight />
              <Connector delay={1.0} />
              <HeroNode label="Development" delay={1.2} />
              <Connector delay={1.4} />
              <HeroNode label="Wellbeing" delay={1.6} />

           </div>
           
           {/* Decorative abstract lines representing data/science */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M 50 10 Q 80 50 50 90" 
                fill="transparent" 
                stroke="var(--color-accent)" 
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
              <motion.path 
                d="M 50 10 Q 20 50 50 90" 
                fill="transparent" 
                stroke="var(--color-accent)" 
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
              />
           </svg>
        </div>

      </Container>
    </Section>
  );
}

function HeroNode({ label, delay, highlight = false }: { label: string, delay: number, highlight?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`px-8 py-4 rounded-full backdrop-blur-md border shadow-lg flex items-center justify-center relative group
        ${highlight ? "bg-accent/10 border-accent/40" : "glass-surface border-border/30"}
      `}
    >
      <div className={`absolute inset-0 rounded-full transition-opacity duration-700
        ${highlight ? "bg-accent/20 opacity-50 blur-xl" : "bg-foreground/5 opacity-0 group-hover:opacity-100 blur-lg"}
      `} />
      <span className={`relative z-10 font-serif text-xl tracking-wide ${highlight ? "text-accent" : "text-foreground"}`}>
        {label}
      </span>
    </motion.div>
  );
}

function Connector({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 40, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeInOut" }}
      className="w-[1px] bg-gradient-to-b from-border via-accent/50 to-border relative"
    >
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent blur-[1px]"
        animate={{ top: ["0%", "100%", "100%"], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5, ease: "linear" }}
      />
    </motion.div>
  );
}
