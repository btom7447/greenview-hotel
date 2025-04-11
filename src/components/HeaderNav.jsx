"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Menu } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

const HeaderNav = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Scroll behavior only runs on homepage
    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const navLinks = useMemo(() => [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/rooms", label: "Rooms & Suites" },
        { href: "/contact", label: "Contact" }
    ], []);

    const isDark = isHome && !isScrolled;

    const headerBase = "px-7 sm:px-10 xl:px-20 4xl:px-50 py-5 z-20 w-full flex items-center transition-all duration-300 justify-between";
    const fixedHeader = "fixed top-0 left-0 z-50 shadow-md";

    const headerClasses = isHome
        ? `${headerBase} ${isScrolled ? `bg-white ${fixedHeader} slideIn` : "bg-transparent"}`
        : `${headerBase} bg-white ${fixedHeader}`;

    return (
        <header className={headerClasses} role="banner">
            <Link href="/" aria-label="Greenview Hotel Home">
                <Image
                src="/images/greenview-logo.png"
                alt="Greenview Hotel LTD logo"
                width={60}
                height={60}
                priority
                className="object-contain"
                />
            </Link>

            <nav className="hidden lg:flex space-x-10" aria-label="Main Navigation">
                {navLinks.map(({ href, label }) => {
                    const isActive = pathname === href;
                    const linkColor = isDark
                        ? "text-white hover:text-[#E4BF3B]"
                        : "text-black hover:text-gray-600";

                    return (
                        <Link
                            key={href}
                            href={href}
                            aria-current={isActive ? "page" : undefined}
                            className={`relative text-2xl transition-colors duration-300 ${linkColor}`}
                        >
                            {label}
                            <span
                                className={`absolute left-0 -bottom-2 h-0.5 transition-all duration-200 ${
                                    isActive ? "w-full bg-[#E4BF3B]" : "w-0 bg-black/0"
                                }`}
                            ></span>
                        </Link>
                    );
                })}
            </nav>

            <div className="hidden md:block">
                <CalendarDays size={25} color={isDark ? "#FFF" : "#000"} />
            </div>

            <button
                className={`md:hidden ${isDark ? "text-white" : "text-black"}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                <Menu size={28} />
            </button>

            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};

export default HeaderNav;
