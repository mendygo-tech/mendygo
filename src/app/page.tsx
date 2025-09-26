"use client";
import { lazy, Suspense } from "react";
import Hero2 from "@/components/Home/Hero2";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
// import { useTheme } from "next-themes";
import CountdownCard from "@/components/Home/CountdownCard";
import CompanySlideshow from "@/components/Home/SlideShow";
import BackedUpSlider from "@/components/Home/SlideShowBackedUp";
import Products from "@/components/Home/Productsgrid";
import Ecosystem from "@/components/Home/Ecosystem";
const Faq = lazy(() => import("@/components/Home/Faq"));
// const Benefits = lazy(() => import("@/components/Home/Beniefits"));
const Step1 = lazy(() => import("@/components/Home/Process/Step1"));
const Step2 = lazy(() => import("@/components/Home/Process/Step2"));
const Step3 = lazy(() => import("@/components/Home/Process/Step3"));
const Step4 = lazy(() => import("@/components/Home/Process/Step4"));
const SignUpForm = lazy(() =>
  import("@/components/Home/Form").then((module) => ({
    default: module.SignUpForm,
  }))
);
const Timeline = lazy(() => import("@/components/Home/Timeline"));

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#f8f9fa] dark:bg-black dark:text-white text-black">
      <div>
        <Hero2 />
        <div className="bg-gradient-to-b w-full mx-auto dark:via-[#abff01]/16 from-transparent via-[#abff01]/13 to-transparent dark:border-white/30 dark:text-white py-20 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 text-center leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg font-bold mt-2">We are India&apos;s First AI Powered IoT Company
</h1>
        </div>
        <div className="relative mt-8 sm:mt-12 md:mt-12 mb-10 text-center lg:pb-20">
          <Badge className="backdrop-blur-md bg-[#abff02]/30 border py-1 px-3 border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Backed By</span>
          </Badge>
          <h1 className="text-3xl px-10 sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg mt-2 pb-1">
            Supported by Global Leaders
          </h1>
          <p className=" max-w-xl px-15 mx-auto font-thin dark:text-gray-300">
            We are proud to be backed by top startup accelerator programs and
            global technology leaders.
          </p>
          <BackedUpSlider />

        </div>
        <CountdownCard />
        
        <Ecosystem />
        <Products />
        <Timeline />

        <div className="relative pt-30 text-center px-4">
          <Badge className="backdrop-blur-md bg-[#abff02]/30 border py-1 px-3 border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Process</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg font-bold mt-2">
            Our Simple, Smart, and Scalable Process
          </h1>
          <p className="font-thin dark:text-gray-300 max-w-2xl  mx-auto">
            We design, develop, and implement automation tools that help you
            work smarter, not harder.
          </p>
        </div>

        <div className="mt-6 px-8 flex flex-col items-center lg:px-4 space-y-4 sm:space-y-6  lg:ml-0">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl items-center justify-center">
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step1 />
            </Suspense>
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step2 />
            </Suspense>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center items-center">
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step3 />
            </Suspense>
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step4 />
            </Suspense>
          </div>
        </div>

        

        <div className="relative pt-30 text-center">
          <Badge className="backdrop-blur-md bg-[#abff02]/30 border py-1 px-3 border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Clients</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg mt-2">
            Trusted by the Best in the Industry
          </h1>
          <p className="max-w-xl mx-auto font-thin dark:text-gray-300">
            We are proud to serve as the automation provider for top-tier
            automotive and tech clients across the globe.
          </p>
          <CompanySlideshow />
        </div>

        <div className="pt-30">
          <Faq />
        </div>
        <div className="p-4 md:p-8">
          <TextHoverEffect text="mendygo"  />
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
