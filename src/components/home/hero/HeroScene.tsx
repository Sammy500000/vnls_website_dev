import React from "react";
import { MotherVisual } from "./MotherVisual";
import { FloatingParticles } from "./FloatingParticles";
import { FloatingNutrients } from "./FloatingNutrients";
import { MotherGlow } from "./MotherGlow";

export function HeroScene() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center pointer-events-none">
      
      {/* BACKGROUND LAYER: Large radial focal glow */}
      <MotherGlow />
      
      {/* MIDDLE LAYER: Editorial Visual */}
      <div className="relative z-10 w-full h-full">
        <MotherVisual />
      </div>
      
      {/* FOREGROUND LAYER: Nutrients & Particles */}
      <div className="absolute inset-0 z-20">
        <FloatingParticles />
        <FloatingNutrients />
      </div>
      
    </div>
  );
}
