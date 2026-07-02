"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ASSETS } from "@/config/assets";

export function ScienceInfographic() {
  const prefersReducedMotion = useReducedMotion();

  const outcomes = [
    { label: "Energy", pos: "top-[15%] left-[10%]" },
    { label: "Recovery", pos: "top-[15%] right-[10%]" },
    { label: "Immunity", pos: "bottom-[20%] left-[10%]" },
    { label: "Cognition", pos: "bottom-[20%] right-[10%]" }
  ];

  return (
    <div className="w-full aspect-[3/4] md:aspect-square rounded-[2rem] glass-surface relative flex items-center justify-center overflow-hidden border border-border/50 group">
      
      {/* Soft ambient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Central Maternal Core */}
      <motion.div 
        className="relative z-10 w-[50%] h-[70%] max-h-[400px] flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full drop-shadow-2xl opacity-90"
        >
          <Image
            src={ASSETS.illustrations.mother}
            alt="Maternal Health"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, 300px"
          />
        </motion.div>
      </motion.div>

      {/* Human Outcome Nodes */}
      {outcomes.map((outcome, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8 }}
          className={`absolute ${outcome.pos} z-20`}
        >
          <motion.div 
            animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx }}
            className="glass-surface px-6 py-3 rounded-full border border-border/50 text-xs font-bold tracking-widest text-foreground uppercase shadow-lg backdrop-blur-md flex flex-col items-center gap-1 group-hover:border-accent/40 transition-colors duration-500"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {outcome.label}
          </motion.div>
        </motion.div>
      ))}

      {/* Subtle connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0" xmlns="http://www.w3.org/2000/svg">
         <motion.path 
           d="M 50% 50% L 20% 25%" stroke="var(--color-accent)" fill="none" strokeWidth="1" strokeDasharray="4 4"
           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
         />
         <motion.path 
           d="M 50% 50% L 80% 25%" stroke="var(--color-accent)" fill="none" strokeWidth="1" strokeDasharray="4 4"
           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
         />
         <motion.path 
           d="M 50% 50% L 20% 75%" stroke="var(--color-primary)" fill="none" strokeWidth="1" strokeDasharray="4 4"
           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
         />
         <motion.path 
           d="M 50% 50% L 80% 75%" stroke="var(--color-primary)" fill="none" strokeWidth="1" strokeDasharray="4 4"
           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
         />
      </svg>
      
    </div>
  );
}
