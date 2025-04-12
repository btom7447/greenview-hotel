import React from 'react';
import CatalogCard from './CatalogCard';
import roomsData from '../data/rooms.json';

const CatalogSection = () => {
    return (
        <section
            className='px-7 sm:px-10 xl:px-20 4xl:px-50 bg-gray-100 py-25'
            aria-labelledby="room-catalog-heading"
        >
            <h2 id="room-catalog-heading" className="sr-only">
                Room Catalog
            </h2>
            <div className="space-y-20">
                {roomsData.map((room, index) => (
                    <CatalogCard
                        key={room.id}
                        room={room}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default CatalogSection;
