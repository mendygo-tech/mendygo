"use client";

import React, { useCallback } from "react";
import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import DemoModal from "@/components/common/DemoModal";
import Image from "next/image";
  

import { managementSystemsData } from "@/data/managementSystemsData";
import ManagementHero from "@/components/products/ManagementHero";
import Features from "@/components/products/Features";

const ManagementSystemPage = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  
    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);

  const params = useParams();
  const slug = params.slug as string;
  const systemData = managementSystemsData[slug];

  if (!systemData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-30 pt-20 pb-20">
        
        <ManagementHero systemData={systemData} />
        {/* <HardwareOverview systemData={systemData} /> */}
{systemData.architectureimage && (
                  <div className="py-24">
                      <h3 className="text-3xl text-center font-bold relative">Architecture</h3>
                      <div className="w-full lg:w-3/4 mx-auto mt-12">
                      <Image src={systemData.architectureimage} alt="Mendygo Ecosystem Diagram" className="rounded-xl w-full h-auto dark:hidden" />
                      <Image src={systemData.architectureimageDark} alt="Mendygo Ecosystem Diagram" className="rounded-xl w-full h-auto hidden dark:block" />
                      </div>
                  </div>
              )}
        <Features systemData={systemData} heading="Key Modules" />
        <DemoModal isOpen={isModalOpen} onClose={closeModal} />


        <section className="bg-gradient-to-br from-[#9FFB1E]/30 via-[#9FFB1E]/10 to-transparent max-w-5xl mx-auto rounded-xl mt-10 dark:text-slate-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold dark:text-gray-300">Ready to Optimize Your Operations?</h3>
            <p className="mt-4 dark:text-slate-300 text-sm md:text-base">Reach out for a tailored walkthrough and discover how Mendygo can transform your facility.</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <div onClick={openModal} className="px-8 py-3 rounded-full bg-[#9FFB1E] text-black font-semibold shadow hover:shadow-md transition text-sm md:text-base">Request Demo</div>
              <Link href="/aboutus" className="px-8 py-3 rounded-full dark:text-gray-300 border border-slate-400 hover:bg-slate-700/40 transition text-sm font-medium">Discover More</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManagementSystemPage;