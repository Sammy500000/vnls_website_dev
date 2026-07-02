"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { WhyDifferentColumn } from "@/data/products/types";

interface WhyDifferentProps {
  headline: string;
  explanation: string;
  columns: WhyDifferentColumn[];
}

export function WhyDifferent({ headline, explanation, columns }: WhyDifferentProps) {
  return (
    <Section id="why-different" variant="editorial" className="py-24 lg:py-32 bg-foreground/[0.02]">
      <Container className="flex flex-col gap-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-center mx-auto"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4 block">
            Formulation Approach
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight mb-6 text-balance">
            {headline}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            {explanation}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-4xl mx-auto w-full">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col items-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: colIdx * 0.2 }}
                className={`font-serif text-xl md:text-2xl text-center mb-12 h-16 flex items-center justify-center
                  ${column.highlighted ? "text-accent font-medium" : "text-foreground/50"}
                `}
              >
                {column.heading}
              </motion.h3>

              <div className="flex flex-col items-center w-full relative">
                {column.steps.map((step, stepIdx) => (
                  <React.Fragment key={stepIdx}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: colIdx * 0.2 + stepIdx * 0.15 }}
                      className={`w-full max-w-[280px] p-6 rounded-2xl text-center backdrop-blur-sm border relative z-10
                        ${column.highlighted 
                          ? "bg-accent/5 border-accent/20 shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.1)]" 
                          : "bg-transparent border-border/30"
                        }
                      `}
                    >
                      <span className={`text-sm md:text-base font-medium tracking-wide
                        ${column.highlighted ? "text-foreground" : "text-foreground/50"}
                      `}>
                        {step}
                      </span>
                    </motion.div>

                    {/* Connector Arrow */}
                    {stepIdx < column.steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 40 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: colIdx * 0.2 + stepIdx * 0.15 + 0.2 }}
                        className={`w-[1px] my-2 relative
                          ${column.highlighted ? "bg-accent/30" : "bg-border/30"}
                        `}
                      >
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full
                          ${column.highlighted ? "text-accent/50" : "text-border/50"}
                        `}>
                          ↓
                        </div>
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
