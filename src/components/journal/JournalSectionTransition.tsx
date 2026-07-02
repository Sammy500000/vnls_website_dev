"use client";

import React from "react";
import { motion } from "framer-motion";

interface JournalSectionTransitionProps {
  text: string;
}

export function JournalSectionTransition({ text }: JournalSectionTransitionProps) {
  return (
    <div className="py-24 md:py-32 my-12 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative center line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-border/40 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-8 text-center bg-background py-8"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-6">
          Editorial Insight
        </span>
        <p className="font-serif text-3xl md:text-5xl text-foreground leading-[1.3] max-w-3xl font-light text-balance italic">
          "{text}"
        </p>
      </motion.div>

    </div>
  );
}
