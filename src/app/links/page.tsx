import type { Metadata } from "next";
import { LinksPage } from "@/views/LinksPage";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Official links for Algeria Marketiva — website, WhatsApp, email, and location. Where Innovation Builds Powerful Brands.",
  openGraph: {
    title: "Algeria Marketiva — Links",
    description: "Connect with Algeria Marketiva. Website, WhatsApp, email, and more.",
    images: ["/brand/logo-full.png"],
  },
};

export default function Page() {
  return <LinksPage />;
}
