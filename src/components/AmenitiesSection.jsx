import React from 'react';
import * as LucideIcons from 'lucide-react';
import AmenityCard from './AmenityCard';
import amenities from '../data/amenities.json';
import Image from 'next/image';

const AmenitiesSection = () => {
    return (
        <section
            className="relative flex flex-col bg-white py-20 px-7 sm:px-10 xl:px-20 4xl:px-50"
            aria-labelledby="amenities-heading"
        >
            <div className="flex flex-col justify-center items-center text-center mb-20">
                <p
                    className="text-[#E4BF3B] text-2xl md:text-3xl"
                    role="heading"
                    aria-level="2"
                >
                    Featured Services
                </p>
                <h2
                    id="amenities-heading"
                    className="text-black text-5xl md:text-7xl font-bold"
                >
                    Hotel Amenities
                </h2>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 z-2"
                role="list"
            >
                {amenities.map((amenity, idx) => {
                    const IconComponent =
                        LucideIcons[pascalCase(amenity.icon)] || LucideIcons.HelpCircle;

                    return (
                        <div role="listitem" key={amenity.id || idx}>
                            <AmenityCard
                                amenity={{
                                    ...amenity,
                                    icon: IconComponent,
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Top Poster Image */}
            <Image
                src="/images/amenities-poster.png"
                alt="Golden luxury hotel decor top overlay"
                width={220}
                height={250}
                oading="lazy"
                unoptimized
                className="absolute top-0 left-0 z-1 object-cover w-auto h-auto"
                style={{ width: 'auto', height: 'auto' }}
            />

            {/* Bottom Poster Image */}
            <Image
                src="/images/amenities-poster.png"
                alt="Golden luxury hotel decor bottom overlay"
                width={250}
                height={250}
                loading="lazy"
                unoptimized
                className="absolute bottom-0 right-0 z-1 object-cover w-auto h-auto"
                style={{ width: 'auto', height: 'auto' }}
            />
        </section>
    );
};

export default React.memo(AmenitiesSection);

function pascalCase(str) {
    return str
        .split(/[-_ ]+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}