"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FlavourExperienceVisualProps {
  flavourId: string;
}

export function FlavourExperienceVisual({ flavourId }: FlavourExperienceVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  const getVisual = () => {
    switch (flavourId) {
      case "chocolate":
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#2D1B13]">
             {/* Chocolate Swirls */}
             <motion.div 
               className="absolute w-[150%] h-[150%] rounded-[40%] bg-gradient-to-tr from-[#1A0F0A] to-[#3D251A] opacity-60 blur-3xl mix-blend-screen"
               animate={prefersReducedMotion ? {} : { rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
             <motion.div 
               className="absolute w-[120%] h-[120%] rounded-[45%] bg-gradient-to-br from-[#4A2D1F] to-transparent opacity-40 blur-2xl mix-blend-screen"
               animate={prefersReducedMotion ? {} : { rotate: [0, -90, 0], scale: [1, 1.1, 1] }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             />
             {/* Cocoa Particles */}
             {[...Array(12)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-2 h-2 rounded-full bg-[#5C3A21] blur-[1px]"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                 }}
                 animate={prefersReducedMotion ? {} : {
                   y: [0, -100],
                   x: [0, (Math.random() - 0.5) * 50],
                   opacity: [0, 0.8, 0],
                   scale: [0, Math.random() + 0.5, 0]
                 }}
                 transition={{
                   duration: Math.random() * 5 + 5,
                   repeat: Infinity,
                   delay: Math.random() * 5,
                   ease: "easeOut"
                 }}
               />
             ))}
             <span className="relative z-10 font-serif text-3xl italic text-[#E8D1C5]/40 mix-blend-overlay font-bold">Deep Cocoa</span>
          </div>
        );
      case "mawa-kulfi":
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
             {/* Cream Swirls */}
             <motion.div 
               className="absolute w-[150%] h-[150%] rounded-[35%] bg-gradient-to-tr from-[#F4E8D6] to-[#FFF] opacity-80 blur-3xl mix-blend-multiply"
               animate={prefersReducedMotion ? {} : { rotate: [0, 60, 0], scale: [1, 1.1, 1] }}
               transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
             />
             {/* Saffron & Nut Particles */}
             {[...Array(15)].map((_, i) => (
               <motion.div
                 key={i}
                 className={`absolute rounded-full blur-[1px] ${i % 3 === 0 ? 'w-4 h-[2px] bg-[#E35D5D] rotate-45' : 'w-2 h-2 bg-[#D4B886]'}`}
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                 }}
                 animate={prefersReducedMotion ? {} : {
                   y: [0, -80],
                   rotate: [0, 180],
                   opacity: [0, 0.6, 0]
                 }}
                 transition={{
                   duration: Math.random() * 4 + 6,
                   repeat: Infinity,
                   delay: Math.random() * 5,
                   ease: "easeOut"
                 }}
               />
             ))}
             <span className="relative z-10 font-serif text-3xl italic text-[#C9A66B]/30 mix-blend-multiply font-bold">Rich Tradition</span>
          </div>
        );
      case "saffron":
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#FFF9F0]">
             {/* Golden Glow */}
             <motion.div 
               className="absolute w-[140%] h-[140%] rounded-full bg-gradient-to-tr from-[#FFD700]/20 to-[#FFA500]/10 opacity-70 blur-[80px]"
               animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
             />
             {/* Saffron Threads */}
             {[...Array(20)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-6 h-[1px] bg-gradient-to-r from-[#FF4500] to-transparent blur-[0.5px]"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   transform: `rotate(${Math.random() * 360}deg)`
                 }}
                 animate={prefersReducedMotion ? {} : {
                   y: [0, -40],
                   x: [0, (Math.random() - 0.5) * 40],
                   opacity: [0, 0.8, 0],
                   rotate: `+=${(Math.random() - 0.5) * 45}deg`
                 }}
                 transition={{
                   duration: Math.random() * 6 + 6,
                   repeat: Infinity,
                   delay: Math.random() * 5,
                   ease: "easeInOut"
                 }}
               />
             ))}
             <span className="relative z-10 font-serif text-3xl italic text-[#FF8C00]/30 mix-blend-multiply font-bold">Golden Warmth</span>
          </div>
        );
      case "cardamom":
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F4F9F4]">
             {/* Fresh Green Glow */}
             <motion.div 
               className="absolute w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-[#A8E6CF]/30 to-transparent opacity-60 blur-[60px]"
               animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             />
             {/* Aromatic Waves */}
             {[...Array(3)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-[80%] h-[80%] rounded-[40%] border border-[#7BC4A8]/20"
                 animate={prefersReducedMotion ? {} : { 
                   rotate: [0, 180, 360], 
                   scale: [0.8 + (i * 0.2), 1.2 + (i * 0.2), 0.8 + (i * 0.2)] 
                 }}
                 transition={{ duration: 15 + (i * 5), repeat: Infinity, ease: "linear" }}
               />
             ))}
             <span className="relative z-10 font-serif text-3xl italic text-[#5DA587]/30 mix-blend-multiply font-bold">Aromatic Clarity</span>
          </div>
        );
      default:
        return <div className="absolute inset-0 bg-primary/10" />;
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {getVisual()}
    </div>
  );
}
