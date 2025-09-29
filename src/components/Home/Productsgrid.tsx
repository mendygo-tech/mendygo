// Productsgrid.tsx
"use client";
import Image from "next/image";
import mendyergyDark from "@/assets/mockup/mendergylgDark.png";
import mendyergyLight from "@/assets/mockup/mendergylgLight.png";
import { motion } from "motion/react";
import mendyAiHomeDark from "@/assets/mockup/mendyAiPhoneDark.png";
import mendyAiHomeLight from "@/assets/mockup/mendyAiPhoneLight.png";
import mendySheetsDark from "@/assets/hardware/gateway/gatewaygrid.png";
import mendySheetsLight from "@/assets/hardware/gateway/gatewaygrid.png";
import mendyVision from "@/assets/hardware/mendyVision.png";
import mendyVisionDark from "@/assets/hardware/mendyVisionDark.png";
import customizedIndustryLight from "@/assets/mockup/customizedIndustryLight.png";
import customizedIndustryDark from "@/assets/mockup/customizedIndustryDark.png";
import AiMaintenanceLight from "@/assets/mockup/AiMaintenenceLight.png";
import AiMaintenanceDark from "@/assets/mockup/AiMaintenanceDark.png";
import { Badge } from "../ui/badge";
import Link from "next/link";

