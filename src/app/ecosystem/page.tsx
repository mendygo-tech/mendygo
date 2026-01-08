"use client";

import React from "react";
import Image from "next/image";
import EcosystemLight from "@/assets/LargeImages/ecosystemLight.avif";
import EcosystemDark from "@/assets/LargeImages/ecosystemDarklg-min.avif";

const Ecosystem = () => {
  return (
    <section className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-14">
        
        {/* Heading */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
            bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent
            dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">
            Mendy
            <span className="text-[#aaff01] drop-shadow-sm">go</span>{" "}
            Ecosystem
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
            Explore the interconnected components and intelligent services that
            power the Mendygo ecosystem.
          </p>
        </div>

        {/* Ecosystem Image */}
        <div className="flex justify-center items-center">
          <Image
            src={EcosystemLight}
            alt="Mendygo Ecosystem"
            width={700}
            height={700}
            priority
            className="dark:hidden"
          />

          <Image
            src={EcosystemDark}
            alt="Mendygo Ecosystem"
            width={700}
            height={700}
            priority
            className="hidden dark:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
