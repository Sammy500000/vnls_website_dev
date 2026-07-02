import { ProductData } from "./types";

export const matrusnehaData: ProductData = {
  id: "matrusneha",
  hero: {
    title: "Matrusneha",
    positioning: "Postpartum Nourishment Rooted In Care",
    benefits: [
      "Lactation Support",
      "Recovery Support",
      "Nutritional Replenishment"
    ],
    heroStory: {
      title: "The Fourth Trimester",
      content: "After childbirth, a mother's body enters one of its most nutritionally demanding phases. Matrusneha was formulated to support recovery, lactation and nutritional replenishment during this critical transition."
    },
    cta: "Explore Formulation"
  },
  story: {
    themes: ["Recovery", "Restoration", "Lactation", "Postpartum wellness", "Maternal care"],
    headline: "The Gentle Art of Healing and Feeding",
    content: [
      "The postpartum period is simultaneously beautiful and depleting. A mother's body must aggressively heal itself while producing the most nutrient-dense food on the planet for her child.",
      "Traditional wisdom has always recognized the fourth trimester as a time for restorative care, yet modern lifestyles often rush this delicate healing process.",
      "Matrusneha was formulated to honor both the science of lactogenesis and the traditional art of maternal recovery. It provides the profound, restorative nourishment a mother needs to rebuild her strength while seamlessly supporting her breastfeeding journey."
    ]
  },
  maternalFacts: [
    "Recovery begins immediately after birth.",
    "Breast milk production demands an additional 500 calories per day from the mother's body.",
    "Postpartum bone density loss can exceed 5% if calcium is not actively replenished."
  ],
  knowledgeHighlights: [
    { type: "Maternal Need", text: "A breastfeeding mother transfers approximately 200mg of calcium daily to her infant through breast milk." },
    { type: "Traditional Wisdom", text: "Shatavari has been used for over 3,000 years in Ayurvedic medicine as the primary herb for lactation and female vitality." },
    { type: "Science Insight", text: "Prolactin, the hormone responsible for milk production, is directly influenced by nutritional status and stress levels." },
    { type: "Research Focus", text: "Adaptogens like Ashwagandha can reduce cortisol by up to 28%, protecting the oxytocin let-down reflex." }
  ],
  sectionTransitions: [
    { id: "story-to-benefits", text: "From understanding recovery\nto supporting the mother." },
    { id: "philosophy-to-ingredients", text: "Every ingredient chosen\nfor a specific maternal need." },
    { id: "science-to-flavours", text: "Healing only happens\nwhen nourishment\nbecomes a daily ritual." }
  ],
  whyDifferent: {
    headline: "Why Two Formulations, Not One",
    explanation: "Pregnancy nutrition and postpartum nutrition serve fundamentally different biological purposes. One builds a new life; the other rebuilds the mother.",
    columns: [
      {
        heading: "Generic Pregnancy Supplements",
        steps: ["One Formula", "One Stage", "One Need", "One Outcome"],
        highlighted: false
      },
      {
        heading: "Valencia Nutrition",
        steps: ["Different Stages", "Different Physiology", "Different Formulations", "Targeted Outcomes"],
        highlighted: true
      }
    ]
  },
  philosophy: {
    headline: "Science Guided by Ancestral Wisdom",
    explanation: "Maternal recovery and breastfeeding require both modern clinical science and time-tested traditional wisdom. Our philosophy blends high-quality macronutrients and precision vitamins with revered Ayurvedic galactagogues.",
    pillars: [
      { title: "Clinical Efficacy", description: "Utilizing highly bioavailable micronutrients to quickly reverse postpartum depletion.", insight: "Science ensures the foundation is strong." },
      { title: "Traditional Care", description: "Incorporating time-tested herbs known for generations to support milk supply.", insight: "Wisdom provides the specific maternal support." },
      { title: "Sensory Comfort", description: "Warming, soothing flavour profiles that encourage daily, stress-free consumption.", insight: "Because nutrition only works if it is consumed consistently." }
    ]
  },
  ingredients: [
    {
      id: "shatavari", name: "Shatavari",
      whyIncluded: "To naturally stimulate and support breast milk production.",
      whenItMatters: "Daily throughout the entire breastfeeding journey.",
      scientificContext: "Shatavari contains steroidal saponins that have been shown to influence prolactin levels, the primary hormone responsible for lactogenesis.",
      maternalBenefit: "Encourages a healthy, abundant milk supply without artificial stimulants.",
      fetalBenefit: "Supports consistent, nutrient-rich breast milk production for optimal infant growth.",
      traditionalRelevance: "Revered in Ayurveda as the 'Queen of Herbs' for female reproductive health and postpartum recovery.",
      clinicalInsight: "Demonstrates galactagogue properties by elevating prolactin levels by up to 3 times the baseline in clinical trials."
    },
    {
      id: "moringa", name: "Moringa",
      whyIncluded: "An incredibly nutrient-dense superfood for complete cellular nourishment.",
      whenItMatters: "Crucial for postpartum recovery when the body's nutrient stores are at their lowest.",
      scientificContext: "Moringa leaves are exceptionally high in iron, calcium, and essential amino acids, directly supporting red blood cell regeneration.",
      maternalBenefit: "Combats profound postpartum fatigue and enriches the micronutrient profile of breast milk.",
      fetalBenefit: "Enriches breast milk with bioavailable iron and calcium, supporting infant bone and blood development.",
      traditionalRelevance: "Often called the 'Miracle Tree', it has been used globally to nourish nursing mothers in nutrient-scarce environments.",
      clinicalInsight: "Increases serum ferritin levels rapidly, resolving postpartum anemia faster than synthetic iron alone."
    },
    {
      id: "fennel", name: "Fennel",
      whyIncluded: "To aid digestion and gently support lactation.",
      whenItMatters: "When experiencing postpartum digestive sluggishness or colic in the breastfed infant.",
      scientificContext: "Contains phytoestrogens that support milk production, alongside volatile oils (like anethole) that relax smooth muscle in the digestive tract.",
      maternalBenefit: "Soothes the maternal digestive tract while its carminative properties pass through milk to help settle a fussy baby's stomach.",
      fetalBenefit: "Anethole transfers through breastmilk, acting as a natural antispasmodic for infant colic relief.",
      traditionalRelevance: "A staple in traditional Indian postpartum diets (Panjiri) to 'warm' the body and improve digestion.",
      clinicalInsight: "Anethole transfers through breastmilk and acts as a natural antispasmodic for infant colic."
    },
    {
      id: "ashwagandha", name: "Ashwagandha",
      whyIncluded: "To manage stress and support nervous system recovery.",
      whenItMatters: "During the intense sleep deprivation and emotional fluctuations of the fourth trimester.",
      scientificContext: "An adaptogen that helps regulate the HPA axis, clinically shown to lower cortisol levels and improve stress resilience.",
      maternalBenefit: "Helps the mother achieve better quality rest and emotional stability, which indirectly protects a steady milk supply.",
      fetalBenefit: "Lower maternal cortisol creates a calmer breastfeeding environment, supporting healthy infant attachment.",
      traditionalRelevance: "Used for centuries as a 'Rasayana' (rejuvenator) to rebuild vitality after significant physical or mental strain.",
      clinicalInsight: "Lowers serum cortisol by 28% on average, protecting the oxytocin let-down reflex from stress-induced inhibition.",
      relatedScience: "Why Maternal Recovery Is Critical"
    },
    {
      id: "protein", name: "Protein Complex",
      whyIncluded: "For tissue repair and milk protein synthesis.",
      whenItMatters: "Constantly, as healing from childbirth requires a significant protein surplus.",
      scientificContext: "Breast milk contains vital immunoglobulins and lactoferrin; synthesizing these requires a steady influx of essential amino acids.",
      maternalBenefit: "Accelerates the healing of uterine and abdominal tissues while ensuring breast milk has necessary structural proteins.",
      fetalBenefit: "Provides immunoglobulin and lactoferrin precursors that strengthen the infant's developing immune system.",
      traditionalRelevance: "While modern in its extraction, the concept of providing dense, building-block foods to new mothers is universal.",
      clinicalInsight: "Sufficient amino acid availability prevents the body from cannibalizing maternal muscle tissue to synthesize breast milk."
    }
  ],
  benefits: [
    { title: "Lactation Support", description: "Formulated with proven galactagogues to encourage a healthy, consistent milk supply." },
    { title: "Postpartum Recovery", description: "Targeted nutrients to accelerate tissue healing and restore depleted reserves." },
    { title: "Nutritional Replenishment", description: "Comprehensive vitamin and mineral fortification to combat postpartum fatigue." },
    { title: "Protein Support", description: "High-quality proteins essential for both maternal recovery and infant growth." }
  ],
  science: {
    headline: "The Science of the Fourth Trimester",
    introduction: "Postpartum recovery is a profound physiological event. The body must heal trauma, regulate dramatic hormonal shifts, and produce nutrient-dense milk—all while operating on minimal sleep. Our science focuses on supporting these concurrent demands.",
    pillars: [
      { title: "Recovery", explanation: "Accelerating the repair of connective tissues and the uterine wall through targeted amino acids and zinc.", insight: "Healing requires building blocks, not just rest." },
      { title: "Breast Milk Production", explanation: "Utilizing specific herbal galactagogues to support the endocrine system's release of prolactin and oxytocin.", insight: "Supply is driven by hormones, supported by nutrition." },
      { title: "Maternal Energy", explanation: "Combating fatigue through highly bioavailable iron and B-complex vitamins to restore ATP production.", insight: "You cannot pour from an empty cup." },
      { title: "Micronutrient Replenishment", explanation: "Aggressively remineralizing the maternal skeleton, as calcium is often leached during lactation.", insight: "Protecting the mother's long-term skeletal health." },
      { title: "Hormonal Adaptation", explanation: "Integrating adaptogens to help buffer the nervous system against the shock of sudden estrogen and progesterone drops.", insight: "Emotional resilience is rooted in physiological stability." }
    ],
    summary: "By addressing the root physiological demands of the fourth trimester, Matrusneha provides a comprehensive foundation for both mother and child to thrive."
  },
  scienceInsights: [
    { title: "Why Maternal Recovery Is Critical", explanation: "The postpartum body undergoes a healing process comparable to major surgery. The uterus must shrink from the size of a watermelon back to a fist, connective tissues must repair, and blood volume must normalize — all within six weeks." },
    { title: "Why Lactation Demands Are Extreme", explanation: "Producing breast milk burns approximately 500 additional calories daily. If maternal nutrition is insufficient, the body will prioritize milk quality by depleting the mother's own bone calcium, iron stores, and muscle protein." },
    { title: "Why Adaptogens Matter Postpartum", explanation: "The sudden drop in estrogen and progesterone after birth triggers one of the most dramatic hormonal shifts in human physiology. Adaptogens like Ashwagandha help buffer the HPA axis, reducing cortisol and supporting emotional stability." },
    { title: "Why Traditional Galactagogues Work", explanation: "Herbs like Shatavari and Fennel contain phytocompounds that interact with prolactin receptors and the endocrine system. Their efficacy, validated through millennia of traditional use, is now being confirmed through modern pharmacological studies." },
    { title: "Why Bioavailability Matters Postpartum", explanation: "A sleep-deprived, healing body absorbs nutrients less efficiently. Using highly bioavailable forms ensures that even under suboptimal digestive conditions, critical nutrients reach maternal and infant tissues." }
  ],
  specifications: [
    { title: "Clinical Grade Nutrition", whyItMatters: "Every nutrient meets pharmaceutical-grade purity standards, critical during the sensitive postpartum period.", outcome: "Reliable support during the most vulnerable phase of motherhood." },
    { title: "Postpartum Specific Design", whyItMatters: "Nutrient ratios address the unique demands of recovery, healing, and lactation.", outcome: "Formulation that understands the fourth trimester is not the same as pregnancy." },
    { title: "Research Driven Formulation", whyItMatters: "Galactagogue selection is backed by both traditional evidence and modern clinical validation.", outcome: "Confidence that every herb and nutrient serves a proven purpose." },
    { title: "High Bioavailability Ingredients", whyItMatters: "Postpartum digestion is often compromised; highly absorbable forms compensate for reduced gut efficiency.", outcome: "Maximum nutrient delivery even when the body is healing." },
    { title: "Heavy Metal Tested", whyItMatters: "Contaminants can transfer directly through breast milk to the infant.", outcome: "Verified purity protecting both mother and nursing child." },
    { title: "Manufactured Under Global Standards", whyItMatters: "Production integrity is non-negotiable when formulating for breastfeeding mothers.", outcome: "World-class manufacturing from ingredient sourcing to final packaging." }
  ],
  qualityCommitments: {
    headline: "The Standard of Care",
    explanation: "Breastfeeding mothers and their infants deserve absolute certainty in every ingredient and every serving.",
    pillars: [
      { title: "Research-Led Development", description: "Our postpartum formulations are built on clinical lactation science and validated traditional pharmacology. Every decision is evidence-based." },
      { title: "Ingredient Evaluation Process", description: "Herbs and nutrients undergo evaluation for lactation safety, infant transfer potential, and interaction with postpartum physiology." },
      { title: "Manufacturing Standards", description: "Produced in GMP-certified facilities with strict protocols for herbal ingredient standardization and batch consistency." },
      { title: "Quality Verification", description: "Independent testing verifies potency, purity, and the complete absence of contaminants in every production batch." },
      { title: "Safety Protocols", description: "Every ingredient is evaluated for breastmilk transfer safety. We exclude any compound without established lactation safety data." }
    ]
  },
  flavours: [
    { id: "saffron", name: "Saffron", story: "A deeply traditional, warming flavour that feels like a caring embrace.", sensoryExperience: "Aromatic, golden, and gently sweet, evoking the comfort of traditional healing foods.", emotionalConnection: "Reminiscent of the special foods prepared by grandmothers for new mothers.", whyMothersPrefer: "It feels less like a supplement and more like a cherished ritual of care." },
    { id: "cardamom", name: "Cardamom", story: "Uplifting and soothing, designed to settle the stomach and calm the mind.", sensoryExperience: "Bright, slightly citrusy, and deeply fragrant, cutting through the richness of the milk.", emotionalConnection: "A refreshing moment of clarity in the fog of early motherhood.", whyMothersPrefer: "Its clean, familiar taste makes daily consumption effortless and enjoyable." }
  ],
  usage: [
    { id: "step-1", title: "Add 2 scoops", description: "Measure two level scoops of Matrusneha." },
    { id: "step-2", title: "Mix with milk", description: "Stir into 200ml of warm milk for the best restorative experience." },
    { id: "step-3", title: "Enjoy daily", description: "Consume twice daily to support consistent lactation." }
  ],
  faqs: [
    { question: "Can I take this if I am formula feeding?", answer: "Yes, Matrusneha is excellent for postpartum recovery and rebuilding depleted nutrient stores, regardless of feeding method." },
    { question: "How long should I continue taking Matrusneha?", answer: "It is recommended for the first 6 months postpartum, or for as long as you are actively breastfeeding." },
    { question: "Does it contain added sugar?", answer: "Matrusneha is formulated without refined sugars to support stable energy levels during recovery." }
  ],
  journeyMap: [
    { id: "preconception", label: "Preconception", description: "Preparing the body for the demands of pregnancy.", covered: false },
    { id: "trimester-1", label: "Trimester 1", description: "Rapid organ formation. Critical micronutrient demand.", covered: false },
    { id: "trimester-2", label: "Trimester 2", description: "Skeletal development and rapid fetal growth.", covered: false },
    { id: "trimester-3", label: "Trimester 3", description: "Brain development and weight gain acceleration.", covered: false },
    { id: "birth", label: "Birth", description: "The transition from pregnancy to recovery.", covered: true, scrollTarget: "story" },
    { id: "recovery", label: "Recovery", description: "Maternal tissue repair and hormonal rebalancing.", covered: true, scrollTarget: "ingredients" },
    { id: "breastfeeding", label: "Breastfeeding", description: "Sustained nutrition for lactation and infant growth.", covered: true, scrollTarget: "science" }
  ],
  explore: {
    nextProduct: {
      id: "garbhika",
      name: "Garbhika",
      journey: ["Recovery", "Strength", "Lactation", "Motherhood", "Explore Science"]
    }
  }
};
