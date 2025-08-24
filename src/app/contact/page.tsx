"use client";

import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import SuccessModal from "@/components/common/SuccessModal";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phoneNumber: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
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
                setModalMessage("Submitted successfully!");
                setModalType("success");
                setModalOpen(true);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    phoneNumber: "",
                    message: "",
                });
            } else {
                setModalMessage(result.message || "Submission failed.");
                setModalType("error");
                setModalOpen(true);
            }
        } catch (err) {
            console.error(err);
            setModalMessage("Server error. Please try again.");
            setModalType("error");
            setModalOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black px-4 py-8 md:py-16 text-black dark:text-white relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-64 pointer-events-none z-0 blur-3xl opacity-40 dark:opacity-20 mt-30"
                style={{ background: "radial-gradient(ellipse at center, #abff02 0%, transparent 80%)" }} />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
                <button className="text-xs px-4 py-1 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-black hover:bg-[#abff02] hover:text-black transition">
                    Contact
                </button>

                <h1 className="text-3xl md:text-4xl font-bold">Get in Touch with Us</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                    Have questions or need AI solutions? Let us know by filling out the form, and we'll be in touch!
                </p>

                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {/* Email Box */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 dark:border-white/10 text-left">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-[#abff02]/20 rounded-lg">
                                    <Mail className="w-5 h-5 text-[#abff02]" />
                                </div>
                                <span className="font-semibold">E-mail</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">admin@mendygo.com</p>
                        </div>
                    </div>

                    {/* Phone Box */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 dark:border-white/10 text-left">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-[#abff02]/20 rounded-lg">
                                    <Phone className="w-5 h-5 text-[#abff02]" />
                                </div>
                                <span className="font-semibold">Phone</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">+1 (969) XXX-XXXX</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="relative group mt-6 md:mt-8">
                    <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-2xl opacity-10 group-hover:opacity-15 transition-opacity duration-300" />
                    <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/20 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name*"
                            required
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            required
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message..."
                            rows={4}
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 sm:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#abff02] hover:bg-[#c7ff5f] text-black font-semibold py-3 px-6 rounded-lg sm:col-span-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 disabled:opacity-50"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>

                <SuccessModal
                    isOpen={modalOpen}
                    message={modalMessage}
                    onClose={() => setModalOpen(false)}
                    type={modalType}
                />
            </div>
        </div>
    );
};

export default Contact;