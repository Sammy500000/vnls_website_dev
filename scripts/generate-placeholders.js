const fs = require('fs');
const placeholders = [
  'HeroVisualPlaceholder', 
  'ProductVisualPlaceholder', 
  'ScienceVisualPlaceholder', 
  'CorporateVideoPlaceholder', 
  'IndiaMapPlaceholder', 
  'QuotePlaceholder', 
  'FinalVisualPlaceholder'
];

placeholders.forEach(name => {
  const code = `import React from 'react';
import Image from 'next/image';

export function ${name}({ className = '' }: { className?: string }) {
  const placeholderSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  return (
    <div className={\`relative w-full h-full min-h-[300px] bg-muted/30 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center \${className}\`}>
      <Image src={placeholderSrc} alt="${name}" fill className="object-cover opacity-50 mix-blend-overlay" loading="lazy" unoptimized />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
      <span className="relative z-10 font-mono text-xs md:text-sm tracking-widest text-muted-foreground/50 uppercase text-center px-4">${name}</span>
    </div>
  );
}
`;
  fs.writeFileSync(`src/components/shared/placeholders/${name}.tsx`, code);
});
