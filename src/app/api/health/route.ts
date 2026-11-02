import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";

export async function GET() {
  const payload: Record<string, unknown> = {
    ok: true,
    service: "algeria-marketiva",
    timestamp: new Date().toISOString(),
    mongo: "unconfigured",
  };

  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ ...payload, mongo: "missing-uri" }, { status: 503 });
  }

  try {
    await connectMongo();
    payload.mongo = "connected";
    return NextResponse.json(payload);
  } catch (error) {
    payload.mongo = "error";
    payload.error = error instanceof Error ? error.message : "Mongo connection failed";
    return NextResponse.json(payload, { status: 503 });
  }
}
