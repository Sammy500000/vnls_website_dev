"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { RelationshipNode } from "@/data/science/types";

interface ScienceRelationshipMapProps {
  rootNode: RelationshipNode;
}

export function ScienceRelationshipMap({ rootNode }: ScienceRelationshipMapProps) {
  return (
    <Section id="relationship-map" variant="editorial" className="py-32 overflow-hidden">
      <Container className="flex flex-col gap-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Causal Ecosystem
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight">
            The Cascade of Impact
          </h2>
        </motion.div>

        <div className="flex flex-col items-center max-w-4xl mx-auto w-full relative pt-12">
           <RecursiveNode node={rootNode} isRoot />
        </div>

      </Container>
    </Section>
  );
}

function RecursiveNode({ node, isRoot = false }: { node: RelationshipNode, isRoot?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center relative w-full">
      
      {/* Node Itself */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`glass-surface p-8 rounded-3xl border transition-all duration-500 cursor-default
          ${isHovered ? "border-accent/40 shadow-[0_15px_40px_rgba(var(--color-accent-rgb),0.08)] bg-accent/5" : "border-border/30"}
        `}>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-serif text-3xl font-medium text-foreground">{node.label}</span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300
                ${isHovered ? "text-accent" : "text-muted-foreground"}
              `}>
                {node.impact}
              </span>
            </div>
            
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-lg font-light text-foreground/80 leading-relaxed pt-4 border-t border-border/20 mt-2">
                    {node.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Children Recursion */}
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical line down to children */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            className={`w-[1px] relative transition-colors duration-500
              ${isHovered ? "bg-accent/40" : "bg-border/40"}
            `}
          >
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-background text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap rounded-full border transition-all duration-500
              ${isHovered ? "text-accent border-accent/30" : "text-muted-foreground border-border/30"}
            `}>
              Enables
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-border/40">↓</div>
          </motion.div>

          {/* Render children */}
          <div className="flex justify-center w-full mt-6">
            {node.children.map(child => (
              <RecursiveNode key={child.id} node={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
