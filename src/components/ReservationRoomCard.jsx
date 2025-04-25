import React from 'react';
import { AirVent, Bed, ShowerHead, Tv, Wifi } from 'lucide-react';

const ReservationRoomCard = ({ room, layout }) => {
    return (
        <div 
            className={`border border-gray-200 flex ${
                layout === 'grid'
                    ? 'flex-col'
                    : 'flex-row items-center lg:items-stretch gap-0'
            }`}
        >
            {room.images?.length > 0 && (
                <img
                    src={room.images[0].url}
                    alt={`${room.type} room`}
                    className={`object-cover ${
                        layout === 'grid'
                            ? 'h-50 w-full'
                            : 'w-50 h-auto lg:w-1/2'
                        }`
                    }
                />
            )}
            <div className='w-full p-7 flex flex-col items-stretch'>
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-black text-2xl font-semibold capitalize mb-2">{room.type}</h3>
                    <p className="text-xl text-black font-light">RN. {room.room}</p>
                </div>
                <p className="text-xl text-black font-light">Price - ₦ {room.price?.toLocaleString()}</p>
                <p className="text-xl text-black font-light">Capacity - {room.capacity}</p>
                <div 
                    className={`mt-5 gap-3 text-gray-700 text-sm ${
                        layout === 'grid'
                            ? 'hidden'
                            : 'flex border-t border-gray-200 pt-5'
                        }`
                    }
                >
                    <Bed size={20} strokeWidth={1} aria-label="Bed" />
                    <Wifi size={20} strokeWidth={1} aria-label="Wi-Fi" />
                    <Tv size={20} strokeWidth={1} aria-label="Television" />
                    <AirVent size={20} strokeWidth={1} aria-label="Air Conditioning" />
                    <ShowerHead size={20} strokeWidth={1} aria-label="Shower" />
                </div>
                <button 
                    type="button"
                    className={`py-2 px-10 border cursor-pointer text-black text-xl uppercase mt-5 hover:bg-black hover:text-white ${
                        layout === 'grid'
                            ? ''
                            : 'w-fit'
                        }`
                    }
                >
                    Book
                </button>
           </div>
        </div>
    );
};

export default ReservationRoomCard;
