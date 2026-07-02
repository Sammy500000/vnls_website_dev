"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RelatedContent } from "@/data/journal/types";

interface KnowledgeConnectionsProps {
  connections: RelatedContent;
}

export function KnowledgeConnections({ connections }: KnowledgeConnectionsProps) {
  return (
    <div className="py-16 my-16 border-t border-b border-border/30">
      
      <div className="mb-10 text-center">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-2 block">
          Knowledge Ecosystem
        </span>
        <h3 className="font-serif text-3xl text-foreground font-medium">
          Explore Connections
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Nutrients & Ingredients */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-b border-border/20 pb-2">
            Nutritional Science
          </span>
          <div className="flex flex-col gap-3">
            {connections.nutrients.map(n => (
              <span key={n} className="text-sm text-foreground/80 font-light hover:text-accent transition-colors cursor-pointer">
                {n}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Science Topics */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent border-b border-border/20 pb-2">
            Research Areas
          </span>
          <div className="flex flex-col gap-3">
            {connections.science.map(s => (
              <span key={s} className="text-sm text-foreground/80 font-light hover:text-accent transition-colors cursor-pointer">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Journey Stages */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground border-b border-border/20 pb-2">
            Maternal Timeline
          </span>
          <div className="flex flex-col gap-3">
            {connections.stages.map(s => (
              <span key={s} className="text-[10px] font-bold uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                {s.replace("-", " ")}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Formulations */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/50 border-b border-border/20 pb-2">
            Clinical Application
          </span>
          <div className="flex flex-col gap-3">
            {connections.products.map(p => (
              <Link key={p} href={`/products/${p}`} className="font-serif text-lg italic text-foreground hover:text-accent transition-colors">
                {p}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
