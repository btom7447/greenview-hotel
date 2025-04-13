'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Controller, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade'; 

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
                        <img
                            src={imgSrc}
                            alt={`${room.type} room ${index + 1}`}
                            className="w-full h-70 lg:h-120 object-cover object-bottom"
                        />
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
                        <img
                            src={imgSrc}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-20 md:h-30 object-cover object-bottom"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RoomCarousel;