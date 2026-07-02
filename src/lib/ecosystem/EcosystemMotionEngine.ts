export const EcosystemMotionEngine = {
  
  // Used for global page transitions
  pageTransition: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }
  },

  // Used for soft entry of knowledge components
  gentleFloatIn: {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        opacity: { duration: 2, ease: "linear" as const },
        y: { duration: 2.5, ease: [0.22, 1, 0.36, 1] as const }
      }
    }
  },

  // Used for ecosystem connection lines (SVGs)
  organicPathDraw: {
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    transition: { duration: 4, ease: "easeInOut" }
  },

  // Used for background ambient atmospheres
  ambientWarmth: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.5, 0.3],
    },
    transition: {
      duration: 6,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "mirror" as const,
    }
  }

};
