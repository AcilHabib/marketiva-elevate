import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AdminAuthProvider } from "@/admin/auth";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Algeria Marketiva" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminRoot,
});

function AdminRoot() {
  return (
    <AdminAuthProvider>
      <Outlet />
      <Toaster richColors position="top-right" />
    </AdminAuthProvider>
  );
}
