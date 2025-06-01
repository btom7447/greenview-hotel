import Image from 'next/image'
import React from 'react'

const AmenityCard = ({ amenity }) => {
    return (
        <div
            className='h-full relative flex flex-col justify-center items-center px-10 py-20 bg-white border-1 border-gray-200 hover:bg-black hover:border-black transition duration-300 ease-in-out group'
            role='article'
            aria-label={amenity.title}
        >
            <hr
                className='absolute top-0 left-1/2 transform -translate-x-1/2 w-30 h-2 bg-[#E4BF3B] border-0'
                aria-hidden='true'
            />
            <Image
                src={amenity.icon}
                alt={amenity.title}
                width={50}
                height={50}
                unoptimized
                className="w-20 h-20 mb-10 object-cover"
                aria-hidden="true"
            />

            <h2 className='text-center text-black text-3xl font-semibold mb-1 group-hover:text-white'>
                {amenity.title}
            </h2>
            <p className='text-center text-xl lg:text-2xl font-light leading-loose text-gray-700 group-hover:text-white'>
                {amenity.subtitle}
            </p>
        </div>
    )
}

export default AmenityCard
