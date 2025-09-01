import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
// import { sendWelcomeEmail } from "@/app/api/helper/route";
import { sendWelcomeEmail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const existing = await (Contact as any).findOne({ email, source: "newsletter" });
    if (existing) {
      // Idempotent OK (don’t create duplicate, optionally still send email)
      return NextResponse.json({ message: "Already subscribed." }, { status: 200 });
    }

    const contact = new (Contact as any)({ source: "newsletter", email });
    const saved = await contact.save();

    // Fire-and-forget welcome email
    sendWelcomeEmail({ to: email, source: "newsletter", name }).catch((e) =>
      console.error("Newsletter welcome failed:", e)
    );

    return NextResponse.json({ message: "Subscribed.", data: saved }, { status: 201 });
  } catch (err: any) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
