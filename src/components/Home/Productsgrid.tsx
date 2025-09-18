// Productsgrid.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import mendyergyDark from "@/assets/mockup/mendergylgDark.png";
import mendergyLight from "@/assets/mockup/mendergylgLight.png";
import { motion } from "motion/react";
import mendyAiHomeDark from "@/assets/mockup/mendyAiHomeDark.png";
import mendyAiHomeLight from "@/assets/mockup/mendyAiHomeLight.png";
import mendySheetsDark from "@/assets/mockup/mendergyDark.png";
import mendySheetsLight from "@/assets/mockup/mendergyLight.png";
import smaetOEEdark from "@/assets/mockup/smartOEEDark.png";
import smaetOEElight from "@/assets/mockup/smartOEELight.png";
import ThermendyLight from "@/assets/mockup/MainDashboardLight.png";
import ThermendyDark from "@/assets/mockup/MainDashboardDark.png";
import customizedIndustryLight from "@/assets/mockup/customizedIndustryLight.png";
import customizedIndustryDark from "@/assets/mockup/customizedIndustryDark.png";
import AiMaintenanceLight from "@/assets/mockup/AiMaintenenceLight.png";
import AiMaintenanceDark from "@/assets/mockup/AiMaintenanceDark.png";
import { Badge } from "../ui/badge";
import Link from "next/link";

const Solutions = [
    {
        id: 3,
        name: "Mendergy",
        subtitle: "Energy Management System",
        description:
            "Optimize industrial energy usage with real-time monitoring, predictive analytics, and automation.",
        content: (
            <div className="relative w-fit lg:h-60 dark:border-2 border-[#5B5B5B] rounded-2xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
                <Image
                    src={mendergyLight}
                    className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
                    height={1000}
                    width={1000}
                    alt="Mendergy Light"
                />
                <Image
                    src={mendyergyDark}
                    className="rounded-2xl border-4 border-black hidden dark:block max-h-full w-fit object-contain"
                    height={1000}
                    width={1000}
                    alt="Mendergy Dark"
                />
            </div>
        ),
        href: "/products/mendergy-energy-management-system",
        className: "lg:col-span-2",
    },
    {
        id: 2,
        name: "MendySheets",
        subtitle: "Digital Checksheets",
        description:
            "Digitize your operations with real-time data capture and IoT integration.",
        href: "/products/mendysheets-digital-checksheets",
        content: (
            <>
                <Image
                    src={mendySheetsLight}
                    className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="MendySheets Light"
                />
                <Image
                    src={mendySheetsDark}
                    className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="MendySheets Dark"
                />
            </>
        ),
    },
    {
        id: 4,
        name: "SmartOEE",
        subtitle: "OEE Dashboard",
        description: "Track efficiency, quality, and equipment availability in real time.",
        content: (
            <>
                <Image
                    src={smaetOEElight}
                    className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="SmartOEE Light"
                />
                <Image
                    src={smaetOEEdark}
                    className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="SmartOEE Dark"
                />
            </>
        ),
        href: "/products/smartooe-dashboard",
        className: "",
    },
    {
        id: 9,
        name: "MendyView",
        subtitle: "AI Web-Based Access Control System",
        description:
            "Enhance site security and safety compliance with AI-powered facial recognition and PPE detection.",
        content: (
            <>
                <Image
                    src={ThermendyLight}
                    className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyView Light"
                />
                <Image
                    src={ThermendyDark}
                    className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyView Dark"
                />
            </>
        ),
        href: "/products/mendyview-ai-access-control",
        className: "",
    },
    {
        id: 8,
        name: "Thermendy",
        subtitle: "Smart Climate Control",
        description:
            "AI-driven climate control for industrial spaces, managing temperature, humidity, and airflow.",
        content: (
            <>
                <Image
                    src={ThermendyLight}
                    className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="Thermendy Light"
                />
                <Image
                    src={ThermendyDark}
                    className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="Thermendy Dark"
                />
            </>
        ),
        href: "/products/thermendy-smart-climate-control",
        className: "",
    },
    {
        id: 1,
        name: "MendyAI",
        subtitle: "Industrial Intelligence Engine",
        description:
            "MendyAI turns raw IIoT data into smart, real-time insights using adaptive machine learning.",
        content: (
            <div className="relative w-fit lg:h-60 dark:border-2 border-[#5B5B5B] rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
                <Image
                    src={mendyAiHomeLight}
                    className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyAI Light"
                />
                <Image
                    src={mendyAiHomeDark}
                    className="rounded-2xl border-4 border-black hidden dark:block max-h-full w-fit object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyAI Dark"
                />
            </div>
        ),
        href: "/products/mendyai-industrial-intelligence-engine",
        className: "lg:col-span-2",
    },

    {
        id: 6,
        name: "MendyOps",
        subtitle: "Utility Monitoring & Automation",
        description:
            "Monitor and control pumps, HVAC, and other utilities remotely with MendyOps.",
        content: (
            <>
                <Image
                    src={ThermendyLight}
                    className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyOps Light"
                />
                <Image
                    src={ThermendyDark}
                    className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyOps Dark"
                />
            </>
        ),
        href: "/products/mendyops-utility-monitoring-automation",
        className: "",
    },
    {
        id: 5,
        name: "AI Based maintanance",
        subtitle: "Predictive Maintenance Platform",
        description:
            "Automate scheduling, optimize parts, and predict failures with our AI platform",
        content: (
            <>
                <Image
                    src={AiMaintenanceLight}
                    className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="AI Maintenance Light"
                />
                <Image
                    src={AiMaintenanceDark}
                    className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
                    height={1000}
                    width={1000}
                    alt="AI Maintenance Dark"
                />
            </>
        ),
    },
    {
        id: 7,
        name: "MendyLive",
        subtitle: "Digital Twin Platform",
        description:
            "Visualize, simulate, and optimize industrial operations with MendyLive.",
        content: (
            <div className="relative w-fit lg:h-60 dark:border-2 border-[#5B5B5B] rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
                <Image
                    src={mendergyLight}
                    className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyLive Light"
                />
                <Image
                    src={mendyergyDark}
                    className="rounded-2xl border-4 border-black hidden dark:block max-h-full w-fit object-contain"
                    height={1000}
                    width={1000}
                    alt="MendyLive Dark"
                />
            </div>
        ),
        href: "/products/mendylive-digital-twin-platform",
        className: "lg:col-span-2",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
        },
    },
};

