"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { QualityPillar } from "@/data/products/types";

interface QualityCommitmentProps {
  headline: string;
  explanation: string;
  pillars: QualityPillar[];
}

export function QualityCommitment({ headline, explanation, pillars }: QualityCommitmentProps) {
  return (
    <Section id="quality" variant="editorial" className="py-24 lg:py-32">
      <Container className="flex flex-col gap-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Our Commitment
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight mb-6">
            {headline}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            {explanation}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 md:p-10 rounded-2xl border border-border/30 hover:border-accent/30 bg-transparent hover:bg-foreground/[0.02] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                
                <span className="text-sm font-medium text-accent/60 font-serif flex-shrink-0 w-12">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-[1.8] font-light max-w-2xl">
                    {pillar.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
