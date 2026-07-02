"use client";

import React from "react";
import { motion } from "framer-motion";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";
import { EmotionalContinuityLayer } from "@/lib/ecosystem/EmotionalContinuityLayer";
import { EmotionalState } from "@/data/ecosystem/types";

interface Props {
  type: "Maternal Insight" | "Science Insight" | "Research Insight" | "Nutritional Insight";
  content: string;
  emotionalContext: EmotionalState;
}

export function UniversalKnowledgeHighlight({ type, content, emotionalContext }: Props) {
  const bgColor = EmotionalContinuityLayer.getVisualTemperature(emotionalContext);

  return (
    <div className={`w-full py-24 px-8 md:px-0 flex justify-center items-center ${bgColor}`}>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={EcosystemMotionEngine.gentleFloatIn}
        className="max-w-3xl flex flex-col items-center text-center gap-8 relative"
      >
        {/* Soft decorative quotation mark or accent */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] font-serif text-[#D4C3B3] opacity-20 leading-none select-none">
          "
        </div>

        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80 z-10">
          {type}
        </span>
        
        <p className="font-serif text-2xl md:text-4xl text-[#4A4036] font-medium leading-[1.4] text-balance italic z-10">
          {content}
        </p>

      </motion.div>
    </div>
  );
}
