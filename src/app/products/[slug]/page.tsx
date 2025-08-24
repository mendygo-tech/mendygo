'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/productsdata';

export default function ProductPage() {
    const { slug } = useParams();
    const product = productsData[slug as keyof typeof productsData];

    if (!product) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

            <div className="w-full h-[65vh] relative aspect-[16/9]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1280px) 90vw,
                           1280px"
                    priority
                />
                <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#f2f2f2]/80 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
                        {product.name}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl font-medium drop-shadow-md">
                        {product.tagline}
                    </p>
                </div>
            </div>

            <article className="max-w-6xl mx-auto px-4 py-16 space-y-16">
                <section className="prose dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-extrabold border-b border-gray-300 dark:border-gray-700 pb-2">
                        Product Overview
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed">
                        {product.description}
                    </p>
                </section>

                {product.sections?.map((section: any, i: any) => (
                    <section
                        key={i}
                        className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md"
                    >
                        <h2 className="text-2xl font-bold text-black dark:text-white">
                            {section.heading}
                        </h2>
                        {section.description && (
                            <p className="text-lg leading-relaxed">
                                {section.description}
                            </p>
                        )}
                        {section.points && (
                            <ul className="space-y-3 list-disc pl-5">
                                {section.points.map((point: any, j: any) => (
                                    <li key={j} className="text-base">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.image && (
                            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mt-4 shadow-lg">
                                <Image
                                    src={section.image}
                                    alt={section.heading}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </section>
                ))}

                <section className="space-y-4 text-center">
                    <h2 className="text-3xl font-extrabold">Why Choose {product.name}?</h2>
                    <p className="text-lg max-w-2xl mx-auto opacity-80">
                        We combine innovation, reliability, and intuitive design to deliver exceptional solutions.
                    </p>
                    {/* Placeholder cards for features */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
                            >
                                <h3 className="font-bold text-xl mb-2">Feature {i}</h3>
                                <p className="opacity-80">
                                    Short description of feature {i} to be filled from product data.
                                </p>
                            </div>
                        ))}
                    </div> */}
                </section>

                <div className="pt-8 text-center">
                    <Link href="/contact">
                        <button className="px-10 py-4 dark:bg-white bg-black dark:text-black text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-xl transition">
                            Request Demo
                        </button>
                    </Link>
                </div>
            </article>
        </main>
    );
}