"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

interface MaternalNutritionFactsProps {
  facts: string[];
}

export function MaternalNutritionFacts({ facts }: MaternalNutritionFactsProps) {
  return (
    <Section id="maternal-facts" variant="editorial" className="py-32 md:py-48">
      <Container className="flex flex-col items-center gap-24 md:gap-32">
        {facts.map((fact, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.15] tracking-tight text-center max-w-5xl font-medium text-balance"
          >
            {fact}
          </motion.p>
        ))}
      </Container>
    </Section>
  );
}
