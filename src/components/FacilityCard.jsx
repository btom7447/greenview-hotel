import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FacilityCard = ({ facility, isReversed }) => {

    // Create a more descriptive title for the link
    const facilitySlug = facility?.title ? facility.title.toLowerCase().replace(/\s+/g, '-') : 'unknown';
    const linkText = `Learn more about the ${facility.title} facility`;

    return (
        <article 
            className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} items-stretch`}
            role="region"
            aria-labelledby={`facility-${facilitySlug}`}
        >
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 min-h-60 lg:min-h-xl object-cover object-center">
                <Image
                    src={facility.image}
                    alt={`Image of ${facility.title} at Greenview Hotel`}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1204px) 100vw, 50vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 py-10 md:py-20 px-10 flex flex-col items-center justify-center text-center lg:text-left">
                <h3 id={`facility-${facilitySlug}`} className="text-3xl md:text-5xl font-semibold text-gray-800">{facility.title}</h3>
                <hr className="w-full border-t-1 border-gray-300 my-5 mx-auto" />
                <p className="text-2xl text-black font-light leading-loose">{facility.subtitle}</p>
                
                <Link href={`/facility/${facilitySlug}`}>
                    <button 
                        className="self-start mt-10 text-black text-xl uppercase bg-transparent border-1 border-black hover:bg-black hover:border-black hover:text-white py-4 px-10 transition-all duration-300 ease-in-out cursor-pointer"
                        aria-label={linkText}
                    >
                        Learn More
                        <span className="sr-only"> about the {facility.title} facility</span>
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default FacilityCard;