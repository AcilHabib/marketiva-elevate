import type { Metadata } from "next";
import { AdminLoginPage } from "@/views/admin/LoginPage";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminLoginPage />;
}
