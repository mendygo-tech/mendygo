'use client';

import Image from 'next/image';
import hmc1 from '@/assets/gallery/hmc1.jpeg';
import hmc2 from '@/assets/gallery/hmc2.jpeg';
import hmc3 from '@/assets/gallery/hmc3.jpeg';
import hmc4 from '@/assets/gallery/hmc4.jpeg';
import hmc5 from '@/assets/gallery/hmc 5.jpeg';
import hmc6 from '@/assets/gallery/hmc 6.jpeg';

const galleryData = [
    {
        image: hmc1,
        title: 'Arrival at Hero MotoCorp HQ',
        description:
            'We were welcomed into Hero MotoCorp’s Gurugram campus, where innovation meets scale. The tour began with an overview of their digital transformation initiatives.',
    },
    {
        image: hmc2,
        title: 'Data Gathering on the Factory Floor',
        description:
            'Our team explored how sensor data is captured at various manufacturing checkpoints, offering critical insights into cycle time and machine uptime.',
    },
    {
        image: hmc3,
        title: 'Assembly Line Observations',
        description:
            'The visit allowed us to observe the precision in Hero’s assembly processes, revealing real-time KPIs and tracking metrics that we aim to optimize using AI.',
    },
    {
        image: hmc4,
        title: 'Insights from the Quality Control Unit',
        description:
            'We engaged with quality engineers to learn how Hero ensures product consistency and how anomaly detection could improve their workflows.',
    },
    {
        image: hmc6,
        title: 'Maintenance and Downtime Logs',
        description:
            'Maintenance logs helped us identify potential areas for predictive maintenance solutions to reduce unplanned downtimes.',
    },
    {
        image: hmc5,
        title: 'Wrap-Up and Strategy Meeting',
        description:
            'We concluded the visit with a collaborative discussion on integrating Mendygo’s solutions to elevate operational efficiency.',
    },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-10 px-6 mt-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Hero MotoCorp Office Visit</h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    We visited <strong>Hero MotoCorp</strong> to understand their industrial processes,
                    gather sensor-level data, and identify challenges in monitoring real-time metrics across various
                    departments. This helped us define the core problems and design potential solutions.
                </p>
            </div>

            <section className="space-y-20 max-w-6xl mx-auto">
                {galleryData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        <div className="w-full md:w-1/2">
                            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    placeholder="blur"
                                    className="object-cover w-full h-full rounded-xl"
                                    fill
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}