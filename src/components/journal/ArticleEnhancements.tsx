"use client";

import React from "react";
import { motion } from "framer-motion";

interface HighlightProps {
  content: string;
  title?: string;
  author?: string;
}

export function KnowledgeHighlight({ content }: HighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="my-16 pl-8 border-l-2 border-accent relative"
    >
      <div className="absolute -left-[1px] top-0 w-[2px] h-12 bg-gradient-to-b from-accent to-transparent" />
      <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground font-light leading-[1.3] text-balance">
        {content}
      </p>
    </motion.div>
  );
}

export function ScienceInsight({ content, title }: HighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="my-16 p-8 md:p-12 glass-surface rounded-[2rem] border border-border/30 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col gap-4">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Clinical Insight
          {title && <span className="text-muted-foreground ml-2">— {title}</span>}
        </span>
        <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
          {content}
        </p>
      </div>
    </motion.div>
  );
}

export function ResearchCallout({ content, title }: HighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="my-16 flex flex-col gap-6"
    >
      <div className="flex items-center gap-4 border-b border-border/30 pb-4">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Research Note</span>
        {title && <span className="font-serif text-lg text-foreground">{title}</span>}
      </div>
      <p className="font-serif text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
        "{content}"
      </p>
    </motion.div>
  );
}

export function MaternalInsight({ content, author }: HighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="my-16 flex flex-col items-center text-center max-w-2xl mx-auto gap-6"
    >
      <span className="text-4xl text-accent/30 font-serif leading-none">"</span>
      <p className="font-serif text-2xl md:text-3xl text-foreground font-medium leading-[1.3] text-balance">
        {content}
      </p>
      {author && (
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
          — {author}
        </span>
      )}
    </motion.div>
  );
}
