import { DoorOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompareRoomCard = ({ room }) => {
    return (
        <Link href={`/rooms/${room.id}`}>
            <div className='flex flex-wrap items-center gap-5'>
                <Image
                    src={room.image[0]}
                    alt={room.type}
                    width={80}
                    height={80}
                    unoptimized
                    className="w-50 h-30 object-cover"
                />
                <div className='flex flex-col items-start text-gray-600'>
                    <div className='flex items-center space-x-3'>
                        <DoorOpen size={28} strokeWidth={1} />
                        <h5 className='text-2xl font-semibold'>{room.type}</h5>
                    </div>
                    <h4 className='text-3xl text-black'>{room.rate.toLocaleString()}</h4>
                </div>
            </div>
        </Link>
    )
}

export default CompareRoomCard