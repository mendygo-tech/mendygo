"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import DemoModal from "./DemoModal";
import Link from "next/link";

// --- UPDATED TYPE DEFINITIONS ---
type DropdownItem = {
    href: string;
    label: string;
    description: string; // Added description
};
type DropdownColumn = {
    title: string;
    links: DropdownItem[];
    viewAllLink?: { href: string; label: string; }; // Added optional "View All" link
};
type DropdownData = { columns: DropdownColumn[] };
type NavItemType = {
    name: string;
    link: string;
    dropdown?: DropdownData;
    isModal?: boolean;
};

export function MyNavbar() {
    const navItems: NavItemType[] = [
        
        {
            name: "Solutions",
            link: "/solutions",
            dropdown: {
                columns: [
                    {
                        title: "Mendygo Management Systems",
                        viewAllLink: { href: "/solutions/management-systems", label: "View All Systems" },
                        links: [
                            { href: "/solutions/management-systems/building-management", label: "Building Management", description: "Smart automation and control systems." },
                            { href: "/solutions/management-systems/factory-management", label: "Factory Management", description: "Optimize production and efficiency." },
                            { href: "/solutions/management-systems/warehouse-management", label: "Warehouse Management", description: "Real-time inventory and logistics." },
                            { href: "/solutions/management-systems/energy-management", label: "Energy Management", description: "Monitor and reduce energy consumption." },
                            { href: "/solutions/management-systems/water-management", label: "Water Management", description: "Smart water grid and leakage detection." },
                            { href: "/solutions/management-systems/construction-fleet-management", label: "Construction Fleet", description: "Track and manage heavy equipment." },
                            { href: "/solutions/management-systems/genset-management", label: "Genset Management", description: "Remote monitoring for generators." },
                            { href: "/solutions/management-systems/hvac-management", label: "HVAC Management", description: "Intelligent climate control solutions." },
                        ],
                    },
                    {
                        title: "Mendygo Telematics",
                        links: [
                            { href: "/solutions/telematics/ev-telematics", label: "EV Telematics", description: "Advanced electric vehicle monitoring." },
                            { href: "/solutions/telematics/chiller-telematics", label: "Chiller Telematics", description: "Remote performance tracking for chillers." },
                            { href: "/solutions/telematics/compressor-telematics", label: "Compressor Telematics", description: "Monitor industrial compressor health." },
                            { href: "/solutions/telematics/earth-moving-telematics", label: "Earth Moving Telematics", description: "Analytics for heavy machinery." },
                        ],
                    },
                ],
            },
        },
        {
            name: "Products",
            link: "/products",
            dropdown: {
                columns: [
                    {
                        title: "Hardware",
                        links: [
                            { href: "/products/hardware/gateway", label: "Gateway", description: "Securely connect your devices." },
                            { href: "/products/hardware/sensors-meters", label: "Sensors & Meters", description: "High-precision data collection." },
                            { href: "/products/hardware/controllers", label: "Controllers", description: "Automate and control operations." },
                        ],
                    },
                    {
                        title: "Analytics & AI",
                        links: [
                            { href: "/products/ai/mendy", label: "Mendy AI Copilot", description: "Your AI assistant for operations." },
                            { href: "/products/ai/computerVision", label: "MendyVision", description: "Computer Vision for industrial applications." },
                        ],
                    },
                ],
            },
        },
        { name: "Blog", link: "https://blogs.mendygo.com/" },
        {
            name: "Company",
            link: "/aboutus",
            dropdown: {
                columns: [
                    {
                        title: "About Mendygo",
                        links: [
                            { href: "/aboutus", label: "About Us", description: "Discover our mission and team." },
                            { href: "/contact", label: "Contact Us", description: "Get in touch with our experts." },
                        ],
                    },
                ],
            },
        },
        {
            name: "Industries",
            link: "/industries",
        },
        { name: "Schedule Demo", link: "#", isModal: true },
    ];



    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const ThemeToggleButton = ({ className = "" }: { className?: string }) => {
        const toggleTheme = useCallback(() => {
            setTheme(theme === "dark" ? "light" : "dark");
        }, [theme, setTheme]);

        return (
            <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                aria-pressed={theme === "dark"}
                className={`
                    cursor-pointer relative h-8 w-16 rounded-full
                    bg-gray-200 dark:bg-[#141415]
                    border border-gray-300 dark:border-gray-600 flex items-center
                    transition-all duration-300 ease-in-out
                    hover:bg-gray-300 dark:hover:bg-gray-700dark:focus:ring-gray-500
                    shadow-inner ${className}`}
            >
                <div className="absolute inset-0 flex items-center justify-between px-1.5">

                    <Sun
                        size={12}
                        className="text-yellow-500 dark:text-yellow-400 transition-all duration-300 
                                 opacity-100 dark:opacity-40 transform scale-100 dark:scale-90"
                    />

                    <Moon
                        size={12}
                        className="text-gray-400 dark:text-[#9FFB1E] transition-all duration-300 
                                 opacity-40 dark:opacity-100 transform scale-90 dark:scale-100"
                    />
                </div>

                <div
                    className={`
                        relative h-6 w-6 rounded-full
                        bg-white dark:bg-[#141415]
                        border-1 border-gray-300 dark:border-gray-500
                        shadow-lg dark:shadow-xl
                        transform transition-all duration-300 ease-in-out
                        translate-x-0.5 dark:translate-x-8
                        flex items-center justify-center
                    `}
                >
                    <div className="relative w-3 h-3 flex items-center justify-center">
                        <Sun
                            size={10}
                            className="text-yellow-500 absolute transition-all duration-300
                                     opacity-100 dark:opacity-0 transform rotate-0 dark:rotate-180 scale-100 dark:scale-75"
                        />
                        <Moon
                            size={10}
                            className="text-[#9FFB1E] absolute transition-all duration-300
                                     opacity-0 dark:opacity-100 transform rotate-180 dark:rotate-0 scale-75 dark:scale-100"
                        />
                    </div>
                </div>
            </button>
        );
    };

    return (
        <div className="relative w-full">
            <Navbar className="pt-5">
                <NavBody>
                    <NavbarLogo />
                    <NavItems
                        items={navItems}
                        onScheduleDemo={() => setIsDemoModalOpen(true)}
                    />
                    <div className="flex items-center gap-2">
                        <ThemeToggleButton />
                    </div>
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <div className="flex items-center gap-4">
                            <ThemeToggleButton />
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </div>
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <MobileNavItem
                                key={`mobile-link-${idx}`}
                                item={item}
                                onClose={() => setIsMobileMenuOpen(false)}
                                onScheduleDemo={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsDemoModalOpen(true);
                                }}
                            />
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            <DemoModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </div>
    );
}

