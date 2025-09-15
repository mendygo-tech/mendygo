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
        <div className="flex flex-col items-center justify-center  from-[#f8f9fa] via-white to-[#f8f9fa] dark:from-black dark:via-black dark:to-black px-4 py-6 text-center space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Badge
                    className="backdrop-blur-md bg-[#abff02]/30 border py-1 px-3 border-white/20 text-black dark:text-white mx-autoo mb-4 
"
                >
                    <span className="text-sm font-semibold">FAQ&apos;s</span>
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg max-w-3xl font-geist"
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
                className="w-full max-w-2xl space-y-3 p-6 rounded-xl z-10 overflow-hidden border bg-gradient-to-br from-[#abff01]/20  via-[#abff01]/5 to-transparent border-gray-200/20 border-none dark:border-white/10 mt-25"
            >
                


                <Accordion type="single" collapsible className="space-y-2 relative z-10 ">
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