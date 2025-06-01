'use client'
import React, { useState, useMemo } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { toast } from 'react-toastify';
import Link from 'next/link';
import InfoModal from './InfoModal';

const BookingTable = ({ reservations, onDelete, onPay }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null); // User details from modal

  const selectedReservation = selectedIndex !== null ? reservations[selectedIndex] : null;

  const paymentConfig = useMemo(() => {
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_dummy';
    if (!selectedReservation || !formData) return null;

    return {
      reference: new Date().getTime().toString(),
      email: formData.email,
      amount: selectedReservation.totalCost * 100,
      publicKey,
      currency: 'NGN',
      metadata: {
        custom_fields: [
          { display_name: "Name", variable_name: "name", value: formData.name },
          { display_name: "Phone", variable_name: "phone", value: formData.phone },
          { display_name: "Room Type", variable_name: "room_type", value: selectedReservation.roomType },
          { display_name: "Special Request", variable_name: "special_request", value: formData.specialRequest || "None" }
        ]
      }
    };
  }, [selectedReservation, formData]);

  const initializePayment = usePaystackPayment(paymentConfig);

  const handlePayment = () => {
    if (!selectedReservation) return;
    setShowModal(true); // Show modal first
  };

  const handleConfirm = (dataFromModal) => {
    setFormData(dataFromModal);
    const updatedReservation = {
      ...selectedReservation,
      ...dataFromModal, // Attach user info + specialRequest
    };

    initializePayment({
      onSuccess: (reference) => {
        toast.success("Payment successful!", reference);
        onPay(updatedReservation); // Pass full data with special request
      },
      onClose: () => console.log("Payment closed"),
    });
  };

  const handleDelete = () => {
    onDelete(selectedIndex);
    setSelectedIndex(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  return (
    <div className="overflow-x-auto">
      <InfoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />

      <div className="w-full overflow-x-scroll md:overflow-x-auto">
        <table className="min-w-full border border-gray-100">
          <thead className="bg-gray-100 text-left">
            <tr className="text-black text-xl lg:text-2xl font-light text-left">
              <th className="p-5 whitespace-nowrap"> </th>
              <th className="p-5 whitespace-nowrap">Room Name</th>
              <th className="p-5 whitespace-nowrap">Check In</th>
              <th className="p-5 whitespace-nowrap">Check Out</th>
              <th className="p-5 whitespace-nowrap">Cost</th>
              <th className="p-5 whitespace-nowrap">Duration</th>
            </tr>
          </thead>
          <tbody className="text-2xl text-black font-light">
            {reservations.map((reservation, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 text-lg lg:text-xl border-gray-200 border-b-1"
              >
                <td className="pl-7 whitespace-nowrap">
                  <input
                    type="radio"
                    name="selectedReservation"
                    checked={selectedIndex === index}
                    onChange={() => setSelectedIndex(index)}
                  />
                </td>
                <td className="p-5 whitespace-nowrap">{reservation.roomType}</td>
                <td className="p-5 whitespace-nowrap">{formatDate(reservation.checkIn)}</td>
                <td className="p-5 whitespace-nowrap">{formatDate(reservation.checkOut)}</td>
                <td className="p-5 whitespace-nowrap">₦ {reservation.totalCost.toLocaleString()}</td>
                <td className="p-5 whitespace-nowrap">{reservation.totalDays} {reservation.totalDays > 1 ? 'Days' : 'Day'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedIndex !== null && (
        <div className="w-fit mt-15 p-10 border-1 border-gray-200">
          <p className="text-black text-lg lg:text-2xl font-light">
            You have selected a reservation of
            <strong className='font-bold'> {reservations[selectedIndex].roomType}</strong> for{" "}
            {reservations[selectedIndex].totalDays} {reservations[selectedIndex].totalDays > 1 ? 'Days' : 'Day'}
          </p>
          <div className="mt-10 flex items-center gap-10">
            <button
              className="bg-[#E4BF3B] text-xl text-white py-5 px-10 uppercase hover:bg-black transition cursor-pointer"
              onClick={handlePayment}
            >
              Pay
            </button>
            <button
              className="bg-red-600 text-xl text-white py-5 px-10 uppercase hover:bg-red-900 transition cursor-pointer"
              onClick={handleDelete}
            >
              Cancel 
            </button>
          </div>
        </div>
      )}

      {reservations.length === 0 && (
        <div className="text-center text-2xl text-gray-500 mt-10 p-20">
          <h5>No reservations available.</h5>
          <Link href="/reservations">
            <button className="mt-20 bg-[#E4BF3B] px-10 py-5 text-black text-2xl hover:bg-black hover:text-white">
              Make Reservation
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookingTable;