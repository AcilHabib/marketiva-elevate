import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import "../styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://algeriamarketiva.com"),
  title: {
    default: "Algeria Marketiva — Premium Creative & Digital Agency",
    template: "%s — Algeria Marketiva",
  },
  description:
    "Empowering Algerian Brands. Premium creative and digital agency helping Algerian businesses grow.",
  authors: [{ name: "Algeria Marketiva" }],
  openGraph: {
    title: "Algeria Marketiva — Premium Creative & Digital Agency",
    description:
      "Empowering Algerian Brands. Premium creative and digital solutions for ambitious Algerian businesses.",
    type: "website",
    images: ["/brand/logo-full.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Cairo:wght@400;500;600;700&family=Tajawal:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
