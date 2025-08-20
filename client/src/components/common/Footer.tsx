"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import mendygo from "../../assets/mendygo white green wordmark.png";
import mendygoDark from "../../assets/mendygo black green wordmark.png";

export default function Footer() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const emailInput = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    fetch("https://m.satyamjha.me/contact/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Newsletter Subscriber",
        email: emailInput,
        subject: "Newsletter Signup",
        phoneNumber: "",
        message: "User subscribed via newsletter form",
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(() => {
        alert("Successfully subscribed to newsletter!");
      })
      .catch((err) => {
        console.error("Subscription error:", err);
        alert("Subscription failed. Please try again.");
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="mendygo logo" className="h-8 w-8" />
              <Image src={mendygoDark} alt="mendygo dark" className="dark:hidden block h-6 sm:h-8 w-auto" />
              <Image src={mendygo} alt="mendygo light" className="hidden dark:block h-6 sm:h-8 w-auto" />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Join our newsletter</p>

            <form onSubmit={handleSubmit} className="hidden sm:flex items-center space-x-2">
              <Input
                type="email"
                name="email"
                placeholder="name@mendygo.com"
                className="bg-black/10 max-w-[30%] dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 text-sm"
                required
              />
              <Button type="submit" className="bg-[#abff02] hover:bg-[#abff029f] text-black px-3 py-2 whitespace-nowrap">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-sm sm:text-base">Services</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5 sm:space-y-2">
                {[
                  { href: "/services/engineering", label: "Engineering" },
                  { href: "/services/projectManagement", label: "Project Management" },
                  { href: "/services/technology", label: "Tech & Integration" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-[#abff02] block">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-sm sm:text-base">Industries</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5 sm:space-y-2">
                {[
                  { href: "/industries/pulp-fiber", label: "Pulp & Fiber" },
                  { href: "/industries/chemicals", label: "Chemicals" },
                  { href: "/industries/food-beverage", label: "Food & Beverage" },
                  { href: "/industries/buildings", label: "Buildings and Factories" },
                  { href: "/industries/retail-malls", label: "Retail & Malls" },
                  { href: "/industries/pharmaceuticals", label: "Pharmaceuticals" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-[#abff02] block">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-sm sm:text-base">Links</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5 sm:space-y-2">
                {[
                  { href: "/gallery", label: "Gallery" },
                  { href: "/career", label: "Career" },
                  { href: "/services/engineering", label: "Services" },
                  { href: "/process", label: "Process" },
                  { href: "/case-studies", label: "Case studies" },
                  { href: "/benefits", label: "Benefits" },
                  { href: "/contact", label: "Pricing" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-[#abff02] block">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-sm sm:text-base">Pages</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5 sm:space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/aboutus", label: "About" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-[#abff02] block">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-sm sm:text-base">Socials</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1.5 sm:space-y-2">
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
                      className="hover:text-[#abff02] block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-500 py-3 px-4">
        <p>© Mendygo Pvt. Ltd. 2025. All rights reserved.</p>
        <p className="mt-1">ISO 9001:2015 Certified | MSME Registered</p>
      </div>

    </footer>
  );
}