import React, { useState, useEffect } from "react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "MendyView",
        subtitle: "AI Web-Based Access Control System",
        description:
            "Enhance site security and safety compliance with AI-powered facial recognition and PPE detection.",
        image: "ind2.png",
    },
    {
        id: 2,
        name: "MendySheets",
        subtitle: "Digital Checksheets",
        description:
            "Digitize your quality inspections with real-time data capture and IoT integration.",
        image: "ind1.png",
    },
    {
        id: 3,
        name: "Mendergy",
        subtitle: "Energy Management System",
        description:
            "Optimize industrial energy usage with real-time monitoring, predictive analytics, and automation.",
        image: "ind3.png",
    },
    {
        id: 4,
        name: "SmartOEE",
        subtitle: "OEE Dashboard",
        description: "Track efficiency, quality, and equipment availability in real time.",
        image: "ind5.png",
    },
    {
        id: 5,
        name: "MendygoVerse",
        subtitle: "AR/VR/MR Platform",
        description:
            "Transform industrial training and maintenance with immersive AR/VR/MR solutions.",
        image: "ind7.png",
    },
    {
        id: 6,
        name: "MendyOps",
        subtitle: "Utility Monitoring & Automation",
        description:
            "Monitor and control pumps, HVAC, and other utilities remotely with MendyOps.",
        image: "ind6.png",
    },
    {
        id: 7,
        name: "MendyLive",
        subtitle: "Digital Twin Platform",
        description:
            "Visualize, simulate, and optimize industrial operations with MendyLive.",
        image: "",
    },
    {
        id: 8,
        name: "Thermendy",
        subtitle: "Smart Climate Control",
        description:
            "AI-driven climate control for industrial spaces, managing temperature, humidity, and airflow.",
        image: "ind4.png",
    },
    {
        id: 9,
        name: "MendyAI",
        subtitle: "Industrial Intelligence Engine",
        description:
            "MendyAI turns raw IIoT data into smart, real-time insights using adaptive machine learning.",
        image: "",
    },
];
const IndustrySlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const totalSlides = Math.ceil(products.length / 3);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6 relative">
            <div className="relative">
                <div className="overflow-hidden py-8">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
                                    {products
                                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                                        .map((product, cardIndex) => (
                                            <div
                                                key={product.id}
                                                className={`bg-white dark:bg-black/70 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${cardIndex === 1 ? "md:scale-105 md:shadow-xl" : ""
                                                    }`}
                                                style={{
                                                    animation: `fadeInUp 0.8s ease-out ${cardIndex * 0.15
                                                        }s both`,
                                                    height: "420px",
                                                    cursor: "default",
                                                }}
                                            >
                                                <div
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    className="relative h-64 md:h-72 overflow-hidden"
                                                >
                                                    <Image
                                                        src={`/${product.image}`}
                                                        alt={product.name}
                                                        fill
                                                        className="object-cover transition-transform duration-300 hover:scale-110"
                                                        priority={slideIndex === 0}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                                        <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-base font-medium text-blue-400 drop-shadow">
                                                            {product.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <p className="text-black dark:text-white font-bold text-sm leading-relaxed mb-6">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={goToPrev}
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20"
                    aria-label="Previous Slide"
                >
                    &#8592;
                </button>

                <button
                    onClick={goToNext}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20"
                    aria-label="Next Slide"
                >
                    &#8594;
                </button>

                <div className="flex justify-center space-x-3 mt-6">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 ${currentIndex === index
                                ? "w-8 h-3 bg-blue-500 rounded-full"
                                : "w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default IndustrySlideshow;