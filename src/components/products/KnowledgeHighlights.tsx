"use client";

import React from "react";
import { motion } from "framer-motion";
import { KnowledgeHighlight as KnowledgeHighlightType } from "@/data/products/types";

interface KnowledgeHighlightsProps {
  highlight: KnowledgeHighlightType;
}

const typeColors: Record<string, string> = {
  "Science Insight": "text-accent",
  "Traditional Wisdom": "text-primary",
  "Maternal Need": "text-accent",
  "Research Focus": "text-foreground/60",
};

export function KnowledgeHighlights({ highlight }: KnowledgeHighlightsProps) {
  return (
    <div className="py-12 md:py-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto text-center flex flex-col items-center gap-4"
      >
        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${typeColors[highlight.type] || "text-accent"}`}>
          {highlight.type}
        </span>
        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light font-serif italic">
          {highlight.text}
        </p>
      </motion.div>
    </div>
  );
}
