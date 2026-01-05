import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Ecosystem from "@/components/Home/Ecosystem";

// Icons
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
import EarthMoving from "@/assets/icons/solutions/earthMovingManagement.png";

type Feature = { title: string; desc: string; icon: StaticImageData };
type Solution = { title: string; sub: string; icon: StaticImageData; href?: string };

const features: Feature[] = [
  { title: "Map view of all vehicles", desc: "View live vehicle locations, speed, and status in one unified map.", icon: mapAllVehicles },
  { title: "Near real-time tracking", desc: "Receive GPS updates every minute for accurate fleet visibility.", icon: nearRealtimeTracking },
  { title: "Fuel consumption insights", desc: "Monitor refills and analyze fuel efficiency trends.", icon: fuelConsumption },
  { title: "Geofencing alerts", desc: "Get instant alerts when vehicles enter or exit defined zones.", icon: geofences },
  { title: "Fleet productivity", desc: "Track productive runtime using RPM-based metrics.", icon: FleetManagement },
  { title: "EV management", desc: "Monitor battery health, charge level, and range.", icon: ev },
  { title: "Forklift monitoring", desc: "Analyze forklift usage and lift cycles.", icon: forklift },
  { title: "Bird’s-eye equipment view", desc: "Manage assets across large geographical sites.", icon: BirdEye },
  { title: "Equipment monitoring", desc: "Integrate sensors for comprehensive equipment insights.", icon: equipmentMonitoring },
];

const solutions: Solution[] = [
  { title: "Chiller Telematics", sub: "For Chiller OEMs", icon: chiller, href: "/solutions/telematics/chiller-telematics" },
  { title: "Compressor Telematics", sub: "For Compressor OEMs", icon: compressor, href: "/solutions/telematics/compressor-telematics" },
  { title: "EV Telematics", sub: "For EV & Battery OEMs", icon: ev, href: "/solutions/telematics/ev-telematics" },
  { title: "Earth Moving Telematics", sub: "For Heavy Equipment OEMs", icon: EarthMoving, href: "/solutions/telematics/earth-moving-telematics" },
];

export default function Page() {
  return (
    <main className="min-h-screen dark:bg-black">

      {/* HERO / ECOSYSTEM */}
      <Ecosystem />

      {/* SOLUTIONS */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">
              Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Mendygo Telematics
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Purpose-built telematics solutions designed for OEMs and fleet operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((s) => (
              <Link
                key={s.title}
                href={s.href || "#"}
                className="group rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-6 hover:shadow-lg transition"
              >
                <Image src={s.icon} alt={s.title} width={70} height={70} />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {s.sub}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
     {/* FEATURES */}
<section className="py-28 bg-white dark:bg-black">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-20">
      <p className="text-green-600 dark:text-green-400 text-sm font-medium">
        Platform Capabilities
      </p>
      <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Everything You Need to Operate Smarter
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A unified telematics platform designed to give you full visibility,
        control, and intelligence across your fleet and equipment.
      </p>
    </div>

    {/* Core Features */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {features.slice(0, 6).map((f) => (
        <div
          key={f.title}
          className="group flex gap-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-8 transition hover:shadow-lg"
        >
          <Image
            src={f.icon}
            alt={f.title}
            width={70}
            height={70}
            className="shrink-0"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
              {f.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Advanced Features */}
    <div className="mt-28">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Advanced Monitoring
        </p>
        <h3 className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
          Built for Scale & Complexity
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.slice(6).map((f) => (
          <div
            key={f.title}
            className="rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-6 hover:shadow-md transition"
          >
            <Image
              src={f.icon}
              alt={f.title}
              width={70}
              height={70}
            />
            <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">
              {f.title}
            </h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

    </main>
  );
}
