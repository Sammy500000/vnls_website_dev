"use client";

import React from "react";
import { useLenis } from "@/hooks/useLenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  // Initialize lenis smoothly on the client
  useLenis();
  return <>{children}</>;
}
