"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function FormulationFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const steps = [
    { label: "Maternal Need", color: "text-foreground" },
    { label: "Nutritional Gap", color: "text-muted-foreground" },
    { label: "Ingredient Selection", color: "text-accent" },
    { label: "Science Validation", color: "text-muted-foreground" },
    { label: "Final Formulation", color: "text-primary" }
  ];

  return (
    <div ref={containerRef} className="w-full py-12 px-8 rounded-[2rem] glass-surface border border-border/50 relative overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.4, duration: 0.8, ease: "easeOut" }}
              className={`px-6 py-4 w-full rounded-2xl glass-surface border border-border/30 text-center shadow-lg transition-transform hover:scale-[1.02] ${step.color} relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="font-serif text-xl tracking-wide relative z-10">{step.label}</span>
            </motion.div>
            
            {idx < steps.length - 1 && (
              <div className="flex flex-col items-center gap-1 relative w-2 h-10">
                {/* SVG Pathway Drawing */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M 4 0 L 4 40"
                    stroke="var(--color-accent)"
                    strokeOpacity="0.3"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ delay: (idx * 0.4) + 0.4, duration: 0.8, ease: "linear" }}
                  />
                  <motion.circle 
                    cx="4" cy="20" r="3"
                    fill="var(--color-background)"
                    stroke="var(--color-accent)"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: (idx * 0.4) + 0.6, duration: 0.4 }}
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
