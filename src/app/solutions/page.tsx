import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

import icondefault from "@/assets/icon.png"

// Feature icons
import equipmentMonitoring from "@/assets/icons/features/equipment monitoring.png";
import fuelConsumption from "@/assets/icons/features/Fuel Consumption insights.png";
import geofences from "@/assets/icons/features/Geofences.png";
import erpIntegration from "@/assets/icons/features/Integrate with ERP.png";
import loadManager from "@/assets/icons/features/Load Manager.png";
import mapAllVehicles from "@/assets/icons/features/map view of all Vehicles.png";
import nearRealtimeTracking from "@/assets/icons/features/Real time vechicle tracking .png";
import singleLineDiagram from "@/assets/icons/features/Single Line Diagram View.png";

// Solution icons
import bms from "@/assets/icons/solutions/Buliding Management Solution.png";
import energy from "@/assets/icons/solutions/Energy Management .png";
import water from "@/assets/icons/solutions/Water Mangment .png";
import genset from "@/assets/icons/solutions/Genset Management.png";
import hvac from "@/assets/icons/solutions/HVAC Managment.png";
import chiller from "@/assets/icons/solutions/Chiller Telemetics .png";
import compressor from "@/assets/icons/solutions/Compressor.png";
import construction from "@/assets/icons/solutions/Construction Fleet Management .png";
type Feature = { title: string; desc: string; icon: StaticImageData };
type Solution = { title: string; sub: string; icon: StaticImageData; href?: string };

const features: Feature[] = [
    {
        title: "Map view of all vehicles",
        desc: "View your vehicle's location, status, and current speed through an online map.",
        icon: mapAllVehicles,
    },
    {
        title: "Near real-time vehicle tracking",
        desc: "See near real-time GPS location and speed of vehicles. Data is updated every 60 seconds.",
        icon: nearRealtimeTracking,
    },
    {
        title: "Fuel consumption insights",
        desc: "Review the vehicles' fuel refills and consumption trends.",
        icon: fuelConsumption,
    },
    {
        title: "Geofences",
        desc: "Get alerted to activity for specific locations and times in case of perimeter breaches.",
        icon: geofences,
    },
    {
        title: "Manage fleet productivity",
        desc: "RPM measurement allows you to monitor the productive run time of your fleet.",
        icon: icondefault,
    },
    {
        title: "EV management",
        desc: "See state of charge and Distance to empty insights on the application trail.",
        icon: icondefault,
    },
    {
        title: "Forklift monitoring",
        desc: "Monitor the performance of your forklifts including track-on times and lift-on times.",
        icon: icondefault,
    },
    {
        title: "Bird's eye view of all equipment",
        desc: "Attach equipment to sites located across a large geographical area.",
        icon: icondefault,
    },
    {
        title: "Comprehensive equipment monitoring",
        desc: "Integrate sensors and capture all important parameters for end-to-end monitoring.",
        icon: equipmentMonitoring,
    },
    {
        title: "Built in Maintenance Scheduler",
        desc: "Keep maintenance schedules based on time, run hours or kms travelled.",
        icon: icondefault,
    },
    {
        title: "Eliminate manual log sheets",
        desc: "Digital auto generated log sheets to eliminate manual reporting.",
        icon: icondefault,
    },
    {
        title: "Single line diagram view",
        desc: "Gain granular access to the total energy consumption of your plant.",
        icon: singleLineDiagram,
    },
    {
        title: "Patented Shield insights",
        desc: "The patented analytics engine shows abnormalities in a prioritized manner for taking actions.",
        icon: icondefault,
    },
    {
        title: "Load manager",
        desc: "Switch loads on/off remotely for complete central control.",
        icon: loadManager,
    },
    {
        title: "Complete electrical parameter monitoring",
        desc: "The system provides an interface for comprehensively monitoring vital electrical parameters such as voltages, currents, power factors, power and energy.",
        icon: icondefault,
    },
    {
        title: "Bird's eye view of all branch operations",
        desc: "Visually identify top and bottom performing branches and outlets.",
        icon: icondefault,
    },
    {
        title: "Configurable BI",
        desc: "The customisable dashboard can be configured to display the most important KPIs for real time monitoring.",
        icon: equipmentMonitoring,
    },
    {
        title: "Integrate with ERP",
        desc: "The system is capable of fetching data from major ERP systems for a seamless approach.",
        icon: erpIntegration,
    },
];

const solutions: Solution[] = [
  {
    title: "Building Management Solution 4.0",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: bms,
    href: "/solutions/management-systems",
  },
  {
    title: "Energy Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: energy,
    href: "/solutions/management-systems",
  },
  {
    title: "Water Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: water,
    href: "/solutions/management-systems",
  },
  {
    title: "Genset Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: genset,
    href: "/solutions/telematics",
  },
  {
    title: "HVAC Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: hvac,
    href: "/solutions/management-systems",
  },
  {
    title: "Chiller Telematics",
    sub: "For Chiller OEMs",
    icon: chiller,
    href: "/solutions/telematics",
  },
  {
    title: "Compressor Telematics",
    sub: "For Compressor OEMs",
    icon: compressor,
    href: "/solutions/telematics",
  },
  {
    title: "Electric Vehicle Telematics",
    sub: "For 2W, 3W and 4W EV OEMs as well as Battery OEMs",
    icon: icondefault,
    href: "/solutions/telematics",
  },
  {
    title: "Earth Moving Equipment Telematics",
    sub: "For Earth Moving Equipment OEMs",
    icon: icondefault,
    href: "/solutions"
  },

  {
    title: "Construction Fleet Management",
    sub: "For Construction Fleet Management",
    icon: construction,
    href: "/solutions/telematics",
  },
  {
    title: "Factory Management",
    sub: "For Factory Owners and Managers",
    icon: icondefault,
  },
  {
    title: "Warehouse Management",
    sub: "For Warehouse Owners and Managers",
    icon: icondefault,
  }
];

export default function Page() {
  return (
    <main className="min-h-screen pt-30">

    
      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl py-3 font-bold tracking-tight">Solutions</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((s) => {
            const Wrapper = s.href ? Link : "div";
            return (
              <Wrapper
                key={s.title}
                href={s.href as string | undefined}
                className={`group flex items-start gap-4 rounded-xl transition hover:bg-neutral-50 dark:hover:bg-neutral-900 p-2 -m-2`}
              >
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain shrink-0"
                />
                <div>
                  <h3 className="text-md  font-semibold group-hover:text-[#abff02] transition-colors">
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Features</h1>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col">
              <Image
                src={f.icon}
                alt={f.title}
                className="w-14 h-14 object-contain"
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