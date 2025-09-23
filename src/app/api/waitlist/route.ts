import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { sendWelcomeEmail } from "@/lib/mailer";

export const runtime = "nodejs";
export const maxDuration = 15;

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const existing = await (Contact as any).findOne({ email, source: "waitlist" });
    if (existing) {
      return NextResponse.json({ message: "Already on the waitlist." }, { status: 200 });
    }

    const contact = new (Contact as any)({ source: "waitlist", email, name });
    await contact.save();

    try {
      await sendWelcomeEmail({ to: email, source: "waitlist", name });
    } catch (e) {
      console.error("Waitlist welcome failed:", e);
      // Do not fail the API because of email issues
    }

    return NextResponse.json({ message: "Successfully joined the waitlist." }, { status: 200 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
