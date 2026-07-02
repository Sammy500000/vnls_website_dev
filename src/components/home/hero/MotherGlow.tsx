"use client";

import React from "react";
import { motion } from "framer-motion";
import { MouseParallaxLayer } from "./MouseParallaxLayer";

export function MotherGlow() {
  return (
    <MouseParallaxLayer multiplier={0.5} className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.20, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-[80%] max-w-[600px] aspect-square rounded-full bg-[#D4AF37] blur-[50px] mix-blend-screen"
      />
    </MouseParallaxLayer>
  );
}
