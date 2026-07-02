export interface Author {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  biography: string;
  avatarUrl?: string; // Optional, can use a sleek monogram if not present
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path or identifier
}

export interface Topic {
  id: string;
  title: string;
  relatedNutrients: string[];
  relatedScience: string[];
  relatedStages: string[];
  relatedIngredients: string[];
  relatedProducts: string[];
}

export interface JourneyStage {
  id: string;
  title: string;
  overview: string;
  nutritionalPriorities: string[];
  developmentPriorities: string[];
}

export interface RelatedContent {
  articles: string[]; // Slugs
  products: string[]; // Slugs (e.g., 'garbhika', 'matrusneha')
  science: string[]; // Science Hub Topics/IDs
  nutrients: string[]; // Nutrient IDs
  stages: string[]; // Journey Stage IDs
  topics: string[]; // Topic IDs
}

export interface ArticleBlock {
  type: "paragraph" | "highlight" | "science-insight" | "research-callout" | "maternal-insight" | "transition";
  content: string;
  metadata?: {
    title?: string;
    source?: string;
    author?: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publicationDate: string; // ISO format
  readingTimeMinutes: number;
  authorId: string;
  categoryId: string;
  stageIds: string[];
  topicIds: string[];
  heroImage?: string; // Optional
  
  // The actual rich content structured as editorial blocks
  blocks: ArticleBlock[];
  
  // Ecosystem connectivity
  connections: RelatedContent;
}

export interface JournalData {
  authors: Record<string, Author>;
  categories: Record<string, Category>;
  topics: Record<string, Topic>;
  journeyStages: Record<string, JourneyStage>;
  articles: Article[];
}
