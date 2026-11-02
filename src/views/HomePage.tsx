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

export function HomePage() {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TrustedBy />
        <Testimonials />
        <FAQ />
        <Formations />
        <Team />
        <Contact />
      </main>
      <Footer />
      <Toaster theme={theme} position="top-center" richColors />
    </div>
  );
}
