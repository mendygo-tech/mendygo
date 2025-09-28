"use client";

import React, { useState } from "react";
import Image from "next/image";
import aiHomelight from "@/assets/mockup/3dAIMockupPhoneLight.png";
import aiHomeDark from "@/assets/mockup/3dAIMockupPhoneDark.png";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.message || "Something went wrong. Please try again.");
        return;
      }

      // Success
      setOpenModal(true);
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" min-h-screen relative dark:bg-black">
      <div className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 pb-20 lg:pb-0 min-h-screen items-center justify-center gap-10 lg:gap-0">
        <div className="relative flex h-full justify-center lg:pl-20 lg:pt-0 pt-30 w-full">
          {/* Soft glow behind the phone */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full dark:bg-[#abff02]/50  bg-[#abff02]/30 blur-3xl dark:opacity-40" />
          <Image
            src={aiHomelight}
            alt="AI workflow assistant light"
            className="object-contain z-2 lg:w-80 w-40 dark:hidden"
            priority
          />
          <Image
            src={aiHomeDark}
            alt="AI workflow assistant dark"
            className="object-contain z-2 lg:w-80 w-40 hidden dark:block"
            priority
          />
        </div>

        <div className="flex flex-col h-full justify-center lg:items-start items-center w-full lg:w-2/3 p-6 lg:pr-20 pr-6">
          <Badge className="backdrop-blur-md bg-[#abff02]/30 border py-1 px-3 border-white/20 text-black dark:text-white mb-4">
            <span className="text-sm font-semibold">Coming Soon</span>
          </Badge>

          <h1 className="lg:text-4xl text-3xl font-semibold lg:text-left text-center tracking-tight">
            A new way for industry to manage workflows with AI
          </h1>

          <p className="mt-3 text-neutral-700 lg:text-left text-center dark:text-neutral-300">
            We’re changing how teams collaborate with technology. Sign up for
            early access.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-20 w-full max-w-md space-y-2"
          >
            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="flex-1 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-3 text-sm outline-none ring-0 focus:border-[#abff02] focus:ring-2 focus:ring-[#abff02]/40 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                aria-invalid={!!error}
                aria-describedby={error ? "email-error" : undefined}
              />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-black text-white dark:bg-[#abff02] dark:text-black px-4 py-3 text-sm font-medium border border-black/10 dark:border-white/10 hover:opacity-90 disabled:opacity-50 transition"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  "Get early access"
                )}
              </button>
            </div>

            {error && (
              <p
                id="email-error"
                className="text-sm text-red-600 dark:text-red-400"
              >
                {error}
              </p>
            )}

            <p className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              Get early access to Mendy.
            </p>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-title"
          aria-describedby="waitlist-desc"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl dark:bg-neutral-900 border border-black/10 dark:border-white/10">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z" />
              </svg>
            </div>
            <h3 id="waitlist-title" className="text-xl font-semibold">
              Welcome to the waitlist!
            </h3>
            <p
              id="waitlist-desc"
              className="mt-1 text-sm text-neutral-600 dark:text-neutral-300"
            >
              Thanks for joining. We’ll email you as soon as early access is
              available.
            </p>
            <button
              onClick={() => setOpenModal(false)}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-[#abff02] dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Awesome
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
