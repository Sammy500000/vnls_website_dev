export interface HeroData {
  headline: string;
  supportingText: string;
}

export interface TimelineStage {
  id: string;
  title: string;
  overview: string;
  nutritionalPriorities: string[];
  developmentPriorities: string[];
  insight: string;
}

export interface AuthorityInsight {
  type: "Maternal Insight" | "Research Insight" | "Development Insight" | "Nutritional Insight";
  quote: string;
}

export interface NutrientConnection {
  science: string[];
  ingredients: string[];
  products: string[];
}

export interface Nutrient {
  id: string;
  name: string;
  whatItIs: string;
  whyItMatters: string;
  whenItMatters: string;
  maternalImpact: string;
  developmentImpact: string;
  connections: NutrientConnection;
}

export interface TimingScenario {
  nutrient: string;
  stage1: { name: string; need: string; outcome: string; product: string };
  stage2: { name: string; need: string; outcome: string; product: string };
}

export interface RelationshipNode {
  id: string;
  label: string;
  explanation: string;
  impact: string;
  children?: RelationshipNode[];
}

export interface KnowledgeModule {
  id: string;
  title: string;
  description: string;
  details: string;
}

export interface ResearchStage {
  title: string;
  whyItExists: string;
  whatWasLearned: string;
  howItInfluenced: string;
}

export interface ScienceInsight {
  title: string;
  explanation: string;
  details: string;
}

export interface GraphNode {
  id: string;
  type: "stage" | "nutrient" | "ingredient" | "product" | "outcome";
  label: string;
  connections: string[]; // IDs of connected nodes
}

export interface ProductConnection {
  nutrient: string;
  maternalNeed: string;
  formulationLogic: string;
  product: string;
  productTarget: string; // e.g. /products/garbhika
}

export interface ScienceData {
  hero: HeroData;
  timeline: TimelineStage[];
  nutrients: Nutrient[];
  timing: TimingScenario[];
  relationshipMap: RelationshipNode; // Root node
  knowledgeModules: KnowledgeModule[];
  researchStory: ResearchStage[];
  insightLibrary: ScienceInsight[];
  knowledgeGraph: GraphNode[];
  productConnections: ProductConnection[];
  transitions: string[];
  insights: AuthorityInsight[];
}
