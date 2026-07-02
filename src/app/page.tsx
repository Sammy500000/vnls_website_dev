"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";

// New Emotional Sections
import { IntroPulseExperience } from "@/components/home/IntroPulseExperience";
import { HeroSection } from "@/components/home/HeroSection";
import { ListeningSection } from "@/components/home/ListeningSection";
import { ResearchJourneySection } from "@/components/home/ResearchJourneySection";
import { SciencePillarsSection } from "@/components/home/SciencePillarsSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  // Intro animation state
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <PageContainer>
      
      {/* Intro Experience */}
      {!introFinished && (
        <IntroPulseExperience onComplete={() => setIntroFinished(true)} />
      )}

      {/* Main Narrative Flow - Renders underneath intro, but fades in when ready */}
      <AnimatePresence>
         {/* We always render it to ensure scroll position is correct, but opacity transitions */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: introFinished ? 1 : 0 }}
           transition={{ duration: 2, ease: "easeInOut" }}
         >
           <HeroSection />
           <ListeningSection />
           <ResearchJourneySection />
           <SciencePillarsSection />
           <ProductsSection />
           <FinalCTASection />
         </motion.div>
      </AnimatePresence>

    </PageContainer>
  );
}
