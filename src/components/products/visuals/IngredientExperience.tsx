"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ASSETS, IngredientId } from "@/config/assets";

interface IngredientExperienceProps {
  ingredientId: string;
  name: string;
}

export function IngredientExperience({ ingredientId, name }: IngredientExperienceProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Safely fallback to protein if the ingredient image is missing from our assets config
  const imageSrc = ASSETS.ingredients[ingredientId as IngredientId] || ASSETS.ingredients.protein;

  return (
    <div className="w-full aspect-[3/4] md:aspect-auto md:h-full rounded-[2rem] glass-surface relative flex flex-col items-center justify-center overflow-hidden border border-border/50 group">
      
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <motion.div 
        className="absolute w-[80%] h-[80%] rounded-full bg-accent/20 blur-[80px] mix-blend-screen"
        animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Ingredient Render */}
      <motion.div
        key={ingredientId} // forces re-animation when ingredient changes
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-[70%] h-[50%] flex items-center justify-center drop-shadow-2xl"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [-15, 15, -15], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={imageSrc}
            alt={`${name} visual`}
            fill
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            sizes="(max-width: 768px) 50vw, 400px"
          />
        </motion.div>
      </motion.div>

      {/* Museum Exhibit Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 right-8 flex flex-col gap-3"
      >
        <div className="glass-surface px-4 py-3 rounded-xl border border-border/50 backdrop-blur-md flex flex-col gap-1">
           <span className="text-[10px] font-bold tracking-widest text-accent uppercase">Primary Active</span>
           <span className="text-lg font-serif text-foreground font-semibold">{name}</span>
        </div>
        
        <div className="flex gap-2">
           <span className="glass-surface px-3 py-1.5 rounded-full border border-border/30 text-[10px] font-bold tracking-widest text-foreground uppercase backdrop-blur-md">
             Clinical Grade
           </span>
           <span className="glass-surface px-3 py-1.5 rounded-full border border-primary/30 text-[10px] font-bold tracking-widest text-primary uppercase backdrop-blur-md">
             Bioavailable
           </span>
        </div>
      </motion.div>

      {/* Scientific Highlight Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        className="absolute top-8 right-8 w-12 h-12 rounded-full glass-surface border border-accent/30 flex items-center justify-center shadow-lg backdrop-blur-md text-accent"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </motion.div>
      
    </div>
  );
}
