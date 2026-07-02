import React from "react";
import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductStory } from "@/components/products/ProductStory";
import { KnowledgeHighlights } from "@/components/products/KnowledgeHighlights";
import { MaternalNutritionFacts } from "@/components/products/MaternalNutritionFacts";
import { SectionTransition } from "@/components/products/SectionTransition";
import { BenefitsSection } from "@/components/products/BenefitsSection";
import { WhyDifferent } from "@/components/products/WhyDifferent";
import { FormulationPhilosophy } from "@/components/products/FormulationPhilosophy";
import { IngredientExplorer } from "@/components/products/IngredientExplorer";
import { ScienceSection } from "@/components/products/ScienceSection";
import { ScienceInsights } from "@/components/products/ScienceInsights";
import { ProductSpecificationExperience } from "@/components/products/ProductSpecificationExperience";
import { QualityCommitment } from "@/components/products/QualityCommitment";
import { FlavourSection } from "@/components/products/FlavourSection";
import { UsageSection } from "@/components/products/UsageSection";
import { FAQSection } from "@/components/products/FAQSection";
import { MaternalJourneyMap } from "@/components/products/MaternalJourneyMap";
import { ProductDestinationSection } from "@/components/products/ProductDestinationSection";
import { matrusnehaData } from "@/data/products/matrusneha";

export default function MatrusnehaPage() {
  const data = matrusnehaData;

  return (
    <ProductPageLayout>
      <ProductHero 
        productId={data.id}
        title={data.hero.title}
        positioning={data.hero.positioning}
        benefits={data.hero.benefits}
        heroStory={data.hero.heroStory}
        cta={data.hero.cta}
      />
      
      <ProductStory 
        headline={data.story.headline}
        themes={data.story.themes}
        content={data.story.content}
      />

      <KnowledgeHighlights highlight={data.knowledgeHighlights.find(h => h.type === "Maternal Need")!} />

      <MaternalNutritionFacts facts={data.maternalFacts} />

      <SectionTransition text={data.sectionTransitions[0].text} />

      <BenefitsSection benefits={data.benefits} />

      <WhyDifferent 
        headline={data.whyDifferent.headline}
        explanation={data.whyDifferent.explanation}
        columns={data.whyDifferent.columns}
      />

      <FormulationPhilosophy 
        headline={data.philosophy.headline}
        explanation={data.philosophy.explanation}
        pillars={data.philosophy.pillars}
      />

      <SectionTransition text={data.sectionTransitions[1].text} />

      <IngredientExplorer ingredients={data.ingredients} />

      <ScienceSection 
        headline={data.science.headline} 
        introduction={data.science.introduction}
        pillars={data.science.pillars}
        summary={data.science.summary}
      />

      <ScienceInsights insights={data.scienceInsights} />

      <ProductSpecificationExperience specifications={data.specifications} />

      <QualityCommitment 
        headline={data.qualityCommitments.headline}
        explanation={data.qualityCommitments.explanation}
        pillars={data.qualityCommitments.pillars}
      />

      <SectionTransition text={data.sectionTransitions[2].text} />

      <FlavourSection flavours={data.flavours} />
      
      <UsageSection steps={data.usage} />
      
      <FAQSection faqs={data.faqs} />
      
      <MaternalJourneyMap stages={data.journeyMap} />
      
      <ProductDestinationSection nextProduct={data.explore.nextProduct} />
    </ProductPageLayout>
  );
}
