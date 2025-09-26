'use client'
import React from 'react'
import ControllerHero from '@/components/products/ControllerHero'
import { controllersData } from '@/data/controllersData'
// import HardwareOverview from '@/components/products/HardwareOverview';
import Features from '@/components/products/Features';
import Link from 'next/link';
import Image from 'next/image';

const systemData = controllersData["controller"];

const page = () => {
  return (
    <div className='relative overflow-hidden min-h-screen pt-40 bg-[#f8f9fa] dark:bg-black dark:text-white text-black pb-20'>
      <div className="max-w-7xl mx-auto">
      <ControllerHero systemData={systemData} />
      {/* <HardwareOverview systemData={systemData.hardwareSpecs} /> */}
      <Features systemData={systemData} heading="Key Features" />

      

        {systemData.ecosystemImage && (
            <div className="py-24">
                <h3 className="text-3xl text-center font-bold relative">Architecture</h3>
                <div className="w-full lg:w-3/4 mx-auto mt-12">
                <Image src={systemData.ecosystemImage} alt="Mendygo Ecosystem Diagram" className="rounded-xl w-full h-auto dark:hidden" />
                <Image src={systemData.darkEcosystemImage} alt="Mendygo Ecosystem Diagram" className="rounded-xl w-full h-auto hidden dark:block" />
                </div>
            </div>
        )}


        <section className="bg-gradient-to-br from-[#9FFB1E]/30 via-[#9FFB1E]/10 to-transparent max-w-5xl mx-auto rounded-xl dark:text-slate-100 py-16 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold dark:text-gray-300">Experience robust and reliable industrial monitoring with Mendygo controller.</h3>
            <p className="mt-4 dark:text-slate-300 text-sm md:text-base">Speak with our experts today</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 rounded-full bg-[#9FFB1E] text-black font-semibold shadow hover:shadow-md transition text-sm md:text-base">Contact Us</Link>
              {/* <Link href="/aboutus" className="px-8 py-3 rounded-full dark:text-gray-300 border border-slate-400 hover:bg-slate-700/40 transition text-sm font-medium">Discover More</Link> */}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default page