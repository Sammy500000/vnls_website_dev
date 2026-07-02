export type Ingredient = {
  id: string;
  name: string;
  whyIncluded: string;
  whenItMatters: string;
  scientificContext: string;
  maternalBenefit: string;
  fetalBenefit: string;
  traditionalRelevance: string;
  clinicalInsight?: string;
  relatedScience?: string;
};

export type Flavour = {
  id: string;
  name: string;
  story: string;
  sensoryExperience: string;
  emotionalConnection: string;
  whyMothersPrefer: string;
};

export type UsageStep = {
  id: string;
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Specification = {
  title: string;
  whyItMatters: string;
  outcome: string;
};

export type QualityPillar = {
  title: string;
  description: string;
};

export type WhyDifferentColumn = {
  heading: string;
  steps: string[];
  highlighted: boolean;
};

export type JourneyStage = {
  id: string;
  label: string;
  description: string;
  covered: boolean;
  scrollTarget?: string;
};

export type ScienceInsight = {
  title: string;
  explanation: string;
};

export type KnowledgeHighlight = {
  type: "Science Insight" | "Traditional Wisdom" | "Maternal Need" | "Research Focus";
  text: string;
};

export type SectionTransitionData = {
  id: string;
  text: string;
};

export type ProductData = {
  id: "garbhika" | "matrusneha";
  hero: {
    title: string;
    positioning: string;
    benefits: string[];
    heroStory: {
      title: string;
      content: string;
    };
    cta: string;
  };
  story: {
    themes: string[];
    headline: string;
    content: string[];
  };
  maternalFacts: string[];
  knowledgeHighlights: KnowledgeHighlight[];
  sectionTransitions: SectionTransitionData[];
  whyDifferent: {
    headline: string;
    explanation: string;
    columns: WhyDifferentColumn[];
  };
  philosophy: {
    headline: string;
    explanation: string;
    pillars: {
      title: string;
      description: string;
      insight: string;
    }[];
  };
  ingredients: Ingredient[];
  benefits: {
    title: string;
    description: string;
  }[];
  science: {
    headline: string;
    introduction: string;
    pillars: {
      title: string;
      explanation: string;
      insight: string;
    }[];
    summary: string;
  };
  scienceInsights: ScienceInsight[];
  specifications: Specification[];
  qualityCommitments: {
    headline: string;
    explanation: string;
    pillars: QualityPillar[];
  };
  flavours: Flavour[];
  usage: UsageStep[];
  faqs: FAQ[];
  journeyMap: JourneyStage[];
  explore: {
    nextProduct: {
      id: string;
      name: string;
      journey: string[];
    };
  };
};
