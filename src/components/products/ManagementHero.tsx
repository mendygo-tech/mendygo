

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
    // heroImage: string;
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
      {/* PAGE TITLE */}
      <h1 className="text-4xl md:text-5xl text-center font-bold text-black dark:text-gray-200 mb-10">
        {systemData.title}
      </h1>

   

{/* 🔗 PROFESSIONAL STICKY SECTION NAVIGATION */}
<div className="sticky top-10 z-40 mb-16">
  {/* Desktop Navigation */}
  <div className="hidden md:flex justify-center">
    <div
      className="
      flex items-center gap-6 px-2 py-1
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
            px-6 py-3
            text-sm font-semibold
            text-black dark:text-white
            transition-all
            hover:text-black hover:rounded-full dark:hover:text-black
            hover:bg-[#9FFB1E]
            focus-visible:outline-none
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
    {/* Custom arrow */}
    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black dark:text-white">
      ▾
    </span>

    <select
      className="
        w-full
        appearance-none
        rounded-xl
        px-4 py-3 pr-12
        text-sm font-semibold
        bg-white dark:bg-black
        text-black dark:text-white
        border border-[#9ef30f] dark:border-[#9ef30f]
        shadow-sm
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



      {/* HERO CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-12 items-start">
        
        {/* ASSETS */}
        {systemData.assetsWeTrack && systemData.assetsWeTrack.length > 0 && (
          <div id="assets" className="w-full">
            <h3 className="font-bold text-lg mb-4 text-black dark:text-white">
              Assets we track
            </h3>
            <ul className="space-y-3">
              {systemData.assetsWeTrack.map((asset, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-lime-400/10 dark:bg-lime-400/30 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#28783B] dark:text-[#A0F30B]" />
                  </div>
                  <span className="text-sm text-black/80 dark:text-white/80">
                    {asset}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={systemData.heroImage}
            alt={systemData.title}
            height={400}
            width={800}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg w-full h-auto"
            priority
          />

          {systemData.description && (
            <p className="mt-8 max-w-3xl text-lg text-black/70 dark:text-white/70">
              {systemData.description}
            </p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            <motion.button
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-bold text-black bg-gradient-to-br from-[#9FFB1E] to-[#a0f000]"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
            </motion.button>

            <Link href="/contact">
              <motion.button
                className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-bold bg-transparent text-black dark:text-white border border-black/50 dark:border-white/50"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>

        {/* BENEFITS */}
        {systemData.benefits && systemData.benefits.length > 0 && (
          <div id="benefits" className="w-full">
            <h3 className="font-bold text-lg mb-4 text-black dark:text-white">
              Benefits
            </h3>
            <ul className="space-y-3">
              {systemData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-lime-400/10 dark:bg-lime-400/30 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#28783B] dark:text-[#A0F30B]" />
                  </div>
                  <span className="text-sm text-black/80 dark:text-white/80">
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
