"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from '../../assets/logo.png'
import mendygoLight from '../../assets/mendygo white green wordmark.png'
import mendygoDark from '../../assets/mendygo black green wordmark.png'

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          <Image src={logo} alt={"mendygo"} height={30} width={30} /> <Image src={mendygoLight} alt={"mendygo"} className="dark:block hidden" /> <Image src={mendygoDark} alt={"mendygo"} className="dark:hidden block" /> Operational Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl mb-4">
          "How do we do it?" - In a world filled with challenges, solutions can be simple or complex, and we consistently choose the path of simplicity.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-3xl">
          Mendygo follows a <strong>6-step cycle</strong> to deliver intelligent automation solutions that are efficient, scalable, and tailored to your needs.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-neutral-200 dark:border-neutral-700">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-neutral-300 dark:border-neutral-600 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-600 dark:text-neutral-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-600 dark:text-neutral-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};