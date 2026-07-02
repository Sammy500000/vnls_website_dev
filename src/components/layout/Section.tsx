import React, { forwardRef } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "hero" | "editorial" | "compact";
  className?: string;
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  variant = "editorial",
  className = "",
  id,
  ...props
}, ref) => {
  const baseClasses = "w-full relative";
  
  const variants = {
    hero: "pt-32 pb-16 md:pt-40 md:pb-24 min-h-[90vh] flex items-center",
    editorial: "py-24 md:py-32",
    compact: "py-12 md:py-16",
  };

  return (
    <section 
      ref={ref}
      id={id}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";
