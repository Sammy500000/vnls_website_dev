"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ProductAura } from "./visuals/ProductAura";
import { ASSETS, ProductId } from "@/config/assets";

interface ProductVisualContainerProps {
  productId?: ProductId;
}

export function ProductVisualContainer({ productId = "garbhika" }: ProductVisualContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const imageSrc = ASSETS.products[productId].render;

  return (
    <div className="w-full h-full relative flex items-center justify-center min-h-[600px] lg:min-h-full">
      {/* Premium Background Aura */}
      <ProductAura color="mixed" />

      {/* Floating Nutrient Layer (Background) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        animate={prefersReducedMotion ? {} : { rotate: [0, 10, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-[20%] left-[10%] w-12 h-12 rounded-full bg-accent/20 blur-xl" />
        <div className="absolute bottom-[30%] right-[15%] w-16 h-16 rounded-full bg-primary/20 blur-xl" />
      </motion.div>

      {/* Main Product Render */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[80%] max-w-[400px] aspect-[3/4] flex items-center justify-center"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
        >
          <Image
            src={imageSrc}
            alt={`${productId} product`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80vw, 400px"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Foreground Ingredient/Glass Layer */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div 
          animate={prefersReducedMotion ? {} : { y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[5%] lg:-right-[5%] glass-surface px-4 py-2 rounded-full border border-border/50 text-[10px] font-bold tracking-widest text-foreground uppercase shadow-lg backdrop-blur-md"
        >
          Bioavailable
        </motion.div>
        
        <motion.div 
          animate={prefersReducedMotion ? {} : { y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[5%] lg:-left-[5%] glass-surface px-4 py-2 rounded-full border border-border/50 text-[10px] font-bold tracking-widest text-foreground uppercase shadow-lg backdrop-blur-md"
        >
          Clinical Grade
        </motion.div>
      </motion.div>
    </div>
  );
}
