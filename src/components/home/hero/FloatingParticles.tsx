"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { MouseParallaxLayer } from "./MouseParallaxLayer";

export function FloatingParticles() {
  // Generate 15 static particles on the server/first render to avoid hydration mismatches,
  // but we randomize their animation paths via framer-motion.
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      initialX: Math.random() * 100, // 0 to 100%
      initialY: Math.random() * 100, // 0 to 100%
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <MouseParallaxLayer multiplier={1.5} className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#D4AF37] blur-[2px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.initialX}%`,
            top: `${p.initialY}%`,
          }}
          animate={{
            y: ["0%", "-30%", "0%"],
            x: ["0%", "10%", "-10%", "0%"],
            opacity: [0, 0.15, 0.05, 0],
          }}
          transition={{
            duration: p.duration * 1.5, // Much slower luxury drift
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </MouseParallaxLayer>
  );
}
