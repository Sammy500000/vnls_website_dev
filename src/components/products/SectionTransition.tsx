"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTransitionProps {
  text: string;
}

export function SectionTransition({ text }: SectionTransitionProps) {
  return (
    <div className="py-24 md:py-32 flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/40 leading-[1.4] text-center max-w-3xl whitespace-pre-line font-light italic"
      >
        {text}
      </motion.p>
    </div>
  );
}
