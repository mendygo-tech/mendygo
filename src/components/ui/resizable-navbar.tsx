// resizable-navbar.tsx
"use client";
import { cn } from "@/lib/utils";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { MenuIcon, X as HomeIcon, ChevronDown, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png"
import mendygo from "../../assets/mendygo white green wordmark.png";
import mendygoDark from "../../assets/mendygo black green wordmark.png";
import logo_shadow from "../../assets/logo_shadow.png";

interface DropdownItem {
    href: string;
    label: string;
    description: string;
}
interface DropdownColumn {
    title: string;
    links: DropdownItem[];
    viewAllLink?: { href: string; label: string; };
}
interface DropdownData {
    columns: DropdownColumn[];
}
interface NavItem {
    name: string;
    link: string;
    dropdown?: DropdownData;
    isModal?: boolean;
}
interface NavbarProps { children: React.ReactNode; className?: string; }
interface NavBodyProps { children: React.ReactNode; className?: string; visible?: boolean; }
interface NavItemsProps {
    items: NavItem[];
    className?: string;
    onItemClick?: () => void;
    onScheduleDemo?: () => void;
    visible?: boolean;
}
interface MobileNavProps { children: React.ReactNode; className?: string; visible?: boolean; }
interface MobileNavHeaderProps { children: React.ReactNode; className?: string; }
interface MobileNavMenuProps { children: React.ReactNode; className?: string; isOpen: boolean; onClose: () => void; }


export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 100);
    });

    return (
        <motion.div ref={ref} className={cn("inset-x-0 top-0 fixed z-50 w-full", className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible }) : child
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "60%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      style={{ minWidth: "1000px" }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible &&
        "bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/20 dark:border-white/10",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type === NavItems
          ? React.cloneElement(
              child as React.ReactElement<NavItemsProps>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, onScheduleDemo, visible }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const router = useRouter();

    const handleItemClick = (item: NavItem) => {
        if (item.isModal && onScheduleDemo) {
            onScheduleDemo();
        } else if (!item.dropdown) {
            onItemClick?.();
            router.push(item.link);
            setHovered(null)
        }
    };

    return (
        <div className={cn("hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex", className)}>
            {items.map((item, idx) => (
                <div
                    key={`nav-item-${idx}`}
                    className="relative"
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <button
                        onClick={() => handleItemClick(item)}
                        className="relative flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
                    >
                        <AnimatePresence>
                            {(hovered === idx || (visible && item.isModal)) && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                    className="absolute inset-0 h-full w-full rounded-full bg-[#9ffb1e]"
                                />
                            )}
                        </AnimatePresence>
                        <span className={cn("relative z-10 transition-colors duration-150", (hovered === idx || (visible && item.isModal)) ? "text-black dark:text-black" : "text-black dark:text-white")}>
                            {item.name}
                        </span>
                        {item.dropdown && (
                            <ChevronDown size={14} className={cn("relative z-10 transition-all duration-300", (hovered === idx || (visible && item.isModal)) ? "text-black dark:text-black" : "text-black dark:text-white", hovered === idx ? "rotate-180" : "")} />
                        )}
                    </button>
                    
                    <AnimatePresence>
                        {item.dropdown && hovered === idx && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                // --- FIX 1 & 2: Added theme support and corrected padding ---
                                className="absolute top-full left-1/2 -translate-x-1/2 w-auto mt-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141415] p-8 shadow-lg"
                            >
                                <div className="flex justify-center gap-x-12">
                                    {item.dropdown.columns.map((column, colIdx) => (
                                        <div key={colIdx} className="flex flex-col flex-shrink-0">
                                            <div className="inline-block w-max">
                                                {/* Theming for heading */}
                                                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">{column.title}</h3>
                                                <div className="mt-2 mb-2 h-[1px] w-full bg-[#9ffb1e]"></div>
                                            </div>

                                            <div className="flex flex-col gap-y-2">
                                                {column.links.slice(0, 5).map((link, linkIdx) => (
                                                    <button
                                                        key={linkIdx}
                                                        onClick={() => { onItemClick?.(); router.push(link.href); 
                                                        setHovered(null);
                                                        }}
                                                        // Theming for link hover background
                                                        className="group block w-full min-w-[240px] text-left rounded-md p-1 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800"
                                                    >
                                                        {/* Theming for link text */}
                                                        <p className="font-sm  text-neutral-900 dark:text-white">{link.label}</p>
                                                        <p className="text-xs  text-neutral-600 dark:text-gray-400">{link.description}</p>
                                                    </button>
                                                ))}
                                            </div>

                                            {column.links.length > 5 && column.viewAllLink && (
                                                <button
                                                    onClick={() => { onItemClick?.(); router.push(column.viewAllLink.href); }}
                                                    // Theming for "View All" link
                                                    className="group mt-4 flex w-fit items-center gap-2 text-sm font-medium text-black  transition-colors hover:text-black dark:hover:text-white"
                                                >
                                                    <span className="bg-[#9ffb1e]/50 p-2 rounded-md py-1">{column.viewAllLink.label}</span>
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};


export const MobileNav = ({ children, className, visible }: MobileNavProps) => (
    <motion.div
        animate={{ backdropFilter: visible ? "blur(10px)" : "none", y: visible ? 8 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className={cn("relative z-50 mx-auto flex w-[calc(100%-1rem)] flex-col items-center justify-between bg-transparent px-4 py-2 lg:hidden", visible && "bg-white/80 dark:bg-neutral-950/80 border dark:border-white/10 shadow-lg rounded-full", className)}
    >
        {children}
    </motion.div>
);
export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
    <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>
);
export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn("absolute inset-x-0 top-16 z-50 flex w-full flex-col divide-y divide-gray-200 dark:divide-gray-800 rounded-lg bg-white dark:bg-neutral-950 px-4 py-4 shadow-xl border border-neutral-200 dark:border-neutral-800", className)}
            >
                {children}
            </motion.div>
        )}
    </AnimatePresence>
);
export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void; }) => (
    <button onClick={onClick} className="text-black dark:text-white" aria-label="Toggle menu">
        {isOpen ? <HomeIcon /> : <MenuIcon />}
    </button>
);
export const NavbarLogo = () => (
  <Link
    href="/"
    className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
  >
    <div className=" object-cover">
      <Image
      src={logo_shadow}
      alt="logo light mode"
      width={30}
      height={30}
      priority
      style={{ height: 'auto', width: 'auto' }}
      className="dark:hidden"
      />
      <Image
      src={logo}
      alt="logo dark mode"
      width={30}
      height={30}
      priority
      style={{ height: 'auto', width: 'auto' }}
      className="hidden dark:block"
      />
    </div>
    <div className="relative h-8 w-auto">
      <Image
        src={mendygoDark}
        alt="mendygo light mode"
        className="object-contain h-8 w-auto dark:hidden"
        style={{ height: '2rem', width: 'auto' }}
        // width={120}
        // height={48}
        priority
        sizes="120px"
      />
      <Image
        src={mendygo}
        alt="mendygo dark mode"
        className="object-contain h-8 w-auto hidden dark:block"
        style={{ height: '2rem', width: 'auto' }}
        // width={120}
        // height={32}
        priority
        sizes="120px"
      />
    </div>
  </Link>
);