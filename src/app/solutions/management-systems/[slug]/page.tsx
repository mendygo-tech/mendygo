"use client";

import React, { useCallback, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import DemoModal from "@/components/common/DemoModal";
import ManagementHero from "@/components/products/ManagementHero";
import Features from "@/components/products/Features";

import { managementSystemsData } from "@/data/managementSystemsData";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">

        {/* ================= Overview ================= */}
        <section id="overview">
          <ManagementHero systemData={systemData} />
        </section>

        {/* ================= Architecture ================= */}
        {systemData.architectureimage && (
          <section id="architecture" className="py-28">
            <div className="max-w-6xl mx-auto px-6">
              <h3 className="text-4xl font-bold text-center">Architecture</h3>

              <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A scalable IoT-driven architecture that connects on-site assets
                with cloud intelligence for real-time monitoring and control.
              </p>

              <div className="mt-16 bg-white dark:bg-neutral-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                <Image
                  src={systemData.architectureimage}
                  alt="System Architecture"
                  className="rounded-2xl w-full h-auto dark:hidden"
                />
                <Image
                  src={systemData.architectureimageDark}
                  alt="System Architecture"
                  className="rounded-2xl w-full h-auto hidden dark:block"
                />
              </div>
            </div>
          </section>
        )}

        {/* ================= Features ================= */}
        <section id="features">
          <Features systemData={systemData} heading="Key Modules" />
        </section>

        {/* ================= Brochure ================= */}
        <section id="brochure" className="mt-28">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center">
              Product Resources
            </h3>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Download the complete product brochure to explore system
              capabilities, architecture, integrations, and deployment models.
            </p>

            <div className="mt-14">
              <div className="relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 p-8 shadow-sm hover:shadow-md transition">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9FFB1E]/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition" />

                <div className="relative flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#9FFB1E]/20 text-black dark:text-[#9FFB1E] font-semibold">
                    PDF
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {systemData.title} – Brochure
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Detailed documentation covering features, system design,
                      scalability, and real-world use cases.
                    </p>
                  </div>

                  {systemData.brochure && (
                    <a
                      href={systemData.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9FFB1E] text-black font-semibold text-sm hover:opacity-90 transition"
                    >
                      Download Brochure
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Final CTA ================= */}
        <section id="cta" className="mt-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#9FFB1E]/30 via-[#9FFB1E]/10 to-transparent p-12 text-center">
              <h3 className="text-3xl font-bold dark:text-gray-100">
                Ready to Optimize Your Operations?
              </h3>

              <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Schedule a personalized demo and see how Mendygo’s management
                systems deliver automation, visibility, and control.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="px-8 py-3 rounded-full bg-[#9FFB1E] text-black font-semibold shadow hover:shadow-md transition"
                >
                  Request Demo
                </button>

                <Link
                  href="/aboutus"
                  className="px-8 py-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-200 font-medium transition hover:bg-white/50 dark:hover:bg-white/10"
                >
                  Learn More About Mendygo
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DemoModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default ManagementSystemPage;
