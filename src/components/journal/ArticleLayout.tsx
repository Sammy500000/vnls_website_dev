"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { NoiseTexture } from "@/components/shared/NoiseTexture";
import { ArticleProgress } from "./ArticleProgress";
import { AuthorCard } from "./AuthorCard";
import { KnowledgeConnections } from "./KnowledgeConnections";
import { JournalKnowledgeSystem } from "./JournalKnowledgeSystem";
import { RelatedReading } from "./RelatedReading";
import { KnowledgeHighlight, ScienceInsight, ResearchCallout, MaternalInsight } from "./ArticleEnhancements";
import { JournalSectionTransition } from "./JournalSectionTransition";
import { Article, Author } from "@/data/journal/types";

interface ArticleLayoutProps {
  article: Article;
  author: Author;
  allArticles: Article[];
}

export function ArticleLayout({ article, author, allArticles }: ArticleLayoutProps) {
  const dateStr = new Date(article.publicationDate).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric"
  });

  return (
    <PageContainer className="bg-background relative">
      <NoiseTexture className="fixed inset-0 z-0" />
      
      {/* Article Hero */}
      <section className="relative w-full min-h-[60vh] pt-32 pb-16 flex flex-col items-center justify-center border-b border-border/20 z-10">
         <div className="max-w-4xl w-full px-6 flex flex-col items-center text-center gap-8">
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6 justify-center">
                <span className="text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/20">{article.topicIds[0] || "Knowledge"}</span>
                <span className="w-1 h-1 rounded-full bg-border/50" />
                <span>{article.readingTimeMinutes} Min Read</span>
                <span className="w-1 h-1 rounded-full bg-border/50" />
                <span>{dateStr}</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground tracking-tight text-balance">
                {article.title}
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed max-w-2xl text-balance">
              {article.excerpt}
            </motion.p>
            
         </div>
      </section>

      <div className="relative z-10 w-full flex xl:gap-16 xl:pr-16 max-w-[1400px] mx-auto pt-16">
        
        {/* Sticky Desktop Progress */}
        <ArticleProgress totalMinutes={article.readingTimeMinutes} />

        {/* Article Body */}
        <div id="article-body" className="flex-1 w-full max-w-[800px] mx-auto px-6 lg:px-0">
          
          <div className="flex flex-col text-lg text-foreground/80 font-light leading-[1.8]">
            {article.blocks.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  return <p key={idx} className="mb-8">{block.content}</p>;
                case "highlight":
                  return <KnowledgeHighlight key={idx} content={block.content} />;
                case "science-insight":
                  return <ScienceInsight key={idx} content={block.content} title={block.metadata?.title} />;
                case "research-callout":
                  return <ResearchCallout key={idx} content={block.content} title={block.metadata?.title} />;
                case "maternal-insight":
                  return <MaternalInsight key={idx} content={block.content} author={block.metadata?.author} />;
                case "transition":
                  return <JournalSectionTransition key={idx} text={block.content} />;
                default:
                  return null;
              }
            })}
          </div>

          <JournalKnowledgeSystem article={article} />

          <KnowledgeConnections connections={article.connections} />

          <AuthorCard author={author} />
          
        </div>

      </div>

      <div className="relative z-10 w-full">
         <RelatedReading currentArticleSlug={article.slug} articles={allArticles} relatedSlugs={article.connections.articles} />
      </div>

    </PageContainer>
  );
}
