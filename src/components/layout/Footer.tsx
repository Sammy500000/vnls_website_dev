import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border mt-auto">
      <div className="max-w-[1600px] mx-auto py-12 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="font-bold text-2xl text-foreground mb-2">VNLS</h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            Pioneering maternal nutrition with science-backed, trimester-specific care.
          </p>
        </div>
        
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-foreground">Company</span>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-foreground">Resources</span>
            <Link href="/science" className="text-muted-foreground hover:text-primary transition-colors">The Science</Link>
            <Link href="/explore" className="text-muted-foreground hover:text-primary transition-colors">Explore</Link>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Valencia Nutracare Lifesciences. All rights reserved.
      </div>
    </footer>
  );
}
