import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Ecosystem from '@/components/Home/Ecosystem';

// Feature icons
import equipmentMonitoring from "@/assets/icons/features/equipment monitoring.png";
import fuelConsumption from "@/assets/icons/features/Fuel Consumption insights.png";
import geofences from "@/assets/icons/features/Geofences.png";
import mapAllVehicles from "@/assets/icons/features/map view of all Vehicles.png";
import nearRealtimeTracking from "@/assets/icons/features/Real time vechicle tracking .png";
import BirdEye from "@/assets/icons/features/BirdEye.png";
import forklift from "@/assets/icons/features/forklift.png";
import FleetManagement from "@/assets/icons/features/fleetManagement.png";

import ev from "@/assets/icons/features/ev.png";
import chiller from "@/assets/icons/solutions/Chiller Telemetics .png";
import compressor from "@/assets/icons/solutions/Compressor.png";
import EarthMoving from "@/assets/icons/solutions/earthMovingManagement.png"
type Feature = { title: string; desc: string; icon: StaticImageData };
type Solution = { title: string; sub: string; icon: StaticImageData; href?: string };

const features: Feature[] = [
  { title: "Map view of all vehicles", desc: "View vehicle location, status, and speed on an online map.", icon: mapAllVehicles },
  { title: "Near real-time vehicle tracking", desc: "Get GPS location and speed updated every 60 seconds.", icon: nearRealtimeTracking },
  { title: "Fuel consumption insights", desc: "Track refills and monitor consumption trends.", icon: fuelConsumption },
  { title: "Geofences", desc: "Alerts on perimeter breaches at specific locations and times.", icon: geofences },
  { title: "Manage fleet productivity", desc: "Monitor productive run time using RPM measurement.", icon: FleetManagement },
  { title: "EV management", desc: "Track state of charge and distance-to-empty for EVs.", icon: ev },
  { title: "Forklift monitoring", desc: "Monitor forklift performance, track-on and lift-on times.", icon: forklift },
  { title: "Bird's eye view of all equipment", desc: "Attach equipment to sites across large geographical areas.", icon: BirdEye },
  { title: "Comprehensive equipment monitoring", desc: "Integrate sensors for end-to-end equipment monitoring.", icon: equipmentMonitoring },
];

const solutions: Solution[] = [
  {
    title: "Chiller Telematics",
    sub: "For Chiller OEMs",
    icon: chiller,
    href: "/solutions/telematics/chiller-telematics",
  },
  {
    title: "Compressor Telematics",
    sub: "For Compressor OEMs",
    icon: compressor,
    href: "/solutions/telematics/compressor-telematics",
  },
  {
    title: "Electric Vehicle Telematics",
    sub: "For 2W, 3W and 4W EV OEMs as well as Battery OEMs",
    icon: ev,
    href: "/solutions/telematics/ev-telematics",
  },
  {
    title: "Earth Moving Equipment Telematics",
    sub: "For Earth Moving Equipment OEMs",
    icon: EarthMoving,
    href: "/solutions/telematics/earth-moving-telematics",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen pt-30 dark:bg-black">

      <Ecosystem />
    
      {/* Solutions */}
      <section className="mx-auto  px-4 sm:px-6 lg:px-40 py-20  bg-[#F9FAFB] dark:bg-black">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg pb-10'>Mendygo Telematics</h1>
          
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((s) => {
            const Wrapper = s.href ? Link : "div";
            return (
              <Wrapper
                key={s.title}
                href={s.href as string | undefined}
                className={`group flex items-start gap-4 rounded-xl transition hover:bg-neutral-200 dark:hover:bg-neutral-900 p-3`}
              >
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain shrink-0"
                />
                <div>
                  <h3 className="text-md  font-semibold group-hover: transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{s.sub}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>

       {/* Divider */}
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
      </div> */}

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg py-10'>Features</h1>
          
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col">
              <Image
                src={f.icon}
                alt={f.title}
                className="w-14 h-14 object-cover  rounded"
                width={56}
                height={56}
                priority
              />
              <h3 className="mt-4 text-lg font-semibold leading-snug">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

     

    </main>
  );
}