"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ProductAuraProps {
  color?: "primary" | "accent" | "mixed";
  className?: string;
}

export function ProductAura({ color = "mixed", className = "" }: ProductAuraProps) {
  const prefersReducedMotion = useReducedMotion();

  const getColors = () => {
    switch (color) {
      case "primary": return "from-primary/30 to-primary/5";
      case "accent": return "from-accent/30 to-accent/5";
      case "mixed": default: return "from-primary/20 via-accent/20 to-transparent";
    }
  };

  return (
    <div className={`absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-visible ${className}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full max-w-lg max-h-lg flex items-center justify-center"
      >
        {/* Core Glow */}
        <motion.div
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute w-[80%] h-[80%] rounded-full blur-[80px] bg-gradient-to-tr ${getColors()} mix-blend-screen`}
        />
        
        {/* Ambient Halo */}
        <motion.div
          animate={prefersReducedMotion ? {} : {
            scale: [1.1, 1, 1.1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute w-[120%] h-[120%] rounded-full blur-[120px] bg-gradient-to-bl ${getColors()} opacity-50`}
        />
      </motion.div>
    </div>
  );
}
