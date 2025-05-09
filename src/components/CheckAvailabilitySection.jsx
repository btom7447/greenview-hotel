'use client';

import React, { useState, useEffect } from 'react';
import ReservationsForm from './ReservationsForm';
import ReservationDisplay from './ReservationDisplay';
import { fetchRooms } from '../lib/airtable';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setDateRange } from '@/store/reservationSlice';
import { GridLoader } from 'react-spinners';

const CheckAvailabilitySection = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const { dateRange } = useSelector((state) => state.reservation);
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [checkIn, setCheckIn] = useState(dateRange.check_in);
    const [checkOut, setCheckOut] = useState(dateRange.check_out);
    const [selectedRoom, setSelectedRoom] = useState('Royal');

    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const checkInDate = searchParams.get('checkInDate') 
            ? new Date(searchParams.get('checkInDate')) 
            : dateRange.check_in ? new Date(dateRange.check_in) : today;
        const checkOutDate = searchParams.get('checkOutDate') 
            ? new Date(searchParams.get('checkOutDate')) 
            : dateRange.check_out ? new Date(dateRange.check_out) : tomorrow;

        const checkInISO = checkInDate.toISOString();
        const checkOutISO = checkOutDate.toISOString();

        // Only dispatch if values actually differ
        if (
            dateRange.check_in !== checkInISO ||
            dateRange.check_out !== checkOutISO
        ) {
            dispatch(setDateRange({
                check_in: checkInISO,
                check_out: checkOutISO
            }));
        }

        setCheckIn(checkInDate);
        setCheckOut(checkOutDate);
        
        const selectedRoomParam = searchParams.get('selectedRoom');
        if (selectedRoomParam && selectedRoomParam !== selectedRoom) {
            setSelectedRoom(selectedRoomParam);
        }

    }, [searchParams, dispatch]);


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
