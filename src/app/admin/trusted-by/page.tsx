import type { Metadata } from "next";
import { AdminTrustedByPage } from "@/views/admin/TrustedByPage";

export const metadata: Metadata = {
  title: "Admin · Trusted By",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminTrustedByPage />;
}
