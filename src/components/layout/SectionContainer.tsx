import React from "react";

export function SectionContainer({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12 mx-auto max-w-[1600px] w-full ${className}`}>
      {children}
    </section>
  );
}
