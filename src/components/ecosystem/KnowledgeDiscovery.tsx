"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";
import { EcosystemNode } from "@/data/ecosystem/types";

interface Props {
  titleContext?: string; // e.g. "During this stage, mothers often explore..."
  nodes: EcosystemNode[];
}

export function KnowledgeDiscovery({ 
  titleContext = "You may also want to understand...",
  nodes 
}: Props) {
  
  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="w-full py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 flex flex-col gap-16">
        
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={EcosystemMotionEngine.gentleFloatIn}
          className="flex flex-col gap-4 border-l border-[#D4C3B3]/40 pl-6"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
            Guided Discovery
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#4A4036] font-medium leading-[1.3]">
            {titleContext}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-6"
            >
              <Link href={`/${node.type}s/${node.id}`} className="block overflow-hidden rounded-2xl aspect-[4/3] bg-[#FDFBF7] border border-[#D4C3B3]/20 hover:border-[#C28E5E]/40 transition-colors shadow-sm hover:shadow-md relative">
                 {/* Soft internal gradient mimicking an image if one isn't passed */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#EFE3D4]/20 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <span className="text-sm font-serif italic text-[#8E7E6D]/80">Explore {node.type}</span>
                 </div>
              </Link>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B58A59]/60">
                  {node.type.toUpperCase()}
                </span>
                <h4 className="font-serif text-xl text-[#4A4036] leading-snug group-hover:text-[#B58A59] transition-colors">
                  {node.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
