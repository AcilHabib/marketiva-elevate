import { NextResponse } from "next/server";
import { getAdminSession, unauthorized } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return unauthorized();
  return NextResponse.json({ username: session.username });
}
