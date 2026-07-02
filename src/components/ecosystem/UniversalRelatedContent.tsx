"use client";

import React from "react";
import { motion } from "framer-motion";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";

interface Props {
  nextPathwayLabel: string;
  nextPathwayDescription: string;
  nextPathwayHref: string;
}

export function UniversalRelatedContent({ nextPathwayLabel, nextPathwayDescription, nextPathwayHref }: Props) {
  return (
    <div className="w-full bg-[#FAF8F5] py-24 flex justify-center items-center border-t border-[#D4C3B3]/20">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={EcosystemMotionEngine.gentleFloatIn}
        className="flex flex-col items-center text-center max-w-2xl gap-8"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
          The Journey Continues
        </span>
        
        <h3 className="font-serif text-3xl md:text-4xl text-[#4A4036] font-medium leading-[1.3] text-balance">
          {nextPathwayLabel}
        </h3>
        
        <p className="text-[#8E7E6D] font-light text-lg">
          {nextPathwayDescription}
        </p>
        
        <a 
          href={nextPathwayHref}
          className="mt-6 px-8 py-4 rounded-full border border-[#D4C3B3]/50 text-[#6D5D4D] font-serif hover:bg-[#F3EBE1] hover:text-[#4A4036] hover:border-[#C28E5E]/40 transition-all duration-500"
        >
          Explore this pathway
        </a>
      </motion.div>
    </div>
  );
}
