"use client";

import React from "react";
import { motion } from "framer-motion";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";
import { Container } from "@/components/layout/Container";

export function GlobalKnowledgeGraph() {
  return (
    <section className="relative py-32 md:py-48 bg-[#FDFBF7] overflow-hidden">
      <Container className="flex flex-col max-w-5xl mx-auto gap-24 relative z-10 text-center">
        
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={EcosystemMotionEngine.gentleFloatIn}
          className="flex flex-col gap-6 items-center"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
            The Knowledge Ecosystem
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4036] font-medium leading-[1.3] text-balance max-w-2xl">
            Everything is connected to your care.
          </h2>
          <p className="text-lg text-[#8E7E6D] font-light max-w-xl">
            Our formulations do not exist in isolation. They are born from deep understanding, clinical observation, and the continuous journey of motherhood.
          </p>
        </motion.div>

        {/* Soft, flowing visual map */}
        <div className="relative w-full h-[500px] flex items-center justify-center mt-12">
           {/* Flowing background paths instead of hard node lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" preserveAspectRatio="xMidYMid meet">
             <motion.path 
               d="M 10 50 Q 50 20 90 50 T 150 40" 
               fill="none" stroke="#D4C3B3" strokeWidth="1"
               variants={EcosystemMotionEngine.organicPathDraw}
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true }}
             />
             <motion.path 
               d="M 20 60 Q 60 90 100 50 T 160 70" 
               fill="none" stroke="#E5BA85" strokeWidth="0.5"
               variants={EcosystemMotionEngine.organicPathDraw}
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true }}
               transition={{ duration: 5, delay: 1, ease: "easeInOut" }}
             />
           </svg>

           {/* Soft conceptual nodes */}
           <motion.div 
             className="absolute top-[20%] left-[20%] flex flex-col items-center gap-3 z-10"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2, delay: 0.5 }}
           >
             <div className="w-24 h-24 rounded-full bg-[#FAF8F5] border border-[#D4C3B3]/40 shadow-[0_0_40px_rgba(212,195,179,0.3)] flex items-center justify-center">
               <span className="text-[#8E7E6D] font-serif italic text-sm">Understanding</span>
             </div>
           </motion.div>

           <motion.div 
             className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2, delay: 1 }}
           >
             <div className="w-32 h-32 rounded-full bg-[#F3EBE1] border border-[#C28E5E]/30 shadow-[0_0_60px_rgba(229,186,133,0.4)] flex items-center justify-center">
               <span className="text-[#4A4036] font-serif text-lg">Maternal Need</span>
             </div>
           </motion.div>

           <motion.div 
             className="absolute bottom-[20%] right-[20%] flex flex-col items-center gap-3 z-10"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2, delay: 1.5 }}
           >
             <div className="w-24 h-24 rounded-full bg-[#FAF8F5] border border-[#D4C3B3]/40 shadow-[0_0_40px_rgba(212,195,179,0.3)] flex items-center justify-center">
               <span className="text-[#8E7E6D] font-serif italic text-sm">Formulation</span>
             </div>
           </motion.div>
        </div>

      </Container>
    </section>
  );
}
