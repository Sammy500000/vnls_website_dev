"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Category } from "@/data/journal/types";

interface KnowledgeCategoriesProps {
  categories: Category[];
}

export function KnowledgeCategories({ categories }: KnowledgeCategoriesProps) {
  return (
    <Section id="knowledge-categories" className="py-24 bg-foreground/[0.01]">
      <Container>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border/20 pb-6 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium">Categories</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <Link 
                href={`/explore/category/${category.id}`}
                className="group flex flex-col p-8 rounded-3xl border border-border/30 hover:border-accent/30 glass-surface hover:bg-accent/5 transition-all duration-500 h-full relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-500">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-500">✦</span>
                </div>
                
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm font-light text-foreground/70 leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="mt-auto pt-4 border-t border-border/20 flex justify-between items-center w-full">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                    Explore
                  </span>
                  <span className="text-muted-foreground group-hover:text-accent transition-colors transform group-hover:translate-x-1 duration-300">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
