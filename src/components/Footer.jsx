import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Music2, SendIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="py-20 px-7 sm:px-10 xl:px-20 4xl:px-50  grid gap-16 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 2xl:grid-cols-6">
                {/* Branding and Newsletter */}
                <div className="col-span-1 sm:col-span2 lg:col-span-2 4xl:col-span-3 ">
                    <Link href="/" aria-label="Greenview Hotel Home">
                        <Image
                            src="/images/greenview-logo.png"
                            alt="Greenview Hotel LTD logo"
                            width={100}
                            height={100}
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <p className="text-xl my-6 max-w-md">
                        Experience luxury tailored to your comfort.
                    </p>

                    <form className="bg-gray-800 flex items-center max-w-sm" aria-label="Newsletter Subscription Form">
                        <label htmlFor="email" className="sr-only">Enter Your Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email Address"
                            className="p-4 w-full bg-transparent border-0 text-xl placeholder-gray-400 focus:outline-none"
                            required
                            aria-required="true"
                        />
                        <button
                            type="submit"
                            className="p-4 bg-[#E4BF3B] text-black hover:bg-white hover:text-black transition-colors duration-300"
                            aria-label="Subscribe"
                        >
                            <SendIcon size={20} />
                        </button>
                    </form>

                    <div className="mt-10">
                        <h5 className="text-2xl font-semibold mb-6">Follow Us</h5>
                        <nav className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="p-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="p-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://musicplatform.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Music"
                                className="p-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                <Music2 size={20} />
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h5 className="text-2xl font-semibold mb-6">Features</h5>
                    <nav className="flex flex-col gap-3">
                        <Link href="/" className="text-xl hover:text-[#E4BF3B]">Home</Link>
                        <Link href="/about" className="text-xl hover:text-[#E4BF3B]">About</Link>
                        <Link href="/rooms" className="text-xl hover:text-[#E4BF3B]">Rooms & Suite</Link>
                        <Link href="/contact" className="text-xl hover:text-[#E4BF3B]">Contact</Link>
                    </nav>
                </div>

                {/* Links */}
                <div>
                    <h5 className="text-2xl font-semibold mb-6">Links</h5>
                    <nav className="flex flex-col gap-3">
                        <Link href="/privacy" className="text-xl hover:text-[#E4BF3B]">Privacy Policy</Link>
                        <Link href="/terms" className="text-xl hover:text-[#E4BF3B]">Terms & Conditions</Link>
                        <Link href="/regulations" className="text-xl hover:text-[#E4BF3B]">Hotel Regulations</Link>
                        <Link href="/reservations" className="text-xl hover:text-[#E4BF3B]">Reservations</Link>
                    </nav>
                </div>

                {/* Contact */}
                <div>
                    <h5 className="text-2xl font-semibold mb-6">Contact</h5>
                    <address className="not-italic text-xl">
                        <p>+234 567 8910</p>
                        <p>Plot 221 Ewet Housing Extension Estate, Uyo, AKS, Nigeria.</p>
                        <p>
                        <a href="mailto:help@greenviewhotelltd.com" className="hover:text-[#E4BF3B]">
                            help@greenviewhotelltd.com
                        </a>
                        </p>
                    </address>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="w-full py-6 px-7 sm:px-10 xl:px-20 4xl:px-50 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>&copy; {new Date().getFullYear()} Greenview Hotel. All rights reserved.</p>
                <p>By Kmini Technologies</p>
            </div>
        </footer>
    );
};

export default Footer;