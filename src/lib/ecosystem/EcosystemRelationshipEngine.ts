import { ecosystemData } from "@/data/ecosystem/data";
import { EcosystemNode, RecommendationReason } from "@/data/ecosystem/types";

export class EcosystemRelationshipEngine {
  
  /**
   * Retrieves a deeply humanized transition phrase answering "WHY" the connection exists,
   * avoiding algorithmic "You might also like" patterns.
   */
  static getRecommendationContext(fromType: EcosystemNode["type"], toType: EcosystemNode["type"]): string {
    const reason = ecosystemData.recommendationReasons.find(
      (r) => r.fromType === fromType && r.toType === toType
    );

    if (reason) return reason.narrativeContext;

    // Fallbacks ensuring emotional continuity
    switch (toType) {
      case "science":
        return "Understanding the clinical reality helps explain what you are experiencing.";
      case "product":
        return "Support systems designed specifically for this phase of the journey.";
      case "article":
        return "You may also want to understand the deeper physiological shifts happening now.";
      case "stage":
        return "As nutritional demands evolve, this prepares you for the next shift in your journey.";
      case "nutrient":
        return "These foundational elements are critical to supporting this transition safely.";
      default:
        return "Continued understanding for your maternal journey.";
    }
  }

  /**
   * Gets related elements for a journey stage
   */
  static getJourneyConnections(stageId: string) {
    const stage = ecosystemData.journeyStages[stageId];
    if (!stage) return null;

    return {
      overview: stage.overview,
      emotionalState: stage.emotionalState,
      primaryNeed: ecosystemData.maternalNeeds[stage.primaryNeedId],
      nutritionalFocus: stage.nutritionalFocusIds,
      science: stage.relatedScienceIds,
      support: stage.relatedSupportIds,
      articles: stage.relatedKnowledgeIds
    };
  }

}
