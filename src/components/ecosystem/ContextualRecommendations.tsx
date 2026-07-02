"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EcosystemRelationshipEngine } from "@/lib/ecosystem/EcosystemRelationshipEngine";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";
import { EcosystemNode } from "@/data/ecosystem/types";

interface Props {
  currentNode: EcosystemNode;
  recommendedNodes: EcosystemNode[];
}

export function ContextualRecommendations({ currentNode, recommendedNodes }: Props) {
  if (!recommendedNodes || recommendedNodes.length === 0) return null;

  return (
    <div className="w-full py-16 border-t border-[#D4C3B3]/30 mt-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {recommendedNodes.map((recNode) => {
          const transitionCopy = EcosystemRelationshipEngine.getRecommendationContext(currentNode.type, recNode.type);
          
          return (
            <motion.div 
              key={recNode.id}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              variants={EcosystemMotionEngine.gentleFloatIn}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center p-8 rounded-3xl bg-[#FAF8F5] border border-[#D4C3B3]/20 hover:border-[#C28E5E]/30 transition-colors group"
            >
              <div className="flex-1 flex flex-col gap-3">
                <p className="text-sm font-serif italic text-[#8E7E6D]">
                  {transitionCopy}
                </p>
                <h4 className="font-serif text-2xl text-[#4A4036]">{recNode.title}</h4>
                <p className="text-[#6D5D4D] font-light text-sm">{recNode.description}</p>
              </div>
              
              <Link 
                href={`/${recNode.type}s/${recNode.id}`} // Simple routing logic
                className="shrink-0 text-sm font-serif italic text-[#B58A59] border-b border-[#B58A59]/30 pb-0.5 hover:border-[#B58A59] flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Continue reading
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
