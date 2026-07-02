"use client";

import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { UniversalKnowledgeHighlight } from "@/components/ecosystem/UniversalKnowledgeHighlight";
import { UniversalRelatedContent } from "@/components/ecosystem/UniversalRelatedContent";
import { SmartConnections } from "@/components/ecosystem/SmartConnections";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { EcosystemMotionEngine } from "@/lib/ecosystem/EcosystemMotionEngine";

export default function MomsCornerPage() {
  return (
    <PageContainer>
      <div className="pt-48 pb-24 bg-[#FAF8F5]">
        <Container className="max-w-4xl mx-auto flex flex-col gap-12 text-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={EcosystemMotionEngine.pageTransition}
            className="flex flex-col gap-6 items-center"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B58A59] opacity-80">
              Mom's Corner
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#4A4036] font-medium leading-[1.1] tracking-tight text-balance">
              The emotional heart of the journey.
            </h1>
            <p className="text-xl md:text-2xl text-[#8E7E6D] font-light mt-4 max-w-2xl text-balance">
              Recovery and support are not just physical processes. They are profoundly emotional. You are not alone in this transition.
            </p>
          </motion.div>
        </Container>
      </div>

      <UniversalKnowledgeHighlight 
        type="Maternal Insight"
        content="Fatigue in the postpartum period is not weakness. It is your body aggressively reallocating resources to heal."
        emotionalContext="Reassurance"
      />

      <Container className="max-w-5xl mx-auto py-24">
        <SmartConnections 
          orientation="horizontal"
          nodes={[
            { id: "recovery", type: "stage", title: "Postpartum Healing", description: "" },
            { id: "matrusneha", type: "product", title: "Matrusneha Support", description: "" },
            { id: "fourth-trimester", type: "article", title: "The Fourth Trimester Reality", description: "" }
          ]} 
        />
      </Container>

      <UniversalRelatedContent 
        nextPathwayLabel="Understanding Postpartum Replenishment"
        nextPathwayDescription="Explore how clinical nutrition supports emotional and physical recovery."
        nextPathwayHref="/science"
      />
    </PageContainer>
  );
}
