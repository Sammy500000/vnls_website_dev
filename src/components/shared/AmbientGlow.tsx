"use client";

import React from "react";
import { motion } from "framer-motion";

interface AmbientGlowProps {
  color?: string;
  size?: "sm" | "md" | "lg";
  position?: { top?: string; right?: string; bottom?: string; left?: string };
  className?: string;
}

export function AmbientGlow({ 
  color = "var(--color-soft-gold)", 
  size = "md", 
  position = { top: "50%", left: "50%" },
  className = "" 
}: AmbientGlowProps) {
  
  const sizeMap = {
    sm: "200px",
    md: "400px",
    lg: "800px"
  };

  return (
    <motion.div 
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.15, 0.25, 0.15]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute rounded-full pointer-events-none mix-blend-screen blur-[100px] ${className}`}
      style={{
        ...position,
        transform: "translate(-50%, -50%)",
        width: sizeMap[size],
        height: sizeMap[size],
        backgroundColor: color,
        zIndex: 0
      }}
      aria-hidden="true"
    />
  );
}
