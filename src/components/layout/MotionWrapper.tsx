"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, matchMedia, DURATIONS, EASING } from "@/lib/gsap";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slideUp" | "scale" | "stagger";
  delay?: number;
  trigger?: "onEnter" | "scrub";
}

export function MotionWrapper({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  trigger = "onEnter"
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    matchMedia.add("(min-width: 768px)", () => {
      let fromState = {};
      const toState: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: DURATIONS.FADE_UP,
        ease: EASING.PREMIUM,
        delay: delay,
      };

      if (animation === "fade") {
        fromState = { opacity: 0 };
      } else if (animation === "slideUp") {
        fromState = { opacity: 0, y: 50 };
      } else if (animation === "scale") {
        fromState = { opacity: 0, scale: 0.95 };
      } else if (animation === "stagger") {
        fromState = { opacity: 0, y: 30 };
        toState.stagger = DURATIONS.STAGGER;
      }

      // If it's stagger, we animate the children, otherwise the wrapper
      const target = animation === "stagger" ? ref.current!.children : ref.current;

      gsap.fromTo(target, fromState, {
        ...toState,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%", // Reveal slightly before it enters fully
          toggleActions: "play none none none", // Only play once
        }
      });
    });
    
    // Mobile fallback (simpler/faster)
    matchMedia.add("(max-width: 767px)", () => {
       gsap.to(ref.current, {
         opacity: 1,
         y: 0,
         duration: 0.5,
         ease: "power1.out",
         scrollTrigger: {
           trigger: ref.current,
           start: "top 95%",
         }
       });
    });

  }, { scope: ref });

  return (
    <div ref={ref} className={`${className} opacity-0`} data-animate={animation}>
      {children}
    </div>
  );
}
