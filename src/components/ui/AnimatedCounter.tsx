"use client";

import React, { useState, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, DURATIONS, EASING } from "@/lib/gsap";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  icon,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const target = { val: 0 };
    
    gsap.to(target, {
      val: value,
      duration: DURATIONS.SECTION_REVEAL,
      ease: EASING.PREMIUM,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        setCount(Math.ceil(target.val));
      }
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center ${className}`}>
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      <div className="font-serif text-5xl md:text-6xl font-medium text-foreground tracking-tight">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
}
