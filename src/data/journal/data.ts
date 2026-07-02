import { JournalData } from "./types";

export const journalData: JournalData = {
  authors: {
    "dr-s-sharma": {
      id: "dr-s-sharma",
      name: "Dr. S. Sharma",
      role: "Lead Formulator",
      expertise: ["Clinical Nutrition", "Fetal Development", "Bioavailability"],
      biography: "Dr. Sharma leads the clinical formulation team at Valencia Nutracare Lifesciences, specializing in high-absorption nutrient delivery for compromised digestive states."
    },
    "k-patel": {
      id: "k-patel",
      name: "K. Patel",
      role: "Maternal Health Researcher",
      expertise: ["Postpartum Recovery", "Lactation", "Hormonal Balance"],
      biography: "An expert in postpartum physiological transitions, K. Patel focuses on the intersection of nutrition and the fourth trimester."
    }
  },

  categories: {
    "nutrition": { id: "nutrition", title: "Nutrition", description: "The science of maternal nourishment.", icon: "nutrition-icon" },
    "development": { id: "development", title: "Development", description: "Tracking fetal growth milestones.", icon: "development-icon" },
    "recovery": { id: "recovery", title: "Recovery", description: "Postpartum healing and resilience.", icon: "recovery-icon" },
    "science": { id: "science", title: "Science", description: "Deep dives into clinical research.", icon: "science-icon" }
  },

  topics: {
    "dha": {
      id: "dha", title: "DHA",
      relatedNutrients: ["Choline"], relatedScience: ["Brain Development", "Neural Growth"],
      relatedStages: ["trimester-3", "breastfeeding"], relatedIngredients: ["Algal DHA"], relatedProducts: ["garbhika"]
    },
    "iron": {
      id: "iron", title: "Iron",
      relatedNutrients: ["Vitamin C", "Folate"], relatedScience: ["Blood Volume Expansion", "Anemia Prevention"],
      relatedStages: ["trimester-2", "trimester-3", "recovery"], relatedIngredients: ["Ferrous Bisglycinate"], relatedProducts: ["garbhika", "matrusneha"]
    },
    "lactation": {
      id: "lactation", title: "Lactation Support",
      relatedNutrients: ["Calcium", "Protein"], relatedScience: ["Lactation Energy Demand"],
      relatedStages: ["breastfeeding"], relatedIngredients: ["Shatavari", "Whey Protein"], relatedProducts: ["matrusneha"]
    }
  },

  journeyStages: {
    "preconception": { id: "preconception", title: "Preconception", overview: "Preparing the physiological environment.", nutritionalPriorities: ["Folate", "Cellular Defense"], developmentPriorities: ["Egg Quality"] },
    "trimester-1": { id: "trimester-1", title: "Trimester 1", overview: "Rapid cellular division.", nutritionalPriorities: ["Neural tube protection", "Nausea management"], developmentPriorities: ["Organ architecture"] },
    "trimester-2": { id: "trimester-2", title: "Trimester 2", overview: "Skeletal development.", nutritionalPriorities: ["Calcium", "Iron"], developmentPriorities: ["Skeletal calcification"] },
    "trimester-3": { id: "trimester-3", title: "Trimester 3", overview: "Brain development.", nutritionalPriorities: ["DHA", "Protein"], developmentPriorities: ["Cerebral cortex expansion"] },
    "recovery": { id: "recovery", title: "Recovery", overview: "Tissue repair.", nutritionalPriorities: ["Collagen", "Iron replenishment"], developmentPriorities: ["Gut microbiome establishment"] },
    "breastfeeding": { id: "breastfeeding", title: "Breastfeeding", overview: "Sustaining high-calorie liquid nutrition.", nutritionalPriorities: ["Galactagogues", "Calcium"], developmentPriorities: ["Immune system fortifying"] }
  },

  articles: [
    {
      slug: "why-dha-timing-matters-in-the-third-trimester",
      title: "The Architecture of Cognition: Why DHA Timing Matters",
      excerpt: "The fetal brain does not grow linearly. Discover why the third trimester triggers an massive demand for maternal DHA stores.",
      publicationDate: "2026-05-15T00:00:00Z",
      readingTimeMinutes: 6,
      authorId: "dr-s-sharma",
      categoryId: "development",
      stageIds: ["trimester-3"],
      topicIds: ["dha"],
      connections: {
        articles: ["iron-absorption-during-pregnancy"],
        products: ["garbhika"],
        science: ["Brain Development", "Trimester Requirements"],
        nutrients: ["DHA", "Choline"],
        stages: ["trimester-3"],
        topics: ["dha"]
      },
      blocks: [
        { type: "paragraph", content: "Pregnancy is often viewed as a static nine-month state, but clinically, it is a series of radically shifting biological priorities. The first trimester focuses on structural foundations—the closing of the neural tube and the establishment of the placenta. But as a mother enters the third trimester, the developmental priority shifts sharply toward cognitive architecture." },
        { type: "highlight", content: "The fetal brain will triple in weight during the last 13 weeks of pregnancy." },
        { type: "paragraph", content: "This explosive growth requires massive amounts of structural lipids. Specifically, Docosahexaenoic acid (DHA), an omega-3 fatty acid, is rapidly accumulated in the fetal cerebral cortex and retina. Because the fetus cannot synthesize DHA efficiently, it relies entirely on placental transfer from maternal stores." },
        { type: "transition", content: "Understanding the nutrient reveals the formulation." },
        { type: "science-insight", content: "If maternal DHA intake is insufficient during this critical window, the body will prioritize the fetus, actively leaching DHA from the mother's own brain tissue. This depletion is strongly linked to postpartum cognitive fatigue and mood disorders.", metadata: { title: "The Maternal Sacrifice" } },
        { type: "paragraph", content: "This is why generic prenatal vitamins—which deliver the same baseline dosage from week 4 to week 40—are clinically insufficient. The physiological demand for DHA peaks late in pregnancy. Formulations like Garbhika are designed precisely to intercept this demand, ensuring the fetus receives optimal cognitive building blocks while protecting maternal neural integrity." }
      ]
    },
    {
      slug: "iron-absorption-during-pregnancy",
      title: "The Iron Paradox: Why Absorption Matters More Than Dosage",
      excerpt: "Ingesting iron is not the same as absorbing iron. How compromised digestion during pregnancy renders standard supplements ineffective.",
      publicationDate: "2026-05-10T00:00:00Z",
      readingTimeMinutes: 5,
      authorId: "dr-s-sharma",
      categoryId: "nutrition",
      stageIds: ["trimester-2", "trimester-3"],
      topicIds: ["iron"],
      connections: {
        articles: ["why-dha-timing-matters-in-the-third-trimester", "the-fourth-trimester-healing"],
        products: ["garbhika", "matrusneha"],
        science: ["Blood Volume Expansion", "Bioavailability"],
        nutrients: ["Iron", "Vitamin C"],
        stages: ["trimester-2", "trimester-3"],
        topics: ["iron"]
      },
      blocks: [
        { type: "paragraph", content: "During pregnancy, maternal blood volume expands by nearly 50% to support placental perfusion and fetal oxygenation. To build this new blood supply, the body's requirement for iron increases dramatically." },
        { type: "maternal-insight", content: "Yet, up to 40% of women suffer from iron-deficiency anemia during pregnancy, despite taking daily prenatal supplements.", metadata: { author: "Clinical Observation" } },
        { type: "paragraph", content: "The issue is not dosage; it is absorption. High levels of progesterone during pregnancy relax smooth muscle tissue, intentionally slowing digestion to maximize nutrient extraction. However, this slowed motility means that poorly absorbed synthetic iron salts (like ferrous sulfate) sit in the digestive tract, causing severe constipation, nausea, and oxidative stress." },
        { type: "research-callout", content: "Ferrous Bisglycinate—iron bound to two molecules of the amino acid glycine—bypasses the standard iron absorption pathway in the gut. It is absorbed intact, dramatically increasing bioavailability while eliminating gastrointestinal side effects.", metadata: { title: "Bioavailability Mechanisms" } },
        { type: "paragraph", content: "By utilizing Ferrous Bisglycinate, advanced formulations ensure that the iron reaches the bloodstream where it is needed, rather than causing distress in the gut." }
      ]
    },
    {
      slug: "the-fourth-trimester-healing",
      title: "The Fourth Trimester: Formulating for Recovery",
      excerpt: "Childbirth leaves the body depleted. Why postpartum recovery requires a fundamentally different nutritional strategy than pregnancy.",
      publicationDate: "2026-04-28T00:00:00Z",
      readingTimeMinutes: 7,
      authorId: "k-patel",
      categoryId: "recovery",
      stageIds: ["recovery", "breastfeeding"],
      topicIds: ["lactation"],
      connections: {
        articles: ["iron-absorption-during-pregnancy"],
        products: ["matrusneha"],
        science: ["Lactation Energy Demand", "Tissue Synthesis"],
        nutrients: ["Protein", "Calcium"],
        stages: ["recovery", "breastfeeding"],
        topics: ["lactation"]
      },
      blocks: [
        { type: "paragraph", content: "The moment a child is born, the maternal body undergoes one of the most violent hormonal shifts in human biology. Estrogen and progesterone plummet, while prolactin and oxytocin surge to initiate lactation. Simultaneously, the body must heal from the physical trauma of birth and replenish heavily depleted nutrient reserves." },
        { type: "transition", content: "Understanding the stage reveals the need." },
        { type: "paragraph", content: "Despite this massive physiological transition, many mothers are advised to simply 'continue taking their prenatal vitamin.' This is a critical oversight. A prenatal vitamin is designed to build a baby; postpartum nutrition must be designed to heal a mother." },
        { type: "highlight", content: "Breastfeeding demands an additional 500 calories per day, primarily sourced from maternal protein and calcium reserves." },
        { type: "paragraph", content: "To support recovery and lactation, the nutritional architecture must change. Protein becomes paramount for tissue repair and milk synthesis. Calcium must be replenished to prevent leaching from maternal bones. And adaptogenic herbs are required to manage the elevated cortisol levels caused by sleep deprivation and physiological stress." },
        { type: "science-insight", content: "Shatavari (Asparagus racemosus) acts as a powerful galactagogue and adaptogen. It stimulates prolactin production to support milk supply while simultaneously modulating the stress response, providing a dual-action mechanism for postpartum resilience.", metadata: { title: "Adaptogenic Support" } },
        { type: "paragraph", content: "Matrusneha was explicitly engineered for this phase. It is not a prenatal; it is a targeted recovery and lactation support system, delivering precise nutrition for the fourth trimester." }
      ]
    }
  ]
};
