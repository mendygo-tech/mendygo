import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Ecosystem from "@/components/Home/Ecosystem";

/* Feature icons */
import equipmentMonitoring from "@/assets/icons/features/equipment monitoring.png";
import erpIntegration from "@/assets/icons/features/Integrate with ERP.png";
import loadManager from "@/assets/icons/features/Load Manager.png";
import singleLineDiagram from "@/assets/icons/features/Single Line Diagram View.png";
import BuiltinMaintanence from "@/assets/icons/features/Configurability.png";
import ManualLog from "@/assets/icons/features/warranty.png";
import PatentedPerformace from "@/assets/icons/features/Live performance.png";

/* Solution icons */
import bms from "@/assets/icons/solutions/Buliding Management Solution.png";
import energy from "@/assets/icons/solutions/Energy Management .png";
import water from "@/assets/icons/solutions/Water Mangment .png";
import genset from "@/assets/icons/solutions/Genset Management.png";
import hvac from "@/assets/icons/solutions/HVAC Managment.png";
import construction from "@/assets/icons/solutions/Construction Fleet Management .png";
import factorymanagement from "@/assets/icons/solutions/factoryManagement.png";
import WareHouse from "@/assets/icons/solutions/warehousemangement.png";

type Feature = { title: string; desc: string; icon: StaticImageData };
type Solution = { title: string; sub: string; icon: StaticImageData; href?: string };

const features: Feature[] = [
  { title: "Single line diagram view", desc: "Granular visibility into total plant energy consumption.", icon: singleLineDiagram },
  { title: "Load manager", desc: "Remotely control electrical loads from a central system.", icon: loadManager },
  { title: "Configurable BI dashboards", desc: "Custom dashboards to monitor KPIs in real time.", icon: equipmentMonitoring },
  { title: "ERP integration", desc: "Seamless integration with leading ERP platforms.", icon: erpIntegration },
  { title: "Patented Shield insights", desc: "AI-powered anomaly detection ranked by priority.", icon: PatentedPerformace },
  { title: "Built-in maintenance scheduler", desc: "Automated scheduling based on time or usage.", icon: BuiltinMaintanence },
  { title: "Eliminate manual logs", desc: "Auto-generated logs replace manual reporting.", icon: ManualLog },
];

const solutions: Solution[] = [
  { title: "Building Management System 4.0", sub: "Manufacturing, Hospitals, Malls, Hotels, Institutions", icon: bms, href: "/solutions/management-systems/building-management" },
  { title: "Energy Management", sub: "Monitor, optimize & reduce energy usage", icon: energy, href: "/solutions/management-systems/energy-management" },
  { title: "Water Management", sub: "Track and optimize water consumption", icon: water, href: "/solutions/management-systems/water-management" },
  { title: "Genset Management", sub: "Real-time generator monitoring & analytics", icon: genset, href: "/solutions/management-systems/genset-management" },
  { title: "HVAC Management", sub: "Optimize climate control systems", icon: hvac, href: "/solutions/management-systems/hvac-management" },
  { title: "Construction Fleet Management", sub: "Track and manage construction fleets", icon: construction, href: "/solutions/management-systems/construction-fleet-management" },
  { title: "Factory Management", sub: "Centralized factory operations monitoring", icon: factorymanagement, href: "/solutions/management-systems/factory-management" },
  { title: "Warehouse Management", sub: "Operational visibility for warehouses", icon: WareHouse, href: "/solutions/management-systems/warehouse-management" },
];

export default function Page() {
  return (
    <main className="min-h-screen dark:bg-black">

      {/* HERO */}
      <Ecosystem />

      {/* SOLUTIONS */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-green-600 dark:text-green-400">
              Solutions
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
              Mendygo Management Systems
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Intelligent management platforms designed to improve efficiency,
              visibility, and control across facilities and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <Link
                key={s.title}
                href={s.href || "#"}
                className="rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-6 hover:shadow-lg transition"
              >
                <Image src={s.icon} alt={s.title} width={48} height={48} />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {s.sub}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-green-600 dark:text-green-400">
              Platform Capabilities
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
              Key Features
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced tools built to give you actionable insights and complete
              operational control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-6"
              >
                <Image src={f.icon} alt={f.title} width={40} height={40} />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
