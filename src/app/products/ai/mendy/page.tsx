'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/productsdata';

export default function ProductPage() {
  const product = productsData['mendy'];
  if (!product) return notFound();

  const heroTitle = product.heroTitle;
  const heroSubtitle = product.heroSubtitle;
  const heroDescription = product.heroDescription;
  const features = product.features || [];
  const whyTagline = product.whyTagline;
  const ctaHeading = `Start Your ${product.heroTitle.split('–')[0]} Journey Today`;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">

      {/* ================= HERO ================= */}
      <section className="relative py-24 lg:py-32 px-6 bg-gradient-to-b from-[#abff01]/20 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              {heroTitle}
            </h1>

            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-medium">
              {heroSubtitle}
            </p>

            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              {heroDescription}
            </p>
          </div>

          {/* Image */}
          <div className="relative hidden md:block h-[420px]">
            <Image
              src={product.image}
              alt={product.heroTitle}
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src={product.darkImage}
              alt={product.heroTitle}
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative h-[380px]">
            <Image
              src={product.smallImageLight || product.image}
              alt={product.heroTitle}
              fill
              className="object-contain dark:hidden"
            />
            <Image
              src={product.smallImageDark || product.darkImage}
              alt={product.heroTitle}
              fill
              className="object-contain hidden dark:block"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Why Choose {product.heroTitle.split('–')[0]}
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
              {whyTagline}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10"
                >
                  <div className="h-8 w-8 rounded-lg bg-[#abff01]/30 text-gray-900 dark:text-gray-100 flex items-center justify-center text-sm font-semibold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-sm">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
     
     {/* ================= CTA ================= */}
<section className="py-28">
  <div className="max-w-7xl mx-auto px-6">
    <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-10 py-14 grid gap-10 md:grid-cols-2 items-center shadow-sm">

      {/* Left content */}
      <div>
        <p className="text-sm font-medium text-green-600 dark:text-green-400">
          Get Started
        </p>

        <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
          {ctaHeading}
        </h3>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
          See how {product.heroTitle.split("–")[0]} helps teams gain visibility,
          improve efficiency, and make smarter operational decisions — all in
          real time.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#abff01] px-7 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
        >
          Request a Demo
        </Link>

        <Link
          href="/aboutus"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 px-7 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          Learn More
        </Link>
      </div>
    </div>

    {/* Trust line */}
    <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
      Trusted by manufacturing plants, infrastructure providers, and enterprise
      teams across industries.
    </p>
  </div>
</section>


    </main>
  );
}
