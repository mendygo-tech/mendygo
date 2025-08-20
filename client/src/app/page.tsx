"use client";
import { lazy, Suspense } from "react";
import Hero from "@/components/Home/Hero";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import DashboardDark from '../assets/dashboard-dark.webp';
import DashboardLight from '../assets/dashboard-light.webp';
import CompanySlideshow from "@/components/Home/SlideShow";
import IndustrySlideshow from "@/components/Home/IndustriesSlideshow";

const CountdownCard = lazy(() => import("@/components/Home/CountdownCard"));
const Faq = lazy(() => import("@/components/Home/Faq"));
const Benefits = lazy(() => import("@/components/Home/Beniefits"));
const Step1 = lazy(() => import("@/components/Home/Process/Step1"));
const Step2 = lazy(() => import("../components/Home/Process/Step2"));
const Step3 = lazy(() => import("@/components/Home/Process/Step3"));
const Step4 = lazy(() => import("@/components/Home/Process/Step4"));
const SignUpForm = lazy(() => import("@/components/Home/Form").then(module => ({ default: module.SignUpForm })));
const Timeline = lazy(() => import("@/components/Home/Timeline"));

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen dark:bg-black dark:text-white text-black">
      <div>
        <Hero />
        <IndustrySlideshow />


        <div className="px-4 sm:px-6 pb-0 flex justify-center relative mt-24">
          <div
            className="w-full sm:w-[90%] md:w-[80%] mb-16 h-full relative rounded-lg overflow-hidden"
            style={{
              boxShadow: "0 0 40px rgba(171, 255, 2, 0.25)"
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={DashboardLight}
                alt="Mendygo dashboard"
                className="w-full h-full object-cover rounded-t-lg shadow-lg block dark:hidden"
                priority
              />
              <Image
                src={DashboardDark}
                alt="Mendygo dashboard"
                className="w-full h-full object-cover rounded-t-lg shadow-lg hidden dark:block"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-[37%] sm:h-[15%] pointer-events-none bg-gradient-to-t from-white via-white/90 via-white/70 via-white/40 to-transparent dark:from-black dark:via-black/90 dark:via-black/70 dark:via-black/40 dark:to-transparent rounded-t-lg" />
            </div>
          </div>
        </div>


        <div className="px-4 py-0 sm:py-0 md:py-8">
          <Suspense>
            <CountdownCard />
          </Suspense>
        </div>

        <div className="text-center max-w-2xl mx-auto px-4 space-y-4 mb-4 mt-32">
          <h2 className="text-2xl md:text-2xl font-semibold">AI Solutions That Take Your Business to the Next Level</h2>
          <p className="text-base md:text-lg">We design, develop, and implement automation tools that help you work smarter, not harder.</p>
        </div>

        <div>
          <Suspense >
            <Timeline />
          </Suspense>
        </div>

        <div className="relative mt-8 sm:mt-12 md:mt-12 text-center px-4">
          <Badge className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Process</span>
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">Our Simple, Smart, and Scalable Process</h1>
          <p className="mt-2 max-w-xl mx-auto">We design, develop, and implement automation tools that help you work smarter, not harder.</p>
        </div>

        <div className="mt-6 px-8 flex flex-col items-center lg:px-4 space-y-4 sm:space-y-6 -ml-6 lg:ml-0">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
            <Suspense >
              <Step1 />
            </Suspense>
            <Suspense>
              <Step2 />
            </Suspense>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
            <Suspense>
              <Step3 />
            </Suspense>
            <Suspense>
              <Step4 />
            </Suspense>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-8">
          <Suspense>
            <Benefits />
          </Suspense>
        </div>

        <div className="relative mt-8 sm:mt-12 md:mt-12 text-center px-4">
          <Badge className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Clients</span>
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">Trusted by the Best in the Industry</h1>
          <p className="mt-2 max-w-xl mx-auto">We are proud to serve as the automation provider for top-tier automotive and tech clients across the globe.</p>
          <CompanySlideshow />
        </div>

        <div className="mt-6 sm:mt-8 md:mt-8">
          <Suspense>
            <Faq />
          </Suspense>
        </div>

        <div className="p-4 md:p-8">
          <TextHoverEffect text="mendygo" />
        </div>
        <div>
          <Suspense>
            <SignUpForm />
          </Suspense>
        </div>
      </div>

    </div>
  );
}