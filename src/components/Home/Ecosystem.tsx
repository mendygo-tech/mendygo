"use client";

import React from "react";
import Image from "next/image";
import EcosystemLight from "@/assets/LargeImages/ecosystemLight.avif";
import EcosystemDark from "@/assets/LargeImages/ecosystemDarklg-min.avif";
import LiveTelemetry from "@/app/solutions/telematics/chart";

const Ecosystem = () => {
  return (
    <section className="relative w-full py-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14 px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">
          Mendy
          <span className="text-[#aaff01] drop-shadow-sm">go</span>{" "}
          Ecosystem
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore the interconnected components and intelligent services that
          power the Mendygo ecosystem.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Ecosystem Image */}
        <div className="flex justify-center">
          <Image
            src={EcosystemLight}
            alt="Mendygo Ecosystem"
            width={900}
            height={900}
            priority
            className="p-8  dark:hidden"
          />

          <Image
            src={EcosystemDark}
            alt="Mendygo Ecosystem"
            width={900}
            height={900}
            priority
            className="  hidden dark:block  "
          />
        </div>

        {/* Telemetry Panel */}
        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-lg p-6 max-h-[520px]">
          <LiveTelemetry compact />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
