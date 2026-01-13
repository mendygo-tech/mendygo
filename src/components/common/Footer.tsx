"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  MapPinHouse,
  ReceiptText,
  Building2,
  AlertTriangle,
  Cookie,
  FileText,
  RotateCcw 
} from "lucide-react";
import { useTheme } from "next-themes";

import mendygo from "../../assets/mendygo white green wordmark.png";

import logo from "@/assets/logo_shadow.png";
// import mendygoLight from "@/assets/mendygo white green wordmark.png";
import mendygoDark from "@/assets/mendygo black green wordmark.png";
import SuccessModal from "./SuccessModal";

export default function Footer() {
  const { theme } = useTheme();

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalType, setModalType] = React.useState<"success" | "error">(
    "success"
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    fetch("/api/newsletter/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setModalMessage("Successfully subscribed to newsletter!");
        setModalType("success");
        setModalOpen(true);
      })
      .catch(() => {
        setModalMessage("Subscription failed. Please try again.");
        setModalType("error");
        setModalOpen(true);
      });
  }

  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white relative overflow-hidden border-t border-black/10 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.08, scale: 1.3 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-24 sm:h-32 md:h-48 bg-gradient-to-b from-[#abff02] to-transparent pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logo}
                alt="mendygo logo"
                width={3183}
                height={2734}
                className="h-8 w-8"
              />

              <Image
                src={mendygoDark}
                alt="mendygo dark"
                width={128}
                height={440}
                className="dark:hidden block h-6 sm:h-8 w-auto"
              />
              <Image
                src={mendygo}
                alt="mendygo light"
                width={128}
                height={440}
                className="hidden dark:block h-6 sm:h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Join our newsletter
            </p>

            <form
              onSubmit={handleSubmit}
              className="hidden sm:flex items-center space-x-2"
            >
              <Input
                type="email"
                name="email"
                placeholder="info@mendygo.com"
                className="bg-black/10 max-w-[280px] dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 text-sm"
                required
              />
              <Button
                type="submit"
                className="bg-[#abff02] hover:bg-[#abff029f] text-black px-3 py-2 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 mr-1" /> Register
              </Button>
            </form>

            <form onSubmit={handleSubmit} className="sm:hidden space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="name@mendygo.com"
                className="bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 text-sm w-full"
                required
              />
              <Button className="bg-[#abff02] hover:bg-[#abff029f] text-black w-full">
                <Mail className="w-4 h-4 mr-2" /> Register
              </Button>
            </form>
          </div>
        </div>

        {/* Links Grid */}

        <div
          className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8   md:gap-8
           text-center md:text-left
             place-items-center md:place-items-start"
        >
          {/* About */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold tracking-wide ">
              About Mendygo
            </h4>

            <ul className="list-none md:list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/">Home</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/career">Career</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="https://blogs.mendygo.com/">Blog</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/certificates">Certificates</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/benefits">Benefits</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/aboutus">About</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold tracking-wide">Products</h4>

            <ul className="list-none md:list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/products/hardware/gateway">Gateway</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/products/hardware/sensors-meters">
                  Sensors &amp; Meters
                </Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/products/hardware/controllers">Controllers</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/products/ai/mendy">Mendy AI Copilot</Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/products/ai/computerVision">Mendy Vision</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold tracking-wide ">
              Solutions
            </h4>

            <ul className="list-none md:list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/solutions/management-systems/building-management">
                  Building Management
                </Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/solutions/management-systems/energy-management">
                  Energy Management
                </Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/solutions/management-systems/factory-management">
                  Factory Management
                </Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/solutions/management-systems/hvac-management">
                  HVAC Management
                </Link>
              </li>
              <li className="py-1 hover:text-[#82bf07]">
                <Link href="/solutions/management-systems">View all</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            {/* ---------- FOLLOW US ---------- */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Follow Us
              </h4>

              <div className="flex items-center gap-3">
                <SocialIcon
                  href="https://www.instagram.com/mendygo.ai"
                  icon={<Instagram />}
                />
                <SocialIcon
                  href="https://www.facebook.com/share/1Yug6qgHLe"
                  icon={<Facebook />}
                />
                <SocialIcon
                  href="https://www.linkedin.com/company/mendygo/"
                  icon={<Linkedin />}
                />

                {/* X */}
                <Link
                  href="https://x.com/MendygoSocial"
                  target="_blank"
                  aria-label="Visit us on X"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 dark:border-white/20 hover:border-[#abff02] hover:bg-[#abff02]/10 transition"
                >
                  {theme === "dark" ? (
                    <Image
                      src={"/icon/white.png"}
                      alt="X"
                      width={16}
                      height={16}
                      className="opacity-70 hover:opacity-100 transition "
                    />
                  ) : (
                    <Image
                      src={"/icon/black.png"}
                      alt="X"
                      width={25}
                      height={25}
                      className="opacity-70 hover:opacity-100 transition "
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-white/10" />

            {/* ---------- ADDRESS ---------- */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs md:max-w-sm mx-auto gap-3">
              <div className="flex items-start gap-3 w-full">
                <MapPinHouse className="w-4 h-4 mt-1 text-gray-400 shrink-0 hidden md:block" />

                <div className="w-full space-y-1.5">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Mendygo Technologies Pvt. Ltd.
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed break-words">
                    3rd Floor, Unit No. 304, Eros Group Corporate Park, Sector
                    2, IMT Manesar, Gurugram, Haryana – 122052, India.
                  </p>

                  {/* GST / CIN */}
                  <div className="pt-1.5 flex flex-col gap-1 text-[11px] text-gray-500 dark:text-gray-400">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <ReceiptText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="break-all sm:break-normal ">
                        GSTIN: 06AATCM5686Q1Z8
                      </span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="break-all sm:break-normal">
                        CIN: U62090HR2025PTC133785
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs text-gray-500 dark:text-gray-400">
            {/* LEFT */}
            <div className="text-center md:text-left space-y-1">
              <p className=" text-gray-900 font-medium  dark:text-white ">
                © 2026 Mendygo Technologies Pvt. Ltd.
              </p>
              <p>ISO 9001:2015 Certified | MSME Registered</p>
            </div>

            {/* RIGHT – LEGAL LINKS */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
              <Link
                href="/disclaimer"
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <AlertTriangle className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Disclaimer</span>
              </Link>

              <Link
                href="/cookie"
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Cookie className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Cookies</span>
              </Link>

              <Link
                href="/privacy"
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-gray-400 shrink-0" />
                <span>T&amp;C</span>
              </Link>


              <Link
                href="/refund"
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <RotateCcw  className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Refund</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-400 hover:border-[#abff02] hover:text-black dark:hover:text-white hover:bg-[#abff02]/10 transition"
    >
      {icon}
    </a>
  );
}
