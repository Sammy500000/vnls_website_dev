"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ArticleProgressProps {
  totalMinutes: number;
}

export function ArticleProgress({ totalMinutes }: ArticleProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Find the article body wrapper in a real scenario via ref or id. 
      // For now, tracking body scroll minus viewport.
      const el = document.getElementById("article-body");
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // If top is below viewport, progress is 0.
      if (rect.top > viewportHeight) {
        setProgress(0);
        return;
      }
      
      // If bottom is above viewport, progress is 100%.
      if (rect.bottom < 0) {
        setProgress(100);
        return;
      }

      const totalScrollable = rect.height - viewportHeight;
      const scrolled = viewportHeight - rect.top;
      const percent = Math.min(Math.max((scrolled / totalScrollable) * 100, 0), 100);
      
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const remainingTime = Math.max(Math.ceil(totalMinutes * (1 - progress / 100)), 1);
  const isComplete = progress >= 99;

  return (
    <div className="hidden xl:flex sticky top-[120px] w-[260px] flex-col gap-8 self-start flex-shrink-0 z-40">
      
      <div className="flex flex-col gap-3">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Reading Progress</span>
        <div className="flex justify-between items-end mb-2">
          <span className="font-serif text-sm text-foreground">{Math.round(progress)}%</span>
          <span className="text-xs text-foreground/50">{isComplete ? "Completed" : `${remainingTime} min remaining`}</span>
        </div>
        <div className="h-[2px] w-full bg-border/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
         <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Publication Tools</span>
         
         <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-accent transition-colors w-max group">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform">
             <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
           </svg>
           Share Insight
         </button>

         <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-accent transition-colors w-max group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform">
             <line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>
           </svg>
           Back to Top
         </button>
      </div>

    </div>
  );
}
