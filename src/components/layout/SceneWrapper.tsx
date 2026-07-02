"use client";

import React, { useEffect, useRef, useState } from "react";

interface SceneWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Placeholder wrapper for future Three.js and React Three Fiber integration.
 * Will mount the WebGL canvas and handle resize events.
 */
export function SceneWrapper({ children, className = "" }: SceneWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Three.js Canvas initialization logic will go here
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      {isMounted && children}
    </div>
  );
}
