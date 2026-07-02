"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BreathingRhythm } from "@/lib/homepage/HomepageBreathingRhythm";
import { HomepageEmotionalEngine } from "@/lib/homepage/HomepageEmotionalEngine";

export function ResearchJourneySection() {
  const bgColor = HomepageEmotionalEngine.getVisualTemperature("Careful Listening");

  return (
    <section className={`relative py-32 md:py-48 ${bgColor} overflow-hidden`}>
      
      {/* Soft Ambient Visuals mimicking field notes / quiet observation */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-30">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] max-w-[800px]" preserveAspectRatio="none">
          <motion.path 
            d="M 10 50 Q 30 20 50 50 T 90 50" 
            fill="none" stroke="#C28E5E" strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
          <motion.path 
            d="M 20 60 Q 40 80 60 50 T 80 40" 
            fill="none" stroke="#D4C3B3" strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <Container className="flex flex-col items-center max-w-4xl mx-auto text-center gap-16 relative z-10">
        
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="flex flex-col gap-6"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C28E5E] opacity-80">
            Human-Centered Discovery
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#4A4036] font-medium leading-[1.2] text-balance">
            Quiet Observation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 w-full text-left">
          
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={BreathingRhythm.entryAnimation}
            className="flex flex-col gap-4 relative pl-6 border-l border-[#D4C3B3]/40"
          >
            <span className="font-serif text-2xl text-[#6D5D4D]">Patience</span>
            <p className="text-sm md:text-base text-[#8E7E6D] font-light leading-relaxed">
              We spent years quietly observing the physiological reality of motherhood, choosing patience over assumptions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 2.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 relative pl-6 border-l border-[#D4C3B3]/40"
          >
            <span className="font-serif text-2xl text-[#6D5D4D]">Understanding</span>
            <p className="text-sm md:text-base text-[#8E7E6D] font-light leading-relaxed">
              We realized that standard prenatal vitamins ignore the drastic shift in requirements that occur late in pregnancy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 2.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 relative pl-6 border-l border-[#D4C3B3]/40"
          >
            <span className="font-serif text-2xl text-[#6D5D4D]">Compassion</span>
            <p className="text-sm md:text-base text-[#8E7E6D] font-light leading-relaxed">
              Our formulation architecture is simply compassion translated into clinical science. We give the body exactly what it is asking for.
            </p>
          </motion.div>

        </div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="mt-24 pt-12 border-t border-[#D4C3B3]/30 w-full"
        >
          <p className="font-serif text-2xl md:text-4xl text-[#4A4036] font-medium italic text-balance">
            {HomepageEmotionalEngine.getTransitionCopy("Careful Listening", "Support")}
          </p>
        </motion.div>

      </Container>
    </section>
  );
}
