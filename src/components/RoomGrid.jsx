import React from 'react';
import roomsData from "../data/rooms.json";
import RoomGridCard from './RoomGridCard';

const RoomGrid = () => {
    const royal = roomsData.find((room) => room.type === "Royal Suite");
    const castle = roomsData.find((room) => room.type === "Castle");
    const deluxe = roomsData.find((room) => room.type === "Deluxe");

    return (
        <section className="bg-white py-10 md:py-20 px-5 sm:px-8 xl:px-20" aria-label="Room Types Grid">
            <h2 className="sr-only">Greenview Hotel Rooms</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:grid-rows-2 lg:h-[70vh]">
                {/* Royal Suite */}
                <div className="relative aspect-[3/2] lg:aspect-auto lg:row-span-2 shadow-md overflow-hidden">
                    {royal && <RoomGridCard room={royal} priority />}
                </div>

                {/* Castle */}
                <div className="relative aspect-[3/2] lg:aspect-auto shadow-md overflow-hidden">
                    {castle && <RoomGridCard room={castle} />}
                </div>

                {/* Deluxe */}
                <div className="relative aspect-[3/2] lg:aspect-auto shadow-md overflow-hidden">
                    {deluxe && <RoomGridCard room={deluxe} />}
                </div>
            </div>
        </section>
    );
};

export default RoomGrid;