import { EcosystemData } from "./types";

export const ecosystemData: EcosystemData = {
  maternalNeeds: {
    "need-foundation": {
      id: "need-foundation",
      title: "Foundational Support",
      description: "Building the architecture for new life while protecting maternal reserves.",
      emotionalState: "Supported" as any,
    },
    "need-expansion": {
      id: "need-expansion",
      title: "Physiological Expansion",
      description: "Adapting to the profound shift in blood volume, skeletal demands, and cognitive development.",
      emotionalState: "Understood" as any,
    },
    "need-recovery": {
      id: "need-recovery",
      title: "Deep Replenishment",
      description: "Restoring the profound energy and nutrients given during childbirth.",
      emotionalState: "Reassurance" as any,
    }
  },

  journeyStages: {
    "trimester-1": {
      id: "trimester-1",
      title: "The First Trimester",
      overview: "A period of profound unseen growth, requiring gentle foundational support.",
      emotionalState: "Calm",
      primaryNeedId: "need-foundation",
      nutritionalFocusIds: ["Folate", "Vitamin B12", "Choline"],
      relatedKnowledgeIds: ["early-pregnancy-nutrition"],
      relatedScienceIds: ["Neural Tube Development"],
      relatedSupportIds: ["Garbhika"]
    },
    "trimester-2": {
      id: "trimester-2",
      title: "The Second Trimester",
      overview: "The physical demands increase rapidly as maternal blood volume expands and skeletal architecture forms.",
      emotionalState: "Understanding",
      primaryNeedId: "need-expansion",
      nutritionalFocusIds: ["Iron", "Calcium", "Vitamin D3"],
      relatedKnowledgeIds: ["iron-absorption-during-pregnancy"],
      relatedScienceIds: ["Blood Volume Expansion", "Skeletal Architecture"],
      relatedSupportIds: ["Garbhika"]
    },
    "trimester-3": {
      id: "trimester-3",
      title: "The Third Trimester",
      overview: "Rapid fetal brain development requires deep, bioavailable cognitive and structural support.",
      emotionalState: "Support",
      primaryNeedId: "need-expansion",
      nutritionalFocusIds: ["DHA", "Choline", "Iron"],
      relatedKnowledgeIds: ["why-dha-timing-matters-in-the-third-trimester"],
      relatedScienceIds: ["Brain Development", "Maternal Fat Stores"],
      relatedSupportIds: ["Garbhika"]
    },
    "recovery": {
      id: "recovery",
      title: "Postpartum Recovery",
      overview: "The period of healing, where maternal reserves must be aggressively yet gently replenished.",
      emotionalState: "Reassurance",
      primaryNeedId: "need-recovery",
      nutritionalFocusIds: ["Iron", "Collagen", "B-Complex"],
      relatedKnowledgeIds: ["the-fourth-trimester-healing"],
      relatedScienceIds: ["Tissue Repair", "Lactation Demands"],
      relatedSupportIds: ["Matrusneha"]
    }
  },

  recommendationReasons: [
    {
      fromType: "stage",
      toType: "science",
      narrativeContext: "During this stage, understanding the body's internal shifts can provide immense comfort. The science below explains exactly why you might be feeling these changes."
    },
    {
      fromType: "science",
      toType: "product",
      narrativeContext: "Support becomes meaningful when it is directly informed by this clinical reality."
    },
    {
      fromType: "product",
      toType: "article",
      narrativeContext: "Every formulation begins with deeper understanding. Explore the clinical observations that shaped this support system."
    },
    {
      fromType: "article",
      toType: "stage",
      narrativeContext: "Because nutritional needs continue evolving, it helps to see how this knowledge applies to the journey ahead."
    },
    {
      fromType: "article",
      toType: "nutrient",
      narrativeContext: "The clinical reality discussed here relies heavily on these specific foundational elements."
    }
  ]
};
