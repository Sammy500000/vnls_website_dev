"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

interface ScienceSectionTransitionProps {
  text: string;
}

export function ScienceSectionTransition({ text }: ScienceSectionTransitionProps) {
  return (
    <div className="py-32 md:py-48 flex items-center justify-center bg-background relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      </div>

      <Container className="flex items-center justify-center text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground leading-[1.2] max-w-5xl font-light text-balance italic"
        >
          {text}
        </motion.p>
      </Container>
    </div>
  );
}