const Solutions = [
  {
    id: 1,
    name: "Management Systems",
    subtitle: "Smart Management Systems",
    description:
      "Streamline operations with AI-driven control, monitoring, and decision-making tools.",
    content: (
      <div className=" w-fit lg:h-60 dark:border-2 border-[#5B5B5B] rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
        <Image
          src={mendyergyLight}
          className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          alt="MendyAI Light"
        />
        <Image
          src={mendyergyDark}
          className="rounded-2xl z-1 border-4 border-black hidden dark:block max-h-full w-fit object-contain"
          height={1000}
          width={1000}
          alt="MendyAI Dark"
        />
      </div>
    ),
    href: "/solutions/management-systems",
    className: "lg:col-span-2",
  },
  {
    id: 2,
    name: "Telematics",
    subtitle: "Smart Telematics Solutions",
    description:
      "Real-time tracking, monitoring, and analytics to optimize fleet and asset performance.",
    content: (
      <>
        {/* <div
    className="absolute inset-0 rounded-xl z-0 blur-xl scale-110"
    style={{
      background: "radial-gradient(circle, rgba(159,251,30,0.3) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
    }}
  ></div> */}
        <Image
          src={AiMaintenanceLight}
          className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="Thermendy Light"
        />
        <Image
          src={AiMaintenanceDark}
          className="rounded-2xl z-1 hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="Thermendy Dark"
        />
      </>
    ),
    href: "/solutions/telematics",
  },
  {
    id: 4,
    name: "MendyVision",
    subtitle: "Mendy Vision AI",
    description:
      "Advanced computer vision for real-time detection, tracking, and operational insights.",
    content: (
      <>
        <div
          className="absolute inset-0 rounded-xl z-0 blur-xl scale-110"
          style={{
            background:
              "radial-gradient(circle, rgba(159,251,30,0.3) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
          }}
        ></div>
        <Image
          src={mendyVision}
          className="rounded-2xl z-2 dark:hidden max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="Mendy Vision Light"
        />
        <Image
          src={mendyVisionDark}
          className="rounded-2xl z-2 hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="Mendy Vision Dark"
        />
      </>
    ),
    href: "/products/ai/computerVision",
    className: "",
  },
  {
    id: 9,
    name: "Mendy AI",
    subtitle: "Industrial Intelligence Engine",
    description:
      "MendyAI turns raw IoT data into smart, real-time insights using adaptive machine learning.",
    content: (
      <>
        {/* <div
    className="absolute inset-0 rounded-xl z-0 blur-xl scale-110"
    style={{
      background: "radial-gradient(circle, rgba(159,251,30,0.3) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
    }}
  ></div> */}
        <Image
          src={mendyAiHomeLight}
          className="rounded-2xl z-1 dark:hidden max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="Thermendy Light"
        />
        <Image
          src={mendyAiHomeDark}
          className="rounded-2xl z-1 hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="Thermendy Dark"
        />
      </>
    ),
    href: "/products/ai/mendy",
    className: "",
  },
  {
    id: 8,
    name: "Hardware",
    subtitle: "Intelligent Industrial Hardware",
    description:
      "Rugged, IoT-enabled devices built for precision, resilience, and seamless integration.",
    href: "/products/hardware",
    content: (
      <>
        <div
          className="absolute inset-0 rounded-xl z-0 blur-xl scale-110"
          style={{
            background:
              "radial-gradient(circle, rgba(159,251,30,0.3) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
          }}
        ></div>
        <Image
          src={mendySheetsLight}
          className="rounded-2xl z-1 dark:hidden max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="MendySheets Light"
        />
        <Image
          src={mendySheetsDark}
          className="rounded-2xl z-1 hidden dark:block max-h-full max-w-full object-contain"
          height={1000}
          width={1000}
          alt="MendySheets Dark"
        />
      </>
    ),
    className: "",
  },

  // {
  //     id: 6,
  //     name: "MendyOps",
  //     subtitle: "Utility Monitoring & Automation",
  //     description:
  //         "Monitor and control pumps, HVAC, and other utilities remotely with MendyOps.",
  //     content: (
  //         <>
  //             <Image
  //                 src={ThermendyLight}
  //                 className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
  //                 height={1000}
  //                 width={1000}
  //                 alt="MendyOps Light"
  //             />
  //             <Image
  //                 src={ThermendyDark}
  //                 className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
  //                 height={1000}
  //                 width={1000}
  //                 alt="MendyOps Dark"
  //             />
  //         </>
  //     ),
  //     href: "/products/mendyops-utility-monitoring-automation",
  //     className: "",
  // },
  // {
  //     id: 5,
  //     name: "AI Based maintanance",
  //     subtitle: "Predictive Maintenance Platform",
  //     description:
  //         "Automate scheduling, optimize parts, and predict failures with our AI platform",
  //     content: (
  //         <>
  //             <Image
  //                 src={AiMaintenanceLight}
  //                 className="rounded-2xl dark:hidden max-h-full max-w-full object-contain"
  //                 height={1000}
  //                 width={1000}
  //                 alt="AI Maintenance Light"
  //             />
  //             <Image
  //                 src={AiMaintenanceDark}
  //                 className="rounded-2xl hidden dark:block max-h-full max-w-full object-contain"
  //                 height={1000}
  //                 width={1000}
  //                 alt="AI Maintenance Dark"
  //             />
  //         </>
  //     ),
  // },
  // {
  //     id: 7,
  //     name: "MendyLive",
  //     subtitle: "Digital Twin Platform",
  //     description:
  //         "Visualize, simulate, and optimize industrial operations with MendyLive.",
  //     content: (
  //         <div className="relative w-fit lg:h-60 dark:border-2 border-[#5B5B5B] rounded-xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-black ">
  //             <Image
  //                 src={mendergyLight}
  //                 className="rounded-xl border-4 border-[#010101] dark:hidden max-h-full w-fit object-contain"
  //                 height={1000}
  //                 width={1000}
  //                 alt="MendyLive Light"
  //             />
  //             <Image
  //                 src={mendyergyDark}
  //                 className="rounded-2xl border-4 border-black hidden dark:block max-h-full w-fit object-contain"
  //                 height={1000}
  //                 width={1000}
  //                 alt="MendyLive Dark"
  //             />
  //         </div>
  //     ),
  //     href: "/products/mendylive-digital-twin-platform",
  //     className: "lg:col-span-2",
  // },
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
  return (
    <div className="relative min-h-screen text-gray-950 dark:text-gray-100 flex flex-col items-center">
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg">
          Smart Solutions by Mendygo
        </h1>
        <h2 className="text-base sm:text-lg text-gray-600  dark:text-gray-400 max-w-3xl mx-auto mt-2">
          Innovative digital products crafted to empower businesses, streamline
          operations, and deliver exceptional customer experiences.
        </h2>
      </div>

      <motion.div
        layout
        className="w-full lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        variants={containerVariants}
      >
        {Solutions.map((solution) => (
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
                <p className="text-sm text-gray-900 font-bold dark:text-gray-300">
                  {solution.subtitle}
                </p>
                <p className="text-sm text-gray-900  pt-1 dark:text-gray-400">
                  {solution.description}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <div className="bg-gradient-to-br dark:from-[#abff01]/40 from-[#abff01]/35 via-[#abff01]/0 to-[#abff01]/20 dark:border-white/30 dark:text-white grid lg:grid-cols-[1fr_2fr] p-10 px-20 pt-10 text-md my-20">
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
          <p className="text-md pt-3  dark:text-gray-300">
            We offer tailored solutions to help businesses embrace Industry 4.0
            technologies.
          </p>
          <p className="pb-8  dark:text-gray-300">
            Our expertise includes IoT, AI, and advanced automation to drive
            efficiency and innovation.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full dark:text-gray-300 border border-slate-400 dark:hover:border-[#abff01]  transition text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
