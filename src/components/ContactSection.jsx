'use client';

import ContactForm from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
    return (
        <section
            className="py-20 px-7 sm:px-10 xl:px-20 4xl:px-50 bg-white grid gap-10 grid-cols-1 lg:grid-cols-2 items-start"
            aria-labelledby="contact-heading"
        >
            {/* Text Info Column */}
            <div>
                <header className="mb-10">
                    <p className="text-[#E4BF3B] text-2xl uppercase">Need any help?</p>
                    <h2
                        id="contact-heading"
                        className="text-black text-3xl md:text-5xl font-bold leading-snug"
                    >
                        Get in touch with us
                    </h2>
                </header>

                {/* Contact Details */}
                <ul className="space-y-8">
                {/* Phone */}
                    <li className="flex items-start gap-6 group">
                        <div
                            className="bg-black text-white group-hover:bg-[#E4BF3B] group-hover:text-black p-5"
                            aria-hidden="true"
                        >
                            <Phone size={28} strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-black">
                                Have any question?
                            </h3>
                            <a
                                href="tel:+2348104181614"
                                className="text-lg sm:text-xl text-gray-700 group-hover:text-[#E4BF3B] focus:outline focus:outline-2 focus:outline-[#E4BF3B]"
                            >
                                +234 810 418 1614
                            </a>
                        </div>
                    </li>

                    {/* Email */}
                    <li className="flex items-start gap-6 group">
                        <div
                            className="bg-black text-white group-hover:bg-[#E4BF3B] group-hover:text-black p-5"
                            aria-hidden="true"
                        >
                            <Mail size={28} strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-black">Email us</h3>
                            <a
                                href="mailto:info@greenviewhotelltd.com"
                                className="text-lg sm:text-xl text-gray-700 group-hover:text-[#E4BF3B] focus:outline-[#E4BF3B]"
                            >
                                info@greenviewhotelltd.com
                            </a>
                        </div>
                    </li>

                    {/* Location */}
                    <li className="flex items-start gap-6 group">
                        <div
                            className="bg-black text-white group-hover:bg-[#E4BF3B] group-hover:text-black p-5"
                            aria-hidden="true"
                        >
                            <MapPin size={28} strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-black">Visit anytime</h3>
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=5.0100203,7.9685011"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg sm:text-xl text-gray-700 group-hover:text-[#E4BF3B] focus:outline focus:outline-2 focus:outline-[#E4BF3B]"
                            >
                                Plot 221 Ewet Housing Extension Estate, Uyo, AKS, Nigeria.
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Contact Form Column */}
            <div>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;