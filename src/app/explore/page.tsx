import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { NoiseTexture } from "@/components/shared/NoiseTexture";
import { JournalHero } from "@/components/journal/JournalHero";
import { FeaturedStory } from "@/components/journal/FeaturedStory";
import { MaternalJourneyExplorer } from "@/components/journal/MaternalJourneyExplorer";
import { KnowledgeCategories } from "@/components/journal/KnowledgeCategories";
import { TopicExplorer } from "@/components/journal/TopicExplorer";
import { JournalSearch } from "@/components/journal/JournalSearch";
import { KnowledgeNewsletter } from "@/components/journal/KnowledgeNewsletter";
import { journalData } from "@/data/journal/data";

export default function ExplorePage() {
  const data = journalData;
  const articles = data.articles;
  
  // For the landing page, we'll feature the first article.
  const featuredArticle = articles[0];
  const featuredCategory = data.categories[featuredArticle.categoryId];
  const featuredAuthor = data.authors[featuredArticle.authorId];

  return (
    <PageContainer className="bg-background relative">
      <NoiseTexture className="fixed inset-0 z-0" />
      
      <div className="relative z-10 w-full pt-12 pb-24 px-6 max-w-4xl mx-auto flex flex-col gap-6 items-center text-center">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground block">
          Knowledge Ecosystem Search
        </span>
        <JournalSearch articles={articles} />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        
        <JournalHero />
        
        <FeaturedStory 
          article={featuredArticle} 
          category={featuredCategory} 
          author={featuredAuthor} 
        />
        
        <KnowledgeCategories categories={Object.values(data.categories)} />
        
        <MaternalJourneyExplorer 
          stages={Object.values(data.journeyStages)} 
          articles={articles} 
        />
        
        <TopicExplorer topics={Object.values(data.topics)} />

        <KnowledgeNewsletter />

      </div>
    </PageContainer>
  );
}
