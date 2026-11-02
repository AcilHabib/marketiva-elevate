import type { Metadata } from "next";
import { AdminTestimonialsPage } from "@/views/admin/TestimonialsPage";

export const metadata: Metadata = {
  title: "Admin · Testimonials",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminTestimonialsPage />;
}
