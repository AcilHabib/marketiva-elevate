import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TrustedBy } from "@/components/TrustedBy";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/i18n/ThemeProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Algeria Marketiva — Premium Creative & Digital Agency" },
      {
        name: "description",
        content:
          "Where Innovation Builds Powerful Brands. Premium creative and digital agency helping Algerian businesses grow.",
      },
      { property: "og:title", content: "Algeria Marketiva — Premium Creative & Digital Agency" },
      {
        property: "og:description",
        content:
          "Where Innovation Builds Powerful Brands. Premium creative and digital solutions for ambitious Algerian businesses.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
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
        <Team />
        <Contact />
      </main>
      <Footer />
      <Toaster theme={theme} position="top-center" richColors />
    </div>
  );
}
