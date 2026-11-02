import type { Metadata } from "next";
import { AdminStaffPage } from "@/views/admin/StaffPage";

export const metadata: Metadata = {
  title: "Admin · The People",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminStaffPage />;
}
