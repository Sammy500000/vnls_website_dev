import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { NoiseTexture } from "@/components/shared/NoiseTexture";
import { ScienceProgressNav } from "@/components/science/ScienceProgressNav";
import { ScienceHubHero } from "@/components/science/ScienceHubHero";
import { MaternalNutritionTimeline } from "@/components/science/MaternalNutritionTimeline";
import { ScienceSectionTransition } from "@/components/science/ScienceSectionTransition";
import { AuthorityInsight } from "@/components/science/AuthorityInsight";
import { NutrientExplorer } from "@/components/science/NutrientExplorer";
import { WhyTimingMatters } from "@/components/science/WhyTimingMatters";
import { ScienceRelationshipMap } from "@/components/science/ScienceRelationshipMap";
import { KnowledgeModules } from "@/components/science/KnowledgeModules";
import { ResearchStory } from "@/components/science/ResearchStory";
import { ScienceInsightLibrary } from "@/components/science/ScienceInsightLibrary";
import { ScienceKnowledgeGraph } from "@/components/science/ScienceKnowledgeGraph";
import { ProductConnections } from "@/components/science/ProductConnections";
import { ScienceJourneyConclusion } from "@/components/science/ScienceJourneyConclusion";
import { scienceData } from "@/data/science/data";

export default function SciencePage() {
  const data = scienceData;

  return (
    <PageContainer className="bg-background relative">
      <NoiseTexture className="fixed inset-0 z-0" />
      
      <div className="relative z-10 w-full flex xl:gap-16 xl:pr-16 max-w-[1600px] mx-auto">
        {/* Desktop Sticky Navigation Column */}
        <ScienceProgressNav />

        {/* Main Content Area */}
        <div className="flex-1 w-full max-w-[1200px] xl:pl-16">
          <ScienceHubHero data={data.hero} />
          
          <AuthorityInsight insight={data.insights[0]} />
          
          <MaternalNutritionTimeline stages={data.timeline} />
          
          <ScienceSectionTransition text={data.transitions[0]} />
          
          <NutrientExplorer nutrients={data.nutrients} />
          
          <ScienceKnowledgeGraph nodes={data.knowledgeGraph} />

          <AuthorityInsight insight={data.insights[1]} />
          
          <WhyTimingMatters scenarios={data.timing} />
          
          <ScienceSectionTransition text={data.transitions[1]} />
          
          <ScienceRelationshipMap rootNode={data.relationshipMap} />
          
          <AuthorityInsight insight={data.insights[2]} />

          <KnowledgeModules modules={data.knowledgeModules} />
          
          <ScienceInsightLibrary insights={data.insightLibrary} />

          <AuthorityInsight insight={data.insights[3]} />
          
          <ResearchStory stages={data.researchStory} />
          
          <ScienceSectionTransition text={data.transitions[2]} />

          <ProductConnections connections={data.productConnections} />
          
          <ScienceJourneyConclusion />
        </div>
      </div>
    </PageContainer>
  );
}
