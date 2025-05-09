import { AirVent, Bed, ShowerHead, Tv, Wifi } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RoomGridCard = ({ room, priority = false }) => {
    return (
        <article className="relative group w-full h-full overflow-hidden shadow-md" aria-label={`Room card for ${room.type}`}>
            {/* Background Image */}
            <Image
                src={room.image[0]}
                alt={`Interior view of ${room.type} at Greenview Hotel`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority={priority}
                unoptimized
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Slide-up Info Container */}
            <div className="absolute bottom-0 right-0 w-full z-20 transition-transform duration-500 ease-in-out group-hover:-translate-y-16 px-6 py-6">
                <div className="flex flex-col items-end text-white">
                    <h3 className="text-3xl sm:text-4xl font-semibold">{room.type}</h3>
                    <p className="text-xl sm:text-2xl font-medium text-gray-300">
                        ₦{room.rate.toLocaleString()}
                        <span className="text-lg text-[#E4BF3B] font-normal"> /Night</span>
                    </p>
                </div>

                {/* Hidden Content on Hover */}
                <div className="mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 border-t border-gray-400 pt-4 flex justify-between items-center flex-wrap gap-4">
                    <Link href={`/rooms/${room.id}`} passHref legacyBehavior>
                        <a
                            aria-label={`Book ${room.type} Room`}
                            className="text-black text-sm sm:text-base uppercase bg-white border border-white hover:bg-transparent hover:text-white py-3 px-6 transition-all duration-300 ease-in-out"
                        >
                            Book Now
                        </a>
                    </Link>
                    <div className="flex gap-3 text-white text-sm">
                        <Bed size={20} aria-label="Bed" />
                        <Wifi size={20} aria-label="Wi-Fi" />
                        <Tv size={20} aria-label="Television" />
                        <AirVent size={20} aria-label="Air Conditioning" />
                        <ShowerHead size={20} aria-label="Shower" />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default RoomGridCard;