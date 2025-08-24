"use client";

import React, { useState } from "react";
import { BackgroundMap } from "./Worldmap";
import SuccessModal from "../common/SuccessModal";

export function SignUpForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phoneNumber: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("https://m.satyamjha.me/contact/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (res.ok) {
                setModalMessage("Thank you! You've been added to the waitlist.");
                setModalType("success");
                setModalOpen(true);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    phoneNumber: "",
                    message: ""
                });
            } else {
                setModalMessage(result.message || "Submission failed.");
                setModalType("error");
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setModalMessage("Server error. Please try again later.");
            setModalType("error");
            setModalOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden px-4 py-10">
            <BackgroundMap />
            <div className="max-w-2xl w-full z-10 animate-fade-in">
                <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
                    Join the waitlist
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-3 text-sm text-center">
                    Signup to access all our MendyGo features and be the first to know when we launch.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-3 mt-6 w-full max-w-md mx-auto bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-[0_4px_60px_rgba(0,0,0,0.3)] z-10 ring-1 ring-white/5"
                >
                    {["name", "email", "subject", "phoneNumber"].map((field) => (
                        <input
                            key={field}
                            type={field === "email" ? "email" : "text"}
                            name={field}
                            required={["name", "email"].includes(field)}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            value={(formData as any)[field]}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition"
                        />
                    ))}



                    <textarea
                        name="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition resize-none"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#abff02] text-black font-semibold py-2 rounded-lg hover:brightness-110 transition disabled:opacity-60"
                    >
                        {isSubmitting ? "Submitting..." : "Join Now"}
                    </button>
                </form>
            </div>
            <SuccessModal
                isOpen={modalOpen}
                message={modalMessage}
                onClose={() => setModalOpen(false)}
                type={modalType}
            />
        </div>
    );
}