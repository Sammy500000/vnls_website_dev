/**
 * Centralized Asset Architecture for VNLS
 * This configuration ensures that future visual asset replacements
 * require zero component rewrites. Simply update the paths here.
 */

export const ASSETS = {
  products: {
    garbhika: {
      render: "/garbhika_pic.png",
      fallback: "/garbhika_pic.png" // Placeholder if specific 3D model path is missing
    },
    matrusneha: {
      render: "/matrusneha_pic.png",
      fallback: "/matrusneha_pic.png"
    }
  },
  ingredients: {
    dha: "/DHA.png",
    ashwagandha: "/ashwagandha.png",
    choline: "/choline.png",
    fennel: "/fennel.png",
    moringa: "/moringa.png",
    protein: "/protein.png",
    shatavari: "/shatavari.png",
    // Fallbacks for currently missing ingredients
    fiber: "/protein.png", // Using a fallback until the actual image is provided
    vitamins: "/protein.png",
    shingada: "/protein.png"
  },
  illustrations: {
    mother: "/mother.png"
  },
  videos: {
    corporateFilmThumbnail: "/mother.png", // Fallback until a specific thumbnail is provided
    corporateFilmUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example URL
  }
} as const;

export type ProductId = keyof typeof ASSETS.products;
export type IngredientId = keyof typeof ASSETS.ingredients;
