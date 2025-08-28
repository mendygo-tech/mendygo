"use client";

import React, { useState, useCallback } from "react";
import { Sparkles, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SuccessModal from "./SuccessModal";

export default function GlassmorphedButtons() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
                setFormData({ name: "", email: "", phone: "" });
                setIsModalOpen(false);
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
    }, [formData]);

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
    const openModalTwo = useCallback(() => setIsModalTwoOpen(true), []);
    const closeModalTwo = useCallback(() => setIsModalTwoOpen(false), []);

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-12 gap-5 z-20">
                <motion.button
                onClick={openModal}
                className="group relative w-full sm:w-auto overflow-hidden rounded-xl px-8 py-4 text-base sm:text-lg font-bold text-white min-w-[200px]
    transition-all duration-300 cursor-pointer
    bg-black backdrop-blur-md shadow-[0_0_20px_#abff02]/20
    hover:bg-zinc-900 hover:shadow-[0_0_10px_#abff02]/10"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70 rounded-xl opacity-5 mb-5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5 group-hover:rotate-12 group-hover:drop-shadow-sm" />
                    Join Now
                </span>
                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300" />
            </motion.button>

            <motion.button
                onClick={openModalTwo}
                className="group relative w-full sm:w-auto overflow-hidden rounded-xl px-8 py-4 text-base sm:text-lg font-semibold text-white min-w-[200px]
transition-all duration-300 cursor-pointer
bg-zinc-800 backdrop-blur-md border border-white/10 hover:bg-zinc-700 hover:border-white/30"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-xl opacity-5 mb-5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Play className="h-5 w-5 group-hover:scale-110 group-hover:drop-shadow-sm" />
                    Know Us
                </span>
                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300" />
            </motion.button>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900 rounded-2xl p-6 w-full max-w-sm text-white shadow-xl border border-white/10 relative"
                        >

                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-[#abff02] transition"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl font-semibold text-center mb-4">
                                Join the Waitlist
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Contact Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#abff02] text-black font-semibold py-2 rounded-lg hover:brightness-110 transition disabled:opacity-60"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            <AnimatePresence>
                {isModalTwoOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900 rounded-2xl p-4 w-full max-w-xl text-white shadow-xl border border-white/10 relative"
                        >
                            <button
                                onClick={closeModalTwo}
                                className="absolute top-4 right-4 text-white hover:text-[#abff02] transition"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl font-semibold text-center mb-4">
                                Meet the Team – Know Us
                            </h2>

                            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.youtube.com/embed/WFVG1fe--0k?si=vvD6ZAcIu3M8Csy1"
                                    title="Know Us Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SuccessModal
                isOpen={modalOpen}
                message={modalMessage}
                onClose={() => setModalOpen(false)}
                type={modalType}
            />
        </>
    );
}