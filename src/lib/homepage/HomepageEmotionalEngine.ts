export type EmotionalState = 
  | "Calm"
  | "Understanding"
  | "Careful Listening"
  | "Support"
  | "Reassurance"
  | "Comfort";

export const HomepageEmotionalEngine = {
  getTransitionCopy(from: EmotionalState, to: EmotionalState): string {
    const transitions: Record<string, string> = {
      "Calm_Understanding": "Sometimes support begins by slowing down enough to hear it.",
      "Understanding_Careful Listening": "We listened before we formulated.",
      "Careful Listening_Support": "Support begins with understanding.",
      "Support_Reassurance": "Care changes as motherhood changes.",
      "Reassurance_Comfort": "Because every stage deserves to feel supported.",
    };
    return transitions[`${from}_${to}`] || "";
  },

  getVisualTemperature(state: EmotionalState): string {
    switch (state) {
      case "Calm":
        return "bg-[#FAF8F5]"; // Light cream, soft ivory
      case "Understanding":
      case "Careful Listening":
        return "bg-[#F7F3EB]"; // Deepening warmth
      case "Support":
      case "Reassurance":
        return "bg-[#F3EBE1]"; // Golden warmth, maternal glow
      case "Comfort":
        return "bg-[#EFE3D4]"; // Deep warm gold reassurance
      default:
        return "bg-background";
    }
  }
};
