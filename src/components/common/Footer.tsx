"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook, Linkedin, Twitter,MapPinHouse, ExternalLinkIcon} from "lucide-react";
// import terms from "../../app/pages/term"
// import cookies from "../../app/pages/cookie"
// import disclamer from "../../app/pages/disclamer"

import mendygo from "../../assets/mendygo white green wordmark.png";

import logo from "@/assets/l_shadow.jpg";
// import mendygoLight from "@/assets/mendygo white green wordmark.png";
import mendygoDark from "@/assets/mendygo black green wordmark.png";
import SuccessModal from "./SuccessModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalType, setModalType] =
    React.useState<"success" | "error">("success");

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

    
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About Mendygo</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/aboutus">Company Overview</Link></li>
              <li><Link href="/career">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="https://blogs.mendygo.com/">Blog</Link></li>
              <li><Link href="/certificates">Certificates</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/products/hardware/gateway">Gateway</Link></li>
              <li><Link href="/products/hardware/sensors-meters">Sensors & Meters</Link></li>
              <li><Link href="/products/hardware/controllers">Controllers</Link></li>
              <li><Link href="/products/ai/mendy">AI Copilot</Link></li>
              <li><Link href="/products/ai/computerVision">Computer Vision</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Building Management</li>
              <li>Energy Management</li>
              <li>Factory Management</li>
              <li>HVAC Management</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-4">
              <SocialIcon href="https://www.instagram.com/mendygo.ai" icon={<Instagram />} />
              <SocialIcon href="https://www.facebook.com/share/1Yug6qgHLe" icon={<Facebook />} />
              <SocialIcon href="https://www.linkedin.com/company/mendygo/" icon={<Linkedin />} />
              <SocialIcon href="https://x.com/MendygoSocial" icon={<Twitter />} />
            </div>
          </div>
        </div>

        {/* Bottom */}

    

        <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-500">
          <div className="text-center md:text-left">
            <p>© 2025 Mendygo Technologies Pvt. Ltd.</p>
            <p className="text-xs">ISO 9001:2015 Certified | MSME Registered</p>
           
             
             
          </div>
         

          <div className="text-center md:text-left flex flex-col gap-3  w-1/2 ">
           <div className="flex gap-2"><MapPinHouse className="md: w-20 h-5  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            <p>Mendygo Technologies Private Limited
              3rd Floor
              Unit No. 304
              Eros Group Corporate Park
              Sector 2, IMT Manesar
              Manesar, Gurugram
              Haryana – 122052
              India</p>
              </div>
            {/* <p className="text-xs">ISO 9001:2015 Certified | MSME Registered</p> */}
            <div className=" flex  justify-start gap-3 space-y-1 md:flex flex-col gap-2">
            <div className="flex gap-2">< ExternalLinkIcon className=" sm:w-4 sm:h-4  md:w-4 md:h-4   lg:w-4 h-4  text-gray-600 hover:text-[#abff02] transition-colors   "  />
            <h3 className="text-xs">GSTIN: 06AATCM5686Q1Z8</h3>
            </div>
            <div className="flex gap-2">< ExternalLinkIcon className="w-4 h-4  text-gray-600 hover:text-[#abff02] transition-colors "  />
            <h3 className="text-xs">CIN: U62090HR2025PTC133785</h3>
            </div>
            </div>
          </div>

          <div className="flex gap-6">
           <Link href="/disclaimer">Disclaimer</Link>
           <Link href="/cookie">Cookies</Link>
            <Link href="/privacy">T&C</Link>
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
