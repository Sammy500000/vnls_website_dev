"use client";

import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { NoiseTexture } from "@/components/shared/NoiseTexture";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ProductProgressNav } from "./ProductProgressNav";
import { StickySectionSummary } from "./StickySectionSummary";

interface ProductPageLayoutProps {
  children: React.ReactNode;
}

export function ProductPageLayout({ children }: ProductPageLayoutProps) {
  return (
    <PageContainer className="bg-background relative">
      <NoiseTexture className="fixed inset-0 z-0" />
      
      <StickySectionSummary />

      <div className="relative z-10 w-full flex xl:gap-16 xl:pr-16 max-w-[1600px] mx-auto">
        {/* Desktop Sticky Navigation Column */}
        <div className="hidden xl:block w-[260px] flex-shrink-0 pt-[120px] pl-8 border-r border-border/20">
          <ProductProgressNav />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full max-w-[1200px] xl:pl-16">
          {children}
        </div>
      </div>
    </PageContainer>
  );
}
