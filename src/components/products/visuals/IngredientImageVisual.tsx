"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ASSETS, IngredientId } from "@/config/assets";

interface IngredientImageVisualProps {
  ingredientId: string;
  name: string;
}

export function IngredientImageVisual({ ingredientId, name }: IngredientImageVisualProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Safely fallback to protein if the ingredient image is missing from our assets config
  const imageSrc = ASSETS.ingredients[ingredientId as IngredientId] || ASSETS.ingredients.protein;

  return (
    <div className="w-full aspect-square md:aspect-[4/3] rounded-[2rem] glass-surface relative flex items-center justify-center overflow-hidden border border-border/50 group">
      
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      
      <motion.div 
        className="absolute w-[60%] h-[60%] rounded-full bg-accent/20 blur-[60px] mix-blend-screen"
        animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Ingredient Render */}
      <motion.div
        key={ingredientId} // forces re-animation when ingredient changes
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[60%] h-[60%] flex items-center justify-center drop-shadow-2xl"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={imageSrc}
            alt={`${name} visual`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, 300px"
          />
        </motion.div>
      </motion.div>

      {/* Narrative Floating Tags */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 glass-surface px-4 py-2 rounded-full border border-border/50 text-xs font-bold tracking-widest text-foreground uppercase shadow-lg backdrop-blur-md"
      >
        {name}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute top-8 right-8 w-12 h-12 rounded-full glass-surface border border-accent/30 flex items-center justify-center shadow-lg backdrop-blur-md text-accent"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </motion.div>
      
    </div>
  );
}