const Products = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedSolutions = showAll ? Solutions : Solutions.slice(0, 5);
    const [startAnimation, setStartAnimation] = useState(false);
    const gridRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (startAnimation) return;
        const el = gridRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStartAnimation(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [startAnimation]);
    return (
        <div className="relative min-h-screen text-gray-950 dark:text-gray-100 flex flex-col items-center">
            <div className="text-center mb-10 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg">
                    Smart Solutions by Mendygo
                </h1>
                <h2 className="text-base sm:text-lg text-gray-600 font-thin dark:text-gray-400 max-w-3xl mx-auto mt-2">
                    Innovative digital products crafted to empower businesses, streamline operations, and deliver exceptional customer experiences.
                </h2>
            </div>

            {/* Grid container with responsive columns */}
            <motion.div
                layout
                className="w-full lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
                variants={containerVariants}
                initial="hidden"
                animate={startAnimation ? "show" : "hidden"}
                ref={gridRef}
            >
                {displayedSolutions.map((solution) => (
                    <motion.a
                        layout
                        variants={itemVariants}
                        key={solution.id}
                        href={solution.href}
                        className={`group flex flex-col h-full overflow-hidden rounded-xl bg-white dark:bg-[#141415] border border-gray-200 dark:border-none shadow-sm hover:shadow-xl transition-all duration-300 ${solution.className}`}
                        whileHover={{ y: -4 }}
                    >
                        <div className="flex-1 flex flex-col justify-start p-6 gap-5 overflow-hidden">
                            <Badge className="w-fit backdrop-blur-md bg-[#9ffb1e]/50 border border-white/20 text-black">
                                <span className="text-sm font-semibold p-1">
                                    {solution.name}
                                </span>
                            </Badge>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-60 md:h-72 rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black p-8"
                            >
                                {solution.content}
                            </motion.div>

                            <div>
                                <p className="text-sm text-gray-900 font-semibold dark:text-gray-300">
                                    {solution.subtitle}
                                </p>
                                <p className="text-sm text-gray-900 font-thin pt-1 dark:text-gray-300">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
            <button
                onClick={() => {
                    setShowAll((prev) => {
                        const next = !prev;
                        if (prev && gridRef.current) {
                            const y =
                                gridRef.current.getBoundingClientRect().top +
                                window.scrollY +
                                400;
                            window.scrollTo({ top: y, behavior: "smooth" });
                        }
                        return next;
                    });
                }}
                className="my-10 px-6 py-2 text-md font-medium dark:text-black rounded-full bg-[#9ffb1e]"
                aria-expanded={showAll}
            >
                {showAll ? "Show Less" : "Show More"}
            </button>

            <div className="bg-gradient-to-br dark:from-[#abff01]/40 from-[#abff01]/35 via-[#abff01]/0 to-[#abff01]/20 dark:border-white/30 dark:text-white grid lg:grid-cols-[1fr_2fr] w-11xl p-10 pt-10 text-md my-20">
                <motion.div className="relative h-96 rounded-xl flex items-center justify-center overflow-hidden p-6">
                    <Image
                        src={customizedIndustryLight}
                        className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
                        height={1000}
                        width={1000}
                        alt="Customized Industry Light"
                    />
                    <Image
                        src={customizedIndustryDark}
                        className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
                        height={1000}
                        width={1000}
                        alt="Customized Industry Dark"
                    />
                </motion.div>
                <div className="flex flex-col lg:items-start text-center lg:text-left items-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-100 dark:via-gray-200 w-full lg:w-2/3 dark:to-gray-500 dark:drop-shadow-lg pt-10">
                        Customized Industry 4.0 Solutions
                    </h1>
                    <p className="text-md pt-3 font-thin dark:text-gray-300">
                        We offer tailored solutions to help businesses embrace Industry 4.0 technologies.
                    </p>
                    <p className="pb-8 font-thin dark:text-gray-300">
                        Our expertise includes IoT, AI, and advanced automation to drive efficiency and innovation.
                    </p>
                    <Link href="/contact" className="px-8 py-3 rounded-full dark:text-gray-300 border border-slate-400 dark:hover:border-[#abff01]  transition text-sm font-medium">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Products;