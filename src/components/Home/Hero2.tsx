import React from "react";

import Image from "next/image";
import HeroDashboardLight from "@/assets/LargeImages/whiteHeroResized.webp";
import HeroDashboardDark from "@/assets/LargeImages/DarkHeroResized.webp";
// import { motion } from "motion/react";
import GlassmorphedButtons from "../common/Buttons";

const Hero2 = () => {
  return (
    <>
    {/* bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 */}
      <div className="h-100 w-full pt-45 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-5xl bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-100 dark:via-gray-300 dark:to-gray-500 dark:drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight   "
          
        >
          AI That Adapts.
        </h1>
        <p className="lg:text-lg text-sm  lg:w-full w-3/4  pb-3 font-thin dark:text-gray-300">
          Transform your business with intelligent automation that learns,
          adapts, and scales with your needs.
        </p>

        <div
        >
          <GlassmorphedButtons />
        </div>
      </div>

      <div className="  pt-10 lg:p-0  flex justify-center relative ">
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
    </>
  );
};

export default Hero2;
