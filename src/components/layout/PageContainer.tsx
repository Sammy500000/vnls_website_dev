import React from "react";

export function PageContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`min-h-screen w-full block ${className}`}>
      {children}
    </main>
  );
}
