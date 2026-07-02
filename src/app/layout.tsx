import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SoftEditorialNavigation } from "@/components/ecosystem/SoftEditorialNavigation";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valencia Nutracare Lifesciences",
  description: "Pioneering maternal nutrition with science-backed, trimester-specific care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-[#FAF8F5] text-[#4A4036]`}>
        <LenisProvider>
          <ScrollProgress />
          <SoftEditorialNavigation />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
