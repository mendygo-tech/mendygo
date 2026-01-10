"use client";

import React, { useCallback, useState } from "react";
import Image, { StaticImageData } from "next/image";
import DemoModal from "@/components/common/DemoModal";
import Link from "next/link";

// Dummy images (replace later if needed)
import story1 from "@/assets/aboutUs/holistic1.png";
import story2 from "@/assets/aboutUs/solution1.png";
import story3 from "@/assets/aboutUs/solution2.png";

type SuccessCardProps = {
  imgSrc: StaticImageData;
  title: string;
  domain: string;
  description: string;
  impact: string[];
};

function SuccessCard({
  imgSrc,
  title,
  domain,
  description,
  impact,
}: SuccessCardProps) {
  return (
    <div className="group bg-white/80 dark:bg-white/5 backdrop-blur rounded-2xl border border-gray-200/70 dark:border-white/10 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
      <div className="relative h-48 w-full rounded-xl overflow-hidden mb-5">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>

      <span className="text-xs uppercase tracking-wide text-lime-600 dark:text-lime-400 font-medium">
        {domain}
      </span>

      <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-700 dark:text-white/70 leading-relaxed">
        {description}
      </p>

      <ul className="mt-4 space-y-2 text-sm">
        {impact.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-800 dark:text-white/80">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SuccessStoriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <div className="min-h-screen px-10 md:px-16 py-10 bg-white text-black dark:bg-black dark:text-white/70">
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero */}
      <div className="text-center space-y-4 mb-20 mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent dark:from-gray-200 dark:via-gray-400 dark:to-gray-700">
          Success Stories
        </h1>
        <p className="dark:text-white/70 text-lg max-w-3xl mx-auto">
          Real-world implementations showcasing how Mendygo drives efficiency,
          reliability, and intelligent industrial operations.
        </p>
      </div>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <SuccessCard
          imgSrc={story1}
          title="Smart Factory Digitalisation"
          domain="Industrial Management System"
          description="A large manufacturing unit adopted Mendygo to gain real-time visibility across machines, sensors, and production lines."
          impact={[
            "32% improvement in operational efficiency",
            "Centralized machine monitoring",
            "Reduced unplanned downtime",
          ]}
        />

        <SuccessCard
          imgSrc={story2}
          title="Building Infrastructure Automation"
          domain="Building Management System"
          description="A commercial facility streamlined HVAC, lighting, and safety systems using a unified Mendygo dashboard."
          impact={[
            "24% reduction in energy usage",
            "Faster fault detection",
            "Improved maintenance planning",
          ]}
        />

        <SuccessCard
          imgSrc={story3}
          title="Energy Usage Optimization"
          domain="Energy Management System"
          description="An enterprise optimized power consumption and peak load usage using intelligent energy analytics."
          impact={[
            "21% reduction in peak energy costs",
            "Real-time energy insights",
            "Improved sustainability metrics",
          ]}
        />
      </section>

      {/* Metrics */}
      <section className="my-24 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">100+</p>
          <p className="text-sm dark:text-white/70 mt-2">Deployments</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">30%+</p>
          <p className="text-sm dark:text-white/70 mt-2">Efficiency Gains</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">99.9%</p>
          <p className="text-sm dark:text-white/70 mt-2">System Reliability</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">Multi-Industry</p>
          <p className="text-sm dark:text-white/70 mt-2">Adoption</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#9FFB1E]/30 via-[#9FFB1E]/10 to-transparent max-w-5xl mx-auto rounded-xl py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-black dark:text-gray-300">
            Build Your Success with Mendygo
          </h3>
          <p className="mt-4 dark:text-white/70 text-sm md:text-base">
            Discover how intelligent monitoring and control can transform your
            operations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <div
              onClick={openModal}
              className="px-8 py-3 rounded-full bg-[#9FFB1E] text-black font-semibold shadow hover:shadow-md transition cursor-pointer"
            >
              Request Demo
            </div>
            <Link
              href="/aboutus"
              className="px-8 py-3 rounded-full border border-slate-400 dark:text-gray-300 text-sm font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
