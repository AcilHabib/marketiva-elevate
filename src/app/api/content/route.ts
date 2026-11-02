import { NextResponse } from "next/server";
import { getPublicContent } from "@/lib/public-content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Public read-only site content from MongoDB. */
export async function GET() {
  try {
    const content = await getPublicContent();
    return NextResponse.json(content, {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("[api/content]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load content" },
      { status: 500 },
    );
  }
}
