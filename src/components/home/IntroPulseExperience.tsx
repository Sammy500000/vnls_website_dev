"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroPulseExperienceProps {
  onComplete: () => void;
}

export function IntroPulseExperience({ onComplete }: IntroPulseExperienceProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Orb enters (0-3s)
    const t1 = setTimeout(() => setStage(1), 3000);
    // Stage 1: Orb pulses and glow expands (3-7s)
    const t2 = setTimeout(() => setStage(2), 7000);
    // Stage 2: Orb dissolves into atmosphere, triggers completion (7-9s)
    const t3 = setTimeout(() => {
      setStage(3);
      onComplete();
    }, 9000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#FAF8F5]"
        >
          {/* Ambient Glow that expands over time */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: stage >= 1 ? 0.6 : 0, 
              scale: stage >= 1 ? 2 : 0.8 
            }}
            transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,210,180,0.4),transparent_60%)]"
          />

          {/* The Orb */}
          <motion.div
            initial={{ x: "-50vw", opacity: 0, scale: 0.8 }}
            animate={
              stage === 0 ? { x: 0, opacity: 1, scale: 1 } :
              stage === 1 ? { 
                scale: [1, 1.05, 1, 1.05, 1], // Heartbeat
                opacity: [1, 0.8, 1, 0.8, 1],
                filter: ["blur(10px)", "blur(15px)", "blur(10px)"]
              } :
              { scale: 3, opacity: 0, filter: "blur(40px)" } // Dissolve
            }
            transition={
              stage === 0 ? { duration: 3, ease: [0.22, 1, 0.36, 1] } :
              stage === 1 ? { duration: 4, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 1] } :
              { duration: 2, ease: "easeOut" }
            }
            className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#E5BA85] blur-md shadow-[0_0_60px_rgba(229,186,133,0.6)] mix-blend-multiply"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
