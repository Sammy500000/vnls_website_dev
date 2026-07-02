"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Article } from "@/data/journal/types";

interface JournalSearchProps {
  articles: Article[];
}

export function JournalSearch({ articles }: JournalSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const q = query.toLowerCase();
    
    return articles.filter(article => {
      // Title & Excerpt
      if (article.title.toLowerCase().includes(q)) return true;
      if (article.excerpt.toLowerCase().includes(q)) return true;
      
      // Connections (topics, stages, nutrients, science, etc)
      const c = article.connections;
      const inTopics = c.topics.some(t => t.toLowerCase().includes(q));
      const inStages = c.stages.some(s => s.toLowerCase().includes(q));
      const inNutrients = c.nutrients.some(n => n.toLowerCase().includes(q));
      const inScience = c.science.some(s => s.toLowerCase().includes(q));
      const inProducts = c.products.some(p => p.toLowerCase().includes(q));

      return inTopics || inStages || inNutrients || inScience || inProducts;
    });
  }, [query, articles]);

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50">
      
      {/* Search Input */}
      <div className={`relative flex items-center w-full rounded-full transition-all duration-500 overflow-hidden border
        ${isFocused 
          ? "bg-background border-accent shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.15)]" 
          : "bg-foreground/[0.02] border-border/30 hover:border-border/60"
        }
      `}>
        <div className="pl-6 pr-4 text-foreground/40">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search topics, nutrients, stages..."
          className="w-full py-4 bg-transparent outline-none font-serif text-lg text-foreground placeholder:text-foreground/30"
        />
        {query && (
          <button onClick={() => setQuery("")} className="pr-6 pl-4 text-foreground/40 hover:text-foreground transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      {/* Live Results Dropdown */}
      <AnimatePresence>
        {isFocused && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-4 bg-background border border-border/40 rounded-3xl shadow-xl overflow-hidden glass-surface max-h-[60vh] overflow-y-auto"
          >
            {results.length > 0 ? (
              <div className="flex flex-col">
                <div className="px-6 py-4 border-b border-border/20 flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Results</span>
                  <span className="text-xs text-foreground/50">{results.length} found</span>
                </div>
                {results.map((article, idx) => (
                  <Link 
                    key={article.slug} 
                    href={`/explore/${article.slug}`}
                    className={`block px-6 py-5 hover:bg-accent/5 transition-colors group
                      ${idx !== results.length - 1 ? "border-b border-border/10" : ""}
                    `}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                        {article.title}
                      </span>
                      <div className="flex gap-2 items-center flex-wrap">
                        {article.connections.topics.slice(0, 2).map(t => (
                          <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-border/40 text-muted-foreground uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center flex flex-col items-center gap-4">
                <span className="text-2xl opacity-30">🔍</span>
                <p className="text-foreground/50 font-serif text-lg">No publications found matching "{query}"</p>
                <span className="text-xs text-muted-foreground">Try searching for "Iron", "DHA", or "Trimester 3"</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
