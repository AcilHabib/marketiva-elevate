import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsPage } from "@/views/ProjectsPage";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore Algeria Marketiva projects across software, videography and design.",
  openGraph: {
    title: "Algeria Marketiva — Our Projects",
    description: "A showcase of our work across software, videography and design.",
    images: ["/brand/logo-full.png"],
  },
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">
          Loading projects…
        </div>
      }
    >
      <ProjectsPage />
    </Suspense>
  );
}
