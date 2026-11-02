import { NextRequest, NextResponse } from "next/server";
import type { ReorderCollection } from "@/admin/types";
import { requireAdmin, unauthorized } from "@/lib/auth";
import { reorderCollection } from "@/lib/admin-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLLECTIONS: ReorderCollection[] = ["projects", "brands", "testimonials", "staff"];

export async function POST(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  try {
    const body = (await request.json()) as {
      collection?: ReorderCollection;
      orderedIds?: string[];
    };

    if (!body.collection || !COLLECTIONS.includes(body.collection)) {
      return NextResponse.json({ error: "Invalid collection" }, { status: 400 });
    }
    if (!Array.isArray(body.orderedIds) || body.orderedIds.length === 0) {
      return NextResponse.json({ error: "orderedIds required" }, { status: 400 });
    }
    if (body.orderedIds.some((id) => typeof id !== "string" || !id.trim())) {
      return NextResponse.json({ error: "orderedIds must be non-empty strings" }, { status: 400 });
    }

    await reorderCollection(body.collection, body.orderedIds);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/reorder POST]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to reorder" },
      { status: 500 },
    );
  }
}
