'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/productsdata';


interface ProductFeature { title: string; description: string }
interface ProductExtended {
    name: string; tagline: string; description: string; image: string;
    heroTitle?: string; heroSubtitle?: string; heroDescription?: string; whyTagline?: string;
    features?: ProductFeature[]; darkImage?: string; smallImageLight?: string; smallImageDark?: string;
}

export default function ProductPage() {
    const { slug } = useParams();
    const product = productsData[slug as keyof typeof productsData] as unknown as ProductExtended | undefined;
    if (!product) return notFound();

    const heroTitle = product.heroTitle || product.heroTitle;
    const heroSubtitle = product.heroSubtitle || product.tagline;
    const heroDescription = product.heroDescription || product.description;
    const features = product.features || [];
    const whyTagline = product.whyTagline || product.tagline;
    const ctaHeading = `Start Your ${product.heroTitle.split('–')[0]} Journey Today`;

    return (
        <main className="lg:min-h-screen bg-[#f3f7fa] dark:bg-black text-slate-900dark:text-[#9B9999] pb-10">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#abff01]/50 dark:from-[#abff01]/30 via-transparent to-black/5  lg:h-150 pb-10 px-16 lg:pl-30 pt-26 md:pt-24 grid md:grid-cols-2 lg:gap-12 items-center">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-3 font-bold leading-[1.3] tracking-tight bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500 bg-clip-text text-transparent drop-shadow-sm dark:from-gray-200 dark:via-gray-400 dark:to-gray-700 dark:drop-shadow-lg  whitespace-pre-line">{heroTitle}</h1>
                    <h2 className=" md:text-xl font-semibold mt-2 text-slate-700 dark:text-slate-300">{heroSubtitle}</h2>
                    <p className="pt-2 text-base md:text-md font-thin leading-relaxed max-w-xl text-slate-900 dark:text-slate-300">{heroDescription}</p>
                </div>
                <div className="flex justify-center  md:justify-end">
                    <div className="relative h-100 w-full hidden md:block lg:block">
                        <Image src={product.image} alt={product.heroTitle} fill className="object-contain dark:hidden bg-transparent" priority />
                        <Image src={product.darkImage} alt={product.heroTitle} fill className="object-contain hidden dark:block bg-transparent" priority />
                    </div>
                </div>
            </section>

            {/* Why Families Love Section */}
            <section className="lg:mt-20 bg-[#f0f6fa] dark:bg-black  py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mb-14">
                        <div className="relative w-72 h-100   mx-auto">
                            <Image src={product.smallImageLight || product.image} alt={product.heroTitle + ' mockup'} fill className="object-contain" />
                            <Image src={product.smallImageDark || product.darkImage} alt={product.heroTitle + ' mockup'} fill className="object-contain hidden dark:block" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl dark:text-gray-300 font-bold text-center md:text-left">Why Choose {product.heroTitle.split('–')[0]}</h2>
                            <p className="mt-1 text-slate-600 font-thin dark:text-slate-400 text-center md:text-left max-w-2xl">{whyTagline}</p>
                            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {features.map((f, i) => (
                                    <div key={i} className="p-5 rounded-xl bg-white dark:bg-[#141416] border border-slate-200 dark:border-none shadow-sm hover:shadow-md transition flex flex-col">
                                        <div className="h-9 w-9 rounded-lg bg-[#abff01]/45 flex items-center justify-center text-xs font-bold text-slate-800 dark:text-slate-100 mb-3">{i+1}</div>
                                        <h3 className="font-semibold dark:text-gray-300 text-sm leading-snug">{f.title}</h3>
                                        <p className="text-xs leading-relaxed font-thin text-slate-600 dark:text-slate-300">{f.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Showcase */}
            {/* <section className="max-w-5xl mx-auto px-6 py-24">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">See {product.heroTitle.split('–')[0]} In Action</h2>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">A quick visual of how the platform drives results.</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-900">
                    <div className="absolute inset-0 pointer-events-none" />
                    <div className="aspect-[16/9] w-full relative">
                        <Image src="/" alt={product.heroTitle + ' banner'} fill className="object-contain" />
                    </div>
                </div>
            </section> */}

            {/* Benefits */}
            {/* <section className="py-20 bg-[#f0f6fa] dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-14">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-center">Benefits of {product.heroTitle.split('–')[0]}</h2>
                            <p className="mt-3 text-slate-600 dark:text-slate-400 text-center">{whyTagline}</p>
                            <div className="mt-10 grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
                                {features.map((f, i) => (
                                    <div key={i} className="p-5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition flex flex-col">
                                        <div className="h-9 w-9 rounded-lg bg-[#abff01]/25 flex items-center justify-center text-xs font-bold text-slate-800 dark:text-slate-100 mb-3">{i+1}</div>
                                        <h3 className="font-semibold text-sm mb-2 leading-snug">{f.title}</h3>
                                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{f.description}</p>
                                    </div>
                                ))}
                                     
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#abff01]/30 via-[#abff01]/8 to-transparent w-md lg:w-5xl md:w-2xl mx-auto rounded-xl  dark:text-slate-100 lg:py-24 py-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold dark:text-gray-300">{ctaHeading}</h3>
                    <p className="mt-4 dark:text-slate-300 text-sm  md:text-base">Ready to explore more? Reach out for a tailored walkthrough.</p>
                    <div className="mt-10 flex flex-wrap gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-3 rounded-full bg-[#abff01] text-black font-semibold shadow hover:shadow-md transition text-sm md:text-base">Request Demo</Link>
                        <Link href="/aboutus" className="px-8 py-3 rounded-full dark:text-gray-300 border border-slate-400 hover:bg-slate-700/40 transition text-sm font-medium">Discover More</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}