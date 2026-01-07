// src/app/products/ai/computerVision/page.tsx
"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Hand, HardHat, Flame, ShieldCheck } from "lucide-react";

import DemoModal from "@/components/common/DemoModal";

import PPE_Detection_Image from "@/assets/ppeDetectionLight.png";
import PPE_Detection_ImageDark from "@/assets/ppeDetectionDark.png";

export default function ComputerVisionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white/70">
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          preload="metadata"
        >
          <source src="/cv.webm" type="video/webm" />
          <source src="/cv.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            style={{ textShadow: "0px 2px 4px #000" }}
          >
            Protecting Lives with AI-Powered Safety Monitoring
          </h1>

          <p
            className="mt-6 text-lg leading-8 text-white"
            style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.2)" }}
          >
            Real-time detection of PPE compliance and fire hazards—because safety
            should never be optional.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={openModal}
              className="rounded-md bg-lime-500 px-6 py-3 text-sm font-semibold text-black shadow hover:bg-lime-400 transition"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* ================= PPE OVERVIEW ================= */}
      <section className="py-28 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-base font-semibold leading-7 text-lime-600">
              AI That Sees Safety
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Before Accidents Happen
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Real-Time Detection",
                desc: "Detects gloves, helmets, and vests using advanced computer vision.",
              },
              {
                title: "Instant Alerts",
                desc: "Alerts supervisors instantly when PPE violations occur.",
              },
              {
                title: "Seamless Integration",
                desc: "Integrates seamlessly with your existing CCTV infrastructure.",
              },
              {
                title: "Reduce Injuries",
                desc: "Reduces workplace injuries and improves compliance metrics.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-500">
                    <ShieldCheck className="h-6 w-6 text-white/70 dark:text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DETECT ================= */}
      <section className="py-28 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Detect
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-gray-200 dark:border-white/10 p-8 text-center shadow-sm">
              <HardHat className="h-10 w-10 mx-auto text-lime-500" />
              <h3 className="mt-6 text-lg font-semibold">Helmets</h3>
              <p className="mt-2 text-sm">
                Detects headgear for impact-prone environments.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-white/10 p-8 text-center shadow-sm">
              <Hand className="h-10 w-10 mx-auto text-lime-500" />
              <h3 className="mt-6 text-lg font-semibold">Gloves</h3>
              <p className="mt-2 text-sm">
                Ensures hand protection is worn in hazardous zones.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-white/10 p-8 text-center shadow-sm">
              <ShieldCheck className="h-10 w-10 mx-auto text-lime-500" />
              <h3 className="mt-6 text-lg font-semibold">Vests</h3>
              <p className="mt-2 text-sm">
                Identifies high-visibility vests for operational safety.
              </p>
            </div>
          </div>

          <Image
            src={PPE_Detection_Image}
            alt="PPE Detection"
            className="mt-20 rounded-2xl dark:hidden"
          />
          <Image
            src={PPE_Detection_ImageDark}
            alt="PPE Detection"
            className="mt-20 rounded-2xl hidden dark:block"
          />
        </div>
      </section>

      {/* ================= FIRE DETECTION ================= */}
      <section className="py-28 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Early Fire Detection That Saves Lives
            </h2>

            <dl className="mt-10 space-y-8 text-base">
              <div className="relative pl-9">
                <Flame className="absolute left-1 top-1 h-5 w-5 text-lime-600" />
                <span className="font-semibold">Real-Time Alerts.</span>{" "}
                Sends alerts to emergency response teams upon detecting smoke or fire.
              </div>

              <div className="relative pl-9">
                <Flame className="absolute left-1 top-1 h-5 w-5 text-lime-600" />
                <span className="font-semibold">Works Anywhere.</span>{" "}
                Effective in low-light and high-noise environments.
              </div>

              <div className="relative pl-9">
                <Flame className="absolute left-1 top-1 h-5 w-5 text-lime-600" />
                <span className="font-semibold">Minimize Damage.</span>{" "}
                Reduces response time to prevent catastrophic damage.
              </div>
            </dl>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/fireDetection.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ================= BROCHURE ================= */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-500/20 text-lime-500 font-bold">
              PDF
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold">
                AI Computer Vision – Safety Brochure
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Detailed overview of PPE detection, fire monitoring, architecture,
                and deployment use-cases.
              </p>
            </div>

            <a
              href="/brochures/Mendy-Vision-AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-lime-500 text-black font-semibold hover:bg-lime-400 transition"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
