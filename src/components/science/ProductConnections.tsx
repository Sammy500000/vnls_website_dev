"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ProductConnection } from "@/data/science/types";

interface ProductConnectionsProps {
  connections: ProductConnection[];
}

export function ProductConnections({ connections }: ProductConnectionsProps) {
  return (
    <Section id="product-connections" variant="editorial" className="py-24 lg:py-32 bg-foreground/[0.02]">
      <Container className="flex flex-col gap-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Formulation Architecture
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight">
            Nutritional Application
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full">
          {connections.map((conn, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-surface p-8 md:p-12 rounded-3xl border border-border/30 hover:border-accent/30 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-4 relative">
                
                {/* 1: Nutrient */}
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-background rounded-2xl border shadow-sm w-full">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">Nutrient Core</span>
                  <span className="font-serif text-xl text-foreground">{conn.nutrient}</span>
                </div>

                <ConnectorArrow />

                {/* 2: Need */}
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-background rounded-2xl border shadow-sm w-full">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3">Biological Need</span>
                  <span className="text-sm font-light text-foreground/80 leading-relaxed">{conn.maternalNeed}</span>
                </div>

                <ConnectorArrow />

                {/* 3: Logic */}
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-accent/5 rounded-2xl border border-accent/20 w-full">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-3">Formulation Logic</span>
                  <span className="text-sm font-light text-foreground/80 leading-relaxed">{conn.formulationLogic}</span>
                </div>

                <ConnectorArrow />

                {/* 4: Product */}
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-foreground rounded-2xl border shadow-xl w-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-background/60 mb-3 relative z-10">Target Outcome</span>
                  <Link href={conn.productTarget} className="font-serif text-2xl text-background relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    {conn.product} <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}

function ConnectorArrow() {
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-center text-border/60 w-8 flex-shrink-0">
        <div className="w-full h-[1px] bg-border/40" />
        <span className="absolute">→</span>
      </div>
      <div className="md:hidden flex items-center justify-center text-border/60 h-8 flex-shrink-0">
        <div className="h-full w-[1px] bg-border/40" />
        <span className="absolute rotate-90">→</span>
      </div>
    </>
  );
}
