import { NextRequest, NextResponse } from "next/server";
import type { AdminStaffMember } from "@/admin/types";
import { requireAdmin, unauthorized } from "@/lib/auth";
import { connectMongo } from "@/lib/mongodb";
import { StaffModel } from "@/models/content";

export async function PUT(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  try {
    const member = (await request.json()) as AdminStaffMember;
    if (!member?.id || !member.name || !member.skill || !member.photoUrl) {
      return NextResponse.json({ error: "Invalid staff payload" }, { status: 400 });
    }

    await connectMongo();
    const saved = await StaffModel.findOneAndUpdate(
      { id: member.id },
      { $set: member },
      { upsert: true, new: true, lean: true },
    );
    const { _id, ...rest } = saved as AdminStaffMember & { _id?: unknown };
    return NextResponse.json(rest);
  } catch (error) {
    console.error("[admin/staff PUT]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save staff member" },
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
    await StaffModel.deleteOne({ id });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/staff DELETE]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete staff member" },
      { status: 500 },
    );
  }
}
