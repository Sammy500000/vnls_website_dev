"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SoftEditorialNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "The Maternal Journey", href: "/journey", desc: "Understanding the path ahead" },
    { label: "Clinical Science", href: "/science", desc: "The research supporting you" },
    { label: "Support Systems", href: "/products", desc: "Formulations born from understanding" },
    { label: "The Journal", href: "/explore", desc: "Deeper reading and reassurance" },
    { label: "Mom's Corner", href: "/moms-corner", desc: "Recovery, comfort, and shared reality" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 pointer-events-none flex justify-between items-center mix-blend-difference text-white">
        
        {/* Logo */}
        <Link href="/" className="pointer-events-auto font-serif text-2xl tracking-tight z-50">
          VNLS
        </Link>

        {/* Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto z-50 flex items-center gap-4 group"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {isOpen ? "Close" : "Menu"}
          </span>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="flex flex-col gap-1.5 items-center">
              <motion.span 
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }} 
                className="w-5 h-[1px] bg-white origin-center"
              />
              <motion.span 
                animate={{ opacity: isOpen ? 0 : 1 }} 
                className="w-5 h-[1px] bg-white"
              />
              <motion.span 
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }} 
                className="w-5 h-[1px] bg-white origin-center"
              />
            </div>
          </div>
        </button>

      </header>

      {/* Fullscreen Soft Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#FAF8F5] flex items-center justify-center"
          >
            {/* Ambient Background Glow inside Menu */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,186,133,0.15),transparent_60%)] blur-3xl pointer-events-none"
            />

            <nav className="flex flex-col gap-10 md:gap-12 relative z-10 w-full max-w-2xl px-8">
              {links.map((link, i) => {
                const isActive = pathname?.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col md:flex-row md:items-end gap-2 md:gap-8 border-b border-[#D4C3B3]/20 pb-6 hover:border-[#C28E5E]/40 transition-colors"
                    >
                      <span className={`font-serif text-4xl md:text-5xl ${isActive ? 'text-[#B58A59]' : 'text-[#4A4036]'} group-hover:text-[#B58A59] transition-colors`}>
                        {link.label}
                      </span>
                      <span className="text-[#8E7E6D] font-light italic pb-1">
                        {link.desc}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
