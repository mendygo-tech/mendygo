import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Ecosystem from '@/components/Home/Ecosystem';

// Feature icons
import equipmentMonitoring from "@/assets/icons/features/equipment monitoring.png";
import erpIntegration from "@/assets/icons/features/Integrate with ERP.png";
import loadManager from "@/assets/icons/features/Load Manager.png";
import singleLineDiagram from "@/assets/icons/features/Single Line Diagram View.png";
import BuiltinMaintanence from "@/assets/icons/features/Configurability.png";
import ManualLog from "@/assets/icons/features/warranty.png";
import PatentedPerformace from "@/assets/icons/features/Live performance.png";
// Solution icons
import bms from "@/assets/icons/solutions/Buliding Management Solution.png";
import energy from "@/assets/icons/solutions/Energy Management .png";
import water from "@/assets/icons/solutions/Water Mangment .png";
import genset from "@/assets/icons/solutions/Genset Management.png";
import hvac from "@/assets/icons/solutions/HVAC Managment.png";
import construction from "@/assets/icons/solutions/Construction Fleet Management .png";
import factorymanagement from "@/assets/icons/solutions/factoryManagement.png"
import WareHouse from "@/assets/icons/solutions/warehousemangement.png"
type Feature = { title: string; desc: string; icon: StaticImageData };
type Solution = { title: string; sub: string; icon: StaticImageData; href?: string };

const features: Feature[] = [
  { title: "Single line diagram view", desc: "Gain granular access to the total energy consumption of your plant.", icon: singleLineDiagram },
  { title: "Load manager", desc: "Switch loads on/off remotely for complete central control.", icon: loadManager },
  { title: "Configurable BI", desc: "Customisable dashboard to display key KPIs for real time monitoring.", icon: equipmentMonitoring },
  { title: "Integrate with ERP", desc: "Fetch data from major ERP systems for seamless integration.", icon: erpIntegration },
  { title: "Patented Shield insights", desc: "Analytics engine highlights abnormalities in priority order.", icon: PatentedPerformace },
  { title: "Built in Maintenance Scheduler", desc: "Schedule based on time, run hours, or kms travelled.", icon: BuiltinMaintanence },
  { title: "Eliminate manual log sheets", desc: "Auto-generated log sheets replace manual reporting.", icon: ManualLog },
];

const solutions: Solution[] = [
  {
    title: "Building Management Solution 4.0",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: bms,
    href: "/solutions/management-systems/building-management",
  },
  {
    title: "Energy Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: energy,
    href: "/solutions/management-systems/energy-management",
  },
  {
    title: "Water Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: water,
    href: "/solutions/management-systems/water-management",
  },
  {
    title: "Genset Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: genset,
    href: "/solutions/management-systems/genset-management",
  },
  {
    title: "HVAC Management",
    sub: "For Manufacturing facilities, Hospitals, Malls, Hotels & Educational Institutions",
    icon: hvac,
    href: "/solutions/management-systems/hvac-management",
  },
  {
    title: "Construction Fleet Management",
    sub: "For Construction Fleet Management",
    icon: construction,
    href: "/solutions/management-systems/construction-fleet-management",
  },
  {
    title: "Factory Management",
    sub: "For Factory Owners and Managers",
    icon: factorymanagement,
    href: "/solutions/management-systems/factory-management",
  },
  {
    title: "Warehouse Management",
    sub: "For Warehouse Owners and Managers",
    icon: WareHouse,
    href: "/solutions/management-systems/warehouse-management",
  }
];

export default function Page() {
  return (
    <main className="min-h-screen pt-30 dark:bg-black">

      <Ecosystem />
    
      {/* Solutions */}
      <section className="mx-auto   px-4 sm:px-6 lg:px-40 py-20 bg-[#F9FAFB] dark:bg-black">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg pb-10'>Mendygo Management Systems </h1>
          
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
      
      {/* Features */}
      <section className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 py-10 pb-18">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg py-10'>Features</h1>
          
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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