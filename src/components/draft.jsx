"use client";

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import testimonials from '../data/testimonial.json';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section 
            className="relative grid grid-cols-1 lg:grid-cols-3 bg-gray-100 py-20"
            aria-labelledby="testimonial-heading"
        >
        <div
            className="h-full w-full col-span-1"
            style={{
                backgroundImage: "url('/images/testimonial-poster.jpg')",
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
        ></div>
    
        {/* 💬 Testimonial Section (2 cols) */}
        <div className="col-span-2 flex flex-col justify-center items-center text-center px-4">
            <div className='flex flex-col justify-center items-center text-center mb-20'>
                <p className="text-[#E4BF3B] text-2xl md:text-3xl" role="heading" aria-level="2">
                    Hear from
                </p>
                <h2
                    id="testimonial-heading"
                    className="text-black text-5xl md:text-7xl font-bold"
                >
                    Our Satisfied Clients
                </h2>
            </div>
    
            <div className="w-[90dvw] h-fit flex flex-col justify-center items-center">
                <Swiper
                    spaceBetween={20}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
    
                <div className="self-end flex justify-center gap-10 mt-8">
                    <button ref={prevRef} className="p-4 bg-white shadow-md hover:bg-yellow-300 transition">
                        <ChevronLeft className="w-8 h-8 text-[#E4BF3B]" />
                    </button>
                    <button ref={nextRef} className="p-4 bg-white shadow-md hover:bg-yellow-300 transition">
                        <ChevronRight className="w-8 h-8 text-[#E4BF3B]" />
                    </button>
                </div>
    
                {/* Decorative Figure */}
                <div
                    className="absolute bottom-0 right-0 w-[338px] h-[334px]"
                    style={{
                        backgroundImage: "url('../images/testimonial-figure.webp')",
                        backgroundSize: 'cover',
                    }}
                ></div>
            </div>
        </div>
    </section>
    
    );
};

export default TestimonialSection;