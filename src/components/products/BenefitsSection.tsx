"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

interface BenefitsSectionProps {
  benefits: {
    title: string;
    description: string;
  }[];
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Layout positions for up to 4 nodes around a center
  const positions = [
    { top: "10%", left: "15%" },
    { top: "10%", right: "15%" },
    { bottom: "10%", left: "15%" },
    { bottom: "10%", right: "15%" }
  ];

  return (
    <Section id="benefits" variant="editorial" className="py-32 bg-background overflow-hidden relative">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-tr from-accent/5 via-primary/5 to-transparent rounded-full blur-[120px]" />
      </div>

      <Container className="flex flex-col gap-16 relative z-10">
        
        <MotionWrapper animation="slideUp" className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight mb-6 text-balance">
            The Vitality Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            A comprehensive approach to holistic maternal restoration.
          </p>
        </MotionWrapper>

        {/* Interactive Network Graph */}
        <div className="w-full h-[600px] md:h-[700px] relative mt-8">
           
           {/* Center Node */}
           <motion.div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full glass-surface border border-accent/30 flex items-center justify-center shadow-[0_0_50px_rgba(var(--color-accent-rgb),0.15)] z-20"
             animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(var(--color-accent-rgb),0.1)", "0 0 80px rgba(var(--color-accent-rgb),0.2)", "0 0 40px rgba(var(--color-accent-rgb),0.1)"] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           >
             <div className="text-center flex flex-col gap-2">
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Core</span>
               <span className="font-serif text-2xl text-foreground font-medium">Maternal<br/>Vitality</span>
             </div>
           </motion.div>

           {/* Branching Nodes & Connecting Lines */}
           {benefits.map((benefit, idx) => {
             const pos = positions[idx % positions.length];
             const isActive = activeIdx === idx;
             
             return (
               <React.Fragment key={idx}>
                 {/* Connecting Line (SVG SVG) */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <motion.line 
                      x1="50%" y1="50%" 
                      x2={pos.left ? "25%" : "75%"} 
                      y2={pos.top ? "25%" : "75%"}
                      stroke="currentColor" 
                      strokeWidth="1"
                      className={`${isActive ? 'text-accent' : 'text-border'} transition-colors duration-500`}
                      strokeDasharray={isActive ? "none" : "5,5"}
                    />
                    {isActive && (
                      <motion.circle 
                        r="3" 
                        fill="currentColor"
                        className="text-accent"
                        animate={{ 
                          cx: ["50%", pos.left ? "25%" : "75%"], 
                          cy: ["50%", pos.top ? "25%" : "75%"] 
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                 </svg>

                 {/* Node */}
                 <div 
                   className="absolute z-10 hidden md:block" 
                   style={{ 
                     top: pos.top || "auto", 
                     bottom: pos.bottom || "auto", 
                     left: pos.left || "auto", 
                     right: pos.right || "auto",
                     transform: "translate(0, 0)"
                   }}
                 >
                   <motion.div 
                     className={`w-64 p-6 rounded-[2rem] glass-surface border cursor-pointer transition-all duration-500 hover:scale-105 ${isActive ? 'border-accent/50 bg-accent/5 shadow-2xl' : 'border-border/50 hover:border-accent/30'}`}
                     onMouseEnter={() => setActiveIdx(idx)}
                     onMouseLeave={() => setActiveIdx(null)}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.2, duration: 0.8 }}
                   >
                     <h3 className={`font-serif text-2xl font-medium mb-3 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground'}`}>
                       {benefit.title}
                     </h3>
                     <p className="text-sm text-foreground/70 leading-relaxed font-light">
                       {benefit.description}
                     </p>
                   </motion.div>
                 </div>

                 {/* Mobile Node List (fallback for small screens) */}
                 <div className="md:hidden flex flex-col gap-4 relative z-10 w-full mt-4">
                    {idx === 0 && (
                      <div className="flex flex-col gap-4 px-4 pt-64">
                        {benefits.map((b, i) => (
                           <div key={`mob-${i}`} className="p-6 rounded-2xl glass-surface border border-border/50">
                             <h3 className="font-serif text-xl font-medium mb-2 text-foreground">{b.title}</h3>
                             <p className="text-sm text-foreground/70 leading-relaxed">{b.description}</p>
                           </div>
                        ))}
                      </div>
                    )}
                 </div>

               </React.Fragment>
             );
           })}

        </div>

      </Container>
    </Section>
  );
}
