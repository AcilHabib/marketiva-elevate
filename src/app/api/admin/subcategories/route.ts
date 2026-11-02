import { NextRequest, NextResponse } from "next/server";
import type { GalleryCategory, Subcategory } from "@/admin/types";
import { createId } from "@/admin/id";
import { requireAdmin, unauthorized } from "@/lib/auth";
import { connectMongo } from "@/lib/mongodb";
import { ProjectModel, SubcategoryModel } from "@/models/content";

export async function POST(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  try {
    const body = (await request.json()) as { category?: GalleryCategory; name?: string };
    if (!body.category || !body.name?.trim()) {
      return NextResponse.json({ error: "category and name are required" }, { status: 400 });
    }

    const subcategory: Subcategory = {
      id: createId("sub"),
      name: body.name.trim(),
      category: body.category,
    };

    await connectMongo();
    await SubcategoryModel.create(subcategory);
    return NextResponse.json(subcategory);
  } catch (error) {
    console.error("[admin/subcategories POST]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create subcategory" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  try {
    const body = (await request.json()) as { id?: string; name?: string };
    if (!body.id || !body.name?.trim()) {
      return NextResponse.json({ error: "id and name are required" }, { status: 400 });
    }

    await connectMongo();
    const saved = await SubcategoryModel.findOneAndUpdate(
      { id: body.id },
      { $set: { name: body.name.trim() } },
      { new: true, lean: true },
    );
    if (!saved) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const { _id, ...rest } = saved as Subcategory & { _id?: unknown };
    return NextResponse.json(rest);
  } catch (error) {
    console.error("[admin/subcategories PUT]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to rename subcategory" },
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
    await SubcategoryModel.deleteOne({ id });
    await ProjectModel.updateMany({ subcategoryId: id }, { $unset: { subcategoryId: 1 } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/subcategories DELETE]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete subcategory" },
      { status: 500 },
    );
  }
}
