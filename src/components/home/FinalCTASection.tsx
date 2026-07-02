"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BreathingRhythm } from "@/lib/homepage/HomepageBreathingRhythm";
import { HomepageEmotionalEngine } from "@/lib/homepage/HomepageEmotionalEngine";
import { ASSETS } from "@/config/assets";

export function FinalCTASection() {
  const bgColor = HomepageEmotionalEngine.getVisualTemperature("Comfort");

  return (
    <section className={`relative min-h-[90vh] flex flex-col justify-center items-center py-32 ${bgColor} overflow-hidden`}>
      
      {/* Background Softness: Deep Maternal Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={BreathingRhythm.ambientPulse}
          className="w-[100vw] h-[100vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,186,133,0.3),transparent_70%)] blur-3xl mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[#EFE3D4]/40 backdrop-blur-[100px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="flex flex-col gap-10 items-center"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
            A Quiet Promise
          </span>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#4A4036] font-medium leading-[1.1] tracking-tight">
            You are doing enough.
          </h2>

          <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4C3B3] to-transparent my-4" />

          <p className="text-xl md:text-3xl text-[#8E7E6D] font-light italic leading-relaxed max-w-2xl text-balance">
            Let us handle the science. You focus on the journey.
          </p>

          <Link href="/products/garbhika" className="mt-12 px-10 py-5 rounded-full bg-[#FAF8F5] text-[#4A4036] font-serif text-lg tracking-wide hover:shadow-[0_10px_40px_rgba(215,165,115,0.4)] transition-all duration-700 hover:-translate-y-1">
            Discover the Formulations
          </Link>

        </motion.div>

      </Container>
    </section>
  );
}
