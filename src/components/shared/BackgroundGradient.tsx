"use client";

import React from "react";
import { motion } from "framer-motion";

export function BackgroundGradient({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      animate={{
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className={`warm-gradient-overlay ${className}`} 
      aria-hidden="true" 
    />
  );
}
