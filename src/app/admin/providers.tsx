"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { AdminAuthProvider, useAdminAuth } from "@/admin/auth";
import { AdminStoreProvider } from "@/admin/store";

function AdminStoreGate({ children }: { children: ReactNode }) {
  const { isAuthenticated, checking } = useAdminAuth();
  return (
    <AdminStoreProvider enabled={!checking && isAuthenticated}>{children}</AdminStoreProvider>
  );
}

export function AdminProviders({ children }: { children: ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminStoreGate>
        {children}
        <Toaster richColors position="top-right" />
      </AdminStoreGate>
    </AdminAuthProvider>
  );
}
