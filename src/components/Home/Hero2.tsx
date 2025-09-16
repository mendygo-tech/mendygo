import React from "react";

import Image from "next/image";
import HeroDashboardLight from "@/assets/whiteHero.png";
import HeroDashboardDark from "@/assets/DarkHero.png";
import { motion } from "motion/react";
import GlassmorphedButtons from "../common/Buttons";

const Hero2 = () => {
  return (
    <>
    {/* bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 */}
      <div className="h-100 w-full pt-45 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight   "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          AI that adapts.
        </motion.h1>
        <motion.p  initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }} className="text-lg lg:w-full w-3/4  pb-3 font-thin dark:text-gray-300">
          Transform your business with intelligent automation that learns,
          adapts, and scales with your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlassmorphedButtons />
        </motion.div>
      </div>

      <div className="px-4 sm:px-6 pb-0 flex justify-center relative ">
        <div className="relative w-full h-full">
          <Image
            src={HeroDashboardLight}
            alt="Mendygo dashboard"
            fetchPriority="high"
            className="w-full h-full object-cover dark:hidden "
            loading="lazy"
            quality={100}
            sizes="(max-width: 768px) 100vw, 90vw"
          />

          <Image
            src={HeroDashboardDark}
            alt="Mendygo dashboard"
            quality={100}
            height={1000}
            width={1000}
            fetchPriority="high"
            // sizes="(max-width: 768px) 100vw, 90vw"
            className="w-full h-full object-cover hidden dark:block"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Hero2;
