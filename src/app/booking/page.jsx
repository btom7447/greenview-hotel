'use client'
import BookingTable from '@/components/BookingTable'
import Breadcrumb from '@/components/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { setReservations } from '@/store/reservationSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const BookingPage = () => {
    const [reservations, setReservationsState] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
            setReservationsState(storedReservations);
            dispatch(setReservations(storedReservations));  // Update Redux store
        }
    }, [dispatch]);


    const handleDelete = (indexToDelete) => {
        const updatedReservations = reservations.filter((_, i) => i !== indexToDelete);
        setReservationsState(updatedReservations);
        dispatch(setReservations(updatedReservations));
        
        if (typeof window !== 'undefined') {
            localStorage.setItem('reservations', JSON.stringify(updatedReservations));
        }

        toast.warn(`Booking for ${reservations[indexToDelete]?.roomType} cancelled`);
    };


    const handlePay = (reservation) => {
        toast.info(`Proceeding to payment for ${reservation.roomType}`);
        // Redirect to payment or open modal
    };

    return (
        <main>
            <Breadcrumb title="Booking" />
            <section className='bg-white py-20 px-7 sm:px-10 xl:px-20 4xl:px-50'>
                <BookingTable
                    reservations={reservations}
                    onDelete={handleDelete}
                    onPay={handlePay}
                />
            </section>
        </main>
    )
}

export default BookingPage;
