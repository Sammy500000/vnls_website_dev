import React from "react";
import Image from "next/image";
import { GlassCard } from "./GlassCard";

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  readTime?: string;
}

export function BlogCard({ category, title, excerpt, imageUrl, readTime }: BlogCardProps) {
  return (
    <GlassCard variant="small" interactive className="group flex flex-col h-full !p-3">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-black/5">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-accent/20 to-primary/20" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold tracking-widest uppercase text-accent">{category}</span>
          {readTime && <span className="text-xs text-muted-foreground">{readTime}</span>}
        </div>
        
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors duration-fast">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-border/50">
          <span className="text-sm font-semibold text-foreground flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-fast">
            Read Article 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
