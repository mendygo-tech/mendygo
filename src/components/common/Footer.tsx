"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { motion } from "motion/react";
import mendygo from "../../assets/mendygo white green wordmark.png";
import mendygoDark from "../../assets/mendygo black green wordmark.png";
import SuccessModal from "./SuccessModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalType, setModalType] = React.useState<"success" | "error">("success");
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const emailInput = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    fetch("/api/newsletter/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(() => {
        setModalMessage("Successfully subscribed to newsletter!");
        setModalType("success");
        setModalOpen(true);
      })
      .catch((err) => {
        console.error("Subscription error:", err);
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
                placeholder="name@mendygo.com"
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

        {/* Links Sections */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 px-3 justify-start  justify-items-center ">
          

          
          <div className="space-y-3 col-span-2 md:col-span-1 lg:block hidden">
            <h4 className="font-semibold text-sm sm:text-base">Solutions</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
              {[
                { href: "/solutions/management-systems/building-management", label: "Building Management" },
                { href: "/solutions/management-systems/energy-management", label: "Energy Management" },
                { href: "/solutions/management-systems/factory-management", label: "Factory Management" },
                { href: "/solutions/management-systems/hvac-management", label: "HVAC Management" },
                { href: "/solutions/management-systems", label: "View all" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#82bf07] block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-sm sm:text-base">Socials</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5">
              {[
                { href: "https://www.instagram.com/mendygo.ai", label: "Instagram" },
                { href: "https://www.facebook.com/share/1Yug6qgHLe", label: "Facebook" },
                { href: "https://www.linkedin.com/company/mendygo/", label: "LinkedIn" },
                { href: "https://x.com/MendygoSocial", label: "X" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#82bf07] block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm sm:text-base">Links</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5">
              {[
                { href: "/gallery", label: "Gallery" },
                { href: "/career", label: "Career" },
                { href: "/benefits", label: "Benefits" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#82bf07] block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
<div className="space-y-3 col-span-2 md:col-span-1 lg:block hidden">
            <h4 className="font-semibold text-sm sm:text-base">Products</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5">
              {[
                { href: "/products/hardware/gateway", label: "Gateway" },
                { href: "/products/hardware/sensors-meters", label: "Sensors & Meters" },
                { href: "/products/hardware/controllers", label: "Controllers" },
                { href: "/products/ai/mendy", label: "Mendy AI Copilot" },
                { href: "/products/ai/computerVision", label: "MendyVision" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#82bf07] block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm sm:text-base">Pages</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5">
              {[
                { href: "/", label: "Home" },
                { href: "/aboutus", label: "About" },
                { href: "https://blogs.mendygo.com/", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#82bf07] block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          

          <div className="space-y-3 col-span-2 md:col-span-1 lg:block hidden">
            <h4 className="font-semibold text-sm sm:text-base">Telematics</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5">
              {[
                  { href: "/solutions/telematics/chiller-telematics", label: "Chiller Telematics" },
                { href: "/solutions/telematics/compressor-telematics", label: "Compressor Telematics" },
                { href: "/solutions/telematics/ev-telematics", label: "EV Telematics" },
                { href: "/solutions/telematics/earth-moving-telematics", label: "Earth Moving Telematics" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#82bf07] block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/10 dark:border-white/10 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-500 py-3 px-4">
        <p>© Mendygo Pvt. Ltd. 2025. All rights reserved.</p>
        <p className="mt-1">ISO 9001:2015 Certified | MSME Registered</p>
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
