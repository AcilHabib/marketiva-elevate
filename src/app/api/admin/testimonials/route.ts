import { NextRequest, NextResponse } from "next/server";
import type { AdminTestimonial } from "@/admin/types";
import { requireAdmin, unauthorized } from "@/lib/auth";
import { connectMongo } from "@/lib/mongodb";
import { TestimonialModel } from "@/models/content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: NextRequest) {
  const session = await requireAdmin(request);
  if (!session) return unauthorized();

  try {
    const testimonial = (await request.json()) as AdminTestimonial;
    if (!testimonial?.id || !testimonial.name || !testimonial.quote) {
      return NextResponse.json({ error: "Invalid testimonial payload" }, { status: 400 });
    }

    await connectMongo();
    const saved = await TestimonialModel.findOneAndUpdate(
      { id: testimonial.id },
      { $set: testimonial },
      { upsert: true, new: true, lean: true },
    );
    const { _id, ...rest } = saved as AdminTestimonial & { _id?: unknown };
    return NextResponse.json(rest);
  } catch (error) {
    console.error("[admin/testimonials PUT]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save testimonial" },
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
    await TestimonialModel.deleteOne({ id });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/testimonials DELETE]", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete testimonial" },
      { status: 500 },
    );
  }
}
