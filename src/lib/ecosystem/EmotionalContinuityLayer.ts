import { EmotionalState } from "@/data/ecosystem/types";

export class EmotionalContinuityLayer {
  
  /**
   * Translates an emotional state into a specific background warmth/color class.
   * Ensures visual continuity without abrupt changes.
   */
  static getVisualTemperature(state: EmotionalState): string {
    const temperatureMap: Record<EmotionalState, string> = {
      "Calm": "bg-[#FAF8F5]",
      "Understanding": "bg-[#F7F4F0]",
      "Careful Listening": "bg-[#FDFBF7]",
      "Support": "bg-[#F5EFE6]",
      "Reassurance": "bg-[#F3EBE1]",
      "Comfort": "bg-[#EFE3D4]",
      "Relief": "bg-[#E8DDD0]",
      "Nurtured": "bg-[#F0E6D8]",
      "Safe": "bg-[#FAF8F5]",
      "Heard": "bg-[#FDFBF7]",
      "Guided": "bg-[#F3EBE1]"
    };

    return temperatureMap[state] || "bg-[#FAF8F5]";
  }

}
