'use client';

import React, { useEffect } from 'react';
import {
    Link,
    Database,
    Settings2,
    FileBarChart2,
    SearchCode,
    Settings,
} from 'lucide-react';
// import logo from '../../assets/logo.png';
import VennDiagram from './VennDiagram';

const Timeline = () => {
    // const [mounted, setMounted] = useState(false);

    useEffect(() => {
    }, []);

    const steps = [
        {
            title: 'Connect',
            icon: Link,
            slug: 'connect',
            description: 'Establish seamless connections with your data sources and systems',
        },
        {
            title: 'Collect',
            icon: Database,
            slug: 'collect',
            description: 'Gather and centralize all your critical business information',
        },
        {
            title: 'Integrate',
            icon: Settings2,
            slug: 'integrate',
            description: 'Merge disparate systems into a unified, coherent ecosystem',
        },
        {
            title: 'Report',
            icon: FileBarChart2,
            slug: 'report',
            description: 'Generate comprehensive reports and actionable insights',
        },
        {
            title: 'Analyze',
            icon: SearchCode,
            slug: 'analyze',
            description: 'Deep dive into data patterns and discover hidden opportunities',
        },
        {
            title: 'Optimize',
            icon: Settings,
            slug: 'optimize',
            description: 'Fine-tune processes for maximum efficiency and performance',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] via-[#f8f9fa] to-white dark:from-black dark:via-black dark:to-black flex items-center justify-center p-4 pt-18 font-sans">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center lg:mb-16">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl z-3 text-center font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg">
                        How do we do?
                    </h1>
                    <p className="lg:text-md px-7 font-thin dark:text-gray-300 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        &quot;In a world filled with challenges, solutions can be—simple or complex, and we consistently choose the path of simplicity&quot;
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <VennDiagram />
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                    <div
    key={index}
    className={`group relative dark:bg-[#141415]   rounded-xl p-6 transition-all duration-300 cursor-pointer 
                shadow-[1px_1px_15px_#bebebe,_-5px_-5px_15px_#ffffff] dark:shadow-none 
                hover:shadow-[3px_3px_15px_#bebebe,_-8px_-8px_20px_#ffffff] dark:hover:shadow-none 
                hover:scale-102`}
>
    <div className="relative z-10 ">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4  transition-transform duration-300">
            <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-[#9b9999] mb-2">
            {step.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
            Step {index + 1} of our process
        </p>
    </div>


    {/* The gradient overlay div might interfere with the neumorphic background.
        If you want a pure neumorphic look, you might remove or adjust this. */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;