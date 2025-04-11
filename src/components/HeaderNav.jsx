"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CalendarDays, Menu } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

const HeaderNav = () => {
    const [isScrolled, setIsScrolled] = useState(false); // To detect scroll
    const [isOpen, setIsOpen] = useState(false); // Hamburger menu toggle state
    const pathname = usePathname();

    // Detect scroll event to toggle visibility of header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Show header after scrolling 50px
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`py-5 z-20 w-full flex items-center transition-all duration-300 ${
                isScrolled
                    ? "px-5 bg-white shadow-md fixed top-0 left-0 z-50 justify-between slideIn"
                    : "bg-transparent px-5 justify-between"
            }`}
            role="banner"
        >
            <Link href="/" aria-label="Greenview Hotel Home">
                <Image
                    src="/images/greenview-logo.png"
                    alt="Greenview Hotel LTD logo"
                    width={90}
                    height={90}
                    className="object-contain"
                    unoptimized
                />
            </Link>

            <nav className="hidden lg:flex space-x-20" aria-label="Main Navigation">
                <Link
                    href="/"
                    className={`relative text-[16px] transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-[#E4BF3B]"}`}
                >
                    Home
                    <span
                        className={`absolute left-0 -bottom-2 h-0.5 transition-all duration-200 ${
                            pathname === "/" ? "w-full bg-[#E4BF3B]" : "w-0 bg-black/0"
                        } `}
                    ></span>
                </Link>
                <Link
                    href="/about"
                    className={`relative text-[16px] transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-[#E4BF3B]"}`}
                >
                    About Us
                    <span
                        className={`absolute left-0 -bottom-2 h-0.5 transition-all duration-200 ${
                            pathname === "/about" ? "w-full bg-[#E4BF3B]" : "w-0 bg-black/0"
                        }`}
                    ></span>
                </Link>
                <Link
                    href="/rooms"
                    className={`relative text-[16px] transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-[#E4BF3B]"}`}
                >
                    Rooms & Suites
                    <span
                        className={`absolute left-0 -bottom-2 h-0.5 transition-all duration-200 ${
                            pathname === "/rooms" ? "w-full bg-[#E4BF3B]" : "w-0 bg-black/0"
                        }`}
                    ></span>
                </Link>
                <Link
                    href="/contact"
                    className={`relative text-[16px] transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-[#E4BF3B]"}`}
                >
                    Contact
                    <span
                        className={`absolute left-0 -bottom-2 h-0.5 transition-all duration-200 ${
                            pathname === "/contact" ? "w-full bg-[#E4BF3B]" : "w-0 bg-black/0"
                        }`}
                    ></span>
                </Link>
            </nav>

            <div className="hidden md:pr-5 md:block">
                <CalendarDays size={25} color={` ${isScrolled ? "#000" : "#FFF"}`} />
            </div>

            <button
                className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation Menu"
            >
                <Menu size={28} />
            </button>
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};

export default HeaderNav;
