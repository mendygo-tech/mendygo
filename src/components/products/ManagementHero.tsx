import React, { useCallback,useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { Check } from "lucide-react";
import DemoModal from "@/components/common/DemoModal";
import Link from 'next/link';



const ManagementHero = ({ systemData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
    
  return (
    <div>
        <h1 className="text-4xl md:text-5xl text-center font-bold text-black dark:text-gray-200 mb-16">
          {systemData.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-12 items-start">
          
          {systemData.assetsWeTrack && systemData.assetsWeTrack.length > 0 && (
            <div className="w-full">
              <h3 className="font-bold text-lg mb-4 text-black dark:text-white">Assets we track</h3>
              <ul className="space-y-3">
                {systemData.assetsWeTrack.map((asset, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-lime-400/10 dark:bg-lime-400/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#28783B]" />
                    </div>
                    <span className="text-sm text-black/80 dark:text-white/80">{asset}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <DemoModal isOpen={isModalOpen} onClose={closeModal} />
          <div className="flex flex-col items-center text-center">
            <Image
              src={systemData.heroImage}
              alt={systemData.title}
              height={400}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg w-full h-full"
              priority
            />
            {systemData.description && (
                <p className="mt-8 max-w-3xl text-black/70 dark:text-white/70">
                    {systemData.description}
                </p>
            )}
             <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
                <motion.button onClick={openModal}
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold text-black cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#9FFB1E] to-[#a0f000] hover:shadow-lg hover:shadow-[#9FFB1E]/30"
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Schedule Demo
                </motion.button>
                <Link href="/contact">
                <motion.button
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 bg-transparent text-black dark:text-white border border-black/50 dark:border-white/50 hover:bg-black/5 dark:hover:bg-white/10"
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Contact Us
                </motion.button></Link>
            </div>
          </div>

         
          {systemData.benefits && systemData.benefits.length > 0 && (
            <div className="w-full">
              <h3 className="font-bold text-lg mb-4 text-black dark:text-white">Benefits</h3>
              <ul className="space-y-3">
                {systemData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-lime-400/10 dark:bg-lime-400/20 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-4  text-[#28783B]" />
                    </div>
                    <span className="text-sm text-black/80 dark:text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </div>
  )
}

export default ManagementHero