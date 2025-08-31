import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { withAuth } from "@/lib/middleware/auth";

async function updateContactHandler(req: NextRequest) {
    try {
        await dbConnect();
        
        const body = await req.json();
        const { 
            contactId, 
            source, 
            email, 
            name, 
            companyName, 
            jobTitle, 
            phone, 
            message,
            // Legacy fields for backward compatibility
            subject, 
            phoneNumber 
        } = body;

        if (!contactId) {
            return NextResponse.json(
                { message: "Contact ID is required" },
                { status: 400 }
            );
        }

        // Get existing contact to determine source
        const existingContact = await (Contact as any).findById(contactId);
        if (!existingContact) {
            return NextResponse.json(
                { message: "Contact not found" },
                { status: 404 }
            );
        }

        // Prepare update data
        const updateData: any = {
            updatedAt: new Date()
        };

        // Update email if provided
        if (email) updateData.email = email;

        // Update message if provided
        if (message !== undefined) updateData.message = message;

        // Handle source-specific updates
        const contactSource = source || existingContact.source;
        
        if (contactSource === 'demo_request') {
            if (name !== undefined) updateData.name = name;
            if (companyName !== undefined) updateData.companyName = companyName;
            if (jobTitle !== undefined) updateData.jobTitle = jobTitle;
            if (phone !== undefined) updateData.phone = phone;
        }

        // Handle legacy fields
        if (subject !== undefined) updateData.subject = subject;
        if (phoneNumber !== undefined) updateData.phoneNumber = phoneNumber;

        // Update contact by ID
        const updatedContact = await (Contact as any).findByIdAndUpdate(
            contactId,
            updateData,
            { new: true, runValidators: true }
        );

        return NextResponse.json(
            { 
                message: "Contact updated successfully",
                data: updatedContact
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating contact:", error);
        
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

export const PUT = withAuth(updateContactHandler);
