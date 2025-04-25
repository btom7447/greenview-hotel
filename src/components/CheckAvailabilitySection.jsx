'use client';

import React, { useState, useEffect } from 'react';
import ReservationsForm from './ReservationsForm';
import ReservationDisplay from './ReservationDisplay';
import { fetchRooms } from '../lib/airtable';

const CheckAvailabilitySection = () => {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState('Deluxe'); 

    // Fetch rooms on component mount
    useEffect(() => {
        const getRooms = async () => {
            const fetchedRooms = await fetchRooms();
            setRooms(fetchedRooms);
            setFilteredRooms(fetchedRooms);
        };

        getRooms();
    }, []);

    
    return (
        <div className="py-20 px-7 sm:px-10 xl:px-20 4xl:px-50">
            <ReservationsForm
                setCheckIn={setCheckIn}
                setCheckOut={setCheckOut}
                setSelectedRoom={setSelectedRoom}
            />
            <ReservationDisplay rooms={filteredRooms} />
        </div>
    );
};

export default CheckAvailabilitySection;
