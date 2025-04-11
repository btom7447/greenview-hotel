'use client';

import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContactSection = () => {
    const { today, tomorrow } = useMemo(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return { today, tomorrow };
    }, []);

    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState(tomorrow);

    // Updated onChange handlers for DatePicker
    const handleCheckInChange = (date) => {
        if (date instanceof Date && !isNaN(date.getTime())) {
        setCheckIn(date);
        }
    };

    const handleCheckOutChange = (date) => {
        if (date instanceof Date && !isNaN(date.getTime())) {
        setCheckOut(date);
        }
    };

    return (
        <section className='relative h-[150dvh] xl:h-[110dvh] grid grid-cols-1 xl:grid-cols-3'>
            {/* Background image section */}
            <div
                className='col-span-2 h-full inset-0 relative'
                style={{
                    backgroundImage: "url('/images/contact-poster.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    overflowY: 'auto',
                }}
                role="img"
                aria-label="Contact section of Greenview Hotel Ltd"
            >
                <div className="absolute inset-0 pointer-events-none"></div>
            </div>

            {/* Decorative figure */}
            <div
                aria-hidden="true"
                style={{
                    backgroundImage: "url('/images/contact-figure.png')",
                    backgroundPosition: 'left',
                    backgroundSize: 'cover',
                }}
            ></div>

            {/* Overlay contact section */}
            <div className='w-full min-w-sm max-w-7xl px-5 lg:px-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-10 flex flex-col xl:flex-row items-center bg-transparent'>
                <div className='bg-[#131313e6] p-5 mb-5 lg:mb-0 w-full lg:w-auto'>
                    <div className='p-10 w-full lg:w-80 md:max-w-xl border-1 border-[#E4BF3B] flex flex-col items-start gap-5'>
                        <Image
                            src="/images/inquiry-icon.png"
                            alt="Inquiry icon"
                            width={80}
                            height={80}
                            priority
                            className="object-cover"
                        />
                        <p className='text-[#E4BF3B]'>Call us for any inquiry</p>
                        <h4 className='text-4xl text-[#E4BF3B]'>+234 912 3456</h4>
                    </div>
                </div>

                {/* Contact form */}
                <div
                    className='w-full p-5 lg:p-20 bg-white flex flex-col shadow-md min-h-160 min-w-sm max-w-6xl'
                    aria-labelledby="contact-heading"
                >
                    <p className='text-[#E4BF3B] text-2xl md:text-3xl' id="contact-heading">Contact Us</p>
                    <h1 className="text-black text-3xl md:text-5xl" id="welcome-heading">
                        Get in Touch
                    </h1>

                    <form
                        action=""
                        className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'
                        aria-label="Contact Form"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="contact-name" className="text-black text-2xl font-light mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                aria-label="Type your name"
                                className="p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="contact-email" className="text-black text-2xl font-light mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                aria-label="Your email"
                                className="p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="contact-checkin" className="text-black text-2xl font-light mb-2">
                                Check In
                            </label>
                            <DatePicker
                                selected={checkIn}
                                onChange={handleCheckInChange}
                                selectsStart
                                startDate={checkIn}
                                endDate={checkOut}
                                id="contact-checkin"
                                name="check-in"
                                aria-label="Select check-in date"
                                className="cursor-pointer p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="contact-checkout" className="text-black text-2xl font-light mb-2">
                                Check Out
                            </label>
                            <DatePicker
                                selected={checkOut}
                                onChange={handleCheckOutChange}
                                selectsEnd
                                startDate={checkIn}
                                endDate={checkOut}
                                minDate={checkIn}
                                id="contact-checkout"
                                name="check-out"
                                aria-label="Select check-out date"
                                className="cursor-pointer p-6 w-full focus:outline-none text-xl text-black bg-gray-200"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label htmlFor="contact-message" className="text-black text-2xl font-light mb-2">
                                Write a Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={4}
                                className="w-full p-6 focus:outline-none text-xl text-black placeholder:text-xl placeholder:text-gray-600 bg-gray-200"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            aria-label='Submit contact form'
                            className="col-span-2 w-full h-full bg-[#E4BF3B] hover:bg-black hover:text-white text-black uppercase text-xl md:text-2xl font-semibold p-6 transition duration-300 ease-in-out cursor-pointer"
                            >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
