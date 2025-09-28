import HeroDashboardLight from "@/assets/LargeImages/whiteHeroResized.webp";
import industry from "@/assets/telematics/industry.jpg";
import industry3 from "@/assets/telematics/evbg.jpg";
import industry2 from "@/assets/managementSystems/HVAC-management.webp";
import industry4 from "@/assets/telematics/earthmoving3.jpg";
import HeroDashboardDark from "@/assets/LargeImages/DarkHeroResized.webp";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import GlassmorphedButtons from "../common/Buttons";

const Hero2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundImages = [industry, industry3, industry2, industry4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      <div className="relative overflow-hidden select-none">
        <div className="h-120 w-full pt-45 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8 relative z-20">
          <h1 className="text-5xl z-1 bg-gradient-to-b from-gray-900  via-gray-700 to-gray-500 bg-clip-text drop-shadow-sm text-transparent dark:from-gray-100 dark:via-gray-300 dark:to-gray-500 dark:drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight   ">
            AI That Adapts
          </h1>
          <p className="lg:text-lg text-sm  lg:w-full w-3/4  pb-3 dark:text-gray-100">
            Transform your business with intelligent automation that learns,
            adapts, and scales with your needs.
          </p>

          <div>
            <GlassmorphedButtons />
          </div>
        </div>

        <div className=" z-10 pt-10 lg:p-0 flex justify-center relative">
          <div className="relative w-full h-full">
            <Image
              src={HeroDashboardLight}
              alt="Mendygo dashboard"
              height={1000}
              width={1000}
              fetchPriority="high"
              className="w-full h-full object-cover dark:hidden "
              sizes="(max-width: 768px) 100vw, 90vw"
            />

            <Image
              src={HeroDashboardDark}
              alt="Mendygo dashboard"
              height={1000}
              width={1000}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 90vw"
              className="w-full h-full object-cover hidden dark:block"
            />
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full z-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute mask-b-from-neutral-100 inset-0 w-screen h-screen `}
            >
              <Image
                src={image}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover opacity-60"
                fetchPriority="high"
              />
            </motion.div>
          ))}
        </div>

        
      </div>
    </>
  );
};

export default Hero2;
