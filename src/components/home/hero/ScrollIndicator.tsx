"use client";

import React from "react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Scroll</span>
      <div className="w-[1px] h-12 bg-border relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          animate={{
            y: ["-100%", "200%"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
