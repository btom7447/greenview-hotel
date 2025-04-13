import React from 'react'
import CompareRoomCard from './CompareRoomCard';
import roomsData from '../data/rooms.json';

const CompareRooms = ({ room, id }) => {
    const otherRooms = roomsData.filter((r) => r.id !== Number(id));

    return (
        <div className='p-10 flex flex-col bg-gray-100'>
            <h2 className="text-3xl font-semibold mb-5">Compare Room</h2>
            <div className='flex flex-col gap-5'>
                {otherRooms.map((otherRoom) => (
                    <CompareRoomCard key={otherRoom.id} room={otherRoom} />
                ))}
            </div>
        </div>
    );
};

export default CompareRooms;