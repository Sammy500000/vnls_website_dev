"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionWrapper } from "@/components/layout/MotionWrapper";
import { FAQ } from "@/data/products/types";
import { motion, AnimatePresence } from "framer-motion";

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" variant="editorial" className="py-24 md:py-32">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start xl:pl-16">
        
        <MotionWrapper animation="slideUp" className="lg:col-span-4 lg:sticky lg:top-32">
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear answers to help you make informed decisions about your nutrition.
          </p>
        </MotionWrapper>

        <div className="lg:col-span-8 flex flex-col">
          <MotionWrapper animation="stagger" delay={0.2} className="flex flex-col">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              
              return (
                <div key={idx} className="border-b border-border/40 group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left py-8 flex justify-between items-center gap-4 group-hover:pl-4 transition-all duration-300"
                  >
                    <h3 className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-accent font-semibold' : 'text-foreground font-medium group-hover:text-foreground/80'}`}>
                      {faq.question}
                    </h3>
                    <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 text-accent">
                      <div className={`absolute w-full h-[2px] bg-current transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                      <div className={`absolute w-[2px] h-full bg-current transition-transform duration-500 ${isOpen ? 'rotate-90 scale-y-0' : 'rotate-0 scale-y-100'}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-lg text-foreground/80 leading-relaxed font-light pb-8 pl-4 border-l-2 border-accent/20 ml-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </MotionWrapper>
        </div>

      </Container>
    </Section>
  );
}
