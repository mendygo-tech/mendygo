'use client';
import Image from 'next/image';
import Link from 'next/link';
import { servicesContent } from '../../data/industries';
import { motion } from 'framer-motion';

// Keep only the icons used in the UI
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// NEW: Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function IndustriesAndSolutions() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] px-15 pb-15 dark:bg-black text-black dark:text-gray-300">
      {/* Solutions Section */}
      

      {/* Industries Section */}
      <section className="py-20 pt-30 px-14">
        <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg"
            >
              Industries We Serve
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg  opacity-80 max-w-3xl mx-auto text-black dark:text-white/80 "
            >
              Mendygo empowers diverse industries with Industry 4.0 solutions to enhance efficiency and innovation.
            </motion.p>
        </div>
      </section>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(servicesContent).map(([slug, content]) => (
          <motion.div key={slug} variants={itemVariants}>
            {/* FIXED: Proper card layout with compact centered icon */}
            <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-neutral-900">
              {/* Header: icon + title */}
              <div className="px-6 pt-8 flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5">
                  <Image
                    src={content.image}
                    alt={`${content.title} icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
                  {content.title}
                </h2>
              </div>

              {/* Body: abstract + bullet highlights */}
              <div className="p-6 space-y-4">
                <p className="opacity-80 text-sm text-black dark:text-white/80 ">{content.abstract}</p>
                <ul className="space-y-2">
                  {content.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span className="opacity-90 text-black dark:text-white/80 ">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>

      {/* NEW: Enhanced CTA Section */}
      <section className="bg-gradient-to-br dark:from-[#abff01]/40 from-[#abff01]/35 via-[#abff01]/0 to-[#abff01]/20 dark:border-white/30 dark:text-white rounded-lg lg:max-w-7xl mx-auto md:max-w-5xl sm:max-w-3xl">
        <div className="max-w-4xl mx-auto text-center py-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg opacity-80 mb-8 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how Mendygo&apos;s solutions can drive efficiency, safety, and growth for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold shadow-md hover:scale-105 transition-transform duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}