'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Controller, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade'; 
import Image from 'next/image';

const RoomCarousel = ({ room }) => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    if (!room?.image?.length) return null;

    return (
        <div className="w-full">
            {/* Main Swiper with fade effect */}
            <Swiper
                modules={[Thumbs, Controller, Autoplay, EffectFade]}
                spaceBetween={10}
                effect="fade" 
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="main-swiper overflow-hidden"
            >
                {room.image.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[280px] lg:h-[600px] relative">
                            <Image
                                src={imgSrc}
                                alt={`${room.type} room ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                sizes="(max-width: 1024px) 100vw, 600px"
                                priority={index === 0}
                                unoptimized
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Swiper - acts as controller */}
            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs, FreeMode]}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress
                loop={true}
                className="mt-4 flex items-center"
                breakpoints={{
                    640: {
                        slidesPerView: 6,
                    },
                }}
            >
                {room.image.map((imgSrc, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                        <Image
                            src={imgSrc}
                            alt={`Thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            sizes="(max-width: 640px) 20vw, 80px"
                            style={{ objectFit: 'cover', objectPosition: 'bottom', width: '100%', height: '60px' }}
                            unoptimized
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RoomCarousel;