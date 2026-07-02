"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/config/assets";

export function VideoPreviewExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      className="w-full h-full rounded-[2rem] overflow-hidden relative group cursor-pointer border border-border/30 shadow-2xl"
    >
      {/* Thumbnail Image */}
      <motion.div 
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image 
          src={ASSETS.videos.corporateFilmThumbnail}
          alt="Documentary Preview"
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
        />
      </motion.div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
      
      {/* Play Button (Magnetic) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="relative flex items-center justify-center"
        >
          {/* Ripple effect */}
          <AnimatePresence>
             {isHovered && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1.5 }}
                 exit={{ opacity: 0, scale: 0.8 }}
                 transition={{ duration: 0.6 }}
                 className="absolute w-24 h-24 rounded-full border border-primary/40 bg-primary/10"
               />
             )}
          </AnimatePresence>
          
          <div className="w-20 h-20 rounded-full glass-surface border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground ml-1">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Narrative Label */}
      <div className="absolute bottom-6 left-6 flex items-center gap-4">
        <div className="glass-surface px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest text-foreground uppercase backdrop-blur-md">
          Play Film
        </div>
        <span className="text-sm font-serif italic text-foreground/80">3:45</span>
      </div>
    </div>
  );
}
