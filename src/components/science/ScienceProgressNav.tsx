"use client";

import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

const navItems = [
  { id: "hero", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "nutrient-explorer", label: "Nutrient Explorer" },
  { id: "timing-matters", label: "Timing Matters" },
  { id: "relationship-map", label: "Relationships" },
  { id: "knowledge-modules", label: "Knowledge" },
  { id: "research-story", label: "Research" },
  { id: "insight-library", label: "Insights" },
  { id: "knowledge-graph", label: "Ecosystem Graph" },
  { id: "product-connections", label: "Formulations" }
];

export function ScienceProgressNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const triggers: globalThis.ScrollTrigger[] = [];

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(item.id);
            }
          }
        });
        triggers.push(st);
      }
    });

    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrolled / height) * 100, 0), 100);
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => {
      triggers.forEach(t => t.kill());
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="hidden xl:flex sticky top-[120px] w-[260px] flex-col gap-10 self-start flex-shrink-0 z-40">
      
      {/* Reading Progress Indicator */}
      <div className="flex flex-col gap-3 pb-6 border-b border-border/30">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Reading Progress</span>
          <span className="font-serif text-sm text-foreground">{Math.round(readingProgress)}%</span>
        </div>
        <div className="h-[2px] w-full bg-border/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out rounded-full"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`group flex items-center gap-4 transition-all duration-300 ${
              activeSection === item.id ? "opacity-100" : "opacity-30 hover:opacity-70"
            }`}
          >
            <div className="w-8 flex justify-end">
              <div 
                className={`h-[1px] bg-foreground transition-all duration-300 ${
                  activeSection === item.id ? "w-8" : "w-4 group-hover:w-6"
                }`} 
              />
            </div>
            <span className={`text-[10px] font-bold tracking-widest uppercase text-left transition-colors duration-300 ${
              activeSection === item.id ? "text-accent" : "text-foreground"
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
