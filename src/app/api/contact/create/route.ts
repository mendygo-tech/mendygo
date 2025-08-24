import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        
        const { name, email, subject, phoneNumber, message } = await req.json();
        console.log("Received contact data:", { name, email, subject, phoneNumber, message });

        if (!name) {
            return NextResponse.json(
                { message: "Name and Contact are required." },
                { status: 400 }
            );
        }

        const contact = new Contact({
            name,
            email,
            subject,
            phoneNumber,
            message
        });
        const newContact = await contact.save();

        return NextResponse.json(
            { message: "Contact saved successfully", data: newContact },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving contact:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
