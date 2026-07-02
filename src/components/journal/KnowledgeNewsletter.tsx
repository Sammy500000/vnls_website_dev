"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function KnowledgeNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <Section id="knowledge-newsletter" className="py-32 bg-foreground text-background">
      <Container className="flex justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl w-full flex flex-col items-center text-center gap-10"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
              Continuous Education
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight text-background">
              The Journal Digest
            </h2>
            <p className="text-lg text-background/60 font-light leading-relaxed max-w-xl mx-auto">
              A curated selection of clinical research, maternal insights, and nutritional science delivered monthly. No marketing, just knowledge.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full relative mt-4">
            <div className={`relative flex items-center w-full border-b transition-colors duration-500 pb-2
              ${status === "success" ? "border-primary" : "border-background/30 focus-within:border-accent"}
            `}>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                disabled={status !== "idle"}
                className="w-full bg-transparent outline-none font-serif text-xl md:text-2xl text-background placeholder:text-background/30 disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={status !== "idle" || !email}
                className="ml-4 flex-shrink-0 text-[10px] font-bold tracking-[0.2em] uppercase text-background hover:text-accent disabled:opacity-30 transition-colors"
              >
                {status === "idle" ? "Subscribe" : status === "submitting" ? "Processing..." : "Subscribed"}
              </button>
            </div>
          </form>

        </motion.div>

      </Container>
    </Section>
  );
}
