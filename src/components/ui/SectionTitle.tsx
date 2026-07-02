import React from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-accent">
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-foreground tracking-tight text-balance">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2 text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
