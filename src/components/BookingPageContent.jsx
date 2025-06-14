'use client'
import React, { useEffect, useState } from 'react';
import BookingTable from '@/components/BookingTable';
import Breadcrumb from '@/components/Breadcrumb';
import { setReservations } from '@/store/reservationSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const BookingPageContent = () => {
  const [reservations, setReservationsState] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Mark that we're running on client
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
      setReservationsState(storedReservations);
      dispatch(setReservations(storedReservations));
    }
  }, [dispatch]);

  const handleDelete = (indexToDelete) => {
    const updated = reservations.filter((_, i) => i !== indexToDelete);
    setReservationsState(updated);
    dispatch(setReservations(updated));
    localStorage.setItem('reservations', JSON.stringify(updated));
    toast.warn(`Booking for ${reservations[indexToDelete]?.roomType} cancelled`);
  };

  const handlePay = (reservation) => {
    // Remove the paid reservation
    const updated = reservations.filter((r) => r !== reservation);
    setReservationsState(updated);
    dispatch(setReservations(updated));
    localStorage.setItem('reservations', JSON.stringify(updated));
    
    toast.success(`Payment for ${reservation.roomType} completed`);

    // Optionally, redirect or show confirmation UI here
  };


  if (!isClient) return null; // Prevent render during build

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
  );
};

export default BookingPageContent;
