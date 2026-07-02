export type EmotionalState = 
  | "Calm"
  | "Understanding"
  | "Careful Listening"
  | "Support"
  | "Reassurance"
  | "Comfort"
  | "Relief"
  | "Nurtured"
  | "Safe"
  | "Heard"
  | "Guided";

export interface MaternalNeed {
  id: string;
  title: string;
  description: string;
  emotionalState: EmotionalState;
}

export interface EcosystemNode {
  id: string;
  type: "stage" | "science" | "product" | "nutrient" | "article" | "need";
  title: string;
  description: string;
}

export interface RecommendationReason {
  fromType: EcosystemNode["type"];
  toType: EcosystemNode["type"];
  narrativeContext: string; // E.g., "Because nutritional needs continue evolving during this stage..."
}

export interface JourneyStage {
  id: string;
  title: string;
  overview: string;
  emotionalState: EmotionalState;
  primaryNeedId: string;
  nutritionalFocusIds: string[];
  relatedKnowledgeIds: string[]; // Articles
  relatedScienceIds: string[];
  relatedSupportIds: string[]; // Products
}

export interface EcosystemData {
  maternalNeeds: Record<string, MaternalNeed>;
  journeyStages: Record<string, JourneyStage>;
  recommendationReasons: RecommendationReason[];
}
