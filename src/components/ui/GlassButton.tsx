import React from "react";
import Link from "next/link";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function GlassButton({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...props
}: GlassButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-700 ease-out outline-none relative overflow-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group";
  
  const sizeClasses = {
    sm: "h-10 px-4 text-sm rounded-full",
    md: "h-12 px-6 text-base rounded-full",
    lg: "h-14 px-8 text-lg rounded-full",
  };

  const variantClasses = {
    primary: "bg-gradient-to-b from-foreground to-foreground/90 text-background hover:bg-foreground/95 shadow-[0_4px_20px_rgba(var(--color-primary),0.15)] hover:shadow-[0_8px_30px_rgba(var(--color-accent),0.25)] hover:-translate-y-[2px] border border-transparent shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
    secondary: "bg-white/5 backdrop-blur-md text-foreground hover:bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] hover:-translate-y-[2px] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
    ghost: "bg-transparent text-foreground hover:bg-white/5 hover:backdrop-blur-md transition-colors",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant !== "ghost" && (
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[30deg] transition-all duration-[1.2s] ease-out group-hover:translate-x-[150%] pointer-events-none" />
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
