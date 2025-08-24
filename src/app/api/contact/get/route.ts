import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { withAuth } from "@/lib/middleware/auth";

async function getContactsHandler(req: NextRequest) {
    try {
        await dbConnect();
        
        const contacts = await (Contact as any).find({}).sort({ createdAt: -1 });
        
        return NextResponse.json(contacts, { status: 200 });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export const GET = withAuth(getContactsHandler);
