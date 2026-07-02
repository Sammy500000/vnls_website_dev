"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Topic } from "@/data/journal/types";

interface TopicExplorerProps {
  topics: Topic[];
}

export function TopicExplorer({ topics }: TopicExplorerProps) {
  const [activeTopicId, setActiveTopicId] = useState<string>(topics[0]?.id);

  const activeTopic = topics.find(t => t.id === activeTopicId) || topics[0];

  if (!activeTopic) return null;

  return (
    <Section id="topic-explorer" variant="editorial" className="py-24">
      <Container className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Topic List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-32 self-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Topic Explorer
            </span>
            <h2 className="font-serif text-4xl text-foreground font-medium mb-8">
              Index
            </h2>
          </motion.div>

          <div className="flex flex-wrap lg:flex-col gap-3">
            {topics.map((topic, idx) => {
              const isActive = topic.id === activeTopicId;
              return (
                <motion.button
                  key={topic.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`px-6 py-3 rounded-full lg:rounded-2xl text-left transition-all duration-300 font-serif text-lg md:text-xl border
                    ${isActive 
                      ? "bg-accent/10 border-accent/40 text-accent shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.1)]" 
                      : "bg-background border-border/30 text-foreground/60 hover:text-foreground hover:border-accent/30 hover:bg-foreground/[0.02]"
                    }
                  `}
                >
                  {topic.title}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right: Topic Deep Connections */}
        <div className="w-full lg:w-2/3 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-surface p-8 md:p-12 rounded-[2rem] border border-border/30 flex flex-col gap-12 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-9xl font-serif">
                 {activeTopic.title[0]}
               </div>

               <div className="relative z-10 flex flex-col gap-2">
                 <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                   {activeTopic.title}
                 </h3>
                 <Link href={`/explore/topic/${activeTopic.id}`} className="text-xs font-bold tracking-[0.2em] uppercase text-accent hover:text-foreground transition-colors flex items-center gap-2 w-max">
                   View All Articles <span className="text-lg leading-none">→</span>
                 </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10 pt-8 border-t border-border/20">
                 
                 {/* Science */}
                 <div className="flex flex-col gap-4">
                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Related Science</span>
                   <ul className="flex flex-col gap-3">
                     {activeTopic.relatedScience.map(item => (
                       <li key={item} className="text-foreground/80 font-light flex items-start gap-2">
                         <span className="text-primary mt-1 text-[10px]">✦</span> {item}
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* Nutrients/Ingredients */}
                 <div className="flex flex-col gap-4">
                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Key Components</span>
                   <ul className="flex flex-col gap-3">
                     {[...activeTopic.relatedNutrients, ...activeTopic.relatedIngredients].map(item => (
                       <li key={item} className="text-foreground/80 font-light flex items-start gap-2">
                         <span className="text-accent mt-1 text-[10px]">✦</span> {item}
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* Stages */}
                 <div className="flex flex-col gap-4">
                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Journey Stages</span>
                   <div className="flex flex-wrap gap-2">
                     {activeTopic.relatedStages.map(item => (
                       <span key={item} className="px-3 py-1.5 bg-foreground/[0.03] border border-border/30 rounded-md text-xs font-medium text-foreground/70 uppercase tracking-widest">
                         {item.replace("-", " ")}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* Products */}
                 <div className="flex flex-col gap-4">
                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/50">Formulations</span>
                   <div className="flex flex-wrap gap-3">
                     {activeTopic.relatedProducts.map(item => (
                       <Link key={item} href={`/products/${item}`} className="font-serif text-xl italic text-foreground border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors">
                         {item}
                       </Link>
                     ))}
                   </div>
                 </div>

               </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </Section>
  );
}
