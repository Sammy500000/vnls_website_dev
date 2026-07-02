"use client";

import React from "react";
import { motion } from "framer-motion";
import { Author } from "@/data/journal/types";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 md:p-12 glass-surface border border-border/40 rounded-3xl flex flex-col md:flex-row gap-8 items-start my-16 max-w-4xl"
    >
      
      {/* Avatar / Monogram */}
      <div className="w-24 h-24 rounded-full border border-border/50 bg-background flex items-center justify-center flex-shrink-0 shadow-sm">
        {author.avatarUrl ? (
          <img src={author.avatarUrl} alt={author.name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="font-serif text-3xl text-muted-foreground">
            {author.name.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-serif text-3xl font-medium text-foreground mb-1">{author.name}</h3>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">{author.role}</span>
        </div>

        <p className="text-foreground/70 font-light leading-relaxed max-w-2xl text-lg">
          {author.biography}
        </p>

        <div className="flex flex-col gap-2 mt-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Expertise Areas</span>
          <div className="flex flex-wrap gap-2">
            {author.expertise.map((exp, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full border border-border/40 text-[10px] font-bold uppercase tracking-widest text-foreground/60 bg-foreground/[0.02]">
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
