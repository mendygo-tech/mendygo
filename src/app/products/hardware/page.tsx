"use client";
import React from "react";
import { gatewayData } from '@/data/gatewayData'
import Features from '@/components/products/Features';
// import HardwareHero from '@/components/products/HardwareHero'
const hardwareData = gatewayData["gateway"];

import { sensorsMetersData } from "@/data/SensorsMetersData";
import Image from "next/image";
import Link from "next/link";
import controller from "@/assets/hardware/Controller.png";
import gateway from "@/assets/hardware/Gateway.png";

const systemData = sensorsMetersData["sensor"];

const page = () => {
  return (
    <div className="relative overflow-hidden min-h-screen pt-30 bg-[#f8f9fa] dark:bg-black dark:text-white text-black pb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg py-2">
        Mendygo Hardware
      </h1>
      <p className="lg:text-md lg:w-1/3 w-2/3 mx-auto dark:text-gray-300 pb-10 text-center">
        An overview of Mendygo&apos;s hardware solutions, including sensors,
        meters, and controllers
      </p>
      <div className="  dark:border-white/10 lg:px-40 px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center  gap-16`}
        >
          {systemData.modules.map((module) => (
            <Link
              key={module.title}
              href={`/products/hardware/sensors-meters/${module.href}`}
            >
              <div className="flex flex-col  dark:bg-black rounded-xl border-1 pb-10 shadow-lg border-neutral-200 dark:border-neutral-800  dark:hover:border-neutral-700  transition-all duration-300">
                {module.image && (
                  <div className="relative h-40  ">
                    <div
                      className="absolute inset-0 rounded-xl z-0 blur-2xl scale-110"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(159,251,30,0.1) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
                      }}
                    ></div>
                    <Image
                      src={module.image}
                      alt={module.title}
                      layout="fill"
                      className="object-contain border-b-1 rounded-xl object-center"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                    {module.title}
                  </h3>
                  <div className="space-y-2 flex-grow">
                    {module.desc.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <p className="text-sm text-black/70 dark:text-white/70">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <Link href={`/products/hardware/controllers`}>
            <div className="flex flex-col  dark:bg-black rounded-xl border-1 pb-10 shadow-lg border-neutral-200 dark:border-neutral-800  dark:hover:border-neutral-700  transition-all duration-300">
              <div className="relative h-40  ">
                <div
                  className="absolute inset-0 rounded-xl z-0 blur-2xl scale-110"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(159,251,30,0.1) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
                  }}
                ></div>
                <Image
                  src={controller}
                  alt="mendygo controller"
                  layout="fill"
                  className="object-contain border-b-1 rounded-xl object-center p-6"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                  Mendygo Controller
                </h3>
                <div className="space-y-2 flex-grow">
                  <div className="flex items-start gap-3">
                    <p className="text-sm text-black/70 dark:text-white/70">
                      An advanced IoT-enabled industrial solution designed for
                      real-time monitoring across various sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/products/hardware/gateway`}>
            <div className="flex flex-col  dark:bg-black rounded-xl border-1 pb-10 shadow-lg border-neutral-200 dark:border-neutral-800  dark:hover:border-neutral-700  transition-all duration-300">
              <div className="relative h-40  ">
                <div
                  className="absolute inset-0 rounded-xl z-0 blur-2xl scale-110"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(159,251,30,0.1) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
                  }}
                ></div>
                <Image
                  src={gateway}
                  alt="mendygo gateway"
                  layout="fill"
                  className="object-contain border-b-1 rounded-xl object-center "
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                  Mendygo Gateway
                </h3>
                <div className="space-y-2 flex-grow">
                  <div className="flex items-start gap-3">
                    <p className="text-sm text-black/70 dark:text-white/70">
                      An Industrial IoT gateway offering real-time monitoring,
                      flexible connectivity, and robust data management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>


  <div className=" lg:px-20 px-10">
      <Features systemData={hardwareData} heading="Key Features" />

  </div>
    </div>
  );
};

export default page;
