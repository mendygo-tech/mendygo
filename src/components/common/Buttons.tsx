"use client";

import React, { useState, useCallback } from "react";
import { Sparkles, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DemoModal from "./DemoModal";

export default function GlassmorphedButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const openModalTwo = useCallback(() => setIsModalTwoOpen(true), []);
  const closeModalTwo = useCallback(() => setIsModalTwoOpen(false), []);

  return (
    <>
      <div className="flex lg:flex-row items-center justify-center py-5 lg:gap-5 gap-2">
        <motion.button
          onClick={openModal}
          className="
            flex items-center justify-center gap-2
            lg:w-full lg:min-w-[200px] min-w-[150px] rounded-full
            lg:px-6 py-4
            lg:text-base text-xs font-bold text-black
            cursor-pointer
            transition-colors duration-300
            bg-gradient-to-br from-[#abff01]/90 via-[#abff01]/50 to-[#abff01]/30
            dark:bg-gradient-to-br dark:from-[#abff01]/60 dark:via-[#abff01]/65 dark:to-[#abff01]/35
            border border-white/10 hover:border-white/30
          "
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          Schedule Demo
        </motion.button>

        <motion.button
          onClick={openModalTwo}
          className="
            flex items-center justify-center gap-2
            w-full lg:min-w-[200px]  min-w-[150px] rounded-full
            lg:px-6 py-4
            lg:text-base text-xs font-bold text-black
            cursor-pointer
            transition-colors duration-300
            bg-gradient-to-br from-[#abff01]/90 via-[#abff01]/50 to-[#abff01]/30
            dark:bg-gradient-to-br dark:from-[#abff01]/60 dark:via-[#abff01]/65 dark:to-[#abff01]/35
            border border-white/10 hover:border-white/30
          "
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          Know Us
        </motion.button>
      </div>

      <DemoModal isOpen={isModalOpen} onClose={closeModal} />

      <AnimatePresence>
        {isModalTwoOpen && (
          <motion.div
            className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 50 }}
              transition={{ duration: 0.3 }}
              className="dark:bg-neutral-900 bg-[#f8f9fa]/80 rounded-2xl p-6 w-full max-w-4xl dark:text-white shadow-xl border border-white/10 relative"
            >
              <button
                onClick={closeModalTwo}
                className="absolute top-4 right-4 dark:text-white  transition"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl font-semibold text-center mb-4">
                Meet the Team – Know Us
              </h2>

              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/WFVG1fe--0k?si=vvD6ZAcIu3M8Csy1"
                  title="Know Us Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
