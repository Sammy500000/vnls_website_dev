"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BreathingRhythm } from "@/lib/homepage/HomepageBreathingRhythm";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Softness: Replaces harsh particles with breathing gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={BreathingRhythm.ambientPulse}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,186,133,0.15),transparent_60%)] blur-3xl mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ ...BreathingRhythm.ambientPulse, delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,165,115,0.1),transparent_60%)] blur-3xl mix-blend-multiply"
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto pt-20">
        
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="flex flex-col gap-8 items-center"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C28E5E] mb-4 opacity-80">
            You are safe here
          </span>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#4A4036] font-medium leading-[1.05] tracking-tight">
            Slow Down
          </h1>

          <p className="font-serif text-3xl md:text-4xl text-[#8E7E6D] italic font-light mt-4">
            Listen to the Mother Within
          </p>

          <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4C3B3] to-transparent my-8" />

          <p className="text-xl md:text-2xl text-[#8E7E6D] font-light leading-relaxed max-w-2xl">
            You are already listening more than you realise. Your child is constantly communicating through every stage of growth. Sometimes support begins by slowing down enough to hear it.
          </p>

        </motion.div>

      </Container>
    </section>
  );
}
