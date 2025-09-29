'use client'
import React from 'react'
import { useParams,notFound  } from 'next/navigation';
import ControllerHero from '@/components/products/ControllerHero'
import { sensorsMetersData } from '@/data/SensorsMetersData';
import Features from '@/components/products/Features';
import Link from 'next/link';


 

const Sensorspage = () => {
    const params = useParams();
const slug = params.slug as string;
const systemData = sensorsMetersData[slug];

 if (!systemData) {
    notFound();
  }
  return (
    <div className='relative overflow-hidden min-h-screen pt-40 bg-[#f8f9fa] dark:bg-black dark:text-white text-black pb-20'>
      <div className="max-w-7xl mx-auto">
      <ControllerHero systemData={systemData} />
      <Features systemData={systemData} heading="Key Features" />

      <section className="bg-gradient-to-br from-[#9FFB1E]/30 via-[#9FFB1E]/10 to-transparent max-w-5xl mx-auto rounded-xl dark:text-slate-100 py-16 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold dark:text-gray-300">Experience robust and reliable industrial monitoring with {systemData.title}.</h3>
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

export default Sensorspage