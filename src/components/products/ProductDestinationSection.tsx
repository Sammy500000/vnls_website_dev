"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { motion } from "framer-motion";

interface ProductDestinationSectionProps {
  nextProduct: {
    id: string;
    name: string;
    journey: string[];
  };
}

export function ProductDestinationSection({ nextProduct }: ProductDestinationSectionProps) {
  return (
    <Section id="explore" variant="hero" className="min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden bg-background py-32 border-t border-border/10">
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-accent/5 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        
        <MotionWrapper animation="slideUp" className="mb-24 flex flex-col items-center">
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6 block">
             The Journey Continues
           </span>
           <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-foreground tracking-tight text-balance max-w-4xl">
             Beyond {nextProduct.name === "Matrusneha" ? "Pregnancy" : "Recovery"}
           </h2>
        </MotionWrapper>

        {/* Journey Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-20 w-full max-w-5xl relative">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-border/40 -translate-y-1/2 z-0 overflow-hidden">
             <div className="w-full h-full bg-accent/30 animate-[slideRight_4s_ease-in-out_infinite]" />
          </div>
          
          {nextProduct.journey.map((step, idx) => {
            const isLast = idx === nextProduct.journey.length - 1;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex-1 flex flex-col items-center relative z-10 group w-full md:w-auto"
              >
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full mb-6 transition-all duration-500 border-2
                  ${isLast ? 'bg-accent border-accent shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.6)] scale-150' : 'bg-background border-border/80 group-hover:border-accent group-hover:scale-125'}
                `} />
                <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 max-w-[120px] text-center leading-relaxed
                  ${isLast ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground/80'}
                `}>
                  {step}
                </span>
                
                {/* Mobile Connector */}
                {!isLast && (
                  <div className="md:hidden w-[1px] h-8 bg-border/40 my-4" />
                )}
              </motion.div>
            );
          })}
        </div>

        <MotionWrapper animation="fade" delay={0.8} className="max-w-3xl flex flex-col items-center gap-10 mt-8">
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl font-light font-serif italic text-balance">
            Discover {nextProduct.name}, explicitly formulated for the next stage of your maternal biology.
          </p>

          <Link href={`/products/${nextProduct.id}`}>
            <button className="group relative mt-6">
               <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative glass-surface px-10 py-5 rounded-full border border-accent/30 text-foreground font-bold tracking-widest uppercase text-sm flex items-center gap-4 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 shadow-xl overflow-hidden">
                  <span className="relative z-10">Explore {nextProduct.name}</span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-500">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
               </div>
            </button>
          </Link>
        </MotionWrapper>

      </Container>
    </Section>
  );
}
