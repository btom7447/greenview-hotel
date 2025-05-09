'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const BookingTable = ({ reservations, onDelete, onPay }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleDelete = () => {
        onDelete(selectedIndex);
        setSelectedIndex(null);
    }

    return (
        <div className="overflow-x-auto">
            <div className="w-full overflow-x-scroll md:overflow-x-auto">
                <table className="min-w-full border border-gray-100">
                    <thead className="bg-gray-100 text-left">
                        <tr className='text-black text-2xl font-light text-left'>
                            <th className="p-5 min-h-30"> </th>
                            <th className="p-5">Room Name</th>
                            <th className="p-5">Check In</th>
                            <th className="p-5">Check Out</th>
                            <th className="p-5">Cost (₦)</th>
                            <th className="p-5">Duration</th>
                        </tr>
                    </thead>
                    <tbody className='text-2xl text-black font-light'>
                        {reservations.map((reservation, index) => (
                            <tr key={index} className="hover:bg-gray-50 border-gray-200 border-b-1">
                                <td className="pl-7">
                                    <input
                                        type="radio"
                                        name="selectedReservation"
                                        checked={selectedIndex === index}
                                        onChange={() => setSelectedIndex(index)}
                                        aria-label={`Select reservation for ${reservation.roomType || ''}`}
                                    />
                                </td>
                                <td className="p-5">{reservation.roomType || ''}</td>
                                <td className="p-5">{new Date(reservation.checkIn).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td className="p-5">{new Date(reservation.checkOut).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td className="p-5">{reservation.totalCost.toLocaleString()}</td>
                                <td className="p-5 lowercase">
                                    {reservation.totalDays} {reservation.totalDays > 1 ? 'Days' : 'Day'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedIndex !== null && (
                <div className="w-fit mt-15 p-10 border-1 border-gray-200">
                    <p className='text-black text-2xl font-light'>
                        You have selected a reservation for <strong>{reservations[selectedIndex].roomType || ''}</strong> 
                    </p>
                    <div className='mt-10 flex items-center gap-10'>
                        <button
                            className="bg-[#E4BF3B] text-xl text-white py-5 px-10 uppercase hover:bg-black transition cursor-pointer"
                            onClick={() => onPay(reservations[selectedIndex])}
                            aria-label="Pay for selected reservation"
                        >
                           Make Payment
                        </button>
                        <button
                            className="bg-red-600 text-xl text-white py-5 px-10 uppercase hover:bg-red-900 transition cursor-pointer"
                            onClick={handleDelete}
                            aria-label="Delete selected reservation"
                        >
                            Delete Reservation
                        </button>
                    </div>
                </div>
            )}
            
            {reservations.length === 0 && (
                <div className="text-center text-2xl text-gray-500 mt-10 p-20">
                    <h5 className=''>
                        No reservations available.
                    </h5>
                    <Link href="/reservations">
                        <button type="button" className='mt-20 bg-[#E4BF3B] px-10 py-5 text-black text-2xl hover:bg-black hover:text-white cursor-pointer'>
                            Make Reservation
                        </button>
                    </Link>
                </div>
            )}
        </div>
        
    )
}

export default BookingTable;