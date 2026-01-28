"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import DemoModal from "@/components/common/DemoModal";
import Link from "next/link";
import type { StaticImageData } from "next/image";

type ManagementHeroProps = {
  systemData: {
    title: string;
    heroImage: StaticImageData;
    description?: string;
    assetsWeTrack?: string[];
    benefits?: string[];
  };
};

const ManagementHero: React.FC<ManagementHeroProps> = ({ systemData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <section id="overview" className="relative">
      {/* ================= PAGE TITLE ================= */}
      <h1
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          text-center
          font-bold
          leading-[1.3]
          tracking-tight
          bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500
          bg-clip-text text-transparent
          drop-shadow-sm
          dark:from-gray-200 dark:via-gray-400 dark:to-gray-700
          mb-10
        "
      >
        {systemData.title}
      </h1>

      {/* 🔗 PROFESSIONAL STICKY SECTION NAVIGATION (REFINED) */}
      <div className="sticky top-10 z-40 mb-16">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center">
          <div
            className="
        flex items-center gap-1
        px-2 py-1
        rounded-full
        bg-white dark:bg-black
        backdrop-blur-md
        border border-[#9ef30f] dark:border-[#9ef30f]
        shadow-lg shadow-black/5 dark:shadow-black/50
      "
          >
            {[
              { label: "Overview", href: "#overview" },
              { label: "Architecture", href: "#architecture" },
              { label: "Features", href: "#features" },
              { label: "Brochure", href: "#brochure" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
            px-5 py-2.5
            text-sm
            font-semibold
            tracking-tight
            text-black dark:text-white
            rounded-full
            transition-all duration-200 ease-out
            hover:bg-[#9FFB1E]
            hover:text-black
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-black/20
          "
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4">
          <div className="relative">
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black dark:text-white opacity-70">
              ▾
            </span>

            <select
              className="
          w-full
          appearance-none
          rounded-xl
          px-4 py-3 pr-12
          text-sm
          font-semibold
          tracking-tight
          bg-white dark:bg-black
          text-black dark:text-white
          border border-[#9ef30f] dark:border-[#9ef30f]
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-black/20
        "
              onChange={(e) => {
                const target = document.querySelector(e.target.value);
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              defaultValue="#overview"
            >
              <option value="#overview">Overview</option>
              <option value="#architecture">Architecture</option>
              <option value="#features">Features</option>
              <option value="#brochure">Brochure</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-16 items-start">
        {/* ASSETS */}
        {systemData.assetsWeTrack && systemData.assetsWeTrack.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Assets we track
            </h3>
            <ul className="space-y-3">
              {systemData.assetsWeTrack.map((asset, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-lime-400/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#28783B] dark:text-[#A0F30B]" />
                  </div>
                  <span className="text-sm font-medium text-black/90 dark:text-white/90">
                    {asset}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CENTER */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={systemData.heroImage}
            alt={systemData.title}
            height={400}
            width={800}
            priority
            className="
              rounded-xl
              border border-neutral-200 dark:border-neutral-800
              shadow-lg
              w-full h-auto
            "
          />

          {systemData.description && (
            <p
              className="
                mt-6
                max-w-3xl
                mx-auto
                text-lg
                font-medium
                text-black/90 dark:text-white/90
              "
            >
              {systemData.description}
            </p>
          )}

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            <motion.button
              onClick={openModal}
              className="
                w-full sm:w-auto
                px-8 py-3
                rounded-full
                text-sm font-semibold
                text-black
                bg-gradient-to-br from-[#9FFB1E] to-[#a0f000]
              "
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
            </motion.button>

            <Link href="/contact">
              <motion.button
                className="
                  w-full sm:w-auto
                  px-8 py-3
                  rounded-full
                  text-sm font-semibold
                  bg-transparent
                  text-black dark:text-white
                  border border-black/50 dark:border-white/50
                "
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>

        {/* BENEFITS */}
        {systemData.benefits && systemData.benefits.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Benefits
            </h3>
            <ul className="space-y-3">
              {systemData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-lime-400/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#28783B] dark:text-[#A0F30B]" />
                  </div>
                  <span className="text-sm font-medium text-black/90 dark:text-white/90">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* MODAL */}
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default ManagementHero;