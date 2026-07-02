export const BreathingRhythm = {
  // Ultra soft, long duration, mimicking a deep slow inhale
  inhale: {
    duration: 1.8,
    ease: [0.25, 1, 0.5, 1], // Custom soft curve similar to power2.out but gentler
  },
  
  // The slow settling after movement
  settle: {
    duration: 2.5,
    ease: [0.22, 1, 0.36, 1], // Soft exhale curve
  },

  // For continuous breathing ambient loops
  ambientPulse: {
    duration: 4,
    ease: "easeInOut" as const,
    repeat: Infinity,
    repeatType: "mirror" as const,
  },

  // Replaces harsh stagger effects
  softStagger: (index: number) => ({
    delay: index * 0.3, // Wider delay for a slower feeling
    duration: 1.5,
    ease: [0.25, 1, 0.5, 1],
  }),

  // Standard entry animation for sections (Fade + Float + Breathe)
  entryAnimation: {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        opacity: { duration: 2, ease: "linear" as const },
        y: { duration: 2.5, ease: [0.22, 1, 0.36, 1] as const }
      }
    }
  }
};
