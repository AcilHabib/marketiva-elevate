import { NextResponse } from "next/server";
import { getAdminContent } from "@/lib/admin-data";
import { requireAdmin, unauthorized } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  try {
    const content = await getAdminContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error("[admin/content]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load content" },
      { status: 500 },
    );
  }
}
