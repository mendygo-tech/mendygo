"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your assets
import ind2 from "@/assets/gallery/ind2.png";
import ind3 from "@/assets/gallery/ind3.png";
import ind4 from "@/assets/gallery/ind4.png";
import ind6 from "@/assets/gallery/ind6.png";
import ind7 from "@/assets/gallery/ind7.png";
import Router from "next/router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "MendyView",
    subtitle: "AI Web-Based Access Control System",
    description:
      "Enhance site security and safety compliance with AI-powered facial recognition and PPE detection.",
    image: ind2,
    href: "/products/mendyview-ai-access-control",
  },
  {
    id: 2,
    name: "MendySheets",
    subtitle: "Digital Checksheets",
    description:
      "Digitize your quality inspections with real-time data capture and IoT integration.",
    image: "/ind1.png", // Assuming you have this in your public folder
    href: "/products/mendysheets-digital-checksheets",
  },
  {
    id: 3,
    name: "Mendergy",
    subtitle: "Energy Management System",
    description:
      "Optimize industrial energy usage with real-time monitoring, predictive analytics, and automation.",
    image: ind3,
    href: "/products/mendergy-energy-management-system",
  },
  {
    id: 4,
    name: "SmartOEE",
    subtitle: "OEE Dashboard",
    description: "Track efficiency, quality, and equipment availability in real time.",
    image: "/ind5.png", // Assuming you have this in your public folder
    href: "/products/smartooe-dashboard",
  },
  {
    id: 5,
    name: "MendygoVerse",
    subtitle: "AR/VR/MR Platform",
    description:
      "Transform industrial training and maintenance with immersive AR/VR/MR solutions.",
    image: ind7,
    href: "/products/mendygoverse-ar-vr-mr-platform",
  },
  {
    id: 6,
    name: "MendyOps",
    subtitle: "Utility Monitoring & Automation",
    description:
      "Monitor and control pumps, HVAC, and other utilities remotely with MendyOps.",
    image: ind6,
    href: "/products/mendyops-utility-monitoring-automation",
  },
  {
    id: 7,
    name: "MendyLive",
    subtitle: "Digital Twin Platform",
    description:
      "Visualize, simulate, and optimize industrial operations with MendyLive.",
    image: "/ind3.png", // This seems to be a duplicate image path
    href: "/products/gotwinx-digital-twin-platform",
  },
  {
    id: 8,
    name: "Thermendy",
    subtitle: "Smart Climate Control",
    description:
      "AI-driven climate control for industrial spaces, managing temperature, humidity, and airflow.",
    image: ind4,
    href: "/products/thermendy-smart-climate-control",
  },
  {
    id: 9,
    name: "MendyAI",
    subtitle: "Industrial Intelligence Engine",
    description:
      "MendyAI turns raw IIoT data into smart, real-time insights using adaptive machine learning.",
    image: "/ind2.png", // This seems to be a duplicate image path
    href: "/products/mendyai-industrial-intelligence-engine",
  },
];

const AUTOPLAY_MS = 4500;

const IndustrySlideshow = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: AUTOPLAY_MS,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        //  CHANGE #1: Point Swiper to your custom navigation button elements
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        className="py-8"
      >
        {products.map((product, i) => (
          <SwiperSlide key={product.id}>
            <div
              onClick={() => {
                Router.push(product.href);
              }}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-[#abff02]/30 via-transparent to-blue-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] h-full cursor-pointer"
            >
              <article className="bg-white/90 dark:bg-black/70 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm h-[420px] flex flex-col">
                <div className="relative h-64 md:h-72 overflow-hidden shrink-0">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      priority={i < 3} // Prioritize first 3 images
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-extrabold mb-1 drop-shadow-lg">
                      {product.name}
                    </h3>
                    <p className="text-base font-medium text-blue-300 drop-shadow">
                      {product.subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-black dark:text-white font-semibold text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CHANGE #2: Add the actual button elements here */}
      <div className="swiper-button-prev ">
        <ChevronLeft />
      </div>
      <div className="swiper-button-next">
        <ChevronRight />
      </div>
    </div>
  );
};

export default IndustrySlideshow;