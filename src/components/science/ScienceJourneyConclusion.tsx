"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function ScienceJourneyConclusion() {
  return (
    <Section id="conclusion" variant="editorial" className="py-32 lg:py-48 bg-foreground text-background">
      <Container className="flex flex-col items-center text-center gap-16">
        
        <MotionWrapper animation="slideUp" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-background/50 mb-8">
            <span>Understanding Stages</span>
            <span className="text-accent">→</span>
            <span>Understanding Nutrients</span>
            <span className="text-accent">→</span>
            <span>Understanding Formulations</span>
            <span className="text-accent">→</span>
            <span className="text-background">Supporting Mothers</span>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="slideUp" delay={0.2}>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight max-w-4xl text-balance">
            The Science Exists to Serve the Mother
          </h2>
        </MotionWrapper>

        <MotionWrapper animation="slideUp" delay={0.3}>
          <p className="text-xl md:text-2xl text-background/70 font-light leading-relaxed max-w-2xl text-balance mb-12">
            Every clinical trial, every bioavailability study, and every formulation decision we make is driven by one singular objective: to provide uncompromising physiological support for the maternal journey.
          </p>
        </MotionWrapper>

        <MotionWrapper animation="fade" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            
            <Link href="/products/garbhika" className="group p-8 border border-background/20 hover:border-accent hover:bg-background/5 rounded-3xl transition-all duration-500 flex flex-col items-center justify-center gap-4 relative overflow-hidden text-center">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-background/50 group-hover:text-background/80 transition-colors">Pregnancy Support</span>
               <span className="font-serif text-3xl text-background">Garbhika</span>
            </Link>
            
            <Link href="/products/matrusneha" className="group p-8 border border-background/20 hover:border-primary hover:bg-background/5 rounded-3xl transition-all duration-500 flex flex-col items-center justify-center gap-4 relative overflow-hidden text-center">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-background/50 group-hover:text-background/80 transition-colors">Postpartum Recovery</span>
               <span className="font-serif text-3xl text-background">Matrusneha</span>
            </Link>

            <Link href="/explore" className="group p-8 border border-background/20 hover:border-background/40 hover:bg-background/5 rounded-3xl transition-all duration-500 flex flex-col items-center justify-center gap-4 relative overflow-hidden text-center">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-background/50 group-hover:text-background/80 transition-colors">Journal</span>
               <span className="font-serif text-2xl text-background italic">Explore Articles</span>
            </Link>

          </div>
        </MotionWrapper>

      </Container>
    </Section>
  );
}
