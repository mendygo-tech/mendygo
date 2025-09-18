"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { MenuIcon, X as  HomeIcon, ChevronDown } from "lucide-react";
import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png"
import mendygo from "../../assets/mendygo white green wordmark.png";
import mendygoDark from "../../assets/mendygo black green wordmark.png";
import logo_shadow from "../../assets/logo_shadow.png";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownData {
  title: string;
  links: DropdownItem[];
}

interface NavItem {
  name: string;
  link: string;
  dropdown?: DropdownData;
  isModal?: boolean;
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
  onScheduleDemo?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

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
    <motion.div
      ref={ref}
      className={cn("inset-x-0 top-5 fixed z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible }
          )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "blur(7px)",
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
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const router = useRouter();

  const handleMouseEnter = useCallback((idx: number) => {
    // Use requestAnimationFrame to defer state updates and reduce input delay
    requestAnimationFrame(() => {
      setHovered(idx);
      if (items[idx].dropdown) {
        setActiveDropdown(idx);
      }
    });
  }, [items]);

  const handleMouseLeave = useCallback(() => {
    // Use requestAnimationFrame to defer state updates
    requestAnimationFrame(() => {
      setHovered(null);
      setActiveDropdown(null);
    });
  }, []);

  const handleDropdownMouseEnter = useCallback((idx: number) => {
    requestAnimationFrame(() => {
      setActiveDropdown(idx);
    });
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    requestAnimationFrame(() => {
      setActiveDropdown(null);
    });
  }, []);

  return (
    <motion.div
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-black ml-24 transition duration-200 lg:flex",
        className
      )}
      style={{
        willChange: 'auto', // Only enable will-change when needed
        contain: 'layout style' // Optimize rendering containment
      }}
    >
      {items.map((item, idx) => (
        <div
          key={`nav-item-${idx}`}
          className="relative"
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => {
            if (!item.dropdown) {
              // Use requestAnimationFrame for consistent performance
              requestAnimationFrame(() => {
                setHovered(null);
              });
            }
          }}
        >
          <button
            onClick={(e) => {
              if (!item.dropdown) {
                e.preventDefault();
                if (item.isModal && onScheduleDemo) {
                  onScheduleDemo();
                } else {
                  onItemClick?.();
                  // Use Next.js client-side routing for smooth navigation
                  router.push(item.link);
                }
              }
            }}
            className="relative px-4 py-2 text-black dark:text-white transition-colors duration-150 flex items-center gap-1"
          >
            {/* Animated Background - Optimized for performance */}
            <div
              className={`absolute inset-0 h-full w-full rounded-full bg-[#9ffb1e] z-10 transition-opacity duration-150 ${
                hovered === idx || (visible && item.isModal) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                willChange: hovered === idx || (visible && item.isModal) ? 'opacity' : 'auto',
                transform: 'translateZ(0)' // Force hardware acceleration
              }}
            />

            {/* Text with conditional color */}
            <span
              className={cn(
                "relative z-20 transition-colors duration-150",
                hovered === idx || (visible && item.isModal) ? "text-black" : "text-black dark:text-white"
              )}
            >
              {item.name}
            </span>

            {/* Dropdown arrow */}
            {item.dropdown && (
              <ChevronDown
                size={14}
                className={cn(
                  "relative z-20 transition-all duration-300",
                  hovered === idx || (visible && item.isModal) ? "text-black" : "text-black dark:text-white",
                  activeDropdown === idx ? "rotate-180" : ""
                )}
              />
            )}
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {item.dropdown && activeDropdown === idx && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 min-w-[200px] bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50"
                onMouseEnter={() => handleDropdownMouseEnter(idx)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                {item.dropdown.links.map((link, linkIdx) => (
                  <button
                    key={linkIdx}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(null);
                      onItemClick?.();
                      // Use Next.js client-side routing for dropdown links
                      router.push(link.href);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/20 dark:border-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white dark:bg-neutral-950 px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border border-neutral-200 dark:border-neutral-800",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <HomeIcon className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  ) : (
    <MenuIcon className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  );
};

export const NavbarLogo = () => (
  <Link
    href="/"
    className="relative z-20 mr-16 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
  >
    <div className=" object-cover w-[30px]">
      <Image
      src={logo_shadow}
      alt="logo light mode"
      // width={30}
      // height={30}
      priority
      style={{ height: 'auto', width: 'auto' }}
      className="dark:hidden"
      />
      <Image
      src={logo}
      alt="logo dark mode"
      // width={30}
      // height={30}
      priority
      style={{ height: 'auto', width: 'auto' }}
      className="hidden dark:block"
      />
    </div>
    <div className="relative h-8 w-auto">
      <Image
        src={mendygoDark}
        alt="mendygo light mode"
        className="object-contain h-12 w-auto dark:hidden mt-[-1px] lg:mr-24"
        style={{ height: '3rem', width: 'auto' }}
        // width={120}
        // height={48}
        priority
        sizes="120px"
      />
      <Image
        src={mendygo}
        alt="mendygo dark mode"
        className="object-contain h-8 w-auto hidden dark:block lg:mr-24"
        style={{ height: '2rem', width: 'auto' }}
        // width={120}
        // height={32}
        priority
        sizes="120px"
      />
    </div>
  </Link>
);

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-white dark:bg-neutral-900 text-black dark:text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border border-neutral-200 dark:border-neutral-700",
    secondary: "bg-transparent shadow-none text-black dark:text-white",
    dark: "bg-black dark:bg-white text-white dark:text-black shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};