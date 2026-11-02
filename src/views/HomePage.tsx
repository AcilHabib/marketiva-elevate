"use client";

import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TrustedBy } from "@/components/TrustedBy";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Formations } from "@/components/Formations";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/i18n/ThemeProvider";
import type { PublicContent } from "@/lib/public-content";

export function HomePage({ content }: { content: PublicContent }) {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TrustedBy brands={content.brands} />
        <Testimonials testimonials={content.testimonials} />
        <FAQ />
        <Formations />
        <Team staff={content.staff} />
        <Contact />
      </main>
      <Footer />
      <Toaster theme={theme} position="top-center" richColors />
    </div>
  );
}
