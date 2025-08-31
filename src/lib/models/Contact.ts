import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        // Source of the contact (newsletter or demo_request)
        source: {
            type: String,
            enum: ['newsletter', 'demo_request', 'contact'],
            required: true,
        },
        
        // Common fields
        email: {
            type: String,
            required: true,
        },
        
        // Demo request specific fields (optional for newsletter)
        name: {
            type: String,
            required: function() {
                return this.source === 'demo_request' || this.source === 'contact';
            }
        },
        companyName: {
            type: String,
            required: function() {
                return this.source === 'demo_request';
            }
        },
        jobTitle: {
            type: String,
            required: function() {
                return this.source === 'demo_request';
            }
        },
        phone: {
            type: String,
            required: function() {
                return this.source === 'demo_request';
            }
        },
        message: {
            type: String,
            required: false, // Optional for both sources
        },
        
        // Legacy fields (keeping for backward compatibility)
        subject: String,
        phoneNumber: String,
        address: String,
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
