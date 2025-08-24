import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: String,
        subject: String,
        phoneNumber: String,
        address: String,
        message: String
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
