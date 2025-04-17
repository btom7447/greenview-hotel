'use client';

import Image from 'next/image';
import ContactForm from './ContactForm';

const ContactSection = () => {


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
                            unoptimized
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

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
