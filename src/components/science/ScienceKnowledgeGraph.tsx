"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { GraphNode } from "@/data/science/types";

interface ScienceKnowledgeGraphProps {
  nodes: GraphNode[];
}

export function ScienceKnowledgeGraph({ nodes }: ScienceKnowledgeGraphProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Group nodes by type for columns
  const stages = useMemo(() => nodes.filter(n => n.type === "stage"), [nodes]);
  const nutrients = useMemo(() => nodes.filter(n => n.type === "nutrient"), [nodes]);
  const ingredients = useMemo(() => nodes.filter(n => n.type === "ingredient"), [nodes]);
  const products = useMemo(() => nodes.filter(n => n.type === "product"), [nodes]);
  const outcomes = useMemo(() => nodes.filter(n => n.type === "outcome"), [nodes]);

  const columns = [
    { title: "Stage", data: stages },
    { title: "Nutrient", data: nutrients },
    { title: "Ingredient", data: ingredients },
    { title: "Product", data: products },
    { title: "Outcome", data: outcomes }
  ];

  // Helper to determine if a node is connected to the hovered node
  const isConnected = (nodeId: string) => {
    if (!hoveredNode) return false;
    if (nodeId === hoveredNode) return true;
    
    // Direct connections
    const hNode = nodes.find(n => n.id === hoveredNode);
    if (hNode?.connections.includes(nodeId)) return true;
    
    // Reverse connections
    const rNode = nodes.find(n => n.id === nodeId);
    if (rNode?.connections.includes(hoveredNode)) return true;

    // It's highly complex to do full multi-level traversal synchronously here without a pre-computed map,
    // so we'll stick to 1st degree connections for visual clarity.
    return false;
  };

  return (
    <Section id="knowledge-graph" variant="editorial" className="py-24 lg:py-40 hidden md:block overflow-hidden bg-background">
      <Container className="flex flex-col gap-16 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Knowledge Graph
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-foreground tracking-tight">
            The Formulation Ecosystem
          </h2>
        </motion.div>

        <div className="relative w-full min-h-[500px] flex justify-between items-stretch">
          
          {/* Render Columns */}
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6 w-full max-w-[180px] z-10 relative">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground text-center mb-4 border-b border-border/30 pb-4">
                {col.title}
              </span>
              
              <div className="flex flex-col justify-center gap-8 flex-1">
                {col.data.map(node => {
                  const active = hoveredNode ? isConnected(node.id) : true;
                  const hovered = hoveredNode === node.id;
                  
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: colIdx * 0.1 }}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`px-4 py-3 text-center rounded-xl border text-sm font-medium transition-all duration-300 cursor-pointer backdrop-blur-md relative
                        ${hovered 
                          ? "bg-accent/10 border-accent/50 text-accent shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.2)] scale-105 z-20" 
                          : active 
                            ? "glass-surface border-border/40 text-foreground hover:border-accent/30 z-10" 
                            : "bg-background border-border/10 text-muted-foreground/30 opacity-40 z-0"
                        }
                      `}
                    >
                      {node.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Connectors Simulation (Since actual SVG drawing between dynamic HTML nodes requires complex refs/bounding boxes, we will use a visual representation background) */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-20">
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(var(--color-accent-rgb),0.15),transparent_70%)]" />
             {/* Decorative flowing lines */}
             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <motion.path 
                 d="M 10 50 C 30 20, 70 80, 90 50" 
                 fill="none" stroke="var(--color-accent)" strokeWidth="0.1" 
                 initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 3, ease: "easeInOut" }} 
               />
               <motion.path 
                 d="M 10 30 C 40 50, 60 20, 90 70" 
                 fill="none" stroke="var(--color-primary)" strokeWidth="0.1" 
                 initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }} 
               />
               <motion.path 
                 d="M 10 70 C 40 20, 60 80, 90 30" 
                 fill="none" stroke="var(--color-accent)" strokeWidth="0.1" opacity="0.5"
                 initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 3, delay: 1, ease: "easeInOut" }} 
               />
             </svg>
          </div>

        </div>

      </Container>
    </Section>
  );
}
