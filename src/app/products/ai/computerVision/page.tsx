// src/app/products/ai/computerVision/page.tsx
"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Hand, HardHat, Flame, ShieldCheck } from "lucide-react";
import DemoModal from "@/components/common/DemoModal";

import PPE_Detection_Image from "@/assets/firesafety.png";
import PPE_Detection_ImageDark from "@/assets/firesafety.png";

export default function ComputerVisionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <main className="bg-white text-black dark:bg-black dark:text-gray-300">
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* ================= HERO ================= */}

      <section className="relative h-screen flex items-center justify-center /* Bottom Shadow */ after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/5 after:bg-gradient-to-t dark:after:from-black after:from-[#F9FAFB] after:to-transparent after:z-10 /* Top Shadow */ before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1/3 before:bg-gradient-to-b dark:before:from-black/30 before:from-[#F9FAFB]/30 before:to-transparent before:z-10">
        {" "}
        {/* Video Background */}{" "}
        <video
          className="absolute z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          preload="metadata"
        >
          {" "}
          <Image
            src="/cvPoster.png"
            width={100}
            height={100}
            alt="Computer Vision Poster"
            className="absolute z-0 h-full w-full object-cover"
          />{" "}
          <source src="/cv.webm" type="video/webm" />{" "}
          <source src="/cv.mp4" type="video/mp4" /> Your browser does not
          support the video tag.{" "}
        </video>{" "}
        {/* Light overlay to soften the video a bit (optional) */}{" "}
        <div className="absolute z-10 h-full w-full bg-white/70/10"></div>{" "}
        {/* Hero Content - Text is now dark for readability on a potentially light video */}{" "}
        <div className="relative z-20 mx-auto max-w-4xl text-center">
          {" "}
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            style={{ textShadow: "0px 2px 4px #000" }}
          >
            {" "}
            Protecting Lives with AI-Powered Safety Monitoring{" "}
          </h1>{" "}
          <p
            className="mt-6 text-lg leading-8 text-white "
            style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.2)" }}
          >
            {" "}
            Real-time detection of PPE compliance and fire hazards—because
            safety should never be optional.{" "}
          </p>{" "}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {" "}
            <a
              onClick={openModal}
              className="rounded-md bg-lime-500 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-lime-500"
            >
              {" "}
              Schedule Demo{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* ================= PPE OVERVIEW ================= */}
      <section className="py-28 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-lime-600">
              AI That Sees Safety
            </h2>
            <p className="mt-2 text-3xl font-bold sm:text-4xl">
              Preventing Accidents Before They Happen
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-Time Detection",
                  desc: "Detects helmets, gloves, and vests using computer vision.",
                },
                {
                  title: "Instant Alerts",
                  desc: "Supervisors are notified immediately on violations.",
                },
                {
                  title: "Seamless Integration",
                  desc: "Works with existing CCTV infrastructure.",
                },
                {
                  title: "Reduced Injuries",
                  desc: "Improves compliance and reduces workplace incidents.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-500/20 text-lime-500">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PPE Image */}
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-md">
                <Image
                  src={PPE_Detection_Image}
                  alt="PPE Detection"
                  className="rounded-2xl dark:hidden"
                />
                <Image
                  src={PPE_Detection_ImageDark}
                  alt="PPE Detection"
                  className="rounded-2xl hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DETECT ================= */}
      <section className="py-28 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What We Detect</h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: HardHat,
                title: "Helmets",
                desc: "Head protection compliance.",
              },
              { icon: Hand, title: "Gloves", desc: "Hand safety enforcement." },
              {
                icon: ShieldCheck,
                title: "Vests",
                desc: "High-visibility detection.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 dark:border-white/10 p-8 shadow-sm"
              >
                <Icon className="h-10 w-10 mx-auto text-lime-500" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FIRE DETECTION ================= */}
      <section className="py-28 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Early Fire Detection That Saves Lives
            </h2>

            <dl className="mt-10 space-y-8">
              {[
                "Instant alerts on smoke or fire detection.",
                "Reliable even in low-light conditions.",
                "Faster response minimizes damage and risk.",
              ].map((text) => (
                <div key={text} className="relative pl-9">
                  <Flame className="absolute left-0 top-1 h-5 w-5 text-lime-500" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-md">
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
                Detailed overview of PPE detection, fire monitoring, and
                deployment.
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
