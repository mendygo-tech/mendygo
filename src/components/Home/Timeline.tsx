'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
    Link,
    Database,
    Settings2,
    FileBarChart2,
    SearchCode,
    Settings,
    ArrowRight,
} from 'lucide-react';
import logo from '../../assets/logo.png';
import VennDiagram from './VennDiagram';

const Timeline = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-black dark:to-black flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        How do we do?
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        "In a world filled with challenges, solutions can be—simple or complex, and we consistently choose the path of simplicity"
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <VennDiagram />
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <NextLink href={`/timeline/${step.slug}`} key={step.slug}>
                                    <div
                                        className={`group relative bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-white/20 dark:hover:bg-black/20`}
                                    >
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Step {index + 1} of our process
                                            </p>
                                        </div>

                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight className="w-5 h-5 text-gray-900 dark:text-white" />
                                        </div>

                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </NextLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;