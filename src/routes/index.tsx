import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TrustedBy } from "@/components/TrustedBy";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Algeria Marketiva — Premium Creative & Digital Agency" },
      {
        name: "description",
        content:
          "Algeria Marketiva is a premium creative and digital agency helping Algerian businesses grow through innovation, strategy, media and technology.",
      },
      { property: "og:title", content: "Algeria Marketiva — Premium Creative & Digital Agency" },
      {
        property: "og:description",
        content:
          "Where innovation builds powerful brands. Premium creative and digital solutions for ambitious Algerian businesses.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TrustedBy />
        <Team />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
