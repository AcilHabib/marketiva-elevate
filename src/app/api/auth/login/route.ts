import { NextResponse } from "next/server";
import { createAdminToken, getAdminCredentials, setAdminCookie } from "@/lib/auth";
import { seedAdminContentIfEmpty } from "@/lib/admin-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { username?: string; password?: string };
    const { username, password } = getAdminCredentials();

    if (body.username?.trim() !== username || body.password !== password) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    // Best-effort seed on first successful login
    try {
      await seedAdminContentIfEmpty();
    } catch (error) {
      console.error("[seed on login]", error);
    }

    const token = await createAdminToken(username);
    const response = NextResponse.json({ ok: true, username });
    return setAdminCookie(response, token);
  } catch (error) {
    console.error("[auth/login]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Login failed" },
      { status: 500 },
    );
  }
}
