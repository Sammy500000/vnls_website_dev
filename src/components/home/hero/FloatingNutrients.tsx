"use client";

import React from "react";
import { motion } from "framer-motion";
import { MouseParallaxLayer } from "./MouseParallaxLayer";

const nutrients = [
  // Top Center
  { label: "DHA", top: "5%", left: "65%", scale: 0.9, blur: "0px", delay: 1, zIndex: 30 },
  // Top Left
  { label: "Protein", top: "15%", left: "15%", scale: 1.1, blur: "0px", delay: 0, zIndex: 30 },
  // Top Right
  { label: "Iron", top: "25%", left: "80%", scale: 0.85, blur: "1px", delay: 0.5, zIndex: 15 },
  // Bottom Left
  { label: "Calcium", top: "70%", left: "10%", scale: 0.8, blur: "1px", delay: 1.5, zIndex: 15 },
  // Bottom Right
  { label: "Folate", top: "65%", left: "85%", scale: 1.05, blur: "0px", delay: 2.5, zIndex: 30 },
  // Bottom Center
  { label: "Choline", top: "85%", left: "45%", scale: 0.95, blur: "0px", delay: 2, zIndex: 30 },
];

export function FloatingNutrients() {
  return (
    <MouseParallaxLayer multiplier={2.5} className="absolute inset-0 pointer-events-none">
      {nutrients.map((n, i) => {
        // Randomize float distances specifically between 2px and 6px
        const floatY = 2 + (i % 4);
        const floatX = 2 + ((i + 1) % 4);

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: n.top,
              left: n.left,
              zIndex: n.zIndex,
              filter: `blur(${n.blur})`
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: n.scale }}
            transition={{ duration: 1.5, delay: 1 + n.delay, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                y: [`-${floatY}px`, `${floatY}px`, `-${floatY}px`],
                x: [`-${floatX}px`, `${floatX}px`, `-${floatX}px`],
              }}
              transition={{
                duration: 6 + (i % 5) * 2.5, // Different durations per capsule
                delay: i * 0.7, // Asynchronous start times
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-foreground/90 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border-t border-l border-white/40 border-b border-r border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                {n.label}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </MouseParallaxLayer>
  );
}
