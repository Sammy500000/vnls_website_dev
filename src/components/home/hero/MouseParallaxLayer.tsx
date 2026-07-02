"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MouseParallaxLayerProps {
  children: React.ReactNode;
  multiplier?: number;
  className?: string;
}

export function MouseParallaxLayer({
  children,
  multiplier = 1,
  className = "",
}: MouseParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, organic motion
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 30, mass: 2 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 30, mass: 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the window
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform raw values into ultra-subtle pixel translations (base 3px)
  const x = useTransform(smoothX, [-1, 1], [-3 * multiplier, 3 * multiplier]);
  const y = useTransform(smoothY, [-1, 1], [-3 * multiplier, 3 * multiplier]);

  return (
    <motion.div 
      ref={ref}
      style={{ x, y }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}
