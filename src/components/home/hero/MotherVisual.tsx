"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MouseParallaxLayer } from "./MouseParallaxLayer";

export function MotherVisual() {
  return (
    <div className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center pointer-events-none">
      
      {/* Main Visual Asset (Middle Layer) */}
      <MouseParallaxLayer multiplier={1.5} className="relative w-full h-full z-10 flex items-center justify-center">
        <motion.div
          animate={{ y: ["-4px", "4px", "-4px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[80%] max-w-[600px] h-full"
        >
          {/* The premium transparent PNG/WEBP asset */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <Image
              src="/mother.png"
              alt="Maternal Wellness"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </MouseParallaxLayer>

      {/* Gradient Masking at the bottom to blend into the page */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </div>
  );
}
