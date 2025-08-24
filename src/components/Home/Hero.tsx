"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import mendygoBlack from "../../assets/mendygo black green wordmark.png";
import mendygo from "../../assets/mendygo white green wordmark.png";
import { WavyBackground } from "../ui/wavy-background";
import GlassmorphedButtons from "../common/Buttons";

export default function Hero() {
    const ref = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        let animationFrameId: number;
        const handleMouseMove = (e: MouseEvent) => {
            // Throttle mouse move events using requestAnimationFrame
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            animationFrameId = requestAnimationFrame(() => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 100,
                    y: (e.clientY / window.innerHeight) * 100,
                });
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    const fadeUp = (delay = 0.1) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay },
    });

    return (
        <WavyBackground containerClassName="relative">
            <section
                ref={ref}
                className="relative flex flex-col min-h-[100dvh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
            >
                <motion.div
                    className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(171,255,2,0.3), transparent 50%)`,
                    }}
                />

                <div className="relative z-20 w-full max-w-7xl flex flex-col items-center justify-center text-center mx-auto px-4">

                    <motion.div {...fadeUp(0.1)} className="mb-6 sm:mb-8 mt-4">
                        <motion.span
                            className="inline-flex items-center overflow-hidden rounded-full border border-gray-200/50 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-[#abff02]/10 transition-all duration-300 group cursor-pointer dark:border-white/20 dark:bg-black/60 dark:hover:shadow-[#abff02]/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="rounded-full bg-gradient-to-r from-[#abff02] to-[#9ae600] px-3 py-1.5 text-xs sm:text-sm font-bold text-black shadow-lg">
                                New
                            </span>
                            <span className="px-3 sm:px-4 py-1.5 text-sm sm:text-base font-medium text-gray-800 group-hover:text-[#7cb502] transition-colors duration-300 dark:text-white/90 dark:group-hover:text-[#abff02]">
                                AI based monitoring and alarm system
                            </span>
                            <ArrowRight className="w-4 h-4 mr-3 text-gray-600 group-hover:text-[#7cb502] group-hover:translate-x-1 transition-all duration-300 dark:text-white/70 dark:group-hover:text-[#abff02]" />
                        </motion.span>
                    </motion.div>

                    <motion.h1 
                        className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent drop-shadow-sm dark:from-white dark:via-white dark:to-gray-200 dark:drop-shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        AI that adapts.
                    </motion.h1>

                    <div className="mt-4 xl:mt-10" style={{ willChange: 'transform' }}>
                        {/* Move LCP text outside motion/animation for instant render */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black/80 dark:text-gray-200 flex flex-wrap justify-center items-center gap-4">
                            <span style={{fontWeight:600, fontSize:'inherit', letterSpacing:'0.01em'}}>{/* Inline critical styles */}
                                Join the future with
                            </span>
                            <span className="flex items-center gap-2">
                                <Image
                                    src={mendygoBlack}
                                    alt="Mendygo Logo"
                                    className="object-contain lg:h-20 h-18 dark:hidden"
                                    priority
                                    fetchPriority="high"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                    style={{ width: 'auto',paddingTop: '20px' }}
                                />
                                <Image
                                    src={mendygo}
                                    alt="Mendygo Logo"
                                    className="object-contain lg:h-14 h-16 hidden dark:block"
                                    priority
                                    fetchPriority="high"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                    style={{ width: 'auto',paddingTop: '20px' }}
                                />
                            </span>
                        </h2>
                    </div>

                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-4 sm:mt-6 mx-auto max-w-[90%] text-base sm:text-lg md:text-xl text-black/80 leading-relaxed dark:text-gray-300 font-semibold mb-6 xl:mb-8"
                    >
                        Transform your business with intelligent automation that learns,
                        adapts, and scales with your needs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <GlassmorphedButtons />
                    </motion.div>

                    <motion.div
                        {...fadeUp(1.8)}
                        className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-600 dark:text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>Trusted by 500+ businesses</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full dark:bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#abff02] rounded-full animate-pulse" />
                            <span>99.9% uptime guarantee</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </WavyBackground>
    );
}