const MobileNavItem = ({ item, onClose, onScheduleDemo }: { item: NavItemType; onClose: () => void; onScheduleDemo?: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleItemClick = (href: string) => {
        onClose();
        setIsOpen(false);
        router.push(href);
    };

    if (item.dropdown) {
        return (
            <div className="w-full py-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-center justify-between text-left text-black transition-colors hover:text-neutral-700 dark:text-white dark:hover:text-neutral-300"
                >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={16} />
                </button>
                {isOpen && (
                    <div className="mt-4 space-y-4 pl-4">
                        {item.dropdown.columns.map((column, colIdx) => (
                            <div key={colIdx}>
                                <h4 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{column.title}</h4>
                                <div className="flex flex-col space-y-2 border-l border-gray-200 pl-4 dark:border-gray-700">
                                    {column.links.map((link, linkIdx) => (
                                        <Link 
                                            key={linkIdx} 
                                            href={link.href}
                                            onClick={() => {
                                                onClose(); // Close mobile menu
                                                setIsOpen(false); // Close dropdown
                                            }}
                                        >
                                            <button
                                                className="block w-full py-1 text-left text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                                            >
                                                {link.label}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <button
            onClick={() => {
                if (item.isModal && onScheduleDemo) {
                    onScheduleDemo();
                } else {
                    handleItemClick(item.link);
                }
            }}
            className="relative w-full py-2 text-left font-medium text-black transition-colors hover:text-neutral-700 dark:text-white dark:hover:text-neutral-300"
        >
            <span>{item.name}</span>
        </button>
    );
};