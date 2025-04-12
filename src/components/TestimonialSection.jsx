"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import testimonials from "../data/testimonial.json";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []); 

    return (
        <section
            className="relative grid grid-cols-1 xl:grid-cols-3 bg-gray-100 py-20"
            aria-labelledby="testimonial-heading"
        >
            {/* Background Image Panel */}
            <div
                className="h-full w-full col-span-1 bg-cover bg-bottom bg-fixed"
                style={{ backgroundImage: "url('/images/testimonial-poster.jpg')" }}
                role="presentation"
                aria-hidden="true"
            ></div>

            {/* Main Content */}
            <div className="col-span-2 flex flex-col justify-center items-center text-center px-4">
                <header className="flex flex-col justify-center items-center text-center mb-20">
                    <p className="text-[#E4BF3B] text-2xl md:text-3xl font-semibold">
                        Hear from
                    </p>
                    <h2
                        id="testimonial-heading"
                        className="text-black text-5xl md:text-7xl font-bold leading-tight"
                    >
                        Our Satisfied Clients
                    </h2>
                </header>

                <div className="ml-0 xl:ml-[-300] w-[85dvw] xl:w-[78dvw] h-fit flex flex-col justify-center items-center">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={40}
                        modules={[Navigation]}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1440: { slidesPerView: 3 },
                        }}
                        className="w-full"
                    >
                        {testimonials.map((testimonial, idx) => (
                            <SwiperSlide key={idx}>
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="z-20 self-end flex justify-center gap-6 mt-8">
                        <button
                            ref={prevRef}
                            aria-label="Previous testimonial"
                            className="p-4 border border-[#E4BF3B] text-[#E4BF3B] hover:text-white hover:bg-[#E4BF3B] transition cursor-pointer"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            ref={nextRef}
                            aria-label="Next testimonial"
                            className="p-4 border border-[#E4BF3B] text-[#E4BF3B] hover:text-white hover:bg-[#E4BF3B] transition cursor-pointer"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Decorative Image (Lazy) */}
                    <div
                        className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-no-repeat bg-contain z-0 opacity-70 pointer-events-none"
                        style={{
                            backgroundImage:
                                "url('/images/testimonial-figure.webp')",
                        }}
                        aria-hidden="true"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
