import { NextRequest, NextResponse } from "next/server";
import type { TrustedBrand } from "@/admin/types";
import { requireAdmin, unauthorized } from "@/lib/auth";
import { connectMongo } from "@/lib/mongodb";
import { BrandModel } from "@/models/content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  try {
    const brand = (await request.json()) as TrustedBrand;
    if (!brand?.id || !brand.name || !brand.logoUrl) {
      return NextResponse.json({ error: "Invalid brand payload" }, { status: 400 });
    }

    await connectMongo();
    const saved = await BrandModel.findOneAndUpdate(
      { id: brand.id },
      { $set: brand },
      { upsert: true, new: true, lean: true },
    );
    const { _id, ...rest } = saved as TrustedBrand & { _id?: unknown };
    return NextResponse.json(rest);
  } catch (error) {
    console.error("[admin/brands PUT]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save brand" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  const id = request.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  try {
    await connectMongo();
    await BrandModel.deleteOne({ id });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/brands DELETE]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete brand" },
      { status: 500 },
    );
  }
}
