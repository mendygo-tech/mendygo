import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { sendWelcomeEmail } from "@/lib/mailer";

// Ensure Node runtime so nodemailer works in this route too
export const runtime = "nodejs";
export const maxDuration = 15;

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        
        const body = await req.json();
        const { source, email, name, companyName, jobTitle, phone, message, subject, phoneNumber } = body;
        
        console.log("Received contact data:", body);

        // Validate required fields based on source
        if (!source || !['newsletter', 'demo_request', 'contact', 'waitlist'].includes(source)) {
            return NextResponse.json(
                { message: "Valid source is required (newsletter, demo_request, contact, or waitlist)." },
                { status: 400 }
            );
        }

        if (!email) {
            return NextResponse.json(
                { message: "Email is required." },
                { status: 400 }
            );
        }

        // For demo requests, validate required fields
        if (source === 'demo_request') {
            if (!name || !companyName || !jobTitle || !phone) {
                return NextResponse.json(
                    { message: "Name, Company Name, Job Title, and Phone are required for demo requests." },
                    { status: 400 }
                );
            }
        }

        // For contact forms, validate required fields
        if (source === 'contact') {
            if (!name) {
                return NextResponse.json(
                    { message: "Name is required for contact forms." },
                    { status: 400 }
                );
            }
        }

        // Check if email already exists for the same source
        const existingContact = await (Contact as any).findOne({ email, source });
        if (existingContact) {
            return NextResponse.json(
                { message: `Email already exists for ${source === 'newsletter' ? 'newsletter subscription' : 'demo request'}.` },
                { status: 409 }
            );
        }

        // Create contact object based on source
        const contactData: any = {
            source,
            email,
            message: message || undefined
        };

        if (source === 'demo_request') {
            contactData.name = name;
            contactData.companyName = companyName;
            contactData.jobTitle = jobTitle;
            contactData.phone = phone;
        } else if (source === 'contact') {
            contactData.name = name;
        }

        // Add legacy fields for backward compatibility
        if (subject) contactData.subject = subject;
        if (phoneNumber) contactData.phoneNumber = phoneNumber;

        const contact = new Contact(contactData);
        const newContact = await contact.save();

        // Await mail to avoid lambda teardown racing SMTP
        try {
          await sendWelcomeEmail({
            to: email,
            source,
            name,
            companyName,
            jobTitle,
          });
        } catch (e) {
          console.error("Welcome email failed:", e);
          // continue; do not block API response on mail failure
        }

        const successMessage = source === 'newsletter' 
            ? "Successfully subscribed to newsletter!" 
            : source === 'demo_request'
            ? "Demo request submitted successfully!"
            : "Contact form submitted successfully!";

        return NextResponse.json(
            { message: successMessage, data: newContact },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error saving contact:", error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err: any) => err.message);
            return NextResponse.json(
                { message: "Validation failed", errors: validationErrors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
