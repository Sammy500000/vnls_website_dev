export const homepageData = {
  hero: {
    headline: "Every Life Begins With Nourishment",
    subheadline: "Supporting motherhood through every stage.",
    cta: "Explore Our Formulations",
  },
  problem: {
    title: "Why VNLS Exists",
    stats: [
      { value: 2000, suffix: "+", label: "Mothers Interviewed" },
      { value: 28, suffix: "+", label: "Experts Consulted" },
      { value: 16, suffix: "+", label: "Trials Conducted" },
    ],
  },
  research: {
    stages: [
      { year: "Phase 1", title: "Research", description: "Analyzing maternal nutrient gaps." },
      { year: "Phase 2", title: "Ingredient Selection", description: "Sourcing bioavailable components." },
      { year: "Phase 3", title: "Trials", description: "Testing efficacy and absorption." },
      { year: "Phase 4", title: "Flavor Testing", description: "Ensuring palatability during pregnancy." },
      { year: "Phase 5", title: "Field Validation", description: "Real-world maternal feedback." },
      { year: "Phase 6", title: "Final Formulation", description: "Production-ready nutritional blends." },
    ]
  },
  products: [
    {
      variant: "garbhika" as const,
      title: "Garbhika",
      subtitle: "Trimester 3",
      description: "Advanced nutrition formulated for the rapid fetal growth and energy demands of the final trimester.",
      features: ["Highest protein yield", "Peak DHA for brain accretion", "Calcium for skeletal strength"],
    },
    {
      variant: "matrusneha" as const,
      title: "Matrusneha",
      subtitle: "Postpartum & Lactation",
      description: "Restorative nutrition supporting maternal recovery and enriching breast milk composition.",
      features: ["Lactation support", "Maternal tissue repair", "Sustained energy release"],
    }
  ],
  nutritionForAll: {
    headline: "Why should good maternal nutrition feel out of reach?",
  },
  science: {
    pillars: [
      { title: "Fetal Development", description: "Targeted organogenesis support." },
      { title: "Maternal Health", description: "Preserving maternal nutrient stores." },
      { title: "Immunity", description: "Fortifying dual immune systems." },
      { title: "Cognitive Capital", description: "Building neural architecture." },
      { title: "Bone Development", description: "Structural integrity." },
    ]
  },
  certification: {
    facts: [
      { value: 97, suffix: "%", description: "DHA Absorption" },
      { value: 1, suffix: " Million", description: "Neural Connections/sec" },
      { value: 200, suffix: "+", description: "Bioactive Components" },
      { value: 20, suffix: "%", description: "Total Brain Energy" },
      { value: 450, suffix: "", description: "Additional Calories Needed" },
    ]
  },
  philosophy: {
    sections: [
      { title: "Pregnancy", description: "The foundation of human capital." },
      { title: "Lactation", description: "The continuation of life's first bond." },
      { title: "The Evolving Taste Of Motherhood", description: "Nutrition that adapts to sensory changes." },
    ]
  },
  blogs: [
    {
      category: "Nutrition",
      title: "400 mcg: The Nutrient That Supports A Baby",
      excerpt: "Understanding the critical role of folic acid in early development.",
    },
    {
      category: "Biology",
      title: "24 Hours To Create Life",
      excerpt: "The miraculous daily cellular division during the first trimester.",
    },
    {
      category: "Philosophy",
      title: "70+ Years Of Life. One Philosophy Of Nourishment",
      excerpt: "How maternal nutrition impacts long-term generational health.",
    }
  ],
  cta: {
    headline: "Because Nourishment Shapes Generations.",
    action: "Discover The Science",
  }
};
