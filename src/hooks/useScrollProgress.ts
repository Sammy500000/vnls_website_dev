import { useState, useEffect } from "react";

/**
 * Placeholder hook for tracking scroll progress.
 * In the future, this can be integrated with Framer Motion's useScroll or GSAP ScrollTrigger.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) {
        setProgress(Math.min(1, Math.max(0, currentScroll / totalHeight)));
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
