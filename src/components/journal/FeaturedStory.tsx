"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Article, Category, Author } from "@/data/journal/types";

interface FeaturedStoryProps {
  article: Article;
  category: Category;
  author: Author;
}

export function FeaturedStory({ article, category, author }: FeaturedStoryProps) {
  const dateStr = new Date(article.publicationDate).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric"
  });

  return (
    <Section id="featured-story" className="py-12">
      <Container>
        <Link href={`/explore/${article.slug}`} className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-[70vh] rounded-[2rem] overflow-hidden relative flex flex-col justify-end p-8 md:p-16 border border-border/20"
          >
            {/* Magazine Cover Visual Background */}
            <div className="absolute inset-0 z-0 bg-foreground group-hover:scale-105 transition-transform duration-[1.5s] ease-out">
              {article.heroImage ? (
                <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover opacity-60" />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-accent/20 to-transparent opacity-80" />
              )}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />

            <div className="relative z-20 flex flex-col gap-6 max-w-4xl">
              
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
                <span className="text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {category.title}
                </span>
                <span className="text-foreground/50">{article.readingTimeMinutes} Min Read</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-foreground tracking-tight group-hover:text-accent transition-colors duration-500 text-balance">
                {article.title}
              </h2>
              
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-2xl">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-6 mt-4 pt-6 border-t border-border/20">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">Author</span>
                  <span className="font-serif text-base text-foreground">{author.name}</span>
                </div>
                <div className="w-[1px] h-8 bg-border/40" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">Published</span>
                  <span className="font-serif text-base text-foreground">{dateStr}</span>
                </div>
              </div>

            </div>
          </motion.div>
        </Link>
      </Container>
    </Section>
  );
}
