'use client';

import React, { useState, useEffect } from 'react';
import ReservationsForm from './ReservationsForm';
import ReservationDisplay from './ReservationDisplay';
import { fetchRooms } from '../lib/airtable';
import { useSearchParams } from 'next/navigation';
import { GridLoader } from 'react-spinners';

const CheckAvailabilitySection = () => {
    const searchParams = useSearchParams();
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Form state
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState('Royal');

    // Initialize with default dates
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        setCheckIn(today);
        setCheckOut(tomorrow);
    }, []);

    // Update state based on query parameters
    useEffect(() => {
        const checkInDate = searchParams.get('checkInDate');
        const checkOutDate = searchParams.get('checkOutDate');
        const selectedRoomParam = searchParams.get('selectedRoom');
      
        if (checkInDate) setCheckIn(new Date(checkInDate));
        if (checkOutDate) setCheckOut(new Date(checkOutDate));
        if (selectedRoomParam) setSelectedRoom(selectedRoomParam);
    }, [searchParams]);

    // Fetch rooms from Airtable
    useEffect(() => {
        const getRooms = async () => {
            try {
                setLoading(true);
                const fetchedRooms = await fetchRooms();
                setRooms(fetchedRooms);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching rooms:', err);
                setError(err.message);
                setLoading(false);
            }
        };        
        
        getRooms();
    }, []);

    // Filter rooms based on form inputs
    useEffect(() => {
        if (!checkIn || !checkOut || !selectedRoom || loading) return;

        const userCheckIn = new Date(checkIn);
        const userCheckOut = new Date(checkOut);
        const selectedType = selectedRoom.toLowerCase();

        const filtered = rooms.filter((room) => {
            if (!room || !room.fields) return false;
        
            const typeMatch = room.fields.type?.toLowerCase() === selectedType;
        
            let noDateConflict = true;
            if (room.fields.check_in && room.fields.check_out) {
                const roomCheckIn = new Date(room.fields.check_in);
                const roomCheckOut = new Date(room.fields.check_out);
        
                const conflict = userCheckIn < roomCheckOut && userCheckOut > roomCheckIn;
                noDateConflict = !conflict;
            }
        
            return typeMatch && noDateConflict;
        });        

        setFilteredRooms(filtered);
    }, [checkIn, checkOut, selectedRoom, rooms, loading]);

    if (loading) return <div className="py-50 text-center">
        <GridLoader
            color="#E4BF3B"
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>;
    if (error) return <div className="py-20 text-center text-red-500">Error: {error}</div>;

    return (
        <div className="py-20 px-7 sm:px-10 xl:px-20 4xl:px-50">
            <ReservationsForm
                checkIn={checkIn}
                checkOut={checkOut}
                selectedRoom={selectedRoom}
                setCheckIn={setCheckIn}
                setCheckOut={setCheckOut}
                setSelectedRoom={setSelectedRoom}
            />
            <ReservationDisplay 
                filteredRooms={filteredRooms}
            />
        </div>
    );
};

export default CheckAvailabilitySection;
