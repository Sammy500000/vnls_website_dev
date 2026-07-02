import React from "react";

export function NoiseTexture({ className = "" }: { className?: string }) {
  return (
    <div className={`noise-overlay ${className}`} aria-hidden="true" />
  );
}
