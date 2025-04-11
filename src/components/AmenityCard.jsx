import React from 'react'

const AmenityCard = ({ amenity }) => {
    return (
        <div
            className='relative flex flex-col justify-center items-center px-10 py-20 bg-white hover:bg-black transition duration-300 ease-in-out group'
            role='article'
            aria-label={amenity.title}
        >
            <hr
                className='absolute top-0 left-1/2 transform -translate-x-1/2 w-30 h-2 bg-[#E4BF3B] border-0'
                aria-hidden='true'
            />
            {React.createElement(amenity.icon, {
                size: 40,
                className: 'text-[#E4BF3B] mb-10',
                'aria-hidden': 'true',
            })}

            <h2 className='text-center text-black text-3xl font-semibold mb-1 group-hover:text-white'>
                {amenity.title}
            </h2>
            <p className='text-center text-xl text-gray-700 group-hover:text-white'>
                {amenity.subtitle}
            </p>
        </div>
    )
}

export default AmenityCard
