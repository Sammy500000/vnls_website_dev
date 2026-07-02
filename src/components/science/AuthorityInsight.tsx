"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuthorityInsight as AuthorityInsightType } from "@/data/science/types";

interface AuthorityInsightProps {
  insight: AuthorityInsightType;
}

const typeColors: Record<string, string> = {
  "Maternal Insight": "text-primary",
  "Research Insight": "text-accent",
  "Development Insight": "text-foreground",
  "Nutritional Insight": "text-muted-foreground",
};

export function AuthorityInsight({ insight }: AuthorityInsightProps) {
  return (
    <div className="py-24 flex justify-center bg-foreground/[0.02]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 px-6"
      >
        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${typeColors[insight.type] || "text-accent"}`}>
          {insight.type}
        </span>
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.3] font-light text-balance">
          &ldquo;{insight.quote}&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
