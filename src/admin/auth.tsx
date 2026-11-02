import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

/**
 * Temporary client-side auth for the admin UI mock.
 * Replace with real backend/session auth when MongoDB is integrated.
 * Do not trust frontend credentials in production.
 */
const AUTH_KEY = "am-admin-auth";
const STAFF_USERNAME = "YounesMarketiva";
const STAFF_PASSWORD = "Algeria.Marketiva.2026";

type AdminAuthContextValue = {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => { ok: true } | { ok: false; error: string };
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

function readSession(): { username: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { username?: string };
    if (parsed?.username) return { username: parsed.username };
  } catch {
    return null;
  }
  return null;
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<{ username: string } | null>(() => readSession());

  const login = useCallback((username: string, password: string) => {
    if (username.trim() === STAFF_USERNAME && password === STAFF_PASSWORD) {
      const next = { username: STAFF_USERNAME };
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(next));
      setSession(next);
      return { ok: true as const };
    }
    return { ok: false as const, error: "Invalid username or password." };
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(AUTH_KEY);
    setSession(null);
  }, []);

  const value = useMemo<AdminAuthContextValue>(
    () => ({
      isAuthenticated: Boolean(session),
      username: session?.username ?? null,
      login,
      logout,
    }),
    [session, login, logout],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
