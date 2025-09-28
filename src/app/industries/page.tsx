'use client';
import Image from 'next/image';
import Link from 'next/link';
import { servicesContent } from '../../data/industries';
// NEW: Import motion for animations
import { motion } from 'framer-motion';

// ICONS: Added ArrowRight, CheckCircle2, and Orbit for UI enhancements
import {
  Briefcase,
  Building2,
  FlaskConical,
  ShoppingBag,
  Utensils,
  Pill,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const industryIcons: Record<string, React.ReactNode> = {
  'pulp-fiber': <Briefcase className="w-6 h-6" />,
  chemicals: <FlaskConical className="w-6 h-6" />,
  'food-beverage': <Utensils className="w-6 h-6" />,
  buildings: <Building2 className="w-6 h-6" />,
  'retail-malls': <ShoppingBag className="w-6 h-6" />,
  pharmaceuticals: <Pill className="w-6 h-6" />,
};

// const products = [
//   {
//     name: 'Mendyview',
//     tagline: 'AI-Powered Industrial Access Control',
//     desc: 'Seamless access management with AI-driven image processing and compliance monitoring.',
//     icon: <Shield className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'MendySheets',
//     tagline: 'Digital Quality Inspection Platform',
//     desc: 'Digitized workflows with real-time inspection data, automated reporting, and analytics.',
//     icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'Mendergy',
//     tagline: 'Intelligent Energy Management',
//     desc: 'IIoT-powered energy monitoring, predictive analytics, and automated control.',
//     icon: <Zap className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'SmartOEE',
//     tagline: 'Equipment Effectiveness Dashboard',
//     desc: 'Live factory performance insights to improve productivity and reduce downtime.',
//     icon: <BarChart3 className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'MendygoVerse',
//     tagline: 'AR/VR/MR Industrial Platform',
//     desc: 'Immersive industrial training and remote assistance powered by AR/VR/MR.',
//     // CHANGED: Using a more appropriate icon for AR/VR
//     icon: <Orbit className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'MendyOps',
//     tagline: 'Utility Monitoring & Automation',
//     desc: 'Unified control of HVAC, pumps, and energy systems with predictive optimization.',
//     icon: <Gauge className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'MendyLive',
//     tagline: 'Digital Twin Visualization',
//     desc: 'Real-time monitoring and simulation with dynamic digital twin technology.',
//     icon: <Eye className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'Thermendy',
//     tagline: 'Smart Climate Control',
//     desc: 'AI-driven industrial climate management for energy efficiency and comfort.',
//     icon: <Thermometer className="w-8 h-8 text-primary" />,
//   },
//   {
//     name: 'MendyAI',
//     tagline: 'Industrial Intelligence Engine',
//     desc: 'Predictive analytics, automation, and decision support for smarter operations.',
//     icon: <Brain className="w-8 h-8 text-primary" />,
//   },
// ];

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
              className="text-lg  opacity-80 max-w-3xl mx-auto"
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
            {/* CHANGED: Wrapped the card in a div component for better UX */}
            <div
              className="group block rounded-2xl overflow-hidden border border-gray-200 dark:border-none shadow-lg hover:shadow-primary/20 dark:shadow-none transition-all duration-300 bg-white dark:bg-neutral-900 hover:-translate-y-1 h-full"
            >
              <div className="relative h-48  w-full overflow-hidden">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                <h2 className="absolute bottom-5 left-5 text-2xl font-semibold text-white flex items-center gap-3 drop-shadow">
                  <span className="text-primary">{industryIcons[slug]}</span>
                  {content.title}
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <p className="opacity-80 text-sm">{content.abstract}</p>
                <div className="space-y-2">
                  {content.highlights.map((point, i) => (
                    // NEW: Improved styling for highlight points
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="opacity-90">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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