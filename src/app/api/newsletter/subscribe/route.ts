import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        
        const { email } = await req.json();
        
        console.log("Received newsletter subscription:", { email });

        // Validate email
        if (!email) {
            return NextResponse.json(
                { message: "Email is required." },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Check if email already exists for newsletter
        const existingSubscription = await (Contact as any).findOne({ 
            email: email.toLowerCase(), 
            source: 'newsletter' 
        });
        
        if (existingSubscription) {
            return NextResponse.json(
                { message: "Email is already subscribed to our newsletter." },
                { status: 409 }
            );
        }

        // Create newsletter subscription
        const contact = new Contact({
            source: 'newsletter',
            email: email.toLowerCase()
        });

        const newSubscription = await contact.save();

        return NextResponse.json(
            { 
                message: "Successfully subscribed to newsletter! Thank you for joining us.",
                data: newSubscription 
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving newsletter subscription:", error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err: any) => err.message);
            return NextResponse.json(
                { message: "Validation failed", errors: validationErrors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Internal Server Error. Please try again later." },
            { status: 500 }
        );
    }
}
