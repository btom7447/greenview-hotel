'use client'
import BookingTable from '@/components/BookingTable'
import Breadcrumb from '@/components/Breadcrumb'
import React, { useEffect, useState } from 'react'

const BookingPage = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
            setReservations(storedReservations);
        }
    }, []);

    const handleDelete = (indexToDelete) => {
        const updatedReservations = reservations.filter((_, i) => i !== indexToDelete);
        setReservations(updatedReservations);
        localStorage.setItem('reservations', JSON.stringify(updatedReservations));
    };

    const handlePay = (reservation) => {
        alert(`Proceeding to payment for ${reservation.roomType}`);
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