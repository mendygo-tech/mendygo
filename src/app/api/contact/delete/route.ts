import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { withAuth } from "@/lib/middleware/auth";

async function deleteContactsHandler(req: NextRequest) {
    try {
        await dbConnect();
        
        const body = await req.json();
        const { contactIds } = body;

        if (!contactIds || !Array.isArray(contactIds)) {
            return NextResponse.json(
                { message: "Contact IDs are required and must be an array" },
                { status: 400 }
            );
        }

        // Delete contacts by their IDs
        const result = await (Contact as any).deleteMany({
            _id: { $in: contactIds }
        });

        return NextResponse.json(
            { 
                message: `Successfully deleted ${result.deletedCount} contact(s)`,
                deletedCount: result.deletedCount
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting contacts:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export const DELETE = withAuth(deleteContactsHandler);
