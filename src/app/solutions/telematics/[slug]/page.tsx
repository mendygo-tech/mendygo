"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import { telematicsData } from "@/data/telematicsData";
// import chiller from "@/assets/chillerbg.jpg";
import Features from "@/components/products/Features";
import Benefits from "@/components/products/Benefits";

const TelematicsPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const telematicsSystem = telematicsData[slug];

  if (!telematicsSystem) {
    notFound();
  }

  return (
    <div className=" bg-white dark:bg-black text-black dark:text-gray-300">
      <div className=" grid grid-cols-[2fr_1fr] place-items-start place-content-center min-h-[90vh] relative">
        <div className="flex flex-col justify-center items-start gap-6 lg:pl-40 z-2">
          <h1 className="text-5xl font-bold">{telematicsSystem.title}</h1>
          <p className="mt-2 text-gray-800 dark:text-gray-200">
            Chiller | Telematics | Tor Equip
          </p>
          <p className="text-gray-800 dark:text-gray-200 w-7/8">
            Prevent chiller breakdowns through near real time proactive
            monitoring.{" "}
          </p>

          <motion.button
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold text-black cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#9FFB1E] to-[#a0f000] hover:shadow-lg hover:shadow-[#9FFB1E]/30"
            whileTap={{ scale: 0.98 }}
          >
            Schedule Demo
          </motion.button>
        </div>

        <div className="absolute inset-0 top-0 h-[80vh]">
          <Image
            src={telematicsSystem.heroImage}
            alt=""
            fill
            className="object-cover opacity-60  mask-b-from-white"
            priority
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Features systemData={telematicsSystem} heading="Key Features" />
      <Benefits/>
      </div>
    </div>
  );
};

export default TelematicsPage;
