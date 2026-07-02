"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Article } from "@/data/journal/types";

interface RelatedReadingProps {
  currentArticleSlug: string;
  articles: Article[];
  relatedSlugs: string[];
}

export function RelatedReading({ currentArticleSlug, articles, relatedSlugs }: RelatedReadingProps) {
  // Filter based on the explicit connections array from the data model, 
  // ensuring we don't recommend the article currently being read.
  const recommended = articles.filter(a => relatedSlugs.includes(a.slug) && a.slug !== currentArticleSlug);

  if (recommended.length === 0) return null;

  return (
    <Section id="related-reading" className="py-24 bg-foreground/[0.02] border-t border-border/20">
      <Container>
        
        <div className="flex flex-col gap-4 mb-12">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
            Further Exploration
          </span>
          <h2 className="font-serif text-4xl text-foreground font-medium tracking-tight">
            Related Reading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommended.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              <Link 
                href={`/explore/${article.slug}`}
                className="group flex flex-col p-8 md:p-10 rounded-3xl border border-border/30 hover:border-accent/40 glass-surface hover:bg-accent/5 transition-all duration-500 h-full relative overflow-hidden"
              >
                
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  <span className="text-muted-foreground">{article.readingTimeMinutes} Min Read</span>
                  <span className="w-1 h-1 rounded-full bg-border/50" />
                  <span className="text-foreground/50 group-hover:text-accent transition-colors">View Article</span>
                </div>

                <h3 className="font-serif text-3xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-base text-foreground/60 font-light leading-relaxed mb-8 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-border/20 flex flex-wrap gap-2">
                  {article.connections.topics.map(t => (
                    <span key={t} className="text-[9px] font-bold tracking-[0.2em] uppercase text-foreground/40 border border-border/30 rounded-md px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
