import { ProductData } from "./types";

export const garbhikaData: ProductData = {
  id: "garbhika",
  hero: {
    title: "Garbhika",
    positioning: "A Mother's Trusted Nutrition Companion",
    benefits: [
      "15 Essential Nutrients",
      "Triple Protein Blend",
      "Made For Indian Mothers"
    ],
    heroStory: {
      title: "The Genesis of Life",
      content: "Pregnancy is a period of rapid, profound transformation. Garbhika was meticulously formulated to provide the exact micronutrient foundation required to support fetal development while protecting the mother from physical depletion."
    },
    cta: "Explore Formulation"
  },
  story: {
    themes: ["Daily nourishment", "Comfort", "Consistency", "Maternal wellness", "Digestive support"],
    headline: "Nourishment That Feels Like Home",
    content: [
      "Pregnancy demands an extraordinary amount of physical resources, yet the experience of eating often becomes fraught with sensory aversions and digestive discomfort.",
      "Garbhika was born from a simple realization: perfect clinical nutrition is useless if a mother cannot comfortably consume it daily.",
      "We formulated Garbhika to be gentle, comforting, and deeply nourishing, providing the foundational strength needed for maternal wellness and fetal development without the heavy, medicinal aftertaste."
    ]
  },
  maternalFacts: [
    "The mother's blood volume increases by nearly 50% during pregnancy.",
    "Fetal development depends on precise nutrient delivery across the placenta.",
    "Every organ in the developing child is built from the nutrients the mother provides."
  ],
  knowledgeHighlights: [
    { type: "Maternal Need", text: "A pregnant woman's iron requirement more than doubles to support expanded blood volume and fetal iron stores." },
    { type: "Science Insight", text: "Methylfolate, not folic acid, is the biologically active form that crosses the placental barrier efficiently." },
    { type: "Traditional Wisdom", text: "In Ayurveda, the concept of 'Garbhini Paricharya' emphasizes stage-specific nutrition throughout pregnancy." },
    { type: "Research Focus", text: "Bioavailability determines how much of each nutrient actually reaches maternal and fetal tissues." }
  ],
  sectionTransitions: [
    { id: "story-to-benefits", text: "From understanding the mother\nto designing the formulation." },
    { id: "philosophy-to-ingredients", text: "Every ingredient serves\na measurable purpose." },
    { id: "science-to-flavours", text: "Efficacy only matters\nif mothers can return\nto it every day." }
  ],
  whyDifferent: {
    headline: "Why Two Formulations, Not One",
    explanation: "Generic pregnancy supplements treat all stages the same. The maternal body at 12 weeks and the maternal body at 12 months postpartum have fundamentally different physiological demands.",
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
    headline: "The Science of Comfortable Consistency",
    explanation: "True maternal nourishment relies on consistency. A supplement only works when mothers can comfortably return to it every single day. Our philosophy bridges the gap between clinical efficacy and sensory comfort.",
    pillars: [
      { title: "Clinical Bioavailability", description: "Selecting nutrient forms that the body can easily recognize and absorb.", insight: "Absorption matters more than just the milligram count." },
      { title: "Digestive Ease", description: "Incorporating prebiotic fibers to soothe the gut and prevent common prenatal constipation.", insight: "A mother's digestive system is already under immense pressure." },
      { title: "Palate Respect", description: "Masking metallic vitamin notes with comforting, familiar traditional flavours.", insight: "Overcoming sensory aversions is the first step to consistent nourishment." }
    ]
  },
  ingredients: [
    {
      id: "protein", name: "Protein Complex",
      whyIncluded: "To support rapid tissue expansion and fetal growth.",
      whenItMatters: "Crucial throughout the third trimester when fetal weight gain accelerates.",
      scientificContext: "Amino acids are the building blocks of every fetal organ. A highly bioavailable blend ensures that these are delivered efficiently across the placenta.",
      maternalBenefit: "Supports the expansion of maternal blood volume and the growth of the uterus and breasts.",
      fetalBenefit: "Provides the structural amino acids required for organ formation and rapid weight gain.",
      traditionalRelevance: "Ensures the 'building' phase of pregnancy is supported with the highest quality raw materials.",
      clinicalInsight: "Prevents maternal muscle wasting during late-stage fetal weight acceleration."
    },
    {
      id: "fiber", name: "Prebiotic + Probiotic Fiber",
      whyIncluded: "To maintain gut microbiome balance and alleviate digestive strain.",
      whenItMatters: "Daily, especially as digestion slows due to hormonal changes and physical pressure.",
      scientificContext: "Progesterone relaxes smooth muscles, leading to slower gastrointestinal transit. Prebiotics feed beneficial bacteria, improving motility.",
      maternalBenefit: "Reduces bloating, prevents constipation, and optimizes the absorption of other critical nutrients.",
      fetalBenefit: "Improved maternal absorption means more efficient nutrient delivery to the developing fetus.",
      traditionalRelevance: "Gut health is considered the root of all wellness in traditional Indian medicine.",
      clinicalInsight: "Significantly reduces the risk of third-trimester hemorrhoids by maintaining stool softness."
    },
    {
      id: "vitamins", name: "Prenatal Vitamin & Mineral",
      whyIncluded: "To fill the critical gaps in a modern diet.",
      whenItMatters: "Every single day to maintain a steady reservoir of micronutrients.",
      scientificContext: "Provides exact co-factors (like Methylfolate) required for cellular division, DNA synthesis, and metabolic function.",
      maternalBenefit: "Prevents maternal depletion, guarding against anemia and bone density loss.",
      fetalBenefit: "Supports neural tube closure, skeletal mineralization, and healthy organ development.",
      traditionalRelevance: "Modernizing the traditional concept of 'eating for two' into 'nourishing with precision'.",
      clinicalInsight: "Ensures steady hematocrit levels preventing late-stage pregnancy fatigue.",
      relatedScience: "Why Iron Demand Changes"
    },
    {
      id: "shingada", name: "Shingada (Water Chestnut)",
      whyIncluded: "A traditional cooling ingredient rich in complex carbohydrates and minerals.",
      whenItMatters: "During periods of nausea or heat accumulation in the body.",
      scientificContext: "A low glycemic index carbohydrate that provides sustained energy without spiking blood sugar.",
      maternalBenefit: "Soothes the stomach and provides a steady release of energy to combat pregnancy fatigue.",
      fetalBenefit: "Stable maternal blood sugar ensures consistent glucose delivery for fetal brain development.",
      traditionalRelevance: "A trusted staple in traditional maternal care, often used during fasting for its pure, cooling properties.",
      clinicalInsight: "Helps stabilize morning blood sugar levels, reducing nausea onset."
    },
    {
      id: "dha", name: "DHA",
      whyIncluded: "For the rapid development of the fetal brain and retina.",
      whenItMatters: "Most critical in the late second and entire third trimester.",
      scientificContext: "DHA is a structural component of the human brain and retina. Fetal accumulation of DHA is entirely dependent on maternal transfer.",
      maternalBenefit: "Supports maternal mood regulation and may reduce the risk of postpartum depression.",
      fetalBenefit: "Forms the structural lipid foundation of the fetal cerebral cortex and retinal photoreceptors.",
      traditionalRelevance: "Aligns with the modern understanding of cognitive capital starting in the womb.",
      clinicalInsight: "Higher maternal DHA indices are correlated with better infant sleep patterns post-birth.",
      relatedScience: "Why DHA Matters"
    },
    {
      id: "choline", name: "Choline",
      whyIncluded: "To act as a synergistic partner to DHA in neurodevelopment.",
      whenItMatters: "Throughout the entire gestational period.",
      scientificContext: "Vital for the structural integrity of cell membranes and the creation of acetylcholine, a neurotransmitter essential for memory.",
      maternalBenefit: "Protects maternal liver function and ensures optimal nutrient transport to the fetus.",
      fetalBenefit: "Directly supports fetal hippocampal development, influencing lifelong memory and learning capacity.",
      traditionalRelevance: "An often-overlooked nutrient that works seamlessly with essential fatty acids for complete neurological support.",
      clinicalInsight: "Crucial for placental function and may reduce the risk of preeclampsia."
    }
  ],
  benefits: [
    { title: "Protein Support", description: "A highly digestible triple protein blend designed for maximum cellular uptake." },
    { title: "Micronutrient Fortification", description: "Precision-dosed vitamins and minerals to prevent maternal depletion." },
    { title: "Digestive Wellness", description: "Enhanced with prebiotic fibers to ensure comfort and optimal absorption." },
    { title: "Comfort-Led Flavours", description: "Sensory-adapted profiles that respect morning sickness and palate changes." }
  ],
  science: {
    headline: "Human-Centered Nutritional Science",
    introduction: "Pregnancy is not just about fetal growth; it is an endurance event for the mother's body. Our scientific approach ensures that both lives are optimally supported through precise, bioavailable nutrition.",
    pillars: [
      { title: "Fetal Development", explanation: "Delivering the exact micronutrients required for organogenesis and neural tube closure.", insight: "Precision is key during critical developmental windows." },
      { title: "Maternal Health", explanation: "Preserving maternal nutrient stores to ensure strength for labor and beyond.", insight: "A healthy baby requires a healthy mother." },
      { title: "Bioavailability", explanation: "Using forms of iron and calcium that are easily absorbed without causing gastrointestinal distress.", insight: "Nutrients must be absorbed to be effective." },
      { title: "Metabolic Balance", explanation: "Providing sustained energy through complex carbohydrates without spiking blood sugar.", insight: "Stable energy levels prevent severe fatigue and nausea." },
      { title: "Cellular Protection", explanation: "Antioxidants to protect rapidly dividing cells from oxidative stress.", insight: "Safeguarding the building blocks of life." }
    ],
    summary: "Garbhika's formulation is a testament to the fact that clinical efficacy and maternal comfort are not mutually exclusive."
  },
  scienceInsights: [
    { title: "Why DHA Matters", explanation: "DHA constitutes over 40% of the polyunsaturated fatty acids in the brain. During the third trimester, fetal DHA accumulation accelerates dramatically, drawing heavily from maternal stores. Insufficient DHA has been linked to shorter gestational periods and reduced cognitive outcomes." },
    { title: "Why Iron Demand Changes", explanation: "Iron requirements during pregnancy increase from 18mg to 27mg daily. This surge supports the 50% increase in maternal blood volume, the formation of the placenta, and the creation of fetal iron reserves that sustain the infant for the first six months of life." },
    { title: "Why Bioavailability Matters", explanation: "The form of a nutrient determines how much the body can actually use. Ferrous bisglycinate, for example, is absorbed at nearly three times the rate of ferrous sulfate, with significantly fewer gastrointestinal side effects — a critical consideration during pregnancy." },
    { title: "Why Trimester Nutrition Differs", explanation: "First trimester demands focus on neural tube closure and organ formation. Second trimester shifts to skeletal development and rapid growth. Third trimester prioritizes brain development and weight gain. A single formula cannot optimally address all three." },
    { title: "Why Folate Form Matters", explanation: "Nearly 40% of the population carries an MTHFR gene variant that impairs conversion of synthetic folic acid to its active form. Methylfolate bypasses this conversion entirely, ensuring reliable neural tube protection regardless of genetic variation." }
  ],
  specifications: [
    { title: "Clinical Grade Nutrition", whyItMatters: "Every nutrient meets pharmaceutical-grade purity standards, ensuring consistency batch after batch.", outcome: "Reliable, predictable maternal support with every serving." },
    { title: "Trimester Specific Design", whyItMatters: "Nutrient ratios are calibrated to match the evolving physiological demands of pregnancy.", outcome: "Targeted nourishment that adapts to the stage of development." },
    { title: "Research Driven Formulation", whyItMatters: "Every ingredient inclusion is backed by peer-reviewed clinical research and traditional efficacy data.", outcome: "Evidence-based confidence in every component." },
    { title: "High Bioavailability Ingredients", whyItMatters: "Selecting nutrient forms the body recognizes and absorbs efficiently reduces waste and side effects.", outcome: "Maximum nutrient utilization with minimum digestive burden." },
    { title: "Heavy Metal Tested", whyItMatters: "Pregnancy increases vulnerability to environmental contaminants that can cross the placental barrier.", outcome: "Verified absence of lead, mercury, cadmium, and arsenic in every batch." },
    { title: "Manufactured Under Global Standards", whyItMatters: "Production in certified facilities ensures process control, hygiene, and ingredient traceability.", outcome: "World-class manufacturing integrity from raw material to finished product." }
  ],
  qualityCommitments: {
    headline: "The Standard of Care",
    explanation: "Mothers deserve absolute transparency and uncompromising quality. This is the foundation of every Valencia formulation.",
    pillars: [
      { title: "Research-Led Development", description: "Every formulation decision begins with clinical evidence and ends with maternal validation. We do not follow trends — we follow science." },
      { title: "Ingredient Evaluation Process", description: "Each raw material undergoes a multi-stage evaluation for purity, bioavailability, interaction safety, and sourcing ethics before it enters any formulation." },
      { title: "Manufacturing Standards", description: "Production occurs in facilities adhering to GMP, FSSAI, and international nutraceutical manufacturing protocols with full batch traceability." },
      { title: "Quality Verification", description: "Every finished batch is independently tested for potency, dissolution, microbial safety, and heavy metal absence before release." },
      { title: "Safety Protocols", description: "Our formulations are designed to be safe across all trimesters. We maintain a zero-tolerance policy for ingredients with insufficient pregnancy safety data." }
    ]
  },
  flavours: [
    { id: "chocolate", name: "Chocolate", story: "A rich, indulgent experience designed to provide comfort when nothing else appeals.", sensoryExperience: "Smooth, velvety, and deeply aromatic, masking any metallic nutrient notes.", emotionalConnection: "A moment of daily indulgence, transforming nutrition from a chore into a treat.", whyMothersPrefer: "Because sometimes, a mother just needs chocolate that also happens to be perfect for her baby." },
    { id: "mawa-kulfi", name: "Mawa Kulfi", story: "Rooted in tradition, evoking memories of festive family gatherings and maternal care.", sensoryExperience: "Creamy, nutty, with subtle hints of cardamom and saffron.", emotionalConnection: "Tastes like home, providing a sense of grounding and familiar comfort.", whyMothersPrefer: "It respects the traditional Indian palate while delivering clinical-grade nutrition." }
  ],
  usage: [
    { id: "step-1", title: "Add 2 scoops", description: "Measure two level scoops of Garbhika." },
    { id: "step-2", title: "Mix with milk", description: "Stir into 200ml of warm or cold milk until smooth." },
    { id: "step-3", title: "Enjoy daily", description: "Consume once or twice daily as part of your routine." }
  ],
  faqs: [
    { question: "When should I start taking Garbhika?", answer: "Garbhika is specifically formulated for the increased demands of the third trimester, but can be started earlier upon consultation with your doctor." },
    { question: "Is it safe if I have gestational diabetes?", answer: "Garbhika contains no added refined sugars, but always consult your healthcare provider regarding your specific dietary plan." },
    { question: "Can I mix it with water?", answer: "While mixing with milk provides additional calcium and a creamier texture, it can be mixed with water or plant-based milks." }
  ],
  journeyMap: [
    { id: "preconception", label: "Preconception", description: "Preparing the body for the demands of pregnancy.", covered: true, scrollTarget: "story" },
    { id: "trimester-1", label: "Trimester 1", description: "Rapid organ formation. Critical micronutrient demand.", covered: true, scrollTarget: "ingredients" },
    { id: "trimester-2", label: "Trimester 2", description: "Skeletal development and rapid fetal growth.", covered: true, scrollTarget: "science" },
    { id: "trimester-3", label: "Trimester 3", description: "Brain development and weight gain acceleration.", covered: true, scrollTarget: "ingredients" },
    { id: "birth", label: "Birth", description: "The transition from pregnancy to recovery.", covered: false },
    { id: "recovery", label: "Recovery", description: "Maternal tissue repair and hormonal rebalancing.", covered: false },
    { id: "breastfeeding", label: "Breastfeeding", description: "Sustained nutrition for lactation and infant growth.", covered: false }
  ],
  explore: {
    nextProduct: {
      id: "matrusneha",
      name: "Matrusneha",
      journey: ["Pregnancy Nutrition", "Healthy Development", "Birth", "Recovery Begins", "Matrusneha"]
    }
  }
};