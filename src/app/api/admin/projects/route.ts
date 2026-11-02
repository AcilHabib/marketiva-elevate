import { NextRequest, NextResponse } from "next/server";
import type { AdminProject } from "@/admin/types";
import { requireAdmin, unauthorized } from "@/lib/auth";
import { connectMongo } from "@/lib/mongodb";
import { ProjectModel } from "@/models/content";

export async function PUT(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  try {
    const project = (await request.json()) as AdminProject;
    if (!project?.id || !project.name || !project.category) {
      return NextResponse.json({ error: "Invalid project payload" }, { status: 400 });
    }

    await connectMongo();
    const saved = await ProjectModel.findOneAndUpdate(
      { id: project.id },
      { $set: project },
      { upsert: true, new: true, lean: true },
    );

    const { _id, ...rest } = saved as AdminProject & { _id?: unknown };
    return NextResponse.json(rest);
  } catch (error) {
    console.error("[admin/projects PUT]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save project" },
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
    await ProjectModel.deleteOne({ id });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/projects DELETE]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete project" },
      { status: 500 },
    );
  }
}
