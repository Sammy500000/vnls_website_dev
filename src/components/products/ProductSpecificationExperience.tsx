"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Specification } from "@/data/products/types";

interface ProductSpecificationExperienceProps {
  specifications: Specification[];
}

export function ProductSpecificationExperience({ specifications }: ProductSpecificationExperienceProps) {
  return (
    <Section id="specifications" variant="editorial" className="py-24 lg:py-32">
      <Container className="flex flex-col gap-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Product Specifications
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground tracking-tight">
            Built to a Standard
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {specifications.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 items-start border-t border-border/30 group-hover:border-accent/20 transition-colors duration-500">
                
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-sm font-medium text-muted-foreground/50 font-serif">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground group-hover:text-accent transition-colors duration-500">
                    {spec.title}
                  </h3>
                </div>

                {/* Why It Matters */}
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-3 block">
                    Why It Matters
                  </span>
                  <p className="text-base text-foreground/70 leading-[1.8] font-light">
                    {spec.whyItMatters}
                  </p>
                </div>

                {/* Outcome */}
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3 block">
                    Outcome
                  </span>
                  <p className="text-base text-foreground/80 leading-[1.8] font-light">
                    {spec.outcome}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
