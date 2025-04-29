'use client';

import React, { useState } from 'react';
import ReservationRoomCard from './ReservationRoomCard';
import { ChevronLeft, ChevronRight, LayoutGrid, LayoutList } from 'lucide-react';

const ReservationDisplay = ({ filteredRooms }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [layout, setLayout] = useState('grid'); 
    const roomsPerPage = 8;

    const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);
    const startIndex = (currentPage - 1) * roomsPerPage;
    const currentRooms = filteredRooms.slice(startIndex, startIndex + roomsPerPage);

    const handleLayoutToggle = (view) => setLayout(view);
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="mt-10">
            {filteredRooms.length > 0 ? (
                <div>
                    {/* Header: info + toggle */}
                    <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
                        <h2 className="text-black text-2xl font-light">
                            {filteredRooms.length} Room{filteredRooms.length > 1 && 's'} Found
                        </h2>

                        <div className="flex gap-2">
                            <button
                                onClick={() => handleLayoutToggle('grid')}
                                className={`p-2 border cursor-pointer ${
                                    layout === 'grid'
                                        ? 'bg-gray-700 text-white border-1'
                                        : 'bg-white text-gray-700 border-gray-700'
                                }`}
                            >
                                <LayoutGrid size={25} strokeWidth={1} />
                            </button>
                            <button
                                onClick={() => handleLayoutToggle('list')}
                                className={`p-2 border cursor-pointer ${
                                    layout === 'list'
                                        ? 'bg-gray-700 text-white border-1'
                                        : 'bg-white text-gray-700 border-gray-700'
                                }`}
                            >
                                <LayoutList size={25} strokeWidth={1} />
                            </button>
                        </div>
                    </div>

                    {/* Room Cards */}
                    <div
                        className={`grid gap-7 items-stretch ${
                            layout === 'grid'
                                ? 'lg:grid-cols-2 2xl:grid-cols-4'
                                : 'grid-cols-1 lg:grid-cols-2'
                        }`}
                    >
                        {currentRooms.map((room) => (
                            <ReservationRoomCard
                                key={room.id}
                                room={room.fields}
                                layout={layout}
                            />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-4 mt-20">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 border cursor-pointer hover:bg-black hover:text-white disabled:opacity-50"
                        >
                            <ChevronLeft size={28} strokeWidth={1} />
                        </button>
                        <p className="text-lg text-black font-light leading-loose">
                            Page {currentPage} of {totalPages}
                        </p>
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 border cursor-pointer hover:bg-black hover:text-white disabled:opacity-50"
                        >
                            <ChevronRight size={28} strokeWidth={1} />
                        </button>
                    </div>
                </div>
            ) : (
                <p>No rooms available for the selected dates and type.</p>
            )}
        </div>
    );
};

export default ReservationDisplay;