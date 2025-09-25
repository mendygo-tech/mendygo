import React from "react";
import { motion } from "framer-motion";
import { useCallback,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DemoModal from "@/components/common/DemoModal";

// import { Check } from "lucide-react";

const HardwareHero = ({ systemData }) => {
const [isModalOpen, setIsModalOpen] = useState(false);

  
    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] h-120  gap-12 items-center px-20">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="">
            <h2>Gateway,Mendygo Products</h2>
          <h1 className="text-3xl font-bold">{systemData.title}</h1>
          </div>
          {systemData.description && (
            <p className="mt-8 max-w-2xl w-3/4 text-black/70 dark:text-white/70">
              {systemData.description}
            </p>
          )}
                  <DemoModal isOpen={isModalOpen} onClose={closeModal} />

          <div className="mt-8 flex flex-col sm:flex-row gap-4  w-full max-w-md">
            <motion.button onClick={openModal}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold text-black cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#9FFB1E] to-[#a0f000] hover:shadow-lg hover:shadow-[#9FFB1E]/30"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
            </motion.button>
            <Link href="/contact" >
            <motion.button
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 bg-transparent text-black dark:text-white border border-black/50 dark:border-white/50 hover:bg-black/5 dark:hover:bg-white/10"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button></Link>
          </div>
        </div>

        <div className="flex flex-col items-center text-center -mt-4">
          <Image
            src={systemData.heroGateway}
            alt={systemData.title}
            className="rounded-xl border object-cover border-neutral-200 dark:border-neutral-800 shadow-lg w-full "
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HardwareHero;
