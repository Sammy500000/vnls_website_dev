"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, matchMedia } from "@/lib/gsap";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!progressRef.current) return;

    matchMedia.add("(min-width: 1024px)", () => {
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
        }
      });
    });
  }, { scope: progressRef });

  return (
    <div className="fixed top-1/2 right-8 -translate-y-1/2 h-32 w-[1px] bg-white/10 z-50 hidden lg:block mix-blend-difference pointer-events-none">
      <div 
        ref={progressRef}
        className="w-[2px] h-full bg-accent absolute top-0 -left-[0.5px] origin-top scale-y-0 shadow-[0_0_10px_rgba(var(--color-accent),0.5)]"
      />
    </div>
  );
}
