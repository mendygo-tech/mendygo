// Productsgrid.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import mendyergyDark from "../../assets/mockups/mendergylgDark.png";
import mendergyLight from "../../assets/mockups/mendergylgLight.png";
import { motion } from "motion/react";
import mendyAiHomeDark from "../../assets/mockups/mendyAiHomeDark.png";
import mendyAiHomeLight from "../../assets/mockups/mendyAiHomeLight.png";
import mendySheetsDark from "../../assets/mockups/mendergyDark.png";
import mendySheetsLight from "../../assets/mockups/mendergyLight.png";
import smaetOEEdark from "../../assets/mockups/smartOEEDark.png";
import smaetOEElight from "../../assets/mockups/smartOEELight.png";
import ThermendyLight from "../../assets/mockups/MainDashboardLight.png";
import ThermendyDark from "../../assets/mockups/MainDashboardDark.png";
import customizedIndustryLight from "../../assets/mockups/customizedIndustryLight.png";
import customizedIndustryDark from "../../assets/mockups/customizedIndustryDark.png";
import AiMaintenanceLight from "../../assets/mockups/AiMaintenenceLight.png";
import AiMaintenanceDark from "../../assets/mockups/AiMaintenanceDark.png";
import { Badge } from "../ui/badge";
// import { useRouter } from "next/navigation";
import Link from "next/link";

// Data is now configured with specific grid classes for the desired layout
const Solutions = [
  {
    id: 3,
    name: "Mendergy",
    subtitle: "Energy Management System",
    description:
      "Optimize industrial energy usage with real-time monitoring, predictive analytics, and automation.",
    content: (
      <div className="relative w-fit h-60 dark:border-2 border-[#5B5B5B] rounded-2xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
        <Image
          src={mendergyLight}
          className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
        <Image
          src={mendyergyDark}
          className="rounded-2xl  border-4 border-black hidden dark:block max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
      </div>
    ),
    href: "/products/mendergy-energy-management-system",
    className: "col-span-2",
  },
  {
    id: 2,
    name: "MendySheets",
    subtitle: "Digital Checksheets",
    description:
      "Digitize your tions with real-time data capture and IoT integration.",
    href: "/products/mendysheets-digital-checksheets",
    content: (
      <>
        <Image
          src={mendySheetsLight}
          className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
        <Image
          src={mendySheetsDark}
          className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
      </>
    ),
  },
  {
    id: 4,
    name: "SmartOEE",
    subtitle: "OEE Dashboard",
    description: "Track efficiency, quipment availability in real time.",
    content: (
      <>
        <Image
          src={smaetOEElight}
          className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
        <Image
          src={smaetOEEdark}
          className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
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
          objectFit="contain"
          alt="MendyView"
        />
        <Image
          src={ThermendyDark}
          className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
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
          objectFit="contain"
          alt="MendyView"
        />
        <Image
          src={ThermendyDark}
          className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
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
      <div className="relative w-fit h-60 dark:border-2 border-[#5B5B5B] rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
        <Image
          src={mendyAiHomeLight}
          className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
        <Image
          src={mendyAiHomeDark}
          className="rounded-2xl border-4 border-black hidden dark:block max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
      </div>
    ),
    href: "/products/mendyai-industrial-intelligence-engine",
    className: "col-span-2",
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
          objectFit="contain"
          alt="MendyOps"
        />
        <Image
          src={ThermendyDark}
          className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyOps"
        />
      </>
    ),
    href: "/products/mendyops-utility-monitoring-automation",
    className: "",
  },
  {
    id: 5,
    name: "AI Based maintanance",
    subtitle: "AR/VR/MR Platform",
    description:
      "Transform industrial training and maintenance with immersive AR/VR/MR solutions.",
    content: (
      <>
        <Image
          src={AiMaintenanceLight}
          className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="AiMaintenance"
        />
        <Image
          src={AiMaintenanceDark}
          className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="AiMaintenance"
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
      <div className="relative w-fit h-60 dark:border-2 border-[#5B5B5B] rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
        <Image
          src={mendergyLight}
          className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
        <Image
          src={mendyergyDark}
          className="rounded-2xl border-4 border-black hidden dark:block max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          objectFit="contain"
          alt="MendyView"
        />
      </div>
    ),
    href: "/products/mendylive-digital-twin-platform",
    className: "col-span-2",
  },
];

