import React from "react";

import Image from "next/image";
import HeroDashboardLight from "@/assets/LargeImages/whiteHeroResized.webp";
import HeroDashboardDark from "@/assets/LargeImages/DarkHeroResized.webp";
// import { motion } from "motion/react";
import GlassmorphedButtons from "../common/Buttons";
import industry from "@/assets/industry.jpg";

const Hero2 = () => {
  return (
    <>
      <div className="relative">
        <div className="h-120 w-full pt-45 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-5xl z-1 bg-gradient-to-b from-gray-900  via-gray-700 to-gray-500 bg-clip-text drop-shadow-sm text-transparent dark:from-gray-100 dark:via-gray-300 dark:to-gray-500 dark:drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight   "
          
        >
          AI That Adapts
        </h1>
        <p className="lg:text-lg text-sm  lg:w-full w-3/4  pb-3 dark:text-gray-100">
          Transform your business with intelligent automation that learns,
          adapts, and scales with your needs.
        </p>

        <div
        >
          <GlassmorphedButtons />
        </div>
      </div>

      <div className="z-2  pt-10 lg:p-0  flex justify-center relative ">
        <div className="relative w-full h-full">
          <Image
            src={HeroDashboardLight}
            alt="Mendygo dashboard"
            height={1000}
            width={1000}
            priority
            className="w-full h-full object-cover dark:hidden "
            sizes="(max-width: 768px) 100vw, 90vw"
          />

          <Image
            src={HeroDashboardDark}
            alt="Mendygo dashboard"
            height={1000}
            width={1000}
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
            className="w-full h-full object-cover hidden dark:block"

/>
        </div>
      </div>

      <div className="">
        <Image src={industry} alt="" width={1000} height={1000} className="absolute mask-b-from-gray-900 opacity-50 top-0 w-full h-full object-cover" />
      </div>
      </div>


    </>
  );
};

export default Hero2;
