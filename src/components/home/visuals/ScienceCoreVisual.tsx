"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const NODES = [
  { id: "mother", label: "Mother", description: "The physiological center of the maternal ecosystem, requiring targeted support for healing and energy." },
  { id: "nutrition", label: "Nutrition", description: "Precision-engineered micronutrients formulated for maximum bioavailability." },
  { id: "development", label: "Development", description: "Critical structural and cognitive building blocks for the growing child." },
  { id: "wellbeing", label: "Wellbeing", description: "Long-term metabolic balance, hormonal harmony, and emotional resilience." }
];

export function ScienceCoreVisual() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full aspect-square relative rounded-full glass-surface flex items-center justify-center p-8 group overflow-hidden border border-border/50 shadow-2xl">
      
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 opacity-40 mix-blend-overlay" />
      
      {/* Core Glowing Orb */}
      <motion.div 
        animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[40%] h-[40%] rounded-full bg-accent/20 blur-[40px] mix-blend-screen"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
        
        {/* The nodes layout */}
        <div className="grid grid-cols-2 gap-4 w-[80%] h-[80%]">
          {NODES.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`
                  relative flex flex-col items-center justify-center text-center p-4 rounded-3xl transition-all duration-500 cursor-pointer border backdrop-blur-md
                  ${isActive ? 'bg-foreground/10 border-accent shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.3)] scale-105 z-20' : 'bg-background/20 border-border/40 hover:bg-foreground/5 z-10'}
                `}
              >
                <span className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isActive ? 'text-accent font-semibold' : 'text-foreground/80'}`}>
                  {node.label}
                </span>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-foreground/80 leading-relaxed font-light">
                        {node.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Central Text when no node is hovered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <AnimatePresence>
             {!activeNode && (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }}
                 className="w-24 h-24 rounded-full border border-accent/20 bg-background/40 backdrop-blur-md flex items-center justify-center shadow-lg"
               >
                 <span className="text-[10px] font-bold tracking-widest uppercase text-accent text-center leading-tight">
                   The<br/>Ecosystem
                 </span>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
