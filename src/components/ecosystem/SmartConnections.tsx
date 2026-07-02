"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";
import { EcosystemNode } from "@/data/ecosystem/types";

interface Props {
  nodes: EcosystemNode[];
  orientation?: "horizontal" | "vertical";
}

export function SmartConnections({ nodes, orientation = "horizontal" }: Props) {
  if (!nodes || nodes.length === 0) return null;

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
      variants={EcosystemMotionEngine.gentleFloatIn}
      className={`flex ${orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"} gap-6 my-12`}
    >
      <div className="flex flex-col gap-2 shrink-0 pr-6 border-r border-[#D4C3B3]/30">
         <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
            Connected Knowledge
         </span>
         <span className="text-sm font-serif italic text-[#8E7E6D]">
            Explore deeply
         </span>
      </div>
      
      <div className={`flex ${orientation === "horizontal" ? "flex-row flex-wrap gap-4 items-center" : "flex-col gap-4"}`}>
        {nodes.map(node => (
          <Link 
            key={node.id} 
            href={`/${node.type}s/${node.id}`}
            className="group flex flex-col px-6 py-4 rounded-2xl bg-[#FDFBF7] border border-[#D4C3B3]/20 hover:border-[#C28E5E]/40 hover:bg-[#FAF8F5] transition-all duration-500 min-w-[200px]"
          >
             <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#B58A59]/60 mb-1">
               {node.type}
             </span>
             <span className="font-serif text-[#4A4036] group-hover:text-[#B58A59] transition-colors">
               {node.title}
             </span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
