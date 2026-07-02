"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "./Container";

export function Navbar() {
  const { scrollY } = useScroll();
  const [navState, setNavState] = useState<"transparent" | "glass" | "solid">("transparent");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 50) {
      setNavState("transparent");
    } else if (latest < 400) {
      setNavState("glass");
    } else {
      setNavState("solid");
    }
  });

  const variants = {
    transparent: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      borderBottomColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    glass: {
      backgroundColor: "var(--color-glass-light)",
      backdropFilter: "blur(24px)",
      borderBottomColor: "var(--color-glass-border)",
      boxShadow: "var(--shadow-sm)",
    },
    solid: {
      backgroundColor: "var(--color-background)",
      backdropFilter: "blur(0px)",
      borderBottomColor: "var(--color-border)",
      boxShadow: "var(--shadow-sm)",
    },
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-colors border-b"
      variants={variants}
      animate={navState}
      initial="transparent"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Container className="h-20 flex items-center justify-between">
        <Link href="/" className="font-serif font-bold text-2xl tracking-tight text-foreground">
          VNLS
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/products/garbhika" className="hover:text-accent transition-colors duration-fast">Products</Link>
          <Link href="/science" className="hover:text-accent transition-colors duration-fast">Science</Link>
          <Link href="/explore" className="hover:text-accent transition-colors duration-fast">Explore</Link>
          <Link href="/about" className="hover:text-accent transition-colors duration-fast">About</Link>
        </nav>
      </Container>
    </motion.header>
  );
}
