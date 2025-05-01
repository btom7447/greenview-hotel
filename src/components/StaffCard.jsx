import Image from 'next/image'
import React from 'react'

const StaffCard = ({ staff }) => {
    return (
        <div
            className='relative w-full h-120'
        >
            {/* Image Container */}
            <div className='absolute top-0 w-[90%] lg:w-[68%] h-95 z-2'>
                <Image 
                    src={staff.image} 
                    alt={`${staff.name}'s profile`} 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <div className='absolute bottom-0 left-10 w-[90%] lg:w-[70%] h-100 z-1 bg-gray-200 flex items-end px-10 py-5'>
                <div>
                    <h5 className='text-2xl text-black font-light'>{staff.name}</h5>
                    <p className='text-xl text-black font-semibold'>{staff.position}</p>
                </div>
            </div>
        </div>
    )
}

export default StaffCard