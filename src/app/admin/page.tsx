import type { Metadata } from "next";
import { AdminOverviewPage } from "@/views/admin/OverviewPage";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminOverviewPage />;
}
