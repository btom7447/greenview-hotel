import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CatalogCard = ({ room, isReversed }) => {
    return (
        <article
            className={`flex flex-col lg:flex-row ${
                isReversed ? 'lg:flex-row-reverse' : ''
            } items-stretch`}
            aria-label={`${room.type} Room`}
        >
            {/* Room Poster */}
            <div className="relative w-full xl:w-2/3">
                <Image
                    src={room.image[0]}
                    alt={`Image of ${room.type} Room at Greenview Hotel`}
                    fill
                    priority 
                    unoptimized
                    sizes="(max-width: 1204px) 100vw, 70vw h-full"
                    className="object-cover object-center"
                />
            </div>

            {/* Room Caption */}
            <div className="col-span-1 flex flex-col items-stretch justify-center p-10 border-1 border-gray-200">
                <h3 className="text-black text-4xl md:text-6xl mb-2">
                    {room.rate.toLocaleString()}
                    <span className="text-[16px] text-[#E4BF3B] font-normal"> /Night</span>
                </h3>
                <h4 className="mt-2 text-3xl font-semibold mb-5">{room.type}</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-5" role="list">
                    {room.amenities?.map((amenity, index) => (
                        <li key={index} className="flex items-start gap-3" role="listitem">
                            <span
                                className="w-5 h-5 p-3 rounded-full bg-[#E4BF3B] text-white flex items-center justify-center text-xs mt-1"
                                aria-hidden="true"
                            >
                                ✓
                            </span>
                            <span className="text-xl text-gray-700">{amenity}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-2xl font-light leading-loose  text-gray-700 max-w-2xl">{room.description}</p>
                <Link href={`/rooms/${room.id}`}>
                    <button 
                        type="button" 
                        aria-label={`Book the ${room.type} Room at Greenview Hotel`}
                        className="self-start mt-10 text-black text-xl uppercase bg-transparent border-1 border-black hover:bg-black hover:border-black hover:text-white py-4 px-10 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                        Book Now
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default CatalogCard;