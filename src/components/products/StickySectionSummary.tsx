"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "@/lib/gsap";

const sectionSummaries = [
  { id: "ingredients", title: "Ingredients", summary: "Every ingredient serves a specific maternal purpose." },
  { id: "science", title: "Science", summary: "Human-centered nutritional science." },
  { id: "specifications", title: "Specifications", summary: "Built to a clinical standard." },
  { id: "quality", title: "Quality", summary: "Uncompromising transparency and trust." }
];

export function StickySectionSummary() {
  const [activeSummary, setActiveSummary] = useState<{title: string, summary: string} | null>(null);

  useEffect(() => {
    const triggers: globalThis.ScrollTrigger[] = [];

    sectionSummaries.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 20%",
          end: "bottom 20%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSummary({ title: section.title, summary: section.summary });
            } else {
              // If we are leaving this section, check if another one is active
              // Timeout helps prevent flickering when jumping between sections
              setTimeout(() => {
                const anyActive = sectionSummaries.some(s => {
                  const sEl = document.getElementById(s.id);
                  if(!sEl) return false;
                  const rect = sEl.getBoundingClientRect();
                  return rect.top < window.innerHeight * 0.2 && rect.bottom > window.innerHeight * 0.2;
                });
                if (!anyActive) setActiveSummary(null);
              }, 50);
            }
          }
        });
        triggers.push(st);
      }
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  return (
    <AnimatePresence>
      {activeSummary && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-20 left-0 right-0 z-40 glass-surface border-b border-border/30 shadow-sm hidden md:block"
        >
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 h-12 flex items-center justify-center lg:justify-start gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              {activeSummary.title}
            </span>
            <span className="w-1 h-1 rounded-full bg-border/50" />
            <span className="text-sm font-serif font-light text-foreground/80 italic">
              {activeSummary.summary}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
