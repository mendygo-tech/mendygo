import React from "react";

import Image from "next/image";
// import HeroDashboardLight from "whiteHero.png";
// import HeroDashboardDark from "DarkHero-min.png";
// import { motion } from "motion/react";
import GlassmorphedButtons from "../common/Buttons";

const Hero2 = () => {
  return (
    <>
    {/* bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 */}
      <div className="h-100 w-full pt-45 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-5xl bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight   "
          
        >
          AI that adapts.
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
            src="/whiteHero-min.png"
            alt="Mendygo dashboard"
            height={1000}
            width={1000}
            placeholder="blur"
            blurDataURL="/whiteHero-min.avif"
            priority
            className="w-full h-full object-cover dark:hidden "
            sizes="(max-width: 768px) 100vw, 90vw"
          />

          <Image
            src="/DarkHero-min.png"
            alt="Mendygo dashboard"
            height={1000}
            width={1000}
            priority
            placeholder="blur"
            blurDataURL="/DarkHero-min.avif"
            sizes="(max-width: 768px) 100vw, 90vw"
            className="w-full h-full object-cover hidden dark:block"

/>
        </div>
      </div>
    </>
  );
};

export default Hero2;
