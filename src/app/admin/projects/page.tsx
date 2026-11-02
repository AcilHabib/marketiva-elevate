import type { Metadata } from "next";
import { AdminProjectsPage } from "@/views/admin/ProjectsPage";

export const metadata: Metadata = {
  title: "Admin · Projects",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminProjectsPage />;
}
