import { NextResponse } from "next/server";
import { seedAdminContentIfEmpty } from "@/lib/admin-data";
import { requireAdmin, unauthorized } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  try {
    const result = await seedAdminContentIfEmpty();
    return NextResponse.json(result);
  } catch (error) {
    console.error("[admin/seed]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Seed failed" },
      { status: 500 },
    );
  }
}
