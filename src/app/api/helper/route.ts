import { NextRequest,NextResponse } from "next/server";
export const runtime = "nodejs";
import { sendWelcomeEmail } from "@/lib/mailer";
import type { Source } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { to, source, name, companyName, jobTitle } = await req.json();

    // Basic validation
    if (!to || !source) {
      return NextResponse.json(
        { ok: false, error: "Fields 'to' and 'source' are required." },
        { status: 400 }
      );
    }

    // Call the mailer service
    const info = await sendWelcomeEmail({
      to,
      source: source as Source,
      name,
      companyName,
      jobTitle,
    });

    return NextResponse.json(
      { ok: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { ok: false, error: err.message || "An internal error occurred." },
      { status: 500 }
    );
  }
}
