"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register core plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Set global defaults for premium luxury pacing
  gsap.defaults({
    ease: "power2.out",
    duration: 1.2,
  });
}

// Mobile-safe context utility
export const matchMedia = gsap.matchMedia();

// Export configured instances
export { gsap, ScrollTrigger, useGSAP };

// Luxury animation preset constants
export const DURATIONS = {
  FADE_UP: 1.2,
  IMAGE_REVEAL: 1.5,
  SECTION_REVEAL: 1.8,
  STAGGER: 0.15, // Between 0.12 and 0.18 as requested
};

export const EASING = {
  PREMIUM: "power3.out",
  STANDARD: "power2.out",
  SLOW: "power2.inOut",
};
