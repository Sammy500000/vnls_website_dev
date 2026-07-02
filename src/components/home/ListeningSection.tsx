"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BreathingRhythm } from "@/lib/homepage/HomepageBreathingRhythm";
import { HomepageEmotionalEngine } from "@/lib/homepage/HomepageEmotionalEngine";

export function ListeningSection() {
  const bgColor = HomepageEmotionalEngine.getVisualTemperature("Understanding");

  return (
    <section className={`relative py-32 md:py-48 ${bgColor} overflow-hidden`}>
      <Container className="flex flex-col items-center max-w-3xl mx-auto text-center gap-24 relative z-10">

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="flex flex-col gap-6"
        >

          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C28E5E] opacity-80">

          </span>
          <p className="font-serif text-3xl md:text-5xl text-[#4A4036] font-medium leading-[1.3] text-balance italic">

          </p>
        </motion.div>

        <div className="w-[1px] h-24 bg-gradient-to-b from-[#D4C3B3] to-transparent" />



        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="mt-12"
        >
          <p className="font-serif text-2xl md:text-4xl text-[#4A4036] font-medium">
            {HomepageEmotionalEngine.getTransitionCopy("Understanding", "Careful Listening")}
          </p>
        </motion.div>

      </Container>
    </section>
  );
}