// Framer Motion variants for entrance animation
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
  // const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const displayedSolutions = showAll ? Solutions : Solutions.slice(0, 5); // first two rows (top 5)
  const [startAnimation, setStartAnimation] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (startAnimation) return; // already triggered
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
    <div className="relative min-h-screen  text-gray-950 dark:text-gray-100 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg">
          Smart Solutions by Mendygo
        </h1>
        <h2 className=" text-lg text-gray-600 font-thin dark:text-gray-400">
          Innovative digital products crafted to empower businesses, streamline
          operations, and deliver exceptional customer experiences.
        </h2>
      </div>

      {/* Grid container with 3 columns on large screens */}
      <motion.div
        layout
        className="w-full lg:max-w-6xl max-w-xl grid grid-cols-1  lg:grid-cols-3 gap-6 "
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
            className={`group flex flex-col lg:h-full h-fit overflow-hidden rounded-xl bg-white dark:bg-[#141415] border border-gray-200 dark:border-none shadow-sm hover:shadow-xl transition-all duration-300 ${solution.className}`}
            whileHover={{ y: -4 }}
          >
            <div className="flex-1 flex flex-col justify-start p-6 gap-5 overflow-hidden">
              <Badge className="backdrop-blur-md bg-[#9ffb1e]/50 border border-white/20 text-black  ">
                <span className="text-sm font-semibold p-1">
                  {solution.name}
                </span>
              </Badge>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-80 rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black p-16"
              >
                {solution.content}
              </motion.div>

              <p className="text-sm text-gray-900 font-semibold dark:text-gray-300">
                {solution.subtitle}
                <p className="text-sm text-gray-600 font-thin pt-1 dark:text-gray-400 ">
                  {solution.description}
                </p>
                
              </p>
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
        className="my-10 px-6 py-2 text-md font-medium dark:text-black rounded-full  bg-[#9ffb1e] "
        aria-expanded={showAll}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>

      {/* {customizedIndustrySection} */}
      <div className="bg-gradient-to-br dark:from-[#abff01]/40 from-[#abff01]/35 via-[#abff01]/0 to-[#abff01]/20 dark:border-white/30 dark:text-white grid lg:grid-cols-[2fr_5fr] w-11xl p-10 pt-10 text-md my-20">
        <motion.div className="relative h-96 rounded-xl flex items-center justify-center overflow-hidden p-6">
          <Image
            src={customizedIndustryLight}
            className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
            height={1000}
            width={1000}
            objectFit="contain"
            alt="MendyView"
          />
          <Image
            src={customizedIndustryDark}
            className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
            height={1000}
            width={1000}
            objectFit="contain"
            alt="MendyView"
          />
        </motion.div>
        <div className=" flex flex-col lg:items-start text-center lg:text-left items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-100 dark:via-gray-200 dark:to-gray-500 dark:drop-shadow-lg pt-10">
            Customized Industry 4.0 Solutions
          </h1>
          <p className="text-md pt-3 font-thin dark:text-gray-300">
            We offer tailored solutions to help businesses embrace Industry 4.0
            technologies.
          </p>
          <p className="pb-8 font-thin dark:text-gray-300">
            Our expertise includes IoT, AI, and advanced automation to drive
            efficiency and innovation.
          </p>
          <Link href="/aboutus" className="px-8 py-3 rounded-full dark:text-gray-300 border border-slate-400 hover:bg-slate-700/40 transition text-sm font-medium">Discover More</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
