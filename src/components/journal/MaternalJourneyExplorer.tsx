"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { JourneyStage, Article } from "@/data/journal/types";

interface MaternalJourneyExplorerProps {
  stages: JourneyStage[];
  articles: Article[];
}

export function MaternalJourneyExplorer({ stages, articles }: MaternalJourneyExplorerProps) {
  const [activeId, setActiveId] = useState(stages[0]?.id);

  const activeStage = stages.find(s => s.id === activeId) || stages[0];
  const relatedArticles = articles.filter(a => a.stageIds.includes(activeStage.id));

  return (
    <Section id="journey-explorer" variant="editorial" className="py-24 bg-foreground text-background">
      <Container className="flex flex-col gap-20">
        
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-background/20 pb-8 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-4 block">
              Maternal Timeline
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
              Journey Filter
            </h2>
          </motion.div>
          
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-4 md:pb-0">
            {stages.map((stage) => {
              const isActive = stage.id === activeId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveId(stage.id)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 border
                    ${isActive 
                      ? "bg-accent/20 border-accent/40 text-accent shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.2)]" 
                      : "bg-transparent border-background/20 text-background/50 hover:text-background hover:border-background/50"}
                  `}
                >
                  {stage.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
            >
              
              {/* Stage Overview */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <h3 className="font-serif text-5xl md:text-6xl tracking-tight leading-[1.1] text-background">
                  {activeStage.title}
                </h3>
                <p className="text-xl text-background/70 font-light leading-relaxed italic border-l-2 border-accent pl-6">
                  {activeStage.overview}
                </p>

                <div className="flex flex-col gap-6 mt-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">Nutritional Focus</span>
                    <div className="flex flex-wrap gap-2">
                      {activeStage.nutritionalPriorities.map(p => (
                        <span key={p} className="px-3 py-1 border border-background/20 rounded-full text-xs text-background/80">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-2 block">Development Focus</span>
                    <div className="flex flex-wrap gap-2">
                      {activeStage.developmentPriorities.map(p => (
                        <span key={p} className="px-3 py-1 border border-background/20 rounded-full text-xs text-background/80">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="lg:col-span-7 flex flex-col gap-6 lg:border-l lg:border-background/20 lg:pl-16">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-background/50">Stage Publications</span>
                  <Link href={`/explore/category/${activeStage.id}`} className="text-accent text-xs font-bold uppercase tracking-widest hover:text-background transition-colors">
                    View All →
                  </Link>
                </div>

                {relatedArticles.length > 0 ? (
                  relatedArticles.map((article) => (
                    <Link 
                      key={article.slug} 
                      href={`/explore/${article.slug}`}
                      className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-background/10 hover:border-accent/40 bg-background/5 hover:bg-background/10 transition-all duration-300"
                    >
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex gap-3 mb-3 text-[10px] font-bold tracking-widest uppercase text-background/40">
                          <span>{article.readingTimeMinutes} Min Read</span>
                        </div>
                        <h4 className="font-serif text-2xl text-background mb-3 group-hover:text-accent transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-sm text-background/60 font-light line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-8 border border-background/10 border-dashed rounded-2xl text-center flex flex-col items-center justify-center">
                    <span className="text-background/40 text-sm mb-2">Publications currently in peer review.</span>
                    <Link href="/explore" className="text-accent text-xs uppercase tracking-widest font-bold">Return to Journal</Link>
                  </div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </Section>
  );
}
