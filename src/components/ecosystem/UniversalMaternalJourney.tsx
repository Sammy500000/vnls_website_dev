"use client";

import React from "react";
import { motion } from "framer-motion";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";
import { ecosystemData } from "@/data/ecosystem/data";
import { EmotionalContinuityLayer } from "@/lib/ecosystem/EmotionalContinuityLayer";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export function UniversalMaternalJourney() {
  const stages = Object.values(ecosystemData.journeyStages);

  return (
    <section className="relative py-32 w-full overflow-hidden bg-[#FAF8F5]">
      <Container className="flex flex-col max-w-5xl mx-auto gap-24 relative z-10">
        
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={EcosystemMotionEngine.gentleFloatIn}
          className="flex flex-col gap-6 text-center"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
            The Shared Path
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4036] font-medium leading-[1.3] text-balance">
            Understanding the continuity of motherhood.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {stages.map((stage, idx) => {
            const need = ecosystemData.maternalNeeds[stage.primaryNeedId];
            const bgColor = EmotionalContinuityLayer.getVisualTemperature(stage.emotionalState);

            return (
              <motion.div 
                key={stage.id}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                variants={EcosystemMotionEngine.gentleFloatIn}
                className={`flex flex-col md:flex-row rounded-[2rem] overflow-hidden border border-[#D4C3B3]/30 ${bgColor}`}
              >
                {/* Left: Emotional & Stage Context */}
                <div className="w-full md:w-1/3 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#D4C3B3]/30">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B58A59] opacity-80 mb-2 block">
                      {stage.emotionalState}
                    </span>
                    <h3 className="font-serif text-3xl text-[#4A4036] mb-4">{stage.title}</h3>
                  </div>
                  <div className="mt-8">
                    <span className="text-xs font-serif italic text-[#8E7E6D]">Primary Need</span>
                    <p className="text-lg text-[#6D5D4D] font-medium">{need?.title}</p>
                  </div>
                </div>

                {/* Right: Knowledge & Support Matrix */}
                <div className="w-full md:w-2/3 p-10 flex flex-col gap-8">
                  <p className="text-[#8E7E6D] font-light leading-relaxed text-lg">
                    {stage.overview}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                       <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B58A59]/60">Nutritional Focus</span>
                       <ul className="flex flex-col gap-1">
                         {stage.nutritionalFocusIds.map(nf => (
                           <li key={nf} className="text-sm text-[#6D5D4D] font-light">{nf}</li>
                         ))}
                       </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                       <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B58A59]/60">Clinical Support</span>
                       <ul className="flex flex-col gap-1">
                         {stage.relatedSupportIds.map(rs => (
                           <li key={rs} className="text-sm text-[#6D5D4D] font-light">
                             <Link href={`/products/${rs.toLowerCase()}`} className="hover:text-[#B58A59] transition-colors border-b border-transparent hover:border-[#B58A59]/30 pb-0.5">
                               {rs}
                             </Link>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
