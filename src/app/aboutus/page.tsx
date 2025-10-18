"use client";
import React, { useCallback } from "react";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
// import { Separator } from "@/components/ui/separator";
import d1 from "@/assets/gallery/DirectorMamPicture.png";
import d2 from "@/assets/gallery/souravPicture.png";
// import { Badge } from "@/components/ui/badge";
import CompanySlideshow from "@/components/Home/SlideShow";

import Link from "next/link";
import DemoModal from "@/components/common/DemoModal";
import holistic1 from "@/assets/aboutUs/holistic1.png";
import holistic2 from "@/assets/aboutUs/holistic2.png";
import solution1 from "@/assets/aboutUs/solution1.png";
import solution2 from "@/assets/aboutUs/solution2.png";
import solution3 from "@/assets/aboutUs/solution3.png";

// --- Reusable Components ---

type LeaderCardProps = {
  imgSrc: StaticImageData;
  name: string;
  title: string;
  description: string;
  linkedinUrl?: string;
};

function LeaderCard({ imgSrc, name, title, description, linkedinUrl }: LeaderCardProps) {
  return (
    <div className="group relative w-full max-w-sm rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <Image
            src={imgSrc}
            alt={name}
            width={120}
            height={120}
            className="h-[120px] w-[120px] rounded-full object-cover ring-4 ring-white dark:ring-black shadow-md"
          />
          {linkedinUrl && (
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile of ${name}`}
              className="absolute -bottom-1 -right-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 text-[#0A66C2]  transition-transform duration-200 hover:scale-105"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.944v5.662H9.351V9h3.413v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.266 2.371 4.266 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </Link>
          )}
        </div>

        <h3 className="mt-4 font-semibold text-xl text-gray-900 dark:text-gray-50">{name}</h3>
        <p className="text-lime-600 dark:text-lime-400 font-medium text-sm">{title}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10" />
    </div>
  );
}

type FeatureCardProps = {
  imgSrc: StaticImageData
  title: string;
  description: string;
  reverse?: boolean;
};

function FeatureCard({ imgSrc, title, description, reverse }: FeatureCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-12`}>
      <div className="w-full h-85 rounded-lg overflow-hidden flex items-center justify-center ">
        <Image
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
      <div className="space-y-3 p-6 rounded-xl  backdrop-blur  border-gray-200/70 dark:border-gray-800">
        <h3 className="text-xl dark:text-white/70 font-semibold">{title}</h3>
        <p className="dark:text-white/70 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}



// --- About Page ---

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
      
        const openModal = useCallback(() => setIsModalOpen(true), []);
        const closeModal = useCallback(() => setIsModalOpen(false), []);
    
  return (
    <div className="min-h-screen md:px-16 py-10 bg-white text-black dark:text-white/70 dark:bg-black  px-10">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16 mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg mt-2">
          Pioneering the Future of Industrial Operations
        </h1>
        <p className="dark:text-white/70 text-lg max-w-3xl mx-auto">
          We bridge the gap between your physical machinery and intelligent data, unlocking unprecedented efficiency and operational excellence for your enterprise.
        </p>
      </div>

<div className="grid grid-cols-2 px-40">
      {/* Leadership Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Meet The Leadership</h2>
          <p className="dark:text-white/70 mt-2">The visionaries driving our mission forward.</p>
        </div>
        <div className="grid max-w-5xl place-items-center">
          <LeaderCard
            imgSrc={d2}
            name="Mr. Sourav Verma"
            title="Director, Technology & Innovation"
            description="As the architect of our technology, Sourav leads the charge in developing cutting-edge IIoT solutions that are robust, scalable, and intuitive."
            linkedinUrl="https://www.linkedin.com/in/sourav-verma-/"
          />
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Advisory Board</h2>
          <p className="dark:text-white/70 mt-2">Leaders guiding our strategic direction.</p>
        </div>
        <div className="grid  max-w-5xl mx-auto place-items-center">
          <LeaderCard
            imgSrc={d1}
            name="Mrs. Santosh Verma"
            title="Advisor, Strategy & Growth"
            description="Santosh provides the strategic vision that steers Mendygo's growth, ensuring our solutions align perfectly with industry needs."
            // linkedinUrl="https://www.linkedin.com/in/santosh-verma"
          />
        </div>
      </section>
</div>
      {/* Mission Section */}
      <section className="mb-16 bg-gradient-to-br from-[#9FFB1E]/30 via-[#9FFB1E]/10 to-transparent p-8 rounded-lg border lg:w-2/3 mx-auto border-lime-200 dark:border-none">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Our Mission</h2>
          <p className="text-base dark:text-white/70">
            To empower industrial enterprises with robust, end-to-end digital solutions that transform traditional factories into smart, connected, and future-proof ecosystems. We are committed to making Industry 4.0 accessible, scalable, and impactful.
          </p>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="space-y-20 my-16 lg:px-30">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg mt-2">A Holistic Approach to Industrial Digitalisation</h2>
        </div>
        <FeatureCard
          imgSrc={holistic1}
          title="End-to-End Digital Transformation"
          description="From shop-floor optimization to remote asset monitoring, we provide complete Industry 4.0 solutions, integrating sensors, PLCs, and machinery into a unified, intelligent platform."
        />
        <FeatureCard
          reverse
          imgSrc={holistic2}
          title="Strategic Hardware & Spares Supply"
          description="Beyond software, we are your trusted partner for sourcing and supplying high-quality industrial plants, machinery, branded spares, and essential engineering products."
        />
      </section>
        {/* Trusted By Section */}
        <div className="relative  text-center py-20">
         
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg mt-2">
            Trusted by the Best in the Industry
          </h1>
          <p className="max-w-xl  text-lg  mx-auto  dark:text-gray-300">
            We are proud to serve as the automation provider for top-tier
            automotive and tech clients across the globe.
          </p>
          <CompanySlideshow />
        </div>

      {/* Core Solutions Section */}
      <section className="space-y-20 my-16 lg:px-30">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg mt-2">Our Core Solutions</h2>
        </div>
        <FeatureCard
          imgSrc={solution1}
          title="Unified Sensor Monitoring"
          description="Aggregate data from sensors into a single, real-time dashboard for complete visibility, empowering you with the insights needed to make critical decisions instantly."
        />
        <FeatureCard
          reverse
          imgSrc={solution2}
          title="Smart Manufacturing & OEE"
          description="Boost your Overall Equipment Effectiveness (OEE) by tracking production cycles, minimizing costly downtime, and enabling a proactive, predictive maintenance schedule."
        />
        <FeatureCard
          imgSrc={solution3}
          title="Remote Machine Intelligence"
          description="Drastically reduce service costs and ensure optimal asset utilization with 24/7 real-time monitoring, remote diagnostics, and detailed performance analytics."
        />
      </section>

      
        {/* Call to Action Section */}
        <DemoModal isOpen={isModalOpen} onClose={closeModal} />

          <section className="bg-gradient-to-br from-[#9FFB1E]/30 via-[#9FFB1E]/10 to-transparent max-w-5xl mx-auto rounded-xl mt-10 dark:text-slate-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-black dark:text-gray-300">Ready to Optimize Your Operations?</h3>
            <p className="mt-4 dark:text-slate-300 text-sm md:text-base">Reach out for a tailored walkthrough and discover how Mendygo can transform your facility.</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <div onClick={openModal} className="px-8 py-3 rounded-full bg-[#9FFB1E] text-black font-semibold shadow hover:shadow-md transition text-sm md:text-base">Request Demo</div>
              <Link href="/aboutus" className="px-8 py-3 rounded-full dark:text-gray-300 border border-slate-400  transition text-sm font-medium">Discover More</Link>
            </div>
          </div>
        </section>
    </div>
  );
}