'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  SendIcon,
} from 'lucide-react';

const Footer = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Greenview Hotel LTD",
    "url": "https://greenviewhotelltd.com",
    "logo": "https://greenviewhotelltd.com/images/greenview-logo.png",
    "email": "info@greenviewhotelltd.com",
    "telephone": "+2347047478861",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 221 Ewet Housing Extension Estate",
      "addressLocality": "Uyo",
      "addressRegion": "AKS",
      "addressCountry": "Nigeria"
    },
    "sameAs": [
      "https://www.facebook.com/share/18yKFm4VcA/?mibextid=wwXIfr",
      "https://www.instagram.com/greenviewhotel_apartment/profilecard/?igsh=M2lsMWJtOHZ5NTB0",
      "https://musicplatform.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2347047478861",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="py-20 px-7 sm:px-10 xl:px-20 4xl:px-50 grid gap-16 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 2xl:grid-cols-6">
        {/* Branding and Newsletter */}
        <div className="col-span-2 sm:col-span2 lg:col-span-2 4xl:col-span-3 ">
          <Link href="/" aria-label="Greenview Hotel homepage">
            <Image
              src="/images/greenview-logo.png"
              alt="Greenview Hotel LTD logo"
              width={100}
              height={100}
              className="object-contain"
              priority
              unoptimized
            />
          </Link>
          <p className="text-xl my-6 max-w-md">
            Experience luxury tailored to your comfort.
          </p>

          <form className="bg-gray-800 flex items-center max-w-md md:max-w-md" aria-label="Newsletter Subscription Form">
            <label htmlFor="email" className="sr-only">
              Enter Your Email Address
            </label>
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
              aria-label="Subscribe to Newsletter"
            >
              <SendIcon size={20} />
            </button>
          </form>

          <div className="mt-10">
            <h5 className="text-3xl font-semibold mb-5">Follow Us</h5>
            <nav className="flex gap-4">
              <a
                href="https://www.facebook.com/share/18yKFm4VcA/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="p-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/greenviewhotel_apartment/profilecard/?igsh=M2lsMWJtOHZ5NTB0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="p-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://musicplatform.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our music profile"
                className="p-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Music2 size={20} />
              </a>
            </nav>
          </div>
        </div>

        {/* Features */}
        <div>
          <h5 className="text-3xl font-semibold mb-10">Features</h5>
          <nav className="flex flex-col gap-10">
            <Link href="/" className="text-xl hover:text-[#E4BF3B]" aria-label="Navigate to Home">Home</Link>
            <Link href="/about" className="text-xl hover:text-[#E4BF3B]" aria-label="Navigate to About Us">About</Link>
            <Link href="/rooms" className="text-xl hover:text-[#E4BF3B]" aria-label="Navigate to Rooms & Suites">Rooms & Suites</Link>
            <Link href="/contact" className="text-xl hover:text-[#E4BF3B]" aria-label="Navigate to Contact">Contact</Link>
          </nav>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-3xl font-semibold mb-10">Links</h5>
          <nav className="flex flex-col gap-10">
            <Link href="/privacy" className="text-xl hover:text-[#E4BF3B]" aria-label="Read our Privacy Policy">Privacy Policy</Link>
            <Link href="/terms" className="text-xl hover:text-[#E4BF3B]" aria-label="Read our Terms and Conditions">Terms & Conditions</Link>
            <Link href="/regulations" className="text-xl hover:text-[#E4BF3B]" aria-label="View Hotel Regulations">Hotel Regulations</Link>
            <Link href="/reservations" className="text-xl hover:text-[#E4BF3B]" aria-label="Make a Reservation">Reservations</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="col-span-2">
          <h5 className="text-3xl font-semibold mb-10">Contact</h5>
          <address className="not-italic text-xl flex flex-col gap-8">
            <div className="flex space-x-5 items-center">
              <Phone size={28} color="#FFF" strokeWidth={1} />
              <p>
                <a href="tel:+2347047478861" className="hover:text-[#E4BF3B]" aria-label="Call us at +234 704 747 8861">
                  +234 704 747 8861
                </a>
              </p>
            </div>
            <div className="flex space-x-5 items-center">
              <MapPin size={28} color="#FFF" strokeWidth={1} />
              <p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=5.0100203,7.9685011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4BF3B]"
                  aria-label="Get directions to Greenview Hotel on Google Maps"
                >
                  Plot 221 Ewet Housing Extension Estate, Uyo, AKS, Nigeria.
                </a>
              </p>
            </div>
            <div className="flex space-x-5 items-center">
              <MessageCircle size={28} color="#FFF" strokeWidth={1} />
              <p>
                <a
                  href="https://wa.me/message/SZQBQECZIAXTM1"
                  className="hover:text-[#E4BF3B]"
                  aria-label="Chat with us on WhatsApp"
                >
                  Greenview Hotel Ltd
                </a>
              </p>
            </div>
            <div className="flex space-x-5 items-center">
              <Mail size={28} color="#FFF" strokeWidth={1} />
              <p>
                <a
                  href="mailto:info@greenviewhotelltd.com"
                  className="hover:text-[#E4BF3B]"
                  aria-label="Send us an email at info@greenviewhotelltd.com"
                >
                  info@greenviewhotelltd.com
                </a>
              </p>
            </div>
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
