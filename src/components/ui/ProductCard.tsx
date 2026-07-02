"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { GlassButton } from "./GlassButton";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { ASSETS } from "@/config/assets";

interface ProductCardProps {
  variant?: "garbhika" | "matrusneha" | "default";
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  features?: string[];
}

export function ProductCard({
  variant = "default",
  title,
  subtitle,
  description,
  imageUrl,
  features = [],
}: ProductCardProps) {
  
  // Subtle theme variations based on product
  const variantStyles = {
    garbhika: "from-accent/10 to-transparent",
    matrusneha: "from-primary/20 to-transparent",
    default: "from-white/10 to-transparent",
  };

  return (
    <GlassCard variant="large" className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
      {/* Visual Side */}
      <div className={`w-full md:w-1/2 aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden relative bg-gradient-to-tr ${variantStyles[variant]} flex items-center justify-center p-8 group-hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.1)] transition-shadow duration-700`}>
        {/* Soft Ambient Glow Behind Product */}
        <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75 opacity-50 transition-transform duration-slow group-hover:scale-100 group-hover:opacity-70" />
        
        {/* Floating Product Render */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full z-10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105 drop-shadow-2xl"
        >
          <Image 
            src={variant === "garbhika" || variant === "matrusneha" ? ASSETS.products[variant].render : (imageUrl || ASSETS.products.garbhika.render)} 
            alt={title} 
            fill 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 400px" 
          />
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-accent mb-4">
          {subtitle}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {description}
        </p>

        {features.length > 0 && (
          <MotionWrapper animation="stagger" className="flex flex-col gap-3 mb-10 w-full">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                {feature}
              </div>
            ))}
          </MotionWrapper>
        )}

        <div className="flex gap-4 w-full sm:w-auto mt-auto">
          <GlassButton 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto"
            href={variant === "default" ? "#" : `/products/${variant}`}
          >
            Explore Formulation
          </GlassButton>
        </div>
      </div>
    </GlassCard>
  );
}
