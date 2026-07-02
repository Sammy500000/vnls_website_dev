import { ScienceData } from "./types";

export const scienceData: ScienceData = {
  hero: {
    headline: "The Science Behind Maternal Nourishment",
    supportingText: "We believe that profound physiological changes require precise, stage-specific nutritional architecture. Explore the research that drives our formulations."
  },

  transitions: [
    "Understanding the stage reveals the need.",
    "Understanding the need reveals the nutrient.",
    "Understanding the nutrient reveals the formulation."
  ],

  insights: [
    { type: "Maternal Insight", quote: "The mother's body prioritizes fetal development, often at the expense of her own nutrient reserves. Formulations must protect both." },
    { type: "Research Insight", quote: "Bioavailability is not just about absorption rates; it's about delivering nutrients in forms that a compromised digestive system can handle." },
    { type: "Development Insight", quote: "The architectural foundations of the infant's brain and immune system are built from the raw materials provided during the third trimester." },
    { type: "Nutritional Insight", quote: "A generic prenatal vitamin assumes pregnancy is a static state. The clinical reality is that nutritional demands shift radically every month." }
  ],

  timeline: [
    {
      id: "preconception", title: "Preconception", overview: "Preparing the physiological environment.",
      nutritionalPriorities: ["Folate accumulation", "Iron store building", "Cellular defense"],
      developmentPriorities: ["Egg quality", "Uterine lining preparation"],
      insight: "It takes roughly three months for nutrient reserves to reach optimal levels for conception."
    },
    {
      id: "trimester-1", title: "Trimester 1", overview: "Rapid cellular division and organogenesis.",
      nutritionalPriorities: ["Neural tube protection", "Nausea management", "B-Vitamin support"],
      developmentPriorities: ["Neural tube closure", "Heart formation", "Basic organ architecture"],
      insight: "While energy demands remain baseline, the demand for precise micronutrient co-factors is critical."
    },
    {
      id: "trimester-2", title: "Trimester 2", overview: "Skeletal development and vascular expansion.",
      nutritionalPriorities: ["Calcium absorption", "Iron for blood volume", "Protein synthesis"],
      developmentPriorities: ["Skeletal calcification", "Hearing development", "Lung maturation"],
      insight: "Maternal blood volume expands by up to 50%, requiring massive iron reserves to prevent anemia."
    },
    {
      id: "trimester-3", title: "Trimester 3", overview: "Brain development and rapid weight gain.",
      nutritionalPriorities: ["DHA accumulation", "Protein density", "Digestive comfort"],
      developmentPriorities: ["Cerebral cortex expansion", "Retinal development", "Fat storage"],
      insight: "Fetal DHA accumulation accelerates dramatically, drawing heavily from maternal stores."
    },
    {
      id: "birth", title: "Birth", overview: "The extreme physical exertion of delivery.",
      nutritionalPriorities: ["Energy reserves", "Hydration", "Electrolyte balance"],
      developmentPriorities: ["Transition to external breathing", "Temperature regulation"],
      insight: "Labor acts as a major endurance event, rapidly depleting glycogen and hydration levels."
    },
    {
      id: "recovery", title: "Recovery", overview: "Tissue repair and hormonal stabilization.",
      nutritionalPriorities: ["Collagen synthesis", "Iron replenishment", "Adaptogenic stress support"],
      developmentPriorities: ["Infant gut microbiome establishment"],
      insight: "The sudden drop in progesterone and estrogen triggers significant physiological stress requiring targeted adaptogens."
    },
    {
      id: "breastfeeding", title: "Breastfeeding", overview: "Sustaining high-calorie liquid nutrition.",
      nutritionalPriorities: ["Galactagogue support", "Calcium preservation", "Hydration"],
      developmentPriorities: ["Immune system fortifying", "Brain development via milk DHA"],
      insight: "Lactation demands up to 500 extra calories per day and aggressively leaches maternal calcium if not supplemented."
    }
  ],

  nutrients: [
    {
      id: "protein", name: "Protein", whatItIs: "Macronutrient composed of amino acids.",
      whyItMatters: "Provides the structural building blocks for all fetal organs and maternal tissue expansion.",
      whenItMatters: "Increases significantly in Trimester 2 and peaks in Trimester 3 and Lactation.",
      maternalImpact: "Prevents muscle wasting, supports uterine expansion, and aids postpartum tissue healing.",
      developmentImpact: "Essential for fetal weight gain and the synthesis of breast milk immunoglobulins.",
      connections: {
        science: ["Tissue Synthesis", "Lactation Energy Demand"],
        ingredients: ["Whey Protein Isolate", "Milk Protein"],
        products: ["Garbhika", "Matrusneha"]
      }
    },
    {
      id: "dha", name: "DHA", whatItIs: "An Omega-3 polyunsaturated fatty acid.",
      whyItMatters: "It is a primary structural component of the human brain, cerebral cortex, skin, and retina.",
      whenItMatters: "Critical during Trimester 3 and Breastfeeding.",
      maternalImpact: "Protects against maternal mood disorders and postpartum depression.",
      developmentImpact: "Directly determines the structural integrity of the fetal and infant brain.",
      connections: {
        science: ["Brain Development", "Neural Growth", "Trimester Requirements"],
        ingredients: ["Algal DHA"],
        products: ["Garbhika"]
      }
    },
    {
      id: "iron", name: "Iron", whatItIs: "A mineral essential for blood production.",
      whyItMatters: "Transports oxygen to cells and supports the massive expansion in maternal blood volume.",
      whenItMatters: "Throughout pregnancy, escalating sharply in Trimester 2 and 3, and critical during recovery.",
      maternalImpact: "Prevents severe fatigue, anemia, and protects against blood loss during delivery.",
      developmentImpact: "Builds the infant's own iron stores, which must last for the first six months of life.",
      connections: {
        science: ["Blood Volume Expansion", "Bioavailability"],
        ingredients: ["Ferrous Bisglycinate"],
        products: ["Garbhika", "Matrusneha"]
      }
    },
    {
      id: "calcium", name: "Calcium", whatItIs: "A mineral essential for skeletal structure.",
      whyItMatters: "Required for building the fetal skeleton and producing breast milk.",
      whenItMatters: "Trimester 2, Trimester 3, and throughout Breastfeeding.",
      maternalImpact: "Prevents the leaching of calcium from maternal bones, protecting long-term skeletal health.",
      developmentImpact: "Ensures proper bone density and dental development in the fetus.",
      connections: {
        science: ["Bone Development", "Lactation Demand"],
        ingredients: ["Calcium Citrate Malate"],
        products: ["Garbhika", "Matrusneha"]
      }
    }
  ],

  timing: [
    {
      nutrient: "Iron",
      stage1: { name: "Trimester 3", need: "Blood volume expansion & fetal storage", outcome: "Prevents maternal anemia & ensures fetal oxygenation", product: "Garbhika" },
      stage2: { name: "Postpartum Recovery", need: "Replenishing delivery blood loss", outcome: "Restores energy & supports initial healing", product: "Matrusneha" }
    },
    {
      nutrient: "Protein",
      stage1: { name: "Trimester 2/3", need: "Rapid fetal tissue generation", outcome: "Healthy birth weight & placental integrity", product: "Garbhika" },
      stage2: { name: "Breastfeeding", need: "Milk protein synthesis & tissue repair", outcome: "High-quality milk & accelerated healing", product: "Matrusneha" }
    }
  ],

  relationshipMap: {
    id: "nutrition", label: "Targeted Nutrition", explanation: "Precision-dosed nutrients.", impact: "Base capability",
    children: [
      {
        id: "absorption", label: "High Absorption", explanation: "Bioavailable forms bypass digestive strain.", impact: "Maximum utility",
        children: [
          {
            id: "maternal", label: "Maternal Resilience", explanation: "Maternal stores are protected.", impact: "Reduced fatigue",
            children: [
              {
                id: "development", label: "Uncompromised Development", explanation: "Fetus receives steady nutrient flow.", impact: "Optimal growth",
                children: [
                  { id: "outcome", label: "Long-Term Outcomes", explanation: "Healthy birth, robust recovery, and sustained lactation.", impact: "Generational health" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  knowledgeModules: [
    { id: "brain", title: "Brain Development", description: "How nutrition builds cognition.", details: "The fetal brain grows remarkably during the third trimester, requiring massive amounts of DHA, Choline, and Iodine. Deficiencies during this window are often irreversible, making precise supplementation critical." },
    { id: "recovery", title: "Maternal Recovery", description: "The biology of the fourth trimester.", details: "Childbirth leaves the body depleted of iron, protein, and calcium. The sudden hormonal shift requires targeted adaptogens to manage stress while specific amino acids drive tissue repair." },
    { id: "lactation", title: "Lactation Support", description: "Fueling the most demanding phase.", details: "Breast milk production requires an additional 500 calories a day and specific galactagogues (like Shatavari) to stimulate prolactin without relying on artificial stimulants." }
  ],

  researchStory: [
    { title: "Listening", whyItExists: "To understand the reality of motherhood.", whatWasLearned: "Clinical efficacy is useless if sensory aversions prevent daily consumption.", howItInfluenced: "Formulations must be palatable, soothing, and easily digestible." },
    { title: "Research", whyItExists: "To identify exact stage demands.", whatWasLearned: "Pregnancy and postpartum require fundamentally different biological support.", howItInfluenced: "The creation of two distinct products: Garbhika and Matrusneha." },
    { title: "Ingredient Evaluation", whyItExists: "To maximize absorption.", whatWasLearned: "Standard synthetic vitamins often fail to cross the placental barrier efficiently.", howItInfluenced: "Strict use of high-bioavailability forms like Methylfolate and Ferrous Bisglycinate." },
    { title: "Validation", whyItExists: "To ensure absolute safety.", whatWasLearned: "Contaminants in supplements can transfer to the fetus or breast milk.", howItInfluenced: "Rigorous heavy-metal and microbial testing protocols." },
    { title: "Formulation", whyItExists: "To finalize the product.", whatWasLearned: "Nutrition is a daily habit.", howItInfluenced: "Integrating clinical ingredients into familiar, comforting, traditional formats." }
  ],

  insightLibrary: [
    { title: "Why Iron Demand Changes", explanation: "Blood volume increases by 50%.", details: "During pregnancy, the maternal body creates an entirely new organ (the placenta) and vastly increases blood volume to transport oxygen. This requires iron. Postpartum, iron is needed to recover from the blood loss of birth." },
    { title: "Why Bioavailability Matters", explanation: "Digestion is compromised.", details: "Progesterone relaxes smooth muscles during pregnancy, slowing digestion. Standard vitamins can cause severe constipation and nausea. Bioavailable forms are absorbed gently, preventing digestive distress." },
    { title: "Why Timing Matters", explanation: "Fetal growth is non-linear.", details: "You don't need the same nutrients at week 8 as you do at week 38. Neural tube closure happens early (requiring folate), while brain mass expansion happens late (requiring DHA)." }
  ],

  knowledgeGraph: [
    { id: "stage_t3", type: "stage", label: "Trimester 3", connections: ["nut_dha", "nut_iron"] },
    { id: "stage_recovery", type: "stage", label: "Recovery", connections: ["nut_iron", "nut_protein"] },
    { id: "nut_dha", type: "nutrient", label: "DHA", connections: ["ing_algal", "out_brain"] },
    { id: "nut_iron", type: "nutrient", label: "Iron", connections: ["ing_bisglycinate", "out_energy"] },
    { id: "nut_protein", type: "nutrient", label: "Protein", connections: ["ing_whey", "out_healing"] },
    { id: "ing_algal", type: "ingredient", label: "Algal Extract", connections: ["prod_garbhika"] },
    { id: "ing_bisglycinate", type: "ingredient", label: "Ferrous Bisglycinate", connections: ["prod_garbhika", "prod_matrusneha"] },
    { id: "ing_whey", type: "ingredient", label: "Whey Isolate", connections: ["prod_matrusneha"] },
    { id: "prod_garbhika", type: "product", label: "Garbhika", connections: ["out_brain"] },
    { id: "prod_matrusneha", type: "product", label: "Matrusneha", connections: ["out_healing", "out_energy"] },
    { id: "out_brain", type: "outcome", label: "Cognitive Development", connections: [] },
    { id: "out_healing", type: "outcome", label: "Tissue Repair", connections: [] },
    { id: "out_energy", type: "outcome", label: "Maternal Energy", connections: [] }
  ],

  productConnections: [
    { nutrient: "DHA & Choline", maternalNeed: "Fetal Brain Development", formulationLogic: "Third-trimester accumulation", product: "Garbhika", productTarget: "/products/garbhika" },
    { nutrient: "Shatavari & Protein", maternalNeed: "Lactation & Healing", formulationLogic: "Postpartum recovery demands", product: "Matrusneha", productTarget: "/products/matrusneha" }
  ]
};
