import React from 'react';
import * as LucideIcons from 'lucide-react';
import AmenityCard from './AmenityCard';
import amenities from '../data/amenities.json';

const AmenitiesSection = () => {
    return (
        <section
            className="flex flex-col bg-gray-100 py-20 px-7 sm:px-10 xl:px-20 4xl:px-50"
            aria-labelledby="amenities-heading"
        >
            <div className="flex flex-col justify-center items-center text-center mb-20">
                <p className="text-[#E4BF3B] text-2xl md:text-3xl" role="heading" aria-level="2">
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
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10"
                role="list"
            >
                {amenities.map((amenity, idx) => {
                    const IconComponent =
                        LucideIcons[pascalCase(amenity.icon)] || LucideIcons.HelpCircle;
                    return (
                        <AmenityCard
                            key={amenity.id || idx} // Use a unique ID if available
                            amenity={{
                                ...amenity,
                                icon: IconComponent,
                            }}
                        />
                    );
                })}
            </div>
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
