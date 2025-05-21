'use client';

import React, { useState } from 'react';
import BookingTable from './BookingTable';

const BookingPageContent = () => {
  const [reservations, setReservations] = useState([
    // Sample reservation structure
    {
      roomName: "Deluxe Suite",
      email: "guest@example.com",
      checkInDate: "2025-05-20",
      checkOutDate: "2025-05-23",
      totalCost: 45000,
      duration: 3,
    }
  ]);

  const handleDelete = (index) => {
    const updated = [...reservations];
    updated.splice(index, 1);
    setReservations(updated);
  };

  const handlePay = (reservation) => {
    console.log('Reservation paid:', reservation);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Bookings</h2>
      <BookingTable
        reservations={reservations}
        onDelete={handleDelete}
        onPay={handlePay}
      />
    </div>
  );
};

export default BookingPageContent;
