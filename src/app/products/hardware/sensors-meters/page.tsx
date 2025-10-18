'use client'
import React from 'react'
import HardwareHero from '@/components/products/HardwareHero'
import { sensorsMetersData } from '@/data/SensorsMetersData'
import Image from 'next/image';
import Link from 'next/link';

const systemData = sensorsMetersData["sensor"];

const page = () => {
  return (
    <div className='relative overflow-hidden min-h-screen pt-40 bg-[#f8f9fa] dark:bg-black dark:text-white text-black pb-20'>
      <div className="max-w-7xl mx-auto">
      <HardwareHero systemData={systemData} />
      <p className="max-w-4xl text-center mt-16 text-sm text-red-400 dark:text-red-300 px-4 mx-auto ">
          Disclaimer: The actual hardware design may differ from the images
          shown and can vary based on specific requirements.
        </p>
      <div>
      <div className="pt-24  bordr-t border-black/10 dark:border-white/10 lg:px-30 px-8">
        <h2 className="text-3xl text-center font-bold mb-4 relative">
          Available Sensors & Meters
        </h2>
        <p className="text-center text-black/60 dark:text-white/60 max-w-2xl mx-auto mb-16">
          Our modular approach allows you to choose the specific solutions you
          need, creating a customized system that fits your unique requirements.
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center  gap-16`}>
          {systemData.modules.map((module) => (
            <Link key={module.title} href={`/products/hardware/sensors-meters/${module.href}`}>
              <div
                className="flex flex-col  dark:bg-black rounded-xl border-2 pb-10 shadow-lg border-neutral-200 dark:border-neutral-800  dark:hover:border-neutral-700  transition-all duration-300"
              >
              {module.image && (
                <div className="relative h-40  ">
                  <div
    className="absolute inset-0 rounded-xl z-0 blur-2xl scale-110"
    style={{
      background: "radial-gradient(circle, rgba(159,251,30,0.1) 0%, rgba(159,251,30,0.1) 50%, transparent 100%)",
    }}
  ></div>
                  <Image
                    src={module.image}
                    alt={module.title}
                    layout="fill"
                    className="object-contain border-b-2 rounded-xl object-center"
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
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default page