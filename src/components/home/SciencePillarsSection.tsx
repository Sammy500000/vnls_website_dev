"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BreathingRhythm } from "@/lib/homepage/HomepageBreathingRhythm";
import { HomepageEmotionalEngine } from "@/lib/homepage/HomepageEmotionalEngine";

export function SciencePillarsSection() {
  const bgColor = HomepageEmotionalEngine.getVisualTemperature("Support");

  const supports = [
    { label: "Nourishment", desc: "Building the skeletal architecture gently." },
    { label: "Cognition", desc: "Supporting neural development without stressing the maternal system." },
    { label: "Vitality", desc: "Replenishing iron stores while minimizing digestive tension." },
    { label: "Recovery", desc: "Softening the postpartum transition with deep replenishment." }
  ];

  return (
    <section className={`relative py-32 md:py-48 ${bgColor} overflow-hidden`}>
      <Container className="flex flex-col items-center max-w-5xl mx-auto text-center gap-24 relative z-10">

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="flex flex-col gap-6 items-center"
        >

        </motion.div>

        {/* Soft SVG Relationship Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative py-16 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24"
        >
          {supports.map((support, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4 relative z-10 w-48">
              <div className="w-16 h-16 rounded-full bg-[#EFE3D4] flex items-center justify-center border border-[#D4C3B3]/40 shadow-[0_0_30px_rgba(239,227,212,0.6)]">
                <span className="text-sm font-serif italic text-[#8E7E6D]">0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-xl text-[#4A4036]">{support.label}</h3>
              <p className="text-sm text-[#8E7E6D] font-light leading-relaxed">{support.desc}</p>
            </div>
          ))}

          {/* Flowing Ecosystem Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" preserveAspectRatio="none">
            <motion.path
              d="M 10 50 Q 50 30 90 50"
              fill="none" stroke="#D4C3B3" strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            <motion.path
              d="M 10 50 Q 50 70 90 50"
              fill="none" stroke="#D4C3B3" strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="mt-16 w-full pt-12 border-t border-[#D4C3B3]/30"
        >
          <p className="font-serif text-2xl md:text-3xl text-[#4A4036] font-medium italic text-balance">
            {HomepageEmotionalEngine.getTransitionCopy("Support", "Reassurance")}
          </p>
        </motion.div>

      </Container>
    </section>
  );
}
