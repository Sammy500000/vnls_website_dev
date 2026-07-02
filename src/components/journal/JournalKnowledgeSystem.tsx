"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Article } from "@/data/journal/types";

interface JournalKnowledgeSystemProps {
  article: Article;
}

export function JournalKnowledgeSystem({ article }: JournalKnowledgeSystemProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Derive nodes from the article connections to visualize the ecosystem.
  const nodes = [
    { id: "article", label: "This Article", type: "core", links: ["nutrients", "stages"] },
    { id: "nutrients", label: "Nutritional Base", type: "nutrient", count: article.connections.nutrients.length, links: ["products", "science"] },
    { id: "stages", label: "Journey Phase", type: "stage", count: article.connections.stages.length, links: ["products"] },
    { id: "products", label: "Formulations", type: "product", count: article.connections.products.length, links: [] },
    { id: "science", label: "Clinical Science", type: "science", count: article.connections.science.length, links: ["related"] },
    { id: "related", label: "Related Reading", type: "article", count: article.connections.articles.length, links: [] }
  ];

  return (
    <div className="my-24 py-16 px-8 lg:px-16 glass-surface rounded-[3rem] border border-border/40 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(var(--color-accent-rgb),0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between">
        
        {/* Left: Introduction */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
            Ecosystem Mapper
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground font-medium leading-[1.1]">
            Knowledge Connections
          </h3>
          <p className="text-foreground/70 font-light leading-relaxed">
            Maternal nutrition is an interconnected science. Explore how the concepts in this publication relate to specific nutrients, formulations, and journey stages.
          </p>
        </div>

        {/* Right: Interactive Node Graph */}
        <div className="w-full lg:w-2/3 relative min-h-[400px] flex items-center justify-center">
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 relative z-10 w-full">
            {nodes.map((node, idx) => {
              const isHovered = activeNode === node.id;
              // A simple active state if any node is hovered, dull the rest
              const isDulled = activeNode !== null && activeNode !== node.id;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-500 cursor-default relative
                    ${isHovered ? "bg-accent/10 border-accent/40 shadow-[0_10px_30px_rgba(var(--color-accent-rgb),0.1)] scale-105 z-20" : "glass-surface border-border/30"}
                    ${isDulled ? "opacity-40 scale-95" : "opacity-100"}
                  `}
                >
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 transition-colors duration-300
                    ${isHovered ? "text-accent" : "text-muted-foreground"}
                  `}>
                    {node.type}
                  </span>
                  <span className="font-serif text-xl text-foreground text-center">
                    {node.label}
                  </span>
                  {node.count !== undefined && (
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-border/40 flex items-center justify-center text-xs font-bold text-foreground/60 shadow-sm">
                      {node.count}
                    </span>
                  )}
                  
                  {/* Tooltip detail */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-background border border-border/40 px-6 py-4 rounded-xl shadow-xl w-max z-30 flex flex-col gap-2"
                      >
                        {node.id === "nutrients" && article.connections.nutrients.map(n => <span key={n} className="text-sm font-medium">{n}</span>)}
                        {node.id === "stages" && article.connections.stages.map(n => <span key={n} className="text-sm font-medium uppercase tracking-widest text-[10px]">{n}</span>)}
                        {node.id === "products" && article.connections.products.map(n => <Link key={n} href={`/products/${n}`} className="text-sm font-serif italic hover:text-accent transition-colors">{n}</Link>)}
                        {node.id === "science" && article.connections.science.map(n => <span key={n} className="text-sm font-medium">{n}</span>)}
                        {node.id === "related" && article.connections.articles.map(n => <Link key={n} href={`/explore/${n}`} className="text-sm font-light hover:text-accent transition-colors truncate max-w-[200px]">{n}</Link>)}
                        {node.id === "article" && <span className="text-sm font-medium">Currently Reading</span>}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>

          {/* SVG Connectors Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
             <motion.path d="M 25 30 L 50 30 L 75 30" stroke="var(--color-foreground)" strokeWidth="0.2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
             <motion.path d="M 25 70 L 50 70 L 75 70" stroke="var(--color-foreground)" strokeWidth="0.2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
             <motion.path d="M 50 30 L 50 70" stroke="var(--color-foreground)" strokeWidth="0.2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} />
             <motion.path d="M 25 30 L 50 70" stroke="var(--color-accent)" strokeWidth="0.2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6 }} />
          </svg>

        </div>
      </div>
    </div>
  );
}
