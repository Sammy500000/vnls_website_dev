"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BreathingRhythm } from "@/lib/homepage/HomepageBreathingRhythm";
import { HomepageEmotionalEngine } from "@/lib/homepage/HomepageEmotionalEngine";
import { ASSETS } from "@/config/assets";

export function ProductsSection() {
  const bgColor = HomepageEmotionalEngine.getVisualTemperature("Reassurance");

  return (
    <section className={`relative py-32 md:py-48 ${bgColor} overflow-hidden`}>

      {/* Soft Ambient Reassurance Aura */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={BreathingRhythm.ambientPulse}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(215,165,115,0.15),transparent_60%)] blur-3xl mix-blend-multiply"
        />
      </div>

      <Container className="flex flex-col items-center max-w-5xl mx-auto text-center gap-24 relative z-10">

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={BreathingRhythm.entryAnimation}
          className="flex flex-col gap-6 items-center max-w-3xl"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
            Maternal Systems
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4036] font-medium leading-[1.3] text-balance">
            Support should feel like a deep exhale.
          </h2>
          <p className="text-xl md:text-2xl text-[#8E7E6D] font-light mt-4 leading-relaxed">
            When a formulation truly understands your physiology, it doesn't feel like a supplement. It feels like relief. It feels like safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full text-left mt-8">

          {/* Garbhika */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col relative group"
          >
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden mb-8 border border-[#D4C3B3]/30 shadow-sm transition-all duration-1000 group-hover:shadow-[0_20px_60px_rgba(215,165,115,0.15)] group-hover:border-[#C28E5E]/40">
              {/* Product Background Ambience */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] to-[#F3EBE1] z-0" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                {/* Replaced with a softer SVG representation for now, or you can use the actual product image if softened */}
                <div className="w-32 h-32 rounded-full bg-[#E5BA85]/20 blur-2xl absolute" />
                <img src={ASSETS.products.garbhika.render} alt="Garbhika" className="w-2/3 object-contain drop-shadow-2xl opacity-90 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100" />
              </div>
            </div>

            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B58A59] mb-4 block">
              Pre-Natal Support
            </span>
            <h3 className="font-serif text-3xl text-[#4A4036] mb-4">Garbhika</h3>
            <p className="text-[#8E7E6D] font-light leading-relaxed mb-8">
              Holding the mother while she holds the child. Formulated for the intense demands of the fetus and the mother.
            </p>
            <Link href="/products/garbhika" className="text-sm font-serif italic text-[#6D5D4D] hover:text-[#B58A59] transition-colors flex items-center gap-4 group/link w-max border-b border-[#D4C3B3]/50 pb-1 hover:border-[#B58A59]">
              Explore the Support System
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </motion.div>

          {/* Matrusneha */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 2.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col relative group md:mt-24"
          >
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden mb-8 border border-[#D4C3B3]/30 shadow-sm transition-all duration-1000 group-hover:shadow-[0_20px_60px_rgba(215,165,115,0.15)] group-hover:border-[#C28E5E]/40">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] to-[#F3EBE1] z-0" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-32 h-32 rounded-full bg-[#E5BA85]/20 blur-2xl absolute" />
                <img src={ASSETS.products.matrusneha.render} alt="Matrusneha" className="w-2/3 object-contain drop-shadow-2xl opacity-90 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100" />
              </div>
            </div>

            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B58A59] mb-4 block">
              Postpartum Recovery
            </span>
            <h3 className="font-serif text-3xl text-[#4A4036] mb-4">Matrusneha</h3>
            <p className="text-[#8E7E6D] font-light leading-relaxed mb-8">
              A gentle, profound recovery matrix designed to heal and restore the postpartum body.
            </p>
            <Link href="/products/matrusneha" className="text-sm font-serif italic text-[#6D5D4D] hover:text-[#B58A59] transition-colors flex items-center gap-4 group/link w-max border-b border-[#D4C3B3]/50 pb-1 hover:border-[#B58A59]">
              Explore the Recovery System
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}
