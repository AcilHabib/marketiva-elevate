import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsPage } from "@/views/ProjectsPage";
import { getPublicContent } from "@/lib/public-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore Algeria Marketiva projects across software, videography and design.",
  openGraph: {
    title: "Algeria Marketiva — Our Projects",
    description: "A showcase of our work across software, videography and design.",
    images: ["/brand/logo-full.png"],
  },
};

export default async function Page() {
  const content = await getPublicContent();

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">
          Loading projects…
        </div>
      }
    >
      <ProjectsPage projects={content.projects} />
    </Suspense>
  );
}
