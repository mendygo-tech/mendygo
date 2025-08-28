import React from 'react';
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-black px-4 text-center space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Badge
                    className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4 hover:shadow-lg hover:shadow-[#abff02]/30 transition
"
                >
                    <span className="text-sm font-semibold">FAQ&apos;s</span>
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-900 dark:text-white text-3xl lg:text-5xl font-bold max-w-2xl font-geist"
            >
                We&apos;ve Got the Answers You&apos;re Looking For
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-gray-600 dark:text-white/60 max-w-xl"
            >
                Quick answers to your AI automation questions.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative w-full max-w-2xl space-y-3 p-6 rounded-xl z-10 overflow-hidden bg-gray-100/20 dark:bg-black/20 backdrop-blur-md border border-gray-200/20 dark:border-white/10 mt-25"
            >
                <motion.div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-transparent opacity-20 blur-3xl animate-pulse"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.2, 0.15],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />


                <Accordion type="single" collapsible className="space-y-2 relative z-10">
                    <AccordionItem value="item-1" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            How can AI automation help my business?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            AI automation eliminates repetitive tasks, improves efficiency, and reduces errors.
                            It allows your team to focus on high-value work while increasing productivity and
                            lowering operational costs.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            Is AI automation difficult to integrate?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            Most modern AI automation tools offer plug-and-play solutions with minimal integration effort.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            What industries can benefit from AI automation?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            Virtually all industries — including healthcare, finance, retail, and manufacturing — can benefit.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </motion.div>

        </div>
    );
};

export default Faq;