"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
// import Script from "next/script";
import Hero from "@/components/Home/Hero";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import DashboardDark from "@/assets/dashboard-dark.webp";
import DashboardLight from "@/assets/dashboard-light.webp";
import { useTheme } from "next-themes";
import CompanySlideshow from "@/components/Home/SlideShow";
import IndustrySlideshow from "@/components/Home/IndustriesSlideshow";

// --- Dynamic imports (client-only) ---
const CountdownCard = dynamic(() => import("@/components/Home/CountdownCard"), {
  ssr: false,
  loading: () => (
    <div className="h-32 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>
  ),
});

const Faq = dynamic(() => import("@/components/Home/Faq"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>
  ),
});

const Benefits = dynamic(() => import("@/components/Home/Beniefits"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>
  ),
});

const Step1 = dynamic(() => import("@/components/Home/Process/Step1"), {
  ssr: false,
  loading: () => (
    <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
  ),
});
const Step2 = dynamic(() => import("@/components/Home/Process/Step2"), {
  ssr: false,
  loading: () => (
    <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
  ),
});
const Step3 = dynamic(() => import("@/components/Home/Process/Step3"), {
  ssr: false,
  loading: () => (
    <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
  ),
});
const Step4 = dynamic(() => import("@/components/Home/Process/Step4"), {
  ssr: false,
  loading: () => (
    <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
  ),
});

const SignUpForm = dynamic(
  () => import("@/components/Home/Form").then((m) => m.SignUpForm),
  {
    ssr: false,
    loading: () => (
      <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>
    ),
  }
);

const Timeline = dynamic(() => import("@/components/Home/Timeline"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>
  ),
});

const TextHoverEffect = dynamic(
  () => import("@/components/ui/text-hover-effect").then((m) => m.TextHoverEffect),
  {
    ssr: false,
  }
);

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dashboard image depends on resolved theme
  const dashboardSrc = useMemo(
    () => (resolvedTheme === "light" ? DashboardLight : DashboardDark),
    [resolvedTheme]
  );

  // Prefetch heavy sections in background
  useEffect(() => {
    import("@/components/Home/Timeline");
    import("@/components/Home/CountdownCard");
    import("@/components/Home/Faq");
    import("@/components/Home/Beniefits");
  }, []);

  

  return (
    <div className="relative overflow-hidden min-h-screen dark:bg-black dark:text-white text-black">
      {/* Lenis smooth scroll after interactive */}
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/lenis@latest/bundle.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Ensure Lenis exists and init safely
          const LenisCtor =
            (window as typeof window & { Lenis?: new (opts?: { duration?: number; easing?: string; smooth?: boolean }) => { raf: (t: number) => void; destroy?: () => void } }).Lenis;

          if (!LenisCtor) return;

          const lenis = new LenisCtor();
          let rafId = 0;
          const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
          };
          rafId = requestAnimationFrame(raf);

          // Stop the loop when page is hidden/unloaded to avoid leaks
          const stop = () => cancelAnimationFrame(rafId);
          window.addEventListener("pagehide", stop, { once: true });
          document.addEventListener("visibilitychange", () => {
            if (document.hidden) cancelAnimationFrame(rafId);
            else rafId = requestAnimationFrame(raf);
          });
        }}
      /> */}

      <div>
        {/* Above the fold */}
        <Hero />
        <IndustrySlideshow />

        {/* Dashboard showcase */}
        <div className="px-4 sm:px-6 pb-0 flex justify-center relative mt-24">
          <div
            className="w-full sm:w-[90%] md:w-[80%] mb-16 h-full relative rounded-lg overflow-hidden"
            style={{
              boxShadow: "0 0 40px rgba(171, 255, 2, 0.25)",
            }}
          >
            <div className="relative w-full h-full">
              {mounted && (
                <Image
                  key={resolvedTheme}
                  src={dashboardSrc}
                  alt="Mendygo dashboard"
                  className="w-full h-full object-cover rounded-t-lg shadow-lg"
                  placeholder="blur"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              )}
              <div className="absolute bottom-0 left-0 w-full h-[37%] sm:h-[15%] pointer-events-none bg-gradient-to-t from-white via-white/90 via-white/70 via-white/40 to-transparent dark:from-black dark:via-black/90 dark:via-black/70 dark:via-black/40 dark:to-transparent rounded-t-lg" />
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="px-4 py-0 sm:py-0 md:py-8">
          <CountdownCard />
        </div>

        {/* Section: AI Solutions */}
        <div className="text-center max-w-2xl mx-auto px-4 space-y-4 mb-4 mt-32">
          <h2 className="text-2xl md:text-2xl font-semibold">
            AI Solutions That Take Your Business to the Next Level
          </h2>
          <p className="text-base md:text-lg">
            We design, develop, and implement automation tools that help you
            work smarter, not harder.
          </p>
        </div>

        <Timeline />

        {/* Our Process */}
        <div className="relative mt-8 sm:mt-12 md:mt-12 text-center px-4">
          <Badge className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Process</span>
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            Our Simple, Smart, and Scalable Process
          </h1>
          <p className="mt-2 max-w-xl mx-auto">
            We design, develop, and implement automation tools that help you
            work smarter, not harder.
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-6 px-8 flex flex-col items-center lg:px-4 space-y-4 sm:space-y-6 -ml-6 lg:ml-0">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
            <Step1 />
            <Step2 />
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
            <Step3 />
            <Step4 />
          </div>
        </div>

        <Benefits />

        {/* Clients */}
        <div className="relative mt-8 sm:mt-12 md:mt-12 text-center px-4">
          <Badge className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Clients</span>
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            Trusted by the Best in the Industry
          </h1>
          <p className="mt-2 max-w-xl mx-auto">
            We are proud to serve as the automation provider for top-tier
            automotive and tech clients across the globe.
          </p>
          <CompanySlideshow />
        </div>

        <Faq />

        <div className="p-4 md:p-8">
          <TextHoverEffect text="mendygo" />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
}
