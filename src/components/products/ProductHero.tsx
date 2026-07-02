import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { ProductVisualContainer } from "./ProductVisualContainer";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";

interface ProductHeroProps {
  productId: "garbhika" | "matrusneha";
  title: string;
  positioning: string;
  benefits: string[];
  heroStory: {
    title: string;
    content: string;
  };
  cta: string;
}

export function ProductHero({ productId, title, positioning, benefits, heroStory, cta }: ProductHeroProps) {
  return (
    <Section id="hero" variant="hero" className="min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      <Container className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start w-full">
          <MotionWrapper animation="slideUp">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-foreground tracking-tight mb-6">
              {title}
            </h1>
          </MotionWrapper>

          <MotionWrapper animation="slideUp" delay={0.1}>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-10 max-w-xl font-light">
              {positioning}
            </p>
          </MotionWrapper>

          <MotionWrapper animation="stagger" delay={0.2} className="flex flex-wrap gap-4 mb-12">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="glass-surface px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase text-foreground/80 shadow-lg border border-border/50"
              >
                {benefit}
              </div>
            ))}
          </MotionWrapper>

          {/* Product Story Block */}
          <MotionWrapper animation="fade" delay={0.25} className="mb-12 flex flex-col gap-2">
            <span className="text-lg md:text-xl font-serif italic text-muted-foreground/80 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent/50" />
              Trusted by mothers.
            </span>
            <span className="text-lg md:text-xl font-serif italic text-muted-foreground/80 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent/50" />
              Engineered by science.
            </span>
            <span className="text-lg md:text-xl font-serif italic text-muted-foreground/80 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent/50" />
              Inspired by tradition.
            </span>
          </MotionWrapper>

          <MotionWrapper animation="fade" delay={0.3} className="mb-12 border-l-2 border-accent pl-6 py-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3 relative z-10">
              {heroStory.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-xl relative z-10">
              {heroStory.content}
            </p>
          </MotionWrapper>

          <MotionWrapper animation="fade" delay={0.4}>
            <Link href="#ingredients">
              <GlassButton variant="primary" size="lg" className="hover:scale-105 transition-transform duration-300">
                {cta}
              </GlassButton>
            </Link>
          </MotionWrapper>
        </div>

        {/* Right Side: Visual */}
        <MotionWrapper animation="scale" delay={0.2} className="w-full h-full lg:h-[85vh] relative z-10 hidden xl:block">
          <ProductVisualContainer productId={productId} />
        </MotionWrapper>

      </Container>
    </Section>
  );
}